/**
 * ATM 직무 기술 교육 시스템 - 형성평가 공통 엔진 (SEASON 3)
 * - 30분(1800초) 타이머 및 localStorage 자동 임시저장
 * - 객관식 / 주관식(단일, 복합, 다중모델) 1차 자동 채점
 * - Google Apps Script (ATM_Edu_Test_Result) 자동 전송
 * - A4 결과지 인쇄 / PDF 저장 지원
 */

// ▼ Google Apps Script 웹 앱 배포 URL을 아래 따옴표 안에 붙여넣으세요.
// (비워 두어도 시험 응시, 자동 채점, A4 인쇄는 정상 동작합니다.)
const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxYpDEHr2-m-Zn4-iD7hbt9-g-Ym8H3dcdMvND2Qg1r1cug_ZrY1w121N_yMs7-GvhbLg/exec";

(function () {
  const EXAM_DURATION_SEC = 30 * 60; // 30분

  function normText(v) {
    return String(v || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[,.\-_()\[\]]/g, "");
  }

  function normBinary(v) {
    return String(v || "")
      .trim()
      .toLowerCase()
      .replace(/\(2\)/g, "")
      .replace(/[^01]/g, "");
  }

  function formatMMSS(sec) {
    const s = Math.max(0, Math.floor(sec));
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function formatKoreanDateTime(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${y}-${m}-${day} ${hh}:${mm}:${ss}`;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.initATMExam = function (config) {
    const storageKey = `atm_exam_state_${config.testType}`;
    const root = document.getElementById("examApp");
    if (!root) return;

    let state = {
      phase: "intro", // intro | testing | result
      affiliation: "",
      name: "",
      remainingSec: EXAM_DURATION_SEC,
      startedAt: null,
      submittedAt: null,
      mcqAnswers: Array(config.mcq.length).fill(null),
      saqAnswers: config.saq.map((q) => (q.kind === "multi" ? q.fields.map(() => "") : "")),
      graded: null,
      syncStatus: "idle", // idle | sending | ok | error | unconfigured
      syncMessage: ""
    };

    let timerId = null;

    function saveState() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(state));
      } catch (_) {}
    }

    function loadState() {
      try {
        const raw = localStorage.getItem(storageKey);
        if (!raw) return false;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.phase === "testing") {
          state = parsed;
          return true;
        }
      } catch (_) {}
      return false;
    }

    function clearSavedState() {
      try {
        localStorage.removeItem(storageKey);
      } catch (_) {}
    }

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function startTimer() {
      stopTimer();
      timerId = setInterval(() => {
        if (state.phase !== "testing") {
          stopTimer();
          return;
        }
        state.remainingSec -= 1;
        saveState();
        updateTimerUI();
        if (state.remainingSec <= 0) {
          stopTimer();
          submitExam(true);
        }
      }, 1000);
    }

    function updateTimerUI() {
      const el = document.getElementById("timerBadge");
      if (!el) return;
      el.textContent = `남은 시간 ${formatMMSS(state.remainingSec)}`;
      el.classList.remove("warn", "danger");
      if (state.remainingSec <= 60) {
        el.classList.add("danger");
      } else if (state.remainingSec <= 300) {
        el.classList.add("warn");
      }
    }

    function countAnswered() {
      let count = 0;
      state.mcqAnswers.forEach((v) => {
        if (v !== null && v !== undefined && v !== "") count += 1;
      });
      state.saqAnswers.forEach((v) => {
        if (Array.isArray(v)) {
          if (v.some((x) => String(x || "").trim() !== "")) count += 1;
        } else if (String(v || "").trim() !== "") {
          count += 1;
        }
      });
      return count;
    }

    function updateProgressUI() {
      const el = document.getElementById("progressBadge");
      if (!el) return;
      const total = config.mcq.length + config.saq.length;
      el.textContent = `응답 ${countAnswered()} / ${total}문항`;
    }

    function gradeExam() {
      let mcqScore = 0;
      const mcqDetails = config.mcq.map((q, idx) => {
        const userAns = state.mcqAnswers[idx];
        const isCorrect = Number(userAns) === Number(q.answer);
        const earned = isCorrect ? q.points : 0;
        mcqScore += earned;
        return {
          no: idx + 1,
          userAns: userAns ? `${userAns}번` : "(미입력)",
          correctAns: `${q.answer}번`,
          earned,
          maxPoints: q.points,
          status: isCorrect ? "correct" : "wrong"
        };
      });

      let saqScore = 0;
      const saqDetails = config.saq.map((q, idx) => {
        const rawAns = state.saqAnswers[idx];
        let earned = 0;
        let status = "wrong";
        let displayUser = "";

        if (q.kind === "multi") {
          const arr = Array.isArray(rawAns) ? rawAns : q.fields.map(() => "");
          displayUser = q.fields
            .map((f, fi) => `${f.label}: ${String(arr[fi] || "").trim() || "(미입력)"}`)
            .join(" / ");
          q.fields.forEach((f, fi) => {
            const u = normText(arr[fi]);
            if (f.accept.some((a) => normText(a) === u)) {
              earned += f.points;
            }
          });
          if (earned === q.points) status = "correct";
          else if (earned > 0) status = "partial";
        } else if (q.kind === "models") {
          displayUser = String(rawAns || "").trim() || "(미입력)";
          const upper = displayUser.toUpperCase();
          const matched = new Set();
          q.validModels.forEach((m) => {
            if (upper.includes(m)) matched.add(m);
          });
          if (matched.size >= 2) {
            earned = q.points;
            status = "correct";
          } else if (matched.size === 1) {
            earned = q.partialPoints || Math.floor(q.points / 2);
            status = "partial";
          }
        } else if (q.kind === "binary") {
          displayUser = String(rawAns || "").trim() || "(미입력)";
          const b = normBinary(rawAns);
          if (q.acceptBinary.includes(b)) {
            earned = q.points;
            status = "correct";
          }
        } else {
          displayUser = String(rawAns || "").trim() || "(미입력)";
          const u = normText(rawAns);
          if (q.accept.some((a) => normText(a) === u)) {
            earned = q.points;
            status = "correct";
          }
        }

        saqScore += earned;
        return {
          no: idx + 1,
          userAns: displayUser,
          correctAns: q.answerDisplay,
          earned,
          maxPoints: q.points,
          status
        };
      });

      const totalScore = mcqScore + saqScore;
      const maxScore =
        config.mcq.reduce((s, q) => s + q.points, 0) +
        config.saq.reduce((s, q) => s + q.points, 0);

      return { mcqScore, saqScore, totalScore, maxScore, mcqDetails, saqDetails };
    }

    async function syncToGoogleSheets(isAutoTimeout) {
      const url = (GAS_WEB_APP_URL || "").trim();
      if (!url) {
        state.syncStatus = "unconfigured";
        state.syncMessage =
          "Google Apps Script URL이 아직 연결되지 않았습니다. 아래 [A4 결과지 인쇄 / PDF 저장]으로 보관하실 수 있습니다.";
        renderResult();
        return;
      }

      state.syncStatus = "sending";
      state.syncMessage = "Google Sheets(ATM_Edu_Test_Result)에 기록을 전송 중입니다...";
      renderResult();

      const elapsedSec = Math.max(0, EXAM_DURATION_SEC - state.remainingSec);
      const payload = {
        submittedAt: state.submittedAt,
        testType: config.testType,
        testTitle: config.title,
        affiliation: state.affiliation,
        name: state.name,
        elapsedText: formatMMSS(elapsedSec),
        mcqScore: state.graded.mcqScore,
        saqScore: state.graded.saqScore,
        totalScore: state.graded.totalScore,
        note: isAutoTimeout ? "시간 종료 자동 제출" : "정상 제출",
        mcqAnswers: state.mcqAnswers.map((v) => (v ? String(v) : "")),
        saqAnswers: state.saqAnswers.map((v) =>
          Array.isArray(v) ? v.map((x) => String(x || "").trim()).join(" / ") : String(v || "").trim()
        )
      };

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        const text = await res.text();
        let json = null;
        try {
          json = JSON.parse(text);
        } catch (_) {}

        if (res.ok && (!json || json.status === "ok")) {
          state.syncStatus = "ok";
          state.syncMessage = "Google Sheets(ATM_Edu_Test_Result)에 자동 기록되었습니다.";
        } else {
          state.syncStatus = "error";
          state.syncMessage = `전송 응답 오류: ${json && json.message ? json.message : res.status}`;
        }
      } catch (err) {
        state.syncStatus = "error";
        state.syncMessage = `네트워크 오류로 자동 전송에 실패했습니다. (${err.message})`;
      }
      renderResult();
    }

    function submitExam(isAutoTimeout) {
      if (state.phase === "result") return;
      if (!isAutoTimeout) {
        const total = config.mcq.length + config.saq.length;
        const answered = countAnswered();
        const msg =
          answered < total
            ? `전체 ${total}문항 중 ${answered}문항만 입력되었습니다. 이대로 제출하시겠습니까?`
            : "답안을 최종 제출하시겠습니까? 제출 후에는 수정할 수 없습니다.";
        if (!window.confirm(msg)) return;
      }

      stopTimer();
      state.submittedAt = formatKoreanDateTime(new Date());
      state.graded = gradeExam();
      state.phase = "result";
      clearSavedState();
      renderResult();
      window.scrollTo({ top: 0, behavior: "smooth" });
      syncToGoogleSheets(Boolean(isAutoTimeout));
    }

    function renderIntro(hasResume) {
      const summaryHtml =
        config.summaryItems && config.summaryItems.length
          ? `
        <details class="summary-box">
          <summary>📘 시험 전 최종 핵심 정리 (${config.summaryItems.length}개 항목) — 시험 시작 전 꼭 읽어보세요</summary>
          <ol class="summary-list">
            ${config.summaryItems.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </details>
      `
          : "";

      const resumeHtml = hasResume
        ? `
        <div class="resume-banner">
          <div>
            <strong>진행 중이던 시험 기록이 있습니다.</strong>
            <span>(${escapeHtml(state.affiliation)} / ${escapeHtml(state.name)} · 남은 시간 ${formatMMSS(state.remainingSec)})</span>
          </div>
          <div class="resume-actions">
            <button type="button" class="btn btn-primary" id="btnResume">이어서 응시하기</button>
            <button type="button" class="btn btn-ghost" id="btnDiscard">새로 시작</button>
          </div>
        </div>
      `
        : "";

      root.innerHTML = `
        <div class="exam-card intro-card">
          <div class="intro-head">
            <span class="season-badge">SEASON 3 · 형성평가</span>
            <h1>${escapeHtml(config.title)}</h1>
            <p class="intro-desc">${escapeHtml(config.subtitle)}</p>
          </div>

          <div class="meta-grid">
            <div class="meta-box"><span>문항 구성</span><strong>객관식 ${config.mcq.length} + 주관식 ${config.saq.length}문항</strong></div>
            <div class="meta-box"><span>총점 / 배점</span><strong>${config.scoreGuide}</strong></div>
            <div class="meta-box"><span>제한 시간</span><strong>30분 (시간 종료 시 자동 제출)</strong></div>
            <div class="meta-box"><span>기록 방식</span><strong>Google Sheets + A4 인쇄</strong></div>
          </div>

          ${resumeHtml}
          ${summaryHtml}

          <form id="introForm" class="intro-form">
            <div class="form-row">
              <label for="inputAffiliation">소속</label>
              <div class="aff-wrap">
                <input type="text" id="inputAffiliation" placeholder="예: 신입 교육 중, 기술1팀 등" value="${escapeHtml(config.defaultAffiliation || "")}" required />
                ${
                  config.testType === "new"
                    ? `<button type="button" class="chip-btn" id="btnQuickNewbie">신입 교육 중 자동입력</button>`
                    : ""
                }
              </div>
            </div>
            <div class="form-row">
              <label for="inputName">성명</label>
              <input type="text" id="inputName" placeholder="응시자 성명을 입력하세요" required />
            </div>
            <div class="intro-actions">
              <a href="index.html" class="btn btn-ghost">← 포털로 돌아가기</a>
              <button type="submit" class="btn btn-primary btn-lg">시험 시작 (30분 타이머 시작)</button>
            </div>
          </form>
        </div>
      `;

      const quickBtn = document.getElementById("btnQuickNewbie");
      if (quickBtn) {
        quickBtn.addEventListener("click", () => {
          document.getElementById("inputAffiliation").value = "신입 교육 중";
        });
      }

      const resumeBtn = document.getElementById("btnResume");
      if (resumeBtn) {
        resumeBtn.addEventListener("click", () => {
          state.phase = "testing";
          renderTesting();
          startTimer();
        });
      }

      const discardBtn = document.getElementById("btnDiscard");
      if (discardBtn) {
        discardBtn.addEventListener("click", () => {
          clearSavedState();
          state.mcqAnswers = Array(config.mcq.length).fill(null);
          state.saqAnswers = config.saq.map((q) => (q.kind === "multi" ? q.fields.map(() => "") : ""));
          state.remainingSec = EXAM_DURATION_SEC;
          renderIntro(false);
        });
      }

      document.getElementById("introForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const aff = document.getElementById("inputAffiliation").value.trim();
        const name = document.getElementById("inputName").value.trim();
        if (!aff || !name) return;

        state.phase = "testing";
        state.affiliation = aff;
        state.name = name;
        state.remainingSec = EXAM_DURATION_SEC;
        state.startedAt = formatKoreanDateTime(new Date());
        state.mcqAnswers = Array(config.mcq.length).fill(null);
        state.saqAnswers = config.saq.map((q) => (q.kind === "multi" ? q.fields.map(() => "") : ""));
        saveState();
        renderTesting();
        startTimer();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    function renderTesting() {
      const mcqHtml = config.mcq
        .map((q, idx) => {
          const selected = state.mcqAnswers[idx];
          const imgHtml = q.image
            ? `<div class="q-image-wrap"><img src="${q.image}" alt="문항 이미지" class="q-image" /></div>`
            : "";
          const optionsHtml = q.options
            .map((opt, oi) => {
              const num = oi + 1;
              const checked = Number(selected) === num ? "checked" : "";
              return `
              <label class="opt-item ${checked ? "selected" : ""}">
                <input type="radio" name="mcq_${idx}" value="${num}" ${checked} data-mcq-idx="${idx}" />
                <span class="opt-num">${num}</span>
                <span class="opt-text">${escapeHtml(opt)}</span>
              </label>
            `;
            })
            .join("");

          return `
          <article class="q-card">
            <div class="q-head">
              <span class="q-num">객관식 ${idx + 1}번</span>
              <span class="q-pts">${q.points}점</span>
            </div>
            <div class="q-body">
              <p class="q-prompt">${q.prompt}</p>
              ${imgHtml}
            </div>
            <div class="opt-list">${optionsHtml}</div>
          </article>
        `;
        })
        .join("");

      const saqHtml = config.saq
        .map((q, idx) => {
          const imgHtml = q.image
            ? `<div class="q-image-wrap"><img src="${q.image}" alt="문항 이미지" class="q-image ${q.imageLarge ? "large" : ""}" /></div>`
            : "";

          let inputHtml = "";
          if (q.kind === "multi") {
            const vals = Array.isArray(state.saqAnswers[idx]) ? state.saqAnswers[idx] : [];
            inputHtml = `
            <div class="multi-input-grid">
              ${q.fields
                .map(
                  (f, fi) => `
                <div class="multi-field">
                  <label>${escapeHtml(f.label)} (${f.points}점)</label>
                  <div class="unit-input">
                    <input type="text" data-saq-idx="${idx}" data-field-idx="${fi}" value="${escapeHtml(vals[fi] || "")}" placeholder="${escapeHtml(f.placeholder || "정답 입력")}" />
                    ${f.unit ? `<span class="unit-tag">${escapeHtml(f.unit)}</span>` : ""}
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `;
          } else {
            const val = String(state.saqAnswers[idx] || "");
            inputHtml = `
            <div class="unit-input">
              <input type="text" data-saq-idx="${idx}" value="${escapeHtml(val)}" placeholder="${escapeHtml(q.placeholder || "정답을 입력하세요")}" />
              ${q.unit ? `<span class="unit-tag">${escapeHtml(q.unit)}</span>` : ""}
            </div>
          `;
          }

          return `
          <article class="q-card">
            <div class="q-head">
              <span class="q-num saq">주관식 ${idx + 1}번</span>
              <span class="q-pts">${q.points}점</span>
            </div>
            <div class="q-body">
              <p class="q-prompt">${q.prompt}</p>
              ${imgHtml}
            </div>
            <div class="saq-input-wrap">${inputHtml}</div>
          </article>
        `;
        })
        .join("");

      root.innerHTML = `
        <div class="sticky-bar">
          <div class="sticky-info">
            <strong>${escapeHtml(config.title)}</strong>
            <span>${escapeHtml(state.affiliation)} · ${escapeHtml(state.name)}</span>
          </div>
          <div class="sticky-controls">
            <span class="progress-badge" id="progressBadge"></span>
            <span class="timer-badge" id="timerBadge"></span>
            <button type="button" class="btn btn-primary" id="btnSubmitTop">제출하기</button>
          </div>
        </div>

        <section class="exam-section">
          <h2 class="section-title">[객관식] 문항 (총 ${config.mcq.length}문항)</h2>
          ${mcqHtml}
        </section>

        <section class="exam-section">
          <h2 class="section-title">[주관식] 문항 (총 ${config.saq.length}문항)</h2>
          ${saqHtml}
        </section>

        <div class="bottom-submit-bar">
          <button type="button" class="btn btn-primary btn-lg" id="btnSubmitBottom">답안 최종 제출하기</button>
        </div>
      `;

      updateTimerUI();
      updateProgressUI();

      root.querySelectorAll("input[data-mcq-idx]").forEach((radio) => {
        radio.addEventListener("change", (e) => {
          const idx = Number(e.target.dataset.mcqIdx);
          state.mcqAnswers[idx] = Number(e.target.value);
          const card = e.target.closest(".opt-list");
          card.querySelectorAll(".opt-item").forEach((el) => el.classList.remove("selected"));
          e.target.closest(".opt-item").classList.add("selected");
          saveState();
          updateProgressUI();
        });
      });

      root.querySelectorAll("input[data-saq-idx]").forEach((inp) => {
        inp.addEventListener("input", (e) => {
          const idx = Number(e.target.dataset.saqIdx);
          const fIdx = e.target.dataset.fieldIdx;
          if (fIdx !== undefined) {
            if (!Array.isArray(state.saqAnswers[idx])) {
              state.saqAnswers[idx] = [];
            }
            state.saqAnswers[idx][Number(fIdx)] = e.target.value;
          } else {
            state.saqAnswers[idx] = e.target.value;
          }
          saveState();
          updateProgressUI();
        });
      });

      document.getElementById("btnSubmitTop").addEventListener("click", () => submitExam(false));
      document.getElementById("btnSubmitBottom").addEventListener("click", () => submitExam(false));
    }

    function statusBadge(st) {
      if (st === "correct") return `<span class="res-badge ok">정답</span>`;
      if (st === "partial") return `<span class="res-badge partial">부분점수</span>`;
      return `<span class="res-badge wrong">오답</span>`;
    }

    function renderResult() {
      const g = state.graded;
      const syncClass =
        state.syncStatus === "ok"
          ? "sync-ok"
          : state.syncStatus === "sending"
          ? "sync-wait"
          : "sync-warn";

      const retryBtn =
        state.syncStatus === "error"
          ? `<button type="button" class="btn btn-ghost" id="btnRetrySync">다시 전송</button>`
          : "";

      const mcqRows = g.mcqDetails
        .map(
          (d) => `
          <tr>
            <td>객-${d.no}</td>
            <td>${escapeHtml(d.userAns)}</td>
            <td>${escapeHtml(d.correctAns)}</td>
            <td>${d.earned} / ${d.maxPoints}</td>
            <td>${statusBadge(d.status)}</td>
          </tr>
        `
        )
        .join("");

      const saqRows = g.saqDetails
        .map(
          (d) => `
          <tr>
            <td>주-${d.no}</td>
            <td>${escapeHtml(d.userAns)}</td>
            <td>${escapeHtml(d.correctAns)}</td>
            <td>${d.earned} / ${d.maxPoints}</td>
            <td>${statusBadge(d.status)}</td>
          </tr>
        `
        )
        .join("");

      root.innerHTML = `
        <div class="exam-card result-card">
          <div class="result-head">
            <span class="season-badge">평가 완료</span>
            <h1>${escapeHtml(config.title)} 결과표</h1>
            <p class="result-sub">제출 일시: ${escapeHtml(state.submittedAt)} · 실시 장소: ATM 교육센터</p>
          </div>

          <div class="sync-banner ${syncClass}">
            <span>${escapeHtml(state.syncMessage)}</span>
            ${retryBtn}
          </div>

          <div class="score-summary-grid">
            <div class="score-box"><span>소속 / 성명</span><strong>${escapeHtml(state.affiliation)} · ${escapeHtml(state.name)}</strong></div>
            <div class="score-box"><span>객관식 점수</span><strong>${g.mcqScore}점</strong></div>
            <div class="score-box"><span>주관식 점수 (1차)</span><strong>${g.saqScore}점</strong></div>
            <div class="score-box total"><span>총점</span><strong>${g.totalScore} / ${g.maxScore}점</strong></div>
          </div>

          <div class="result-actions no-print">
            <button type="button" class="btn btn-primary" id="btnPrintA4">🖨️ A4 결과지 인쇄 / PDF 저장</button>
            <a href="index.html" class="btn btn-ghost">← 포털로 돌아가기</a>
          </div>

          <div class="detail-tables">
            <h3>객관식 채점 내역</h3>
            <table class="res-table">
              <thead>
                <tr><th>문항</th><th>제출 답안</th><th>정답</th><th>득점</th><th>판정</th></tr>
              </thead>
              <tbody>${mcqRows}</tbody>
            </table>

            <h3>주관식 채점 내역 (1차 자동 채점)</h3>
            <table class="res-table">
              <thead>
                <tr><th>문항</th><th>제출 답안</th><th>모범 답안</th><th>득점</th><th>판정</th></tr>
              </thead>
              <tbody>${saqRows}</tbody>
            </table>
          </div>
        </div>
      `;

      document.getElementById("btnPrintA4").addEventListener("click", () => window.print());
      const retry = document.getElementById("btnRetrySync");
      if (retry) {
        retry.addEventListener("click", () => syncToGoogleSheets(false));
      }
    }

    const hasResume = loadState();
    renderIntro(hasResume);
  };
})();
