/**
 * ATM 직무 기술 교육 시스템 - 형성평가 결과 자동 기록용 Google Apps Script
 * 대상 스프레드시트 파일명: ATM_Edu_Test_Result
 *
 * [설치 방법]
 * 1. Google Drive에서 새 Google Sheets를 만들고 파일 이름을 "ATM_Edu_Test_Result" 로 지정합니다.
 * 2. 상단 메뉴 [확장 프로그램] -> [Apps Script] 를 클릭합니다.
 * 3. 기본 코드를 모두 지우고 이 파일의 내용을 그대로 붙여넣은 뒤 저장(Ctrl+S / Cmd+S)합니다.
 * 4. 우측 상단 [배포] -> [새 배포] 클릭
 *    - 유형 선택: "웹 앱"
 *    - 실행 주체: "나"
 *    - 액세스 권한이 있는 사용자: "모든 사용자"
 * 5. [배포] 클릭 후 권한 승인(고급 -> 안전하지 않은 페이지로 이동 -> 허용)을 진행합니다.
 * 6. 생성된 "웹 앱 URL"을 복사하여 test_new.html / test_old.html 상단의 GAS_WEB_APP_URL 에 붙여넣습니다.
 */

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = data.testType === 'old' ? '재교육_형성평가' : '신입사원_형성평가';
    var sheet = ss.getSheetByName(sheetName);

    var saqCount = data.testType === 'old' ? 4 : 10;

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var headers = [
        '제출일시',
        '응시유형',
        '소속',
        '성명',
        '소요시간',
        '객관식점수',
        '주관식점수(1차자동)',
        '총점(1차자동)',
        '교육관보정점수',
        '최종총점',
        '비고'
      ];
      for (var i = 1; i <= 10; i++) headers.push('객-' + i);
      for (var j = 1; j <= saqCount; j++) headers.push('주-' + j);

      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#1e293b');
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    var rowNum = sheet.getLastRow() + 1;
    var row = [
      data.submittedAt || Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss'),
      data.testTitle || sheetName,
      data.affiliation || '',
      data.name || '',
      data.elapsedText || '',
      Number(data.mcqScore || 0),
      Number(data.saqScore || 0),
      Number(data.totalScore || 0),
      0, // 교육관 보정점수 (필요 시 직접 +/- 입력)
      '=H' + rowNum + '+I' + rowNum, // 최종총점 자동 계산
      data.note || ''
    ];

    var mcqAnswers = data.mcqAnswers || [];
    for (var m = 0; m < 10; m++) {
      row.push(mcqAnswers[m] !== undefined && mcqAnswers[m] !== null ? String(mcqAnswers[m]) : '');
    }

    var saqAnswers = data.saqAnswers || [];
    for (var s = 0; s < saqCount; s++) {
      row.push(saqAnswers[s] !== undefined && saqAnswers[s] !== null ? String(saqAnswers[s]) : '');
    }

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', sheet: sheetName, row: rowNum }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ready', service: 'ATM_Edu_Test_Result' }))
    .setMimeType(ContentService.MimeType.JSON);
}
