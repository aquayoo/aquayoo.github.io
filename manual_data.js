/* =========================================================================
   ATM Manual Collection - 통합 매뉴얼 데이터 & 형성평가 퀴즈 DB
   - 핵심 PDF(14종) 및 PPTX(4종) 총 18종 상세 보강 + 학습 포인트 + 퀴즈(5~10문항)
   - 통합 매뉴얼, 유튜브 링크, DOCX/HWPX, Hi5a-ma.pdf는 보류/참고 문서로 유지
   ========================================================================= */
window.manualDocs = [
  // =========================================================================
  // 카테고리 1: 기초 & 하드웨어/OS 세팅 (BASIC)
  // =========================================================================
  {
    id: 0,
    cat: 'BASIC',
    catName: '1. 기초 & 하드웨어/OS 세팅',
    file: '0. ATM_Vision_3D 구조광 패턴과 스캔.pdf',
    ext: 'PDF',
    level: '입문 필수',
    tags: ['구조광(Structured Light)', 'WD/FOV', '패턴 방향성', '광 반사 대응'],
    overview: '고정형 및 로봇 장착형 3D 구조광 스캔 센서의 설치 위치 선정, 작업거리(WD), 광 반사 회피, 홀(Hole) 및 선형 특징에 따른 구조광 패턴 방향 세팅 기준을 다룬 실무 설계·세팅 지침서입니다.',
    steps: [
      '프로젝트 준비 단계에서 대상물의 크기, 재질, 표면 반사율 및 스캔 센서(3Du/3Dm)의 작업거리(WD)와 시야각(FOV)을 우선 검토합니다. (고정형 센서는 초기 설치 후 위치 변경이 어려우므로 하드웨어 세팅이 품질의 80% 이상을 좌우합니다.)',
      '작업거리(WD)는 대상물에서 가장 주로 측정하는 포인트의 평균 거리를 기준으로 설정합니다. WD 정중앙 지점이 정밀도(정도)가 가장 높고, 중심에서 멀어질수록 정밀도가 낮아집니다.',
      '금속 표면이나 유광 도장면처럼 정반사가 심한 대상물은 반사광이 카메라 렌즈로 직접 입사하지 않도록 스캐너를 비스듬한 각도로 기울여 배치합니다.',
      '깊은 이너 홀(볼트 구멍 등) 내부 형상이 필요한 경우 정면 조사를 피하고 입사각을 주어 구조광이 홀 내부까지 들어가게 세팅하며, 플랫 홀의 외곽 크기 인식이 목적일 때는 정면 스캔으로 홀 내/외부 명암 대비를 극대화합니다.',
      '대상물에 리브, 핀, 돌기 등 선형 특징이 있을 때는 구조광 줄무늬 패턴이 특징과 평행하게 겹치지 않도록 반드시 수직 또는 사선 방향으로 교차 투영합니다.'
    ],
    learningPoints: [
      { title: '하드웨어 세팅이 80%를 좌우', detail: '특히 고정형 스캐너는 캘리브레이션 이후 위치 수정이 불가능에 가깝기 때문에, 초기 설계 단계에서 WD·각도·간섭을 충분히 검토해야 추후 AS 및 재세팅을 방지할 수 있습니다.' },
      { title: '패턴 방향성과 왜곡의 관계', detail: 'CPAD 핀 검사 예시처럼 구조광 패턴이 핀(선형 특징)과 수평(평행)으로 투영되면 단면 왜곡이 발생하며, 수직 방향으로 투영해야 동일 표면에 더 많은 패턴이 맺혀 정밀한 단면 취득이 가능합니다.' },
      { title: '홀(Hole) 타입별 스캔 전략', detail: '이너 홀 내부를 봐야 하면 비스듬한 입사각을, 플랫 홀의 외곽 엣지를 따야 하면 정면 스캔 + 명암 대비 확보 + 측정 포인트 정센터 배치가 핵심입니다.' }
    ],
    warnings: [
      '스캐너와 대상물이 정면 직각으로 마주 보면 프로젝터 빛 정반사로 인해 데이터가 뚫리거나 왜곡될 수 있습니다.',
      '트랜스퍼/캘리브레이션 수행 전에 반드시 대상물 특성과 WD·패턴 방향을 모두 고려해 하드웨어 고정을 완료해야 합니다.'
    ],
    simLink: { label: '3D 스캔 원리 시뮬레이터 실행', url: '3D_scan.html' },
    quiz: [
      {
        q: '고정형 3D 스캔 센서를 현장에 설치할 때 초기 설계·하드웨어 세팅이 특히 중요한 이유는 무엇인가요?',
        options: [
          '초기 세팅 이후에는 센서 위치 변경이 사실상 불가능하며, 하드웨어 세팅이 전체 품질의 80% 이상을 좌우하기 때문',
          '고정형 센서는 소프트웨어로 노출값을 조절할 수 없기 때문',
          '한 번 설치하면 전원 케이블을 분리할 수 없기 때문',
          '고정형 센서는 캘리브레이션이 필요 없기 때문'
        ],
        answer: 0,
        explanation: '고정형 스캔 센서는 초기 설치 이후 위치 변경이 어렵기 때문에 공사 준비 단계부터 대상물 특성, WD, 각도를 충분히 고려해야 재세팅과 AS를 막을 수 있습니다.'
      },
      {
        q: '스캐너의 작업거리(WD)와 시야 영역 내 정밀도(정도) 분포에 대한 설명으로 옳은 것은?',
        options: [
          'WD 기준 가장자리로 갈수록 정밀도가 높아진다',
          'WD 정중앙 지점에서 정밀도가 가장 높고, 중심에서 멀어질수록 낮아진다',
          '거리가 가까울수록 무조건 정밀도가 높아진다',
          '시야각 내 모든 위치의 정밀도는 항상 동일하다'
        ],
        answer: 1,
        explanation: '매뉴얼 6페이지 기준, WD 기준 정중앙 지점에서 정도(정밀도)가 가장 높고 중심에서 떨어질수록 정도가 낮아집니다.'
      },
      {
        q: '대상이 입체적이어서 높이 편차가 큰 부품을 스캔할 때 작업거리(WD)를 설정하는 가장 안정적인 기준은?',
        options: [
          '가장 먼 바닥면을 기준으로 설정한다',
          '가장 가까운 돌출부 끝을 기준으로 설정한다',
          '주로 측정하는 포인트들의 평균 거리를 기준으로 설정한다',
          'WD와 무관하게 최대 FOV만 맞춘다'
        ],
        answer: 2,
        explanation: '입체적 편차가 있는 경우 주로 측정하는 포인트의 평균 거리를 WD 기준으로 설정해야 안정적인 3D 데이터를 얻을 수 있습니다.'
      },
      {
        q: '금속 표면이나 유광 도장면 스캔 시 정반사(광 반사)를 줄이기 위한 스캐너 배치 방법은?',
        options: [
          '대상물과 정확히 90도 정면으로 마주 보게 설치한다',
          '반사광이 카메라로 직접 들어오지 않도록 비스듬한 각도로 조사한다',
          '프로젝터 밝기를 최소로 줄이고 정면 스캔한다',
          'WD를 2배 이상 멀리 떨어뜨린다'
        ],
        answer: 1,
        explanation: '금속·유광 표면은 정반사각을 피해 비스듬한 각도로 구조광을 조사해야 포화 및 데이터 유실을 막을 수 있습니다.'
      },
      {
        q: '볼트 구멍처럼 깊이 있는 이너 홀(Inner Hole) 내부 형상을 측정해야 할 때 올바른 스캔 각도는?',
        options: [
          '홀 정면에서 수직으로 조사한다',
          '입사각을 조정해 구조광 패턴이 홀 내부까지 들어가도록 비스듬히 배치한다',
          '스캐너를 뒤집어 바닥에서 위로 쏜다',
          '항상 HDR을 끄고 1회만 촬영한다'
        ],
        answer: 1,
        explanation: '깊은 이너 홀은 정면에서 쏘면 내부에 음영이 생겨 보이지 않으므로 입사각을 주어 내부까지 패턴이 들어가도록 세팅해야 합니다.'
      },
      {
        q: '플랫한 홀(Flat Hole)에서 내부보다 외곽 크기·위치 인식이 중요할 때의 권장 세팅은?',
        options: [
          '정면으로 스캔하여 측정 부위와 홀 뒷부분의 명암 대비를 크게 확보한다',
          '최대한 옆면 70도 이상 기울여 스캔한다',
          '홀 내부가 꽉 차도록 초점을 흐리게 맞춘다',
          '주변 조명을 최대로 켜서 명암 차이를 없앤다'
        ],
        answer: 0,
        explanation: '플랫 홀 외곽 인식이 목적일 때는 정면으로 스캔해 측정 부위와 홀 뒷부분의 명암 대비가 크게 나타나도록 세팅합니다.'
      },
      {
        q: 'CPAD 핀이나 리브(Rib) 같은 선형 특징이 있는 대상물을 스캔할 때 구조광 패턴 방향은 어떻게 정렬해야 하나요?',
        options: [
          '선형 특징과 패턴 방향이 완전히 평행하게 맞춘다',
          '선형 특징과 패턴 방향이 겹치지 않도록 수직 또는 사선 방향으로 투영한다',
          '패턴 방향은 측정 품질과 전혀 무관하다',
          '핀 끝부분에만 패턴이 닿지 않게 가린다'
        ],
        answer: 1,
        explanation: '패턴 방향이 형상과 평행하면 윤곽이 희미해지고 단면 왜곡이 발생합니다. 핀/리브와 수직(또는 사선) 방향으로 투영해야 정밀도가 높아집니다.'
      },
      {
        q: '구조광 3D 비전 세팅 작업 순서상 가장 올바른 흐름은?',
        options: [
          '트랜스퍼 캘리브레이션 완료 → 스캐너 위치 변경 → WD 확인',
          '대상물 특성·WD·패턴 방향 고려해 하드웨어 세팅 → 캘리브레이션 진행',
          '모델 등록 완료 → 스캐너 각도 변경 → 현장 양산 투입',
          '소프트웨어 필터 최대로 설정 → 하드웨어 각도 무시'
        ],
        answer: 1,
        explanation: '캘리브레이션(또는 트랜스퍼)을 수행하기 전에 대상물 특성과 스캔 센서 특성(WD, 반사, 패턴 방향)을 모두 고려하여 하드웨어 세팅을 완료해야 합니다.'
      }
    ]
  },
  {
    id: 9,
    cat: 'BASIC',
    catName: '1. 기초 & 하드웨어/OS 세팅',
    file: '9. 컴퓨터 관련 교육 영상_(유투브 영상 링크).pdf',
    ext: 'PDF',
    level: '입문 참고',
    tags: ['비전 PC 세팅', '네트워크 기초', '영상 강의', '보류'],
    overview: '비전 제어용 산업용 PC의 기본 환경 구성, 멀티 랜카드 IP 대역 분리, 방화벽 해제 등 필수 설정 과정을 담은 교육 영상 링크 모음집입니다. (현재 퀴즈 보류 대상)',
    steps: [
      '문서 내 정리된 주제별 YouTube 교육 링크를 클릭해 PC 네트워크 및 드라이버 설정 시연을 시청합니다.',
      '4-Port 랜카드(로봇·PLC·스캐너 S0/S1) 각각의 고정 IP 할당 및 1.0Gbps 링크 속도 확인 절차를 숙지합니다.',
      'Windows 방화벽 및 전원 관리(절전 모드 해제) 필수 점검 항목을 체크리스트로 확인합니다.'
    ],
    warnings: [
      '사내 보안망 환경에서는 외부 YouTube 접속이 제한될 수 있으므로 모바일 또는 사외망 환경에서 시청을 권장합니다.'
    ],
    simLink: { label: 'PLC-Robot 네트워크 시뮬레이터 실행', url: 'net_comm.html' },
    deferred: true,
    quiz: []
  },
  {
    id: 10,
    cat: 'BASIC',
    catName: '1. 기초 & 하드웨어/OS 세팅',
    file: '10.ATM_3D와 Abeoscan 셋팅.pdf',
    ext: 'PDF',
    level: '초기 셋업',
    tags: ['3Du 캘리브레이션', 'Pylon IP', 'Jumbo Packet', '프로젝터 IP 변경'],
    overview: '3Du 스캐너와 PC(AbeoSCAN)를 최초로 연결하기 위한 케이블 체결 순서, LED 상태 판독, 카메라·네트워크 IP 대역 일치, 이더넷 고급 최적화(Jumbo Packet·Receive Buffers) 및 프로젝터 IP 변경 절차를 다룬 매뉴얼입니다.',
    steps: [
      '케이블 체결: 스캐너 뒷면 기준 왼쪽이 통신, 오른쪽이 전원입니다. 연결 시 [통신 케이블 → 전원 케이블] 순으로, 해제 시 쇼트 방지를 위해 반드시 역순([전원 케이블 → 통신 케이블])으로 진행합니다.',
      '스캐너 LED 점등 확인: [TRX 노란불 → TRX 초록불 → PWR/LNK 초록불·STA 노란불 → PWR 초록불(연결 완료)] 순으로 부팅됩니다. (LNK: 5초 간격 하트비트, STA: 네트워크 연결 상태)',
      '카메라 및 PC IP 일치: [Pylon IP Configurator]에서 카메라 IP(출고 기본 192.168.1.135)를 확인한 뒤, PC 이더넷 [TCP/IPv4] IP를 셋째 자리까지 동일하게(예: 192.168.1.150) 맞춥니다. 속성에서 [Pylon GigE Vision Driver]와 [TCP/IPv4] 외 항목은 체크 해제합니다.',
      '이더넷 고급/전원 설정: 어댑터 [구성] → [고급]에서 [Jumbo Packet]을 최대값으로, [Receive Buffers]를 최대값(2048 또는 4096)으로 설정하고, [전원 관리]에서 "전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수 있음" 체크를 해제합니다.',
      'AbeoSCAN 연결: `C:\\LotusAPI\\bin\\AbeoScan.exe` 실행 → [Connect] → Scanner type을 `BaslerGigE_LC4500Bridge` 선택 → Interface IP 지정 후 [Refresh] → Camera·Projector IP 확인 후 [OK].',
      '프로젝터 IP 충돌 시: [Scanner] → [Firmware] → [Scanner.Firmware.ChangeIP]에서 NewIP 셋째 자리를 변경(예: 87) 후 [Apply]→[Save]하고, 카메라와 PC 이더넷 IP 셋째 자리도 동일하게 맞춰 재연결합니다.'
    ],
    learningPoints: [
      { title: '케이블 착탈 순서 = 쇼트 방지 핵심', detail: '연결은 [통신 → 전원], 해제는 [전원 → 통신] 순서를 반드시 지켜야 스캐너 내부 보드 쇼트 및 손상을 예방할 수 있습니다.' },
      { title: '1.0Gbps 안정 통신을 위한 NIC 튜닝', detail: 'Jumbo Packet 최대값, Receive Buffers(2048/4096) 최대값, 절전 모드 체크 해제가 빠지면 대용량 3D 이미지 패킷 손실(frame drop)이 발생합니다.' },
      { title: '셋째 자리 서브넷 일치 원칙', detail: 'PC 이더넷(Interface), 카메라(Pylon), 프로젝터(LC4500) 세 장치의 IP 셋째 자리(예: 192.168.1.x 또는 192.168.87.x)가 모두 같아야 Refresh 시 정상 인식됩니다.' }
    ],
    warnings: [
      '전원 케이블을 연결한 상태에서 통신 케이블을 뽑거나 꽂으면 쇼트가 발생할 수 있으니 반드시 전원부터 차단하세요.',
      '3Du 스캐너와 캘리브레이션 보드 간 기본 거리는 700mm이며 정면 자세로 고정합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: '3Du 스캐너에 통신 케이블과 전원 케이블을 연결 및 해제할 때 올바른 순서는?',
        options: [
          '연결: 전원 → 통신 / 해제: 통신 → 전원',
          '연결: 통신 → 전원 / 해제: 전원 → 통신 (역순)',
          '순서와 무관하게 동시에 착탈한다',
          '전원을 켠 상태에서 통신 케이블만 교체한다'
        ],
        answer: 1,
        explanation: '쇼트 방지를 위해 연결 시에는 [통신 케이블 → 전원 케이블] 순으로, 해제 시에는 반드시 역순인 [전원 케이블 → 통신 케이블] 순으로 진행합니다.'
      },
      {
        q: '스캐너 뒷면에서 바라보았을 때 커넥터의 위치 배치는?',
        options: [
          '왼쪽이 전원, 오른쪽이 통신',
          '왼쪽이 통신, 오른쪽이 전원',
          '둘 다 전원 겸용 포트이다',
          '위쪽이 통신, 아래쪽이 전원'
        ],
        answer: 1,
        explanation: '매뉴얼 3페이지 기준, 스캐너 뒤편에서 봤을 때 왼쪽이 통신 케이블, 오른쪽이 전원 케이블 연결부입니다.'
      },
      {
        q: '스캐너 LED 표시등 중 LNK와 STA가 각각 의미하는 바로 옳은 것은?',
        options: [
          'LNK: 전원 공급 여부 / STA: 팬 회전 상태',
          'LNK: 하트비트(5초 간격) / STA: 네트워크 연결 상태',
          'LNK: 프로젝터 온도 / STA: 카메라 노출 시간',
          'LNK: 에러 코드 / STA: 펌웨어 버전'
        ],
        answer: 1,
        explanation: 'PWR(전원 ON/OFF), TRX(작업 중/대기), LNK(5초 간격 하트비트), STA(네트워크 연결 ON/끊어짐 OFF)를 의미합니다.'
      },
      {
        q: '서울 본사에서 초기 출고되어 내려오는 3Du 스캐너 카메라의 기본 출고 IP는?',
        options: [
          '192.168.0.1',
          '192.168.1.135',
          '192.168.11.100',
          '127.0.0.1'
        ],
        answer: 1,
        explanation: 'Pylon IP Configurator 확인 시 서울에서 처음 출고되는 스캐너 카메라의 기본 IP 설정은 192.168.1.135입니다.'
      },
      {
        q: 'PC 이더넷 어댑터 속성에서 체크를 유지해야 하는 2가지 필수 항목은?',
        options: [
          'Pylon GigE Vision Driver와 인터넷 프로토콜 버전 4(TCP/IPv4)',
          'IPv6와 파일 및 프린터 공유',
          'QoS 패킷 스케줄러와 Microsoft 네트워크용 클라이언트',
          '모든 항목을 전부 체크해야 한다'
        ],
        answer: 0,
        explanation: '[Pylon GigE Vision Driver]와 [인터넷 프로토콜 버전 4(TCP/IPv4)]를 제외한 나머지 항목은 모두 체크 해제해야 통신 간섭을 줄일 수 있습니다.'
      },
      {
        q: '대용량 3D 스캔 패킷 손실을 막기 위해 이더넷 [고급] 탭에서 설정해야 하는 항목 2가지는?',
        options: [
          'Jumbo Packet 최대값 & Receive Buffers 최대값(2048 또는 4096)',
          '속도 및 이중 10Mbps & 절전 모드 활성화',
          'Wake on Magic Packet & MAC 주소 초기화',
          '방화벽 자동 차단 & DHCP 자동 할당'
        ],
        answer: 0,
        explanation: '이더넷 [구성]→[고급] 탭에서 Jumbo Packet과 Receive Buffers(2048 혹은 4096)를 최대값으로 변경하고, [전원 관리]에서 절전 체크를 해제해야 합니다.'
      },
      {
        q: 'AbeoSCAN에서 3Du 스캐너 연결 시 선택해야 하는 Scanner type과 실행 경로는?',
        options: [
          'C:\\LotusAPI\\bin\\AbeoScan.exe / BaslerGigE_LC4500Bridge',
          'C:\\Program Files\\ATMC.exe / USB3Vision',
          'D:\\Scanner\\setup.exe / GigE_Standard',
          'C:\\Windows\\System32\\pylon.exe / LC3000'
        ],
        answer: 0,
        explanation: 'AbeoScan.exe는 C:\\LotusAPI\\bin 경로에 있으며, 연결 시 Scanner type은 BaslerGigE_LC4500Bridge를 선택합니다.'
      },
      {
        q: '현장 IP 충돌 등으로 프로젝터 IP를 변경(예: 192.168.1.10 → 192.168.87.10)할 때 올바른 절차는?',
        options: [
          '[Scanner]→[Firmware]→[Scanner.Firmware.ChangeIP]에서 변경 후 Apply/Save하고, 카메라·이더넷 IP 셋째 자리도 87로 맞춘다',
          '프로젝터 IP만 바꾸고 카메라와 이더넷 IP는 1로 유지한다',
          '스캐너 케이스를 분해해 딥스위치를 변경한다',
          'AbeoSCAN에서는 프로젝터 IP를 바꿀 수 없다'
        ],
        answer: 0,
        explanation: 'Scanner.Firmware.ChangeIP에서 NewIP 셋째 자리를 변경 후 Apply→Save하고, Pylon IP Configurator(카메라)와 PC 이더넷 IP 셋째 자리도 동일하게 맞춰 재연결해야 합니다.'
      }
    ]
  },
  {
    id: 17,
    cat: 'BASIC',
    catName: '1. 기초 & 하드웨어/OS 세팅',
    file: '윈도우 11 재인증 매뉴얼.pptx',
    ext: 'PPTX',
    level: '유지보수',
    tags: ['Windows 11', '정품 인증', 'RAID 후 인증해제', '제품 키'],
    overview: '산업용 비전 PC에서 RAID 구성 또는 하드웨어 변경 후 Windows 11 정품 인증이 해제되는 원인과, 테더링 문제 해결 및 PC 도어 내부 제품 키를 이용한 재인증 절차를 안내하는 매뉴얼입니다.',
    steps: [
      '인증 해제 원인 파악: RAID 작업 후 하드웨어 변경, BIOS/펌웨어 변경, 스토리지 구조 변경, OS 이미지 복제, 인증 서버 문제, 라이선스 타입 불일치 등으로 발생합니다.',
      '활성 상태 확인: Windows [설정] → [시스템] → [정품 인증] 메뉴로 이동해 현재 활성화 상태를 확인합니다.',
      '1차 재인증 시도 (테터링): 휴대폰 테터링 등으로 외부 인터넷을 일시 연결한 뒤 정품 인증 창에서 [문제 해결]을 실행해 자동 인증을 시도합니다.',
      '2차 재인증 시도 (수동 키 입력): 1차 방법으로 해결되지 않으면 해당 PC 도어 안쪽 스티커에 기재된 25자리 제품 키를 확인해 수동 입력합니다.',
      '최종 확인: 활성화 상태가 "활성화됨"으로 바뀌면 PC를 재부팅한 뒤 정품 인증 상태를 다시 한 번 확인합니다.'
    ],
    learningPoints: [
      { title: 'RAID 구성 후 자주 발생하는 증상', detail: '비전 PC 납품/수리 시 스토리지 RAID 구성이나 메인보드 교체로 인해 하드웨어 ID가 바뀌면서 Windows 11 인증이 풀리는 경우가 흔합니다.' },
      { title: '제품 키 스티커 위치', detail: '수동 재인증에 필요한 25자리 제품 키는 현장 비전 PC 케이스 도어 안쪽 스티커에 부착되어 있으므로, 사내 보안망에서 인터넷이 안 될 때 확인합니다.' }
    ],
    warnings: [
      '재인증 완료 후에는 반드시 PC를 재부팅해 활성화 상태가 유지되는지 재확인해야 합니다.',
      '사내 폐쇄망 환경에서 테터링을 사용할 때는 작업 완료 후 테터링을 반드시 해제하세요.'
    ],
    simLink: null,
    quiz: [
      {
        q: '비전 PC에서 Windows 11 정품 인증이 깨지는 가장 대표적인 현장 원인이 아닌 것은?',
        options: [
          'RAID 작업 등 하드웨어/스토리지 구조 변경',
          'BIOS/펌웨어 변경 및 OS 이미지 복제',
          '라이선스 타입 불일치 및 인증 서버 문제',
          'AbeoSCAN 프로그램의 Gamma 설정값 변경'
        ],
        answer: 3,
        explanation: '하드웨어 변경(특히 RAID 후), BIOS/펌웨어 변경, 스토리지 구조 변경, OS 이미지 복제, 라이선스 불일치가 원인이며 비전 SW 파라미터와는 무관합니다.'
      },
      {
        q: 'Windows 11의 현재 정품 인증 활성 상태를 확인하는 메뉴 경로는?',
        options: [
          '제어판 → 네트워크 및 공유 센터',
          '설정 → 시스템 → 정품 인증',
          '장치 관리자 → 시스템 장치',
          '설정 → 개인 설정 → 잠금 화면'
        ],
        answer: 1,
        explanation: '[설정] → [시스템] → [정품 인증] 메뉴에서 현재 활성화 상태 및 제품 키 변경 메뉴에 접근할 수 있습니다.'
      },
      {
        q: '현장 폐쇄망 PC에서 정품 인증이 풀렸을 때 가장 먼저 시도하는 1차 재인증 방법은?',
        options: [
          'OS를 처음부터 포맷 후 재설치한다',
          '테터링 등으로 네트워크 연결 후 정품 인증 [문제 해결]을 시도한다',
          '레지스트리에서 인증 관련 키를 삭제한다',
          '스캐너 전원 케이블을 20초간 내렸다 올린다'
        ],
        answer: 1,
        explanation: '매뉴얼 기준 1차 방법은 테터링 후 [문제 해결] 시도이며, 여기서 해결되지 않을 경우 2차 방법인 제품 키 수동 변경으로 넘어갑니다.'
      },
      {
        q: '2차 방법(제품 키 수동 변경)을 진행할 때 25자리 제품 키를 확인할 수 있는 위치는?',
        options: [
          '해당 PC 도어 안쪽 스티커',
          '스캐너 뒷면 시리얼 라벨',
          '로봇 티칭 펜던트 시스템 정보',
          'C:\\LotusAPI\\bin 폴더 내 텍스트 파일'
        ],
        answer: 0,
        explanation: '25자리 Windows 제품 키는 해당 비전 PC 도어 안쪽에 부착된 스티커에 기재되어 있습니다.'
      },
      {
        q: '제품 키를 수동 입력하여 활성화 상태가 완료된 직후 마지막으로 해야 할 확인 작업은?',
        options: [
          '즉시 전원 코드를 뽑는다',
          'PC를 재부팅한 후 정품 인증 상태를 재확인한다',
          'BIOS를 공장 초기화한다',
          '이더넷 IP를 127.0.0.1로 변경한다'
        ],
        answer: 1,
        explanation: '활성화 완료 후에는 반드시 PC를 재부팅하여 활성화 상태가 정상적으로 유지되는지 재확인해야 합니다.'
      }
    ]
  },

  // =========================================================================
  // 카테고리 2: 캘리브레이션 & 원점 보정 (CALIB)
  // =========================================================================
  {
    id: 1,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '1. 작업표준서[스캐너캘리브레이션]240702ver.pdf',
    ext: 'PDF',
    level: '현장 표준',
    tags: ['작업표준서', '3DU/3DM', 'Keypoint Count', '합격 기준 A/B/C'],
    overview: '3DU 및 3DM 스캐너의 입고부터 펌웨어 업데이트, 캘리브레이션 수행, 정도 테스트, 등급 판정(A/B/C) 및 패킹까지 전체 사내 표준 절차를 규정한 공식 작업표준서(240702ver)입니다.',
    steps: [
      '1. 스캐너 입고: 패킹 개봉 및 수량 확인 후 웹 기반 장부에 모델(12mm/16mm, U/M)과 시리얼 번호를 정확히 기입하고 분류 랙에 보관합니다.',
      '2. 연결 및 펌웨어 업데이트: 기종별 WD(3DU: 700mm, 3DM: 1400mm)에 맞춰 거치 후 통신→전원 순으로 연결합니다. AbeoScan [Scanner]→[Firmware]→[Upload server firmware]에서 Server [3.3b], Projector [4.3] 버전을 확인/업데이트합니다.',
      '3. 세팅 값 조정: `Lotus.mv.CalibpatternDetector`의 Pitch: 20, DimX: 11, DimY: 10을 설정하고, CodingStrategy: PS55, Preset: HDR3, Zmin-Zmax(3DU: 500~900 / 3DM: 1200~1800), Detail: 0.95, SmoothLevel: 3 입력 후 [Upload]합니다.',
      '4. 로봇 JOB 실행 및 데이터 수집: 야스카와 로봇 JOB(3DU_CAL / 3DM_CAL)에서 1번 포즈 정면 중앙(초록색 십자가 일치)을 확인한 뒤 각 포즈 이동 후 2~3초 대기하여 수집합니다. [Log]창에서 `|Camera Keypoint Count - Projector Keypoint Count| < 70` 여부를 확인합니다.',
      '5. 연산 및 정도 검사: [Calib] 클릭 후 Camera/Projector/Calibration error 3가지 모두 **0.1 px 이하**인지 확인합니다. 이어서 스캔 + [정도 검사]를 다양한 각도로 3회 이상 수행해 `Mean_Err_X, Mean_Err_Y, Mean_Err` 모두 **0.1 이하**면 통과입니다.',
      '6. 업로드 및 패킹: 통과 시 `[upload calib data] → [settings-upload] → [reboot]` 순으로 진행하고, A(0.08 이하)/B(0.08 이상이나 통과·미세 색차)/C(0.1 이상 불량) 등급을 장부에 기입한 뒤 에어팩 포장 및 스티커(시리얼 뒤 2자리)를 부착합니다.'
    ],
    learningPoints: [
      { title: '3DU vs 3DM 기준 거리 및 Z 범위', detail: '3DU는 WD 700mm (Zmin~Zmax: 500~900), 3DM은 WD 1400mm (Zmin~Zmax: 1200~1800)로 세팅해야 하며, 캘리브레이션 보드판의 큰 원 4개 데이터 수집이 가장 중요합니다.' },
      { title: 'Keypoint Count 차이 70 기준', detail: '로그 창에서 Camera Keypoint Count와 Projector Keypoint Count의 차이가 70 이상 나면 해당 포즈는 빛 반사 등으로 잘못 수집된 것이므로 반드시 재수집해야 합니다.' },
      { title: '합격 기준 0.1 및 등급(A/B/C) 관리', detail: '캘리브레이션 에러 3종과 정도 검사 Mean_Err 3종이 모두 0.1 이하(0.08 이하면 A등급, 0.08 이상 통과 시 B등급 주의 관리, 0.1 이상은 C등급 수리/재작업)여야 합니다.' }
    ],
    warnings: [
      '각 잡의 1번 포즈에서 스캐너와 보드판이 정면 직각으로 마주 보면 빛 반사로 측정이 안 되거나 오류가 발생합니다.',
      'Apply는 임시 적용이므로 통과 후 반드시 [upload calib data] → [settings-upload] → [reboot] 순서를 거쳐 스캐너에 영구 저장해야 합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: '작업표준서(240702ver) 기준, 3DU와 3DM 스캐너의 캘리브레이션 기준 작업거리(WD)와 Zmin-Zmax 설정 범위는?',
        options: [
          '3DU: 500mm (300~700) / 3DM: 1000mm (800~1200)',
          '3DU: 700mm (500~900) / 3DM: 1400mm (1200~1800)',
          '3DU: 1400mm (1200~1800) / 3DM: 700mm (500~900)',
          '3DU와 3DM 모두 동일하게 1000mm (500~1500)'
        ],
        answer: 1,
        explanation: '3DU는 WD 700mm / Zmin-Zmax 500~900, 3DM은 WD 1400mm / Zmin-Zmax 1200~1800으로 세팅합니다.'
      },
      {
        q: '작업표준서에서 CalibpatternDetector의 Pitch, DimX, DimY 표준 설정값은?',
        options: [
          'Pitch: 15, DimX: 7, DimY: 7',
          'Pitch: 20, DimX: 11, DimY: 10',
          'Pitch: 10, DimX: 5, DimY: 5',
          'Pitch: 25, DimX: 12, DimY: 12'
        ],
        answer: 1,
        explanation: '작업표준서 7페이지 기준, 스캐너 자체 캘리브레이션 시 Pitch: 20, DimX: 11, DimY: 10으로 설정합니다. (CC 보드 15/7/7과 구분 필요!)'
      },
      {
        q: '캘리브레이션 데이터 수집 중 [Log] 창에서 Camera Keypoint Count와 Projector Keypoint Count의 차이가 얼마 이상 나면 해당 포즈를 다시 수집해야 하나요?',
        options: [
          '10 이상',
          '30 이상',
          '70 이상',
          '200 이상'
        ],
        answer: 2,
        explanation: 'Camera Keypoint Count와 Projector Keypoint Count의 수치가 70 이상 차이 나면 해당 포즈 데이터를 다시 수집해야 합니다.'
      },
      {
        q: '[Calib] 실행 후 Log 창에서 확인하는 3가지 에러값(Camera error, Projector error, Calibration error)의 정상 합격 기준은?',
        options: [
          '모두 0.5 px 이하',
          '모두 0.1 px 이하',
          '모두 1.0 px 이하',
          'Camera error만 0.1 이하이면 된다'
        ],
        answer: 1,
        explanation: 'Camera error, Projector error, Calibration error 세 가지 각각의 값이 모두 0.1 px 이하로 나와야 정상적인 캘리브레이션입니다.'
      },
      {
        q: '캘리브레이션 정도 검사(Accuracy Test)는 최소 몇 회 이상 다양한 각도로 수행하며 합격 기준은 얼마인가요?',
        options: [
          '1회 이상 / Mean_Err 0.5 이하',
          '3번 이상 / Mean_Err_X, Mean_Err_Y, Mean_Err 모두 0.1 이하',
          '5번 이상 / Mean_Err 0.3 이하',
          '2번 이상 / Stdev_Err만 0.2 이하'
        ],
        answer: 1,
        explanation: '다양한 각도로 3번 이상 스캔 후 정도 검사를 진행하여 Mean_Err_X, Mean_Err_Y, Mean_Err 값이 모두 0.1 이하인지 확인합니다.'
      },
      {
        q: '정도 검사 통과 후 스캐너에 설정과 캘리브레이션 데이터를 최종 반영하는 올바른 버튼 실행 순서는?',
        options: [
          '[Apply] → 전원 강제 차단',
          '[upload calib data] → [settings-upload] → [reboot]',
          '[reboot] → [Calib] → [Delete]',
          '[Save Image] → [Reset matrix]'
        ],
        answer: 1,
        explanation: '정도 검사 통과 시 반드시 [upload calib data] → [settings]-[upload] → [reboot] 순차 진행해야 스캐너 내부에 반영됩니다.'
      },
      {
        q: '사내 스캐너 캘리브레이션 등급 판정(A/B/C) 기준 중 B등급에 해당하는 경우는?',
        options: [
          '캘리브레이션 및 정도 모두 0.08 이하',
          '0.08 이상이나 정도 통과(0.1 이하) 또는 미세한 프로젝터 색 차이가 존재',
          '0.1 이상, 프로젝터 이상, 스캔 퀄리티 하',
          '시리얼 번호가 누락된 경우'
        ],
        answer: 1,
        explanation: '0.08 이하는 A등급, 0.08 이상이나 정도 통과 또는 미세 색차 존재 시 B등급(주의 관리), 0.1 이상·프로젝터 이상·스캔퀄리티 하 시 C등급(수리 판단)입니다.'
      },
      {
        q: '스캐너 세팅 시 [Apply] 버튼과 [Upload] 버튼의 차이점으로 옳은 것은?',
        options: [
          'Apply는 스캐너에 영구 저장, Upload는 PC 임시 저장',
          'Apply는 단순 스캔 시에만 임시 적용, Upload는 스캐너 기본 설정으로 영구 저장 및 캘리브 데이터 업로드',
          '두 버튼 모두 동일한 기능이다',
          'Upload는 펌웨어를 삭제하는 버튼이다'
        ],
        answer: 1,
        explanation: 'Apply는 단순 스캔 시에만 임시 적용되며, 스캐너 기본 설정으로 저장하려면 반드시 Upload를 수행해야 합니다.'
      }
    ]
  },
  {
    id: 2,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '2. ATMC 로봇 스캐너 캘리브레이션 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['Hand-Eye 캘리브레이션', '13포즈', 'RobotController', 'calib_result.json'],
    overview: '로봇 플랜지에 장착된 스캐너(Eye-on-Hand)와 로봇 베이스 좌표계 간의 변환 행렬을 산출하기 위해 TCP 등록, 13포즈 로봇 프로그램 티칭, RobotController 연동 및 Hand-Eye 캘리브레이션(`calib_result.json`)을 수행하는 전체 실무 매뉴얼입니다.',
    steps: [
      '1. 장착 및 연결: 스캐너 캘리브레이션이 완료된 센서를 로봇에 장착하고 [통신→전원] 순으로 연결합니다. AbeoScan·RobotController 실행용 USB 동글키를 PC에 꽂습니다.',
      '2. TOOL(TCP) 측정 및 등록: 로봇 6축 플랜지 끝단 원점에서 스캐너 중앙까지 X, Y, Z 거리를 측정하여 티치펜던트 [시스템 → 3: 로봇 파라미터 → 1: 툴 데이터]의 빈 T번호(예: T5)에 입력·완료합니다.',
      '3. 13포즈 스텝 등록: 펜던트에서 [SHIFT+툴]로 등록한 T5를 활성화하고 `MOVE P, S=60%, A=0, T=5` 조건으로 프로그램(예: 1450번)을 생성합니다. 오브젝트와 700mm 거리 정면 1포즈 기록 후, `Rx-, Rx+, Ry-, Ry+, Rz-, Rz+` 각 방향별 약 10°와 20° 두 개씩 총 12포즈(전체 13포즈)를 기록하고 마지막에 [FLOW제어→END]를 넣습니다. (진동 안정화 위해 이동 2~3초 후 확인)',
      '4. TOOL 길이 0 복원: 13포즈 티칭이 완료되면 펜던트 [툴 데이터]로 돌아가 방금 사용했던 T5의 길이 X, Y, Z 값을 다시 0으로 변경·저장합니다.',
      '5. RobotController 연동: 펜던트 [시스템→제어파라미터→네트워크→환경설정→EN2(범용)]에서 로봇 IP 확인 후 `C:\\LotusAPI\\bin\\RobotController.exe`를 실행해 [OFFLINE] 더블클릭 → Type(예: HyundaiRPC) 및 HostIP/RobotIP 설정 → [ONLINE] 전환 확인 → AbeoScan에서 [Start Robot Controller Client] 클릭 및 포즈 일치 확인.',
      '6. 데이터 취득 및 캘리브레이션: 13포즈를 순서대로 스캔(첫 스캔본 주변 노이즈는 Ctrl+우드래그+D로 삭제) 후 [Scene] 전체 선택 → [Hand-Eye Calibration] 아이콘 → 순서대로 **[Export(`Sample.acd`)] → [Calib] → [SaveResult(`calib_result.json`)]** 실행. (`Err stdev` 0.5 이상 시 최고 err 데이터 삭제 후 재Calib).',
      '7. 메인 프로그램 적용: 메인 프로그램 MANUAL 모드 → CONFIG → HAND-EYE에서 [EYE on HAND] 자물쇠 해제(1111) → Enable 활성화 → `calib_result.json` 불러오기 → 자물쇠 잠금 → [OK] 저장.'
    ],
    learningPoints: [
      { title: '13포즈 구성과 Accuracy A=0', detail: '정면 1포즈 + 6개 회전축(Rx±, Ry±, Rz±) 각 10°·20°씩 12포즈 = 총 13포즈로 구성하며, 정밀도를 위해 기록 조건은 반드시 `A=0`으로 맞춥니다.' },
      { title: '왜 티칭 후 TOOL X,Y,Z를 다시 0으로 돌리나요?', detail: 'TCP는 13포즈 티칭 시 오브젝트와의 700mm 거리와 중심을 쉽게 맞추기 위한 보조 수단이며, 실제 Hand-Eye 캘리브레이션 연산은 플랜지 기준(Tool=0) 포즈 데이터를 기준으로 수행하기 때문입니다.' },
      { title: '저장 순서와 오차 기준 (0.5)', detail: '반드시 [Export → Calib → SaveResult] 순서를 지키며, Calib 결과 `[Err stdev]`가 0.5 이상이면 Log에서 err 값이 가장 큰 포즈를 삭제하고 재계산합니다.' }
    ],
    warnings: [
      '13포즈 스캔 시 중복되거나 순서가 바뀌지 않도록 S1~S13 순서대로 스캔해야 하며, 로봇 이동 후 진동이 멈출 때까지 2~3초 기다린 뒤 스캔합니다.',
      'AbeoScan과 RobotController를 실행하려면 PC에 라이선스 동글키가 반드시 연결되어 있어야 합니다.'
    ],
    simLink: { label: 'Hand-Eye FOV 시뮬레이터 실행', url: 'fov_mo.html' },
    quiz: [
      {
        q: '로봇 스캐너 캘리브레이션 시 13포즈 프로그램 등록 전 기록조건에서 Accuracy(정확도) A 값은 얼마로 설정해야 하나요?',
        options: [
          'A=0',
          'A=3',
          'A=5',
          'A=7'
        ],
        answer: 0,
        explanation: '정밀한 캘리브레이션 포즈 기록을 위해 `MOVE P, S=60%, A=0, T=5`와 같이 A=0으로 맞춥니다.'
      },
      {
        q: '로봇 스캐너 캘리브레이션의 표준 13포즈 구성으로 올바른 것은?',
        options: [
          '정면 1포즈 + X, Y, Z 병진 이동 12포즈',
          '정면 1포즈 + Rx±, Ry±, Rz± 각 방향별 약 10°와 20° 두 개씩 12포즈',
          '임의의 위치 13개 랜덤 티칭',
          '정면 13회 반복 촬영'
        ],
        answer: 1,
        explanation: '정면 1포즈를 기록한 뒤 Rx-, Rx+, Ry-, Ry+, Rz-, Rz+ 각 6개 방향에 대해 대략 10°와 20° 두 개씩 총 12포즈(합계 13포즈)를 기록합니다.'
      },
      {
        q: '13포즈 스텝 등록이 모두 끝난 직후 로봇 티칭 펜던트 [툴 데이터]에서 반드시 수행해야 하는 작업은?',
        options: [
          '사용했던 Tool 번호의 X, Y, Z 길이 값을 0으로 변경 후 저장한다',
          'Tool 중량을 0kg으로 삭제한다',
          '로봇 프로그램을 삭제한다',
          'Tool 각도를 180도로 변경한다'
        ],
        answer: 0,
        explanation: '13포즈 티칭이 끝나면 사용했던 T의 길이(X, Y, Z) 값을 다시 0으로 만들어 저장해야 RobotController 연동 시 플랜지 기준 포즈가 정확히 읽힙니다.'
      },
      {
        q: '현대로봇 티치펜던트에서 RobotController 연결용 로봇 IP를 확인하는 메뉴 경로는?',
        options: [
          '[서비스] → [백업]',
          '[시스템] → [제어파라미터] → [네트워크] → [환경설정] → [EN2(범용)]',
          '[프로젝트] → [프로그램 리스트]',
          '[조건설정] → [좌표계]'
        ],
        answer: 1,
        explanation: '현대로봇 TP의 [시스템]→[제어파라미터]→[네트워크]→[환경설정]→[EN2(범용)]에서 로봇 IP를 확인합니다.'
      },
      {
        q: 'RobotController에서 현대로봇을 등록할 때 선택해야 하는 Type은?',
        options: [
          'Yaskawa',
          'HuyndaiRPC (HyundaiRPC)',
          'Doosan',
          'Kawasaki'
        ],
        answer: 1,
        explanation: '현대로봇의 경우 Robot list의 Type을 `HuyndaiRPC`로 설정하고 HostIP와 RobotIP를 기입합니다.'
      },
      {
        q: '13포즈 스캔 완료 후 [Hand-Eye Calibration] 창에서 결과를 저장하고 계산하는 올바른 버튼 클릭 순서는?',
        options: [
          'Calib → Export → SaveResult',
          'Export(Sample.acd) → Calib → SaveResult(Calib_Result.json)',
          'SaveResult → Calib → Export',
          'LoadResult → Combine → CheckError'
        ],
        answer: 1,
        explanation: '데이터 손실 방지를 위해 반드시 **[Export → Calib → SaveResult]** 순서로 진행하며, `C:\\LotusAPI\\bin\\Calib` 폴더에 저장합니다.'
      },
      {
        q: '[Calib] 실행 후 Log 창에서 `[Err stdev]` 결과값이 0.5 이상으로 높게 나왔을 때 1차 조치 방법은?',
        options: [
          '무시하고 SaveResult를 누른다',
          'Log 창에서 [err] 값이 가장 높은 포즈 데이터를 삭제하고 다시 [Calib]을 실시한다',
          '스캐너 케이블을 뽑았다 다시 꽂는다',
          '오브젝트를 손으로 옮겨서 다시 1포즈만 찍는다'
        ],
        answer: 1,
        explanation: 'Err stdev가 0.5 이상이면 Log 창에서 err 값이 가장 높은 데이터를 삭제 후 다시 Calib을 실행하며, 재실행 시에도 0.5 이상이면 처음부터 다시 수행합니다.'
      },
      {
        q: '메인 프로그램의 Hand-Eye 설정 창에서 `calib_result.json`을 불러와 적용할 때 주의할 점은?',
        options: [
          'EYE on HAND 영역의 자물쇠를 풀고 Enable을 켠 뒤 파일을 불러오고, 다시 자물쇠를 잠근 후 [OK]를 눌러야 한다',
          'FIXED EYE 영역에만 데이터를 넣어야 한다',
          '자물쇠를 잠근 상태에서도 파일 불러오기가 가능하다',
          'OK 대신 Cancel을 눌러야 적용된다'
        ],
        answer: 0,
        explanation: '자물쇠 클릭(비밀번호 1111) → Enable 활성화 → 폴더 불러오기(`calib_result.json`) → 자물쇠 다시 잠금 → OK 순으로 저장해야 반영됩니다.'
      }
    ]
  },
  {
    id: 6,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '6. ATMC 원점 보정 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['원점 보정', 'WJ.ply', 'Edit.SaveMatrix', 'Eye correction matrix'],
    overview: '스캐너 외부 충격이나 교체 등으로 위치가 틀어졌을 때 기존 마스터 모델·로봇 티칭을 수정하지 않고, 사전에 저장한 원점 기준 모델(`WJ.ply`)과 현재 스캔 데이터의 ICP 매칭 행렬(`WJ_Matrix.json`)을 추출해 `Eye correction matrix`에 적용하는 원점 보정 매뉴얼입니다.',
    steps: [
      '1. 사전 원점 모델(`WJ.ply`) 등록: 이동·형상 변화가 없는 고정 물체(3면이 드러나는 형상 유리, 약 700mm 거리)를 스캔합니다. AbeoScan에서 동일 물체를 2번 스캔해 ICP 매칭(Align 4회 이상)이 잘 되는지 검증한 뒤, Info 창의 Matrix가 단위행렬 `[1,1,1,1]`인 원본 데이터를 `C:\\LotusAPI\\WJ\\WJ.ply`로 저장하고 로봇 포즈도 별도 프로그램에 저장합니다.',
      '2. 기존 대비 데이터 확인 준비: 가동 중인 메인 프로그램을 종료하고, AbeoScan에서 `WJ.ply`를 먼저 불러온 뒤 스캐너를 연결합니다. (원점 데이터와 스캔 데이터 순서가 바뀌면 심각한 오차가 발생하므로 반드시 순서를 지킵니다.)',
      '3. 원점 포즈 이동 및 스캔: 로봇을 원점 모델 스캔 포즈로 이동시킨 뒤 AbeoScan에서 1회 스캔합니다.',
      '4. ICP 매칭 및 Matrix 저장: [ICP] 탭에서 `WJ.ply`를 [SetDest], 현재 스캔본을 선택 후 [Align]을 4회 이상 클릭합니다. Info 창에서 변화량 Matrix를 확인한 뒤 상단 메뉴 [Edit] → [Edit.SaveMatrix]를 눌러 `C:\\LotusAPI\\WJ\\WJ_Matrix.json`으로 저장하고 AbeoScan을 종료합니다.',
      '5. 메인 프로그램 적용: 메인 프로그램 실행 → [AUTO] 더블클릭 후 비밀번호 `1111` 입력해 [MANUAL] 전환 → [CONFIG] → [HAND-EYE] 진입(안 보이면 GENERAL의 `ShowHandEyeConfigPanel`을 `True`로 설정) → 보정할 스캐너 선택.',
      '6. Eye correction matrix 업데이트: 우측 상단 [Eye correction matrix] 자물쇠 해제(1111) → 폴더 불러오기 아이콘으로 `WJ_Matrix.json` 로드 → 행렬값 확인 후 자물쇠 재잠금 → [OK] 저장 → 재진입하여 반영 여부 최종 확인.'
    ],
    learningPoints: [
      { title: '원점 모델(`WJ.ply`) 저장 시 단위행렬 확인', detail: '원점 기준 모델은 이동/회전되지 않은 순수 원본이어야 하므로 저장 전 Info 창에서 Matrix가 단위행렬(`[1,0,0,0; 0,1,0,0; 0,0,1,0; 0,0,0,1]`)인지 반드시 확인해야 합니다.' },
      { title: 'SetDest 대상 순서 엄수', detail: 'ICP 매칭 시 기준이 되는 기존 원점 모델(`WJ.ply`)을 먼저 불러와 [SetDest]로 고정하고, 새로 찍은 스캔본을 이동시켜야 올바른 보정 Matrix가 추출됩니다. 순서가 뒤바뀌면 역방향 오차가 발생합니다.' },
      { title: 'ShowHandEyeConfigPanel 옵션', detail: '메인 프로그램 CONFIG 좌측 메뉴에 HAND-EYE 탭이 보이지 않을 때는 GENERAL 탭에서 `ShowHandEyeConfigPanel`을 `True`로 변경하면 활성화됩니다.' }
    ],
    warnings: [
      'AbeoScan 연결 전 반드시 실행 중인 현장 메인 프로그램을 종료해야 스캐너 연결 충돌이 발생하지 않습니다.',
      '원점 보정 시 사용하는 로봇 TOOL 값은 기존 로봇 스캐너 캘리브레이션 때와 동일한 조건이어야 합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: '원점 보정 시 기준이 되는 3D 모델(예: WJ.ply)을 선정할 때 가장 유리한 대상물 조건은?',
        options: [
          '이동이나 형상 변화가 없는 고정 물체이며 3면이 드러나는 형상',
          '매 사이클마다 위치가 바뀌는 차체 판넬',
          '특징이 전혀 없는 매끈한 단일 평면',
          '유광 크롬 도금된 원형 파이프'
        ],
        answer: 0,
        explanation: '원점 모델은 이동이나 형상 변화가 발생하지 않는 고정 물체(원점 보정 포스트 등) 중 3면이 드러나는 부분이 6자유도 ICP 매칭에 유리합니다.'
      },
      {
        q: '원점 기준 모델(`WJ.ply`)을 최초 저장하기 전 AbeoScan 좌측 하단 Info 창에서 반드시 확인해야 하는 값은?',
        options: [
          'Matrix 값이 단위행렬 [1, 1, 1, 1]인지 여부',
          'VertexCount가 100 이하인지 여부',
          'Render time이 10초 이상인지 여부',
          'Debug 모드가 Shade인지 여부'
        ],
        answer: 0,
        explanation: '기준 모델은 행렬 변환이 가해지지 않은 원본이어야 하므로 Info 창에서 Matrix가 단위행렬(`[1,0,0,0; 0,1,0,0; 0,0,1,0; 0,0,0,1]`)인지 반드시 확인합니다.'
      },
      {
        q: '원점 보정 매칭을 위해 AbeoScan에서 `WJ.ply`와 새 스캔 데이터를 ICP 매칭할 때 올바른 순서는?',
        options: [
          '새 스캔본을 [SetDest]로 지정하고 `WJ.ply`를 [Align] 한다',
          '기존 원점 모델(`WJ.ply`)을 [SetDest]로 지정하고, 새 스캔본을 선택한 후 [Align]을 4회 이상 클릭한다',
          '두 데이터를 병합(Combine)한 뒤 Reset Matrix를 누른다',
          '순서와 상관없이 아무거나 SetDest 한다'
        ],
        answer: 1,
        explanation: '원점 데이터(`WJ.ply`)와 스캔 데이터의 위치가 뒤바뀌면 역방향 보정이 들어가 심각한 문제가 발생하므로 반드시 기존 원점 모델을 SetDest로 지정해야 합니다.'
      },
      {
        q: 'ICP 매칭 후 추출된 위치 변화량 행렬을 저장하는 AbeoScan 메뉴 경로와 파일 형식은?',
        options: [
          '[File] → [Save All] (.ply)',
          '[Edit] → [Edit.SaveMatrix] (.json)',
          '[Scanner] → [Save Image] (.png)',
          '[Tools] → [Export] (.acd)'
        ],
        answer: 1,
        explanation: '상단 메뉴 [Edit] → [Edit.SaveMatrix]를 클릭하여 `C:\\LotusAPI\\WJ\\WJ_Matrix.json`처럼 JSON 파일로 저장합니다.'
      },
      {
        q: '메인 프로그램 CONFIG 창 좌측에 [HAND-EYE] 버튼이 보이지 않을 때 활성화하는 방법은?',
        options: [
          'GENERAL 탭에서 `ShowHandEyeConfigPanel`을 `True`로 변경한다',
          'PC를 포맷하고 프로그램을 재설치한다',
          'DB 탭에서 모든 로그를 삭제한다',
          '로봇 비상정지 버튼을 누른다'
        ],
        answer: 0,
        explanation: 'GENERAL 탭의 `ShowHandEyeConfigPanel` 설정을 `True`로 변경하면 HAND-EYE 메뉴가 표시됩니다.'
      },
      {
        q: '메인 프로그램 Hand-Eye 창에서 추출한 `WJ_Matrix.json`을 적용하는 영역은 어디인가요?',
        options: [
          'UF Ref Frame',
          'CC 좌표계',
          'Eye correction matrix',
          'FIXED EYE'
        ],
        answer: 2,
        explanation: '우측 상단 [Eye correction matrix] 영역의 자물쇠를 풀고(1111) `WJ_Matrix.json`을 불러온 뒤 다시 자물쇠를 잠급니다.'
      },
      {
        q: '원점 보정 작업 전 AbeoScan으로 스캔하기 위해 선행해야 하는 필수 조치는?',
        options: [
          '가동 중인 현장 메인 프로그램을 먼저 종료한다',
          '메인 프로그램을 AUTO 상태로 가동한 채 동시에 스캔한다',
          'PLC 전원을 차단한다',
          '모든 케이블을 분리한다'
        ],
        answer: 0,
        explanation: '스캐너 통신 포트 충돌을 막기 위해 AbeoScan 사용 전 반드시 가동 중인 메인 프로그램을 종료해야 합니다.'
      }
    ]
  },
  {
    id: 8,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '8. ATMC 로봇 스캐너 캘리브레이션 트랜스퍼 매뉴얼_검증포함.pdf',
    ext: 'PDF',
    level: '고급 실무',
    tags: ['TransferCalib', 'EyeonHand/FixedEye', 'CalcRef', 'Eye2Base 검증'],
    overview: '1대의 기준 스캐너(A)에서 완료된 로봇-스캐너 캘리브레이션 데이터를 고정된 오브젝트를 매개체로 다른 스캐너(B)에 이관(Transfer)하고, `Eye2Base` 및 `ComputeDistanceMap`으로 정밀도를 검증하는 매뉴얼입니다.',
    steps: [
      '1. 트랜스퍼 방향 이해: 가능한 조합은 ① `EyeonHand → EyeonHand`, ② `EyeonHand → FixedEye`, ③ `FixedEye → FixedEye` 3가지뿐입니다. (FixedEye → EyeonHand는 불가하므로 역순 진행)',
      '2. 오브젝트 세팅: 양쪽 스캐너가 볼 수 있는 위치에 캘리브레이션 오브젝트를 고정합니다. 트랜스퍼 과정 중 오브젝트는 **절대 움직이면 안 되며**, 로봇 이동 시에도 회전(`Rx, Ry, Rz`)은 최소로 합니다.',
      '3. 기준 스캐너(A) 준거 모델 생성(`CalcRef`): AbeoScan에서 기준 스캐너(A)와 로봇 연결 → [LoadResult]로 A의 `calib.json` 로드 및 [HandEyeConfig] 설정 → 오브젝트 스캔 및 노이즈 삭제(Ctrl+좌클릭 주의) → **[CalcRef]** 클릭 후 Log창에 `X_ref = [...]`, `Y_ref = [...]` 출력 확인.',
      '4. 대상 스캐너(B) 트랜스퍼(`TransferCalib`): 트랜스퍼 받을 스캐너(B) 연결(WD 맞춰 X/Y/Z만 이동) → [TransferHandEyeConfig]를 B의 타입(EyeonHand/FixedEye)에 맞게 선택 → 오브젝트 스캔 및 노이즈 삭제 → **[TransferCalib]** 클릭 → `trans_calib_result.json` 저장 → 메인 프로그램에 적용.',
      '5. 검증 (`Eye2Base` & `ComputeDistanceMap`): A, B 스캐너가 동시에 볼 수 있는 고정 검증 오브젝트를 스캔해 각각 [LoadResult]로 자신의 calib/trans 결과 json을 불러온 뒤 **[Eye2Base]** 클릭 → 두 데이터 간 겹침을 육안 및 `Tools → Pointcloud tools → ComputeDistanceMap`(Min/Max ±5.000, 초록색 일치 확인)으로 검증합니다.'
    ],
    learningPoints: [
      { title: '트랜스퍼 가능한 3가지 조합', detail: '트랜스퍼는 `EyeonHand→EyeonHand`, `EyeonHand→FixedEye`, `FixedEye→FixedEye` 3가지 경우만 존재합니다. 고정형에서 로봇형으로 넘길 때는 로봇형 기준에서 고정형으로 방향을 잡아 진행합니다.' },
      { title: '오브젝트 절대 고정 & 회전 최소화', detail: '트랜스퍼는 기준 스캐너와 대상 스캐너가 "동일한 위치의 고정 오브젝트"를 본다는 가정으로 계산됩니다. 중간에 오브젝트가 움직이거나 로봇 회전(Rx,Ry,Rz)이 크면 오차가 커집니다.' },
      { title: 'Eye2Base + DistanceMap 교차 검증', detail: '서로 다른 스캐너 A, B의 스캔 데이터를 각각 Eye2Base로 로봇 베이스 좌표계로 변환했을 때 공간상에서 완벽히 겹쳐야(DistanceMap 초록색) 트랜스퍼가 성공한 것입니다.' }
    ],
    warnings: [
      '스캔한 포인트 클라우드를 [Ctrl] + 좌클릭으로 실수로 회전/이동시키면 좌표값이 변하므로, Info 창의 행렬 변화를 수시로 확인하세요.',
      '검증 단계에서 스캐너 A는 자신의 `calib_result.json`을, 스캐너 B는 `trans_calib_result.json`을 각각 LoadResult 후 Eye2Base 해야 합니다.'
    ],
    simLink: { label: '공통좌표계(CC) 시뮬레이터 실행', url: 'com_uf.html' },
    quiz: [
      {
        q: '캘리브레이션 데이터 트랜스퍼(TransferCalib)가 가장 적합한 현장 구성은?',
        options: [
          '여러 대의 로봇과 여러 대의 스캐너가 있는 상황 (CC 권장)',
          '1대의 로봇과 N대의 스캐너(Fixed/Hand 무관)가 있는 상황',
          '로봇 없이 고정 스캐너 1대만 있는 상황',
          '스캐너 없이 로봇만 있는 상황'
        ],
        answer: 1,
        explanation: '다수의 로봇 상황은 공통좌표계(CC)가 적합하며, 1대의 로봇과 N대의 스캐너가 있는 상황에서 캘리브레이션 데이터 트랜스퍼가 적합합니다.'
      },
      {
        q: '캘리브레이션 데이터 트랜스퍼의 3가지 가능한 흐름 조합에 해당하지 않는 것은?',
        options: [
          'EyeonHand → EyeonHand',
          'EyeonHand → FixedEye',
          'FixedEye → FixedEye',
          'FixedEye → EyeonHand'
        ],
        answer: 3,
        explanation: '트랜스퍼 조합은 EyeonHand→EyeonHand, EyeonHand→FixedEye, FixedEye→FixedEye 3가지뿐입니다. FixedEye→EyeonHand 경우는 없으므로 EyeonHand→FixedEye 순으로 진행합니다.'
      },
      {
        q: '트랜스퍼 과정 중 캘리브레이션 오브젝트와 로봇 조작에 대한 설명으로 옳은 것은?',
        options: [
          '오브젝트는 절대 움직이면 안 되며, 로봇 이동 시 회전(Rx, Ry, Rz) 움직임은 최소로 한다',
          '스캐너 A 촬영 후 오브젝트를 스캐너 B 앞으로 옮겨놓고 다시 촬영한다',
          '로봇 손목을 45도 이상 크게 회전시키며 이동한다',
          '오브젝트 대신 작업 중인 차체를 사용한다'
        ],
        answer: 0,
        explanation: '오브젝트가 고정되어 있다는 전제로 변환을 계산하므로 절대 움직이면 안 되며, 정확도를 위해 로봇 이동 시 X, Y, Z 위주로 이동하고 회전은 최소화합니다.'
      },
      {
        q: '기준 스캐너(A)로 오브젝트를 스캔해 준거 모델 좌표를 생성할 때 클릭하는 버튼과 Log 창 확인 내용은?',
        options: [
          '[TransferCalib] / ERR = 0.0',
          '[CalcRef] / X_ref = [...], Y_ref = [...]',
          '[CalcCC] / CC_Matrix = [...]',
          '[Eye2Base] / Base_Origin = [...]'
        ],
        answer: 1,
        explanation: '기준 스캐너(A) 데이터에서 노이즈 제거 후 [CalcRef]를 클릭하여 Log 창에 `X_ref`, `Y_ref`가 출력되는지 확인합니다.'
      },
      {
        q: '트랜스퍼를 받을 대상 스캐너(B)의 타입(EyeonHand/FixedEye)을 지정하는 Property 항목은?',
        options: [
          'HandEyeConfig',
          'TransferHandEyeConfig',
          'CodingStrategy',
          'DataType'
        ],
        answer: 1,
        explanation: '기준 스캐너(A)는 `HandEyeConfig`에, 트랜스퍼 받을 스캐너(B)는 `TransferHandEyeConfig`에 해당 타입을 세팅합니다.'
      },
      {
        q: '트랜스퍼 결과 검증 시 두 스캐너(A, B)의 스캔 데이터를 로봇 베이스 좌표계로 변환해 겹침 여부를 확인하는 버튼은?',
        options: [
          'Eye2Base',
          'Base2CC',
          'Combine',
          'Reset Matrix'
        ],
        answer: 0,
        explanation: '각 스캐너의 스캔 데이터에 LoadResult로 캘리브/트랜스퍼 결과를 로드한 뒤 [Eye2Base]를 클릭하여 동일 베이스 좌표계로 이동시켜 정합을 확인합니다.'
      },
      {
        q: 'Eye2Base로 변환된 두 데이터를 정량적으로 검증하기 위해 사용하는 AbeoSCAN 기능과 정상 일치 색상은?',
        options: [
          'ComputeDistanceMap / 초록색(0에 가까움)',
          'Voxel Sampling / 빨간색',
          'Remove plane / 파란색',
          'Edge detector / 노란색'
        ],
        answer: 0,
        explanation: 'Tools → Pointcloud tools → ComputeDistanceMap을 실행(Min/Max ±5.000)하여 두 E2B 데이터가 잘 매칭되어 초록색으로 나타나는지 검증합니다.'
      }
    ]
  },
  {
    id: 12,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '12. 스캐너 원점 보정 교육자료.pptx',
    ext: 'PPTX',
    level: '강의 자료',
    tags: ['원점 보정 요약', 'R1|t1 vs R2|t2', '5002/5003 포즈', '현장 대응'],
    overview: '외부 충격으로 스캐너가 틀어지거나 카메라 고장으로 스캐너를 교체했을 때, 기존 마스터·로봇 티칭을 유지하면서 원점 보정으로 복구하는 핵심 원리(`[R1|t1]` → `[R2|t2]`)와 현장 대응 절차를 10장의 슬라이드로 압축 정리한 교육 자료입니다.',
    steps: [
      '1. 상황 판단: 비전 센서가 틀어지거나 교체된 경우에는 기존 캘리브레이션 오브젝트를 스캔해 `[R1|t1]` 대비 `[R2|t2]` 차이로 원점 보정합니다. 단, 로봇 위치 자체가 바뀌거나 캘리브레이션 오브젝트가 변경된 경우에는 Robot+스캐너 캘리브레이션을 재수행해야 합니다.',
      '2. 원점 포즈 이동: 로봇 티칭 펜던트에서 원점 보정용 프로그램(예: `v_lh_ref` 또는 `v_rh_ref`, 5002/5003번)을 실행해 해당 스캐너 포즈로 로봇을 이동합니다.',
      '3. 기존 Ref 불러오기 및 스캔: `C:\\LotusAPI\\Reference` 폴더의 기존 스캐너 `Ref.ply`를 AbeoSCAN에 드래그해 불러온 뒤, 교체/틀어진 스캐너 IP(`BaslerGigE_LC4500Bridge`)를 연결해 원점 오브젝트를 스캔합니다.',
      '4. ICP 매칭 및 행렬 저장: ICP 실행 → [Align]을 4회 정도 클릭해 매칭한 뒤 `Edit.SaveMatrix`로 `LotusAPI\\Reference\\해당 폴더`에 저장합니다.',
      '5. Hand-Eye 적용: 메인 프로그램 MANUAL 모드 → CONFIG → HANDEYE(비밀번호 1111) → 해당 스캐너 선택 → [Eye correction matrix] 자물쇠 해제(1111) → SaveMatrix 파일 불러오기 → 자물쇠 잠금 → 변경 확인.'
    ],
    learningPoints: [
      { title: '원점 보정 vs 전체 재캘리브레이션 구분', detail: '스캐너만 틀어지거나 교체된 경우는 "원점 보정"으로 기존 티칭 변경 없이 복구 가능하지만, 로봇 자체나 고정 오브젝트 위치가 바뀐 경우는 "Robot+스캐너 캘리브레이션"을 다시 해야 합니다.' },
      { title: '현장용 빠른 트러블슈팅 플로우', detail: '로봇 원점 포즈(5002/5003) 이동 → 기존 Ref.ply 드래그 → 새 스캔 → ICP Align 4회 → Edit.SaveMatrix → HandEye Eye correction matrix 로드로 신속하게 라인을 복구합니다.' }
    ],
    warnings: [
      '스캐너 IP 리스트는 현장 PC 랙 내부 라벨을 먼저 확인한 뒤 AbeoSCAN에 입력하세요.',
      'Ref 파일과 스캔 파일의 SetDest/Align 순서가 바뀌지 않도록 주의해야 합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: '현장에서 스캐너 원점 보정만으로 복구할 수 없고 Robot+스캐너 캘리브레이션을 처음부터 재수행해야 하는 경우는?',
        options: [
          '외부 충격으로 스캐너만 약간 틀어진 경우',
          '카메라 고장으로 스캐너를 새 장비로 교체한 경우',
          '로봇 위치가 변경되거나 고정 캘리브레이션 오브젝트 위치가 변경된 경우',
          '스캐너 LAN 케이블만 교체한 경우'
        ],
        answer: 2,
        explanation: '센서만 틀어지거나 교체된 경우는 원점 보정으로 기존 티칭 변경 없이 복구할 수 있지만, 로봇 위치나 오브젝트 위치가 바뀐 경우에는 Robot+스캐너 캘리브레이션을 재수행해야 합니다.'
      },
      {
        q: '원점 보정을 위해 로봇을 이동시킬 때 교육자료에 제시된 펜던트 원점 프로그램 예시 번호는?',
        options: [
          '1001, 1002번',
          '5002, 5003번 (v_lh_ref / v_rh_ref)',
          '9998, 9999번',
          '0001, 0002번'
        ],
        answer: 1,
        explanation: '교육자료 3~4페이지 기준, 로봇 스캐너 원점 포즈 `v_lh_ref` 또는 `v_rh_ref`(5002, 5003번 프로그램)를 실행해 로봇을 이동합니다.'
      },
      {
        q: '기존 저장된 스캐너 기준 Ref(`.ply`) 파일이 위치한 기본 폴더 경로는?',
        options: [
          'C:\\LotusAPI\\Reference',
          'C:\\Windows\\System32',
          'D:\\Backup\\Temp',
          'C:\\Users\\Desktop'
        ],
        answer: 0,
        explanation: 'C 드라이브 `LotusAPI\\Reference` 폴더에서 교체한 스캐너 위치의 기준 `.ply` 파일을 찾아 AbeoSCAN에 불러옵니다.'
      },
      {
        q: '원점 보정 교육자료에서 ICP 매칭 시 [Align] 버튼은 몇 회 정도 클릭하도록 안내하고 있나요?',
        options: [
          '1회만 클릭',
          '4회 정도 클릭',
          '50회 이상 클릭',
          '클릭하지 않고 바로 저장'
        ],
        answer: 1,
        explanation: 'ICP 실행 후 [Align] 버튼을 4회 정도 클릭하여 정합이 충분히 수렴한 뒤 `Edit.SaveMatrix`로 저장합니다.'
      },
      {
        q: '메인 프로그램 MANUAL 모드 → CONFIG → HANDEYE 진입 및 Eye correction matrix 잠금 해제 시 사용하는 기본 비밀번호는?',
        options: [
          '0000',
          '1111',
          '1234',
          '9999'
        ],
        answer: 1,
        explanation: '교육자료 8~9페이지 기준, HANDEYE 진입과 Eye correction matrix 자물쇠 해제 모두 비밀번호 `1111`을 입력합니다.'
      },
      {
        q: '원점 보정 작업에서 고정 캘리브레이션 오브젝트를 스캔해 `[R1|t1]`과 `[R2|t2]`를 비교하는 가장 큰 장점은?',
        options: [
          '기존의 마스터 모델과 로봇 티칭 데이터를 변경하지 않고 그대로 적용할 수 있다',
          '로봇 제어기 펌웨어를 자동으로 업그레이드해 준다',
          'TCP 측정이 영구적으로 필요 없어진다',
          '스캐너 케이블 없이 무선 통신이 가능해진다'
        ],
        answer: 0,
        explanation: '기존 기준 상태 `[R1|t1]`과 변경 후 상태 `[R2|t2]`의 차이로 캘리브레이션 값을 보정하므로 기존 마스터와 로봇 티칭 변경 없이 즉시 적용 가능합니다.'
      }
    ]
  },
  {
    id: 13,
    cat: 'CALIB',
    catName: '2. 캘리브레이션 & 원점 보정',
    file: '3D 스케너 - 구조광 방식에 대한 고찰.pptx',
    ext: 'PPTX',
    level: '심화 이론',
    tags: ['6-DOF', '삼각측량', '스캔 불량 3대 요인', 'RMS 오차'],
    overview: '신입 엔지니어를 위해 2D 픽셀과 3D 6자유도(6-DOF)의 차이, 1-카메라 1-프로젝터 구조광 삼각측량 원리, 현장 스캔 불량 3대 요인(과노출·외란광·차폐), 3대 좌표계(스캐너·베이스·TCP) 및 4단계 실무 점검 루틴을 정리한 심화 교육 자료입니다.',
    steps: [
      '1. 공간 기초(6-DOF): 2D 화면(u, v)은 깊이 정보가 없으며, 3D 공간의 물체는 병진 위치(X, Y, Z)와 회전 자세(Roll Rx, Pitch Ry, Yaw Rz)가 결합된 6자유도(6-DOF)로 정의됩니다.',
      '2. 구조광 변환 3단계: ① 패턴 투사(Gray Code + 위상 천이 사인파) → ② 위상 디코딩(카메라-프로젝터 픽셀 1:1 서브픽셀 매핑) → ③ 삼각측량 기반 3D 좌표(X, Y, Z) 포인트 클라우드 생성.',
      '3. 스캔 불량 3대 요인 조치: ① 과노출/정반사(255 포화) → 노출 하향·HDR·편광 필터, ② 외란광 간섭(용접 불꽃/직사광선) → 차광 커튼·Gain 증대·블루 LED 밴드패스 필터, ③ 차폐/음영(깊은 홀/모서리 유실) → 각도 재조정·다각도 티칭.',
      '4. 3대 좌표계 & Hand-Eye: 스캐너 좌표계 {S}(렌즈 중심), 로봇 베이스 좌표계 {B}(바닥 절대 지도), 툴 좌표계 {TCP}(실제 작업 끝점)를 구분하고, 4×4 동차 변환 행렬과 CAD Best-Fit(ICP)으로 6-DOF 보정량을 산출합니다.',
      '5. 위치 오차 시 4단계 점검 루틴: Step 1(볼트 풀림·렌즈 오염·TCP 변형 육안 점검) → Step 2(과노출 255/외란광 확인) → Step 3(재투영 오차 RMS 0.05~0.1 Pixel 이하 확인) → Step 4(CAD 매칭 Fitness Score 및 이물질 이상치 필터링).'
    ],
    learningPoints: [
      { title: '왜 체커보드를 기울여 다각도로 찍어야 하나요?', detail: '평면 타깃을 한 자세로만 찍으면 Z축 깊이 방향의 초점거리·렌즈 왜곡 방정식의 수학적 유일해(Solution)를 풀 수 없으므로 기울기(Tilt)와 다양한 거리가 필수입니다.' },
      { title: '스캔 불량 3대 요인과 즉각 처방', detail: '정반사 구멍 뚫림(과노출 255) → 노출 하향/HDR, 노이즈 폭증(외란광 SNR 저하) → 블루 밴드패스 필터/차광, 홀·모서리 유실(차폐) → 각도 변경/다각도 스캔.' },
      { title: '이물질·스패터에 의한 오정합 (Local Minima)', detail: '부품에 용접 스패터나 국소 변형이 심하면 ICP Best-Fit이 엉뚱한 위치(지역 최적해)로 수렴할 수 있으므로 Outlier/Small cluster 필터링이 필요합니다.' }
    ],
    warnings: [
      '스캐너 보정값이 정상인데 로봇이 경미하게 충돌한 후 용접 위치가 1mm 이상 어긋난다면 TCP 좌표계 틀어짐을 먼저 의심하고 TCP를 재설정하세요.',
      '캘리브레이션 RMS Reprojection Error가 0.1 Pixel을 크게 초과(예: 1.5 Pixel)하면 반드시 재캘리브레이션을 수행해야 합니다.'
    ],
    simLink: { label: '3D 스캔 시뮬레이터 실행', url: '3D_scan.html' },
    quiz: [
      {
        q: '물체의 중심 위치(X, Y, Z)는 정확히 측정되었으나 로봇이 부품에 비스듬히 진입해 충돌할 때, 추가로 확인해야 하는 3차원 회전 자세(6-DOF) 요소는?',
        options: [
          'u, v 픽셀 좌표',
          'Roll(Rx), Pitch(Ry), Yaw(Rz)',
          'Gain, Gamma, Exposure',
          'Pitch, DimX, DimY'
        ],
        answer: 1,
        explanation: '3D 공간에서의 완전한 자세는 병진 위치(X, Y, Z)와 회전 자세 Roll(Rx), Pitch(Ry), Yaw(Rz)이 결합된 6자유도(6-DOF)로 구성됩니다.'
      },
      {
        q: '매끄러운 금속 패널에서 일반 스테레오 카메라 대신 프로젝터로 위상 천이(Phase Shift) 사인파 패턴을 투사하는 이유는?',
        options: [
          '빛의 색깔을 예쁘게 보이기 위해',
          '표면에 인공 특징점을 생성하고 서브픽셀(Sub-pixel) 단위의 초정밀 1:1 매핑을 하기 위해',
          '카메라 해상도를 10배 낮추기 위해',
          '전력 소모를 0으로 만들기 위해'
        ],
        answer: 1,
        explanation: '매끄러운 금속은 자연 특징점이 없어 스테레오 매칭이 실패하므로 프로젝터가 인공 패턴을 투사해 서브픽셀 단위 정밀 매핑을 수행합니다.'
      },
      {
        q: '프레스 강판 표면에서 특정 부위의 3D 포인트가 뚫려 사라지는 현상의 가장 흔한 광학적 원인은?',
        options: [
          '정반사(Specular Highlight)로 인한 카메라 픽셀 포화(255 과노출)',
          'CPU 클럭 속도 저하',
          '로봇 베이스 좌표계 Z축 방향 오류',
          'Windows 11 정품 인증 해제'
        ],
        answer: 0,
        explanation: '강판/오일 표면 정반사로 픽셀값이 255로 포화되면 줄무늬 명암비가 사라져 해당 부위 3D 포인트가 뚫리게 됩니다.'
      },
      {
        q: '인근 라인의 용접 불꽃이나 직사광선 유입 시 스캔 노이즈가 폭증하는 현상과 대표적인 광학 필터 조치법은?',
        options: [
          '신호 대 잡음비(SNR) 급감 / 블루 LED 밴드패스 필터 및 차광 커튼 적용',
          '과노출 발생 / 노출 시간 10배 증가',
          '차폐 현상 / 스캐너 전원 차단',
          'TCP 오차 / 툴 번호 변경'
        ],
        answer: 0,
        explanation: '외란광이 유입되면 신호 대 잡음비(SNR)가 급감하므로 차광 커튼 설치 및 프로젝터 파장만 통과시키는 블루 LED 밴드패스 필터를 사용합니다.'
      },
      {
        q: '1-카메라 1-프로젝터 시스템에서 부품의 깊은 홀(Hole) 내부나 직각 플랜지 안쪽 데이터가 유실되는 이유는?',
        options: [
          '광학적 차폐 및 음영(Occlusion & Shadow) 사각지대 발생',
          'Jumbo Packet 미설정',
          '프로젝터 펌웨어 구버전',
          '체커보드 오염'
        ],
        answer: 0,
        explanation: '프로젝터 빛은 닿았으나 카메라 시야에서 가려지거나 그 반대인 기하학적 사각지대(Occlusion & Shadow) 때문에 발생하며 각도 재조정이 필요합니다.'
      },
      {
        q: '스캐너 뷰어에는 차체 위치가 정확히 뜨는데 로봇 팔이 엉뚱한 방향으로 이동하는 근본 원인은?',
        options: [
          '핸드-아이(Hand-Eye) 변환 행렬 오류',
          '프로젝터 Gamma 값 오류',
          '모니터 해상도 설정 오류',
          '스캐너 유리창 먼지'
        ],
        answer: 0,
        explanation: '스캐너 좌표계 {S}의 측정값을 로봇 베이스 좌표계 {B}로 번역하는 핸드-아이 변환 행렬에 오류가 있으면 로봇이 엉뚱한 방향으로 움직입니다.'
      },
      {
        q: '센서 캘리브레이션 시 체커보드를 평평한 정면 한 자세로만 촬영하면 실패하는 수학적 이유는?',
        options: [
          '깊이(Z축) 방향의 초점거리와 렌즈 왜곡 파라미터 방정식의 유일해(Solution)를 풀 수 없기 때문',
          '카메라 메모리가 부족해지기 때문',
          '체커보드가 검은색이라 스캔이 안 되기 때문',
          '로봇 속도가 너무 빠르기 때문'
        ],
        answer: 0,
        explanation: '평면 타깃을 기울기(Tilt)와 다양한 거리 변화 없이 한 평면으로만 찍으면 Z축 관련 내부/외부 파라미터 방정식의 유일해가 수렴하지 않습니다.'
      },
      {
        q: '로봇이 경미하게 충돌한 뒤 스캔 보정값은 정상인데 용접 위치가 1.5mm 어긋날 때 가장 먼저 점검해야 할 항목은?',
        options: [
          'TCP(Tool Center Point) 좌표계 틀어짐 및 툴 끝단 물리적 변형',
          'Windows 11 라이선스 상태',
          'AbeoSCAN 언어 설정',
          'PC 랙 모니터 밝기'
        ],
        answer: 0,
        explanation: '용접 건/툴 끝단이 충돌로 1mm만 휘어도 스캔 보정값과 무관하게 작업 위치가 어긋나므로 TCP 점검 및 재설정이 필수입니다.'
      },
      {
        q: '로봇 위치 오차 발생 시 4단계 실무 점검 루틴 중 가장 먼저(Step 1) 확인해야 하는 것은?',
        options: [
          '기계적 결합(볼트 풀림), 광학 렌즈 오염, TCP 물리적 변형 육안 점검',
          '전체 로봇 프로그램 삭제 후 재작성',
          'CAD 모델 파일 포맷 변환',
          '공장 바닥 베이스 볼트 해체'
        ],
        answer: 0,
        explanation: 'Step 1(기계·렌즈·TCP 물리 점검) → Step 2(명암비/외란광) → Step 3(재투영 RMS 오차) → Step 4(CAD 매칭 점수) 순으로 점검합니다.'
      }
    ]
  },
  // =========================================================================
  // 카테고리 3: 좌표계(CC/UF/TCP) & 로봇 실습 (COORD)
  // =========================================================================
  {
    id: 3,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '3. ATMC 공통좌표계 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['공통좌표계(CC)', 'CC Calib Board', 'CalcCC', 'MKUCRD'],
    overview: '여러 대의 로봇이 협업하는 라인에서 모든 로봇과 스캐너가 하나의 공통 좌표계(Common Coordinate, CC)를 기준으로 동작하도록 보드판(CC Calib Board) 세팅, AbeoScan `CalcCC`, 메인 프로그램 등록 및 티치펜던트 `MKUCRD` 생성까지 안내하는 매뉴얼입니다.',
    steps: [
      '1. 사전 조건 & 보드판 세팅: CC 작업 전 모든 로봇의 **로봇 스캐너 캘리브레이션이 완료**되어 있어야 합니다. CC Calib Board(Pitch=15, DimX=7, DimY=7)를 대차/라인 방향(TLH: 대차 후미 +T, 진행방향/좌측 +L)에 맞춰 배치하고 작업 중 절대 움직이지 않게 고정합니다.',
      '2. 촬영 각도·거리 세팅: 스캐너와 보드판 거리는 3Ds/3Du: 700mm, 3Dm: 1400mm로 맞추고, 정면 직각 시 프로젝터 빛 반사가 일어나므로 **약 15도 정도 기울여** 배치합니다.',
      '3. AbeoScan 세팅 및 CalcCC: `RobotController.exe` 연결 → `AbeoScan.exe` 실행 후 [Hand-eye calibration] 탭에서 `DataType: CalibBoard`, `TransferHandEyeConfig: EyeOnHand`, `Pitch: 15`, `DimX: 7`, `DimY: 7` 설정 → [LoadResult]로 해당 스캐너의 `CALIB_RESULT.json` 로드 → 보드판 스캔 후 정도 테스트(Apply)로 **`Mean_Err ≤ 0.1`** 확인 → **[CalcCC]** 클릭해 `C:\\LotusAPI\\bin\\CC\\CC1.json`으로 저장합니다.',
      '4. 메인 프로그램 등록: 메인 프로그램 MANUAL 모드 → CONFIG → HAND-EYE(비밀번호 1111) → 해당 스캐너 선택 → 좌측 하단 **CC** 영역 자물쇠 해제(1111) → Enable 활성화 → CC 폴더의 `CC1.json` 불러오기 → 자물쇠 잠금 → [OK] 저장.',
      '5. 터치 펜던트 MKUCRD 등록 및 검증: 펜던트 [명령입력 → 기타 → MKUCRD]로 CC 생성 프로그램(예: `MKUCRD 10, P121, P122, P123`)을 만들고, **베이스 좌표계** 기준 P변수방(P121~P123)에 Hand-eye CC 구역의 ORG, XX, XY 좌표를 기입한 뒤 실행합니다. 필요 시 로봇 베이스로부터 보드판 X, Y, Z 거리를 줄자로 실측해 Hand-eye 수치와 일치하는지 검증합니다.'
    ],
    learningPoints: [
      { title: 'CC Calib Board 설정값 (15 / 7 / 7)', detail: '중앙 교점(원점)을 제외하고 각 좌표 방향으로 점이 7개씩 있으며, `Pitch: 15, DimX: 7, DimY: 7`로 설정합니다. (일반 스캐너 캘리브레이션 보드 20/11/10과 혼동 주의!)' },
      { title: '왜 보드판을 약 15° 기울여 찍나요?', detail: '직각 정면으로 CC 보드판을 바라보면 프로젝터 빛 반사로 인해 키포인트 검출 실패(`Failed to detect calibration key points`) 로그가 발생하므로 약 15도 각도를 주어야 합니다.' },
      { title: '대차 L/T 방향성과 MKUCRD 베이스 기준', detail: '대차 기준 후미 방향이 +T(+X), 대차를 마주보고 좌측(운전자 앉은 방향 우측)이 +L(+Y)이며, 펜던트 P변수(ORG, XX, XY)는 반드시 **베이스 좌표계** 기준으로 기입해야 합니다.' }
    ],
    warnings: [
      '공통좌표계(CC) 작업이 진행되는 동안 모든 로봇이 스캔을 마칠 때까지 CC Calib Board는 절대 움직이지 않아야 합니다.',
      '펜던트 P변수 입력 시 좌표계 변경이 안 되면 [현재로봇포즈] 버튼을 먼저 누른 뒤 좌표계를 [베이스]로 변경하세요.'
    ],
    simLink: { label: '공통좌표계(CC) 시뮬레이터 실행', url: 'com_uf.html' },
    quiz: [
      {
        q: '공통좌표계(CC) 작업을 시작하기 전에 모든 참여 로봇에 반드시 선행 완료되어 있어야 하는 작업은?',
        options: [
          '로봇 스캐너 캘리브레이션',
          '윈도우 11 재인증',
          '툴 무게 자동등록 해제',
          '기존 티칭 프로그램 전체 삭제'
        ],
        answer: 0,
        explanation: '공통좌표계를 잡을 모든 로봇은 반드시 로봇 스캐너 캘리브레이션(`CALIB_RESULT.json`)이 완료되어 있어야 합니다.'
      },
      {
        q: '공통좌표계 캘리브레이션 보드(CC Calib Board)의 표준 Pitch, DimX, DimY 설정값은?',
        options: [
          'Pitch: 20, DimX: 11, DimY: 10',
          'Pitch: 15, DimX: 7, DimY: 7',
          'Pitch: 10, DimX: 5, DimY: 5',
          'Pitch: 30, DimX: 9, DimY: 9'
        ],
        answer: 1,
        explanation: 'CC 보드판은 중앙점을 제외한 각 축 방향 점 개수가 7개이며, Pitch=15, DimX=7, DimY=7로 설정합니다.'
      },
      {
        q: '스캐너가 CC Calib Board를 촬영할 때 정면 직각이 아닌 약 15도 정도 기울여서 배치하는 이유는?',
        options: [
          '보드판이 더 크게 보이게 하기 위해',
          '직각 정면 시 프로젝터 빛 반사가 일어나 데이터를 취득할 수 없기 때문',
          '로봇 관절 부하를 늘리기 위해',
          'Z축 길이를 2배로 늘리기 위해'
        ],
        answer: 1,
        explanation: '직각 정면으로 보드판을 바라보면 프로젝터 빛 반사 때문에 `Failed to detect calibration key points` 오류가 발생하므로 약 15도 기울여 촬영합니다.'
      },
      {
        q: 'AbeoScan에서 CC 보드판을 스캔한 뒤 정도 테스트(Accuracy test) 시 합격 기준(`Mean_Err`)과 저장 버튼은?',
        options: [
          'Mean_Err ≤ 0.5 / [SaveResult]',
          'Mean_Err ≤ 0.1 / [CalcCC] (json 저장)',
          'Mean_Err ≤ 1.0 / [TransferCalib]',
          'Mean_Err ≤ 0.01 / [CalcRef]'
        ],
        answer: 1,
        explanation: '정도 테스트 후 `Mean_Err` 0.1 이하를 확인한 뒤 [CalcCC] 버튼을 클릭해 `C:\\LotusAPI\\bin\\CC` 폴더에 `.json` 파일로 저장합니다.'
      },
      {
        q: 'AbeoScan [Hand-eye calibration] 탭에서 CC 작업 시 설정해야 하는 DataType과 TransferHandEyeConfig 값은?',
        options: [
          'DataType: CalibObject / TransferHandEyeConfig: FixedEye',
          'DataType: CalibBoard / TransferHandEyeConfig: EyeOnHand',
          'DataType: PointCloud / TransferHandEyeConfig: None',
          'DataType: Mesh / TransferHandEyeConfig: Base2CC'
        ],
        answer: 1,
        explanation: '공통좌표계 작업 시 `DataType`은 `CalibBoard`로, `TransferHandEyeConfig`는 `EyeOnHand`(공통좌표계에서는 FixedEye 미사용)로 설정합니다.'
      },
      {
        q: '로봇 티칭 펜던트에서 CC 생성 명령어 `MKUCRD`를 입력할 때 P변수방에 기입하는 좌표계 기준과 값은?',
        options: [
          '툴(TOOL) 좌표계 기준 / TCP 길이 값',
          '베이스(BASE) 좌표계 기준 / Hand-eye CC 구역의 ORG, XX, XY 좌표',
          '유저(UF) 좌표계 기준 / 스캐너 시리얼 번호',
          '엔코더(Enc) 기준 / 관절 각도 값'
        ],
        answer: 1,
        explanation: '펜던트 P변수방(예: P121, P122, P123)은 반드시 **베이스 좌표계**로 설정하고 Hand-eye CC 구역의 ORG, XX, XY 좌표를 동일하게 기입합니다.'
      },
      {
        q: '공통좌표계(CC) 작업이 잘 되었는지 현장에서 물리적으로 검증하는 방법은?',
        options: [
          '로봇 베이스로부터 CC 보드판의 실제 X, Y, Z 거리를 줄자로 측정해 Hand-eye CC 수치와 비교한다',
          'AbeoSCAN 창을 닫았다가 다시 연다',
          '로봇 전원을 껐다 켠다',
          '보드판을 90도 회전시킨 뒤 다시 스캔한다'
        ],
        answer: 0,
        explanation: 'CC 보드판의 원점(ORG) 위치를 로봇 베이스로부터 X, Y, Z 실측하여 Hand-eye CC 테이블의 수치와 일치하는지 검증합니다.'
      }
    ]
  },
  {
    id: 5,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '5. ATMC UF좌표계 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['유저좌표계(UF)', 'Model Center', 'MKUCRD', 'UF_RESET'],
    overview: '스캔되는 3D 모델의 중심 근처로 로봇 작업 좌표계 원점을 옮겨주는 유저 좌표계(User Frame, UF) 생성 절차(모델 Center 좌표 추출 → Hand-eye UF 기입 → `MKUCRD` 프로그램 제작 → 펜던트 P변수 입력 및 실행)를 다룬 매뉴얼입니다.',
    steps: [
      '1. 모델 Center 좌표 확인: `C:\\LotusAPI\\bin\\ATMC.App.MultiRobotBolting.Settings\\MODEL`(공정별 폴더)에 저장된 기준 모델 `.ply`를 AbeoScan으로 불러와 좌측 하단 **Info 창**의 `Center = [X, Y, Z]` 값을 확인합니다.',
      '2. Hand-eye UF 기입: 메인 프로그램 MANUAL 모드 → CONFIG → HAND-EYE → 적용할 스캐너 선택 → 좌측 상단 `UF Ref Frame`에 모델의 `Center` X, Y, Z를 `ORG`에 기입합니다. (XX·XY 우클릭 메뉴 `Rz+90`, `Rz-90`, `Rz+180` 등으로 베이스 기준 Rz 회전 각도 조정 가능)',
      '3. UF 생성 프로그램 제작 (2가지 방법): ① 펜던트에서 [명령입력 → 기타 → `MKUCRD`]로 REF UF(예: 5), WORK UF(예: 6)와 P변수(예: P111, P112, P113)를 넣고 `END`로 마무리하거나, ② `RobotController.exe` ONLINE 전환 → 상단 `</>` 아이콘 → [Reload all programs] → [Generate vision program]에서 `TYPE: UF_RESET`, `REF_UF`, `WORK_UF`, `P_VAR`, `V_VAR` 지정 후 프로그램 번호 부여 및 로봇 업로드(↑).',
      '4. 펜던트 P변수 기입 및 실행: 펜던트 포즈형 전역변수(P111, P112, P113)에 Hand-eye UF Ref Frame의 `ORG`, `XX`, `XY` 좌표를 **베이스 좌표계** 기준으로 순서대로 입력한 뒤, 방금 만든 UF 생성 프로그램을 1회 실행하면 UF 좌표계 생성이 완료됩니다.'
    ],
    learningPoints: [
      { title: 'UF 좌표계를 사용하는 이유', detail: '베이스 좌표계 원점이 아닌 "실제 스캔되는 부품(모델) 근처"로 좌표계 원점을 옮겨주면, 로봇 회전/오프셋 보정 시 직관적이고 정밀한 궤적 보정이 가능해집니다.' },
      { title: 'REF_UF와 WORK_UF의 역할', detail: '`MKUCRD 5, P111, P112, P113` (REF UF)과 `MKUCRD 6, P111, P112, P113` (WORK UF)을 함께 생성해 기준 UF와 실시간 비전 보정량이 덮어씌워지는 작업 UF를 분리 관리합니다.' },
      { title: 'XX/XY 우클릭 회전 기능', detail: 'Hand-eye 창에서 UF Ref Frame의 XX, XY 항목을 우클릭하면 `Rz+90`, `Rz-90`, `Rz+180` 등 베이스 좌표계 기준 Z축 회전 각도를 손쉽게 추가할 수 있습니다.' }
    ],
    warnings: [
      'Hand-eye와 펜던트 P변수(P111~P113)에 좌표를 입력한 뒤 반드시 UF 생성 프로그램(예: 1500번)을 1회 실행해야 제어기 내부에 UF가 생성됩니다.',
      'RobotController의 `Generate vision program`으로 만든 파일은 기본 이름이 `?.JOB`이므로 반드시 사용자 프로그램 번호(예: `1500`)로 변경한 뒤 로봇에 업로드(↑)하세요.'
    ],
    simLink: { label: 'UF6 3D 좌표계 시뮬레이터 실행', url: 'uf6_pc.html' },
    quiz: [
      {
        q: '비전 시스템에서 유저좌표계(UF)를 생성해 사용하는 가장 핵심적인 목적은?',
        options: [
          '스캐너의 카메라 해상도를 높이기 위해',
          '스캔되는 데이터(모델)의 근처로 로봇 작업 좌표계의 원점을 옮기기 위해',
          '로봇의 최대 이동 속도를 2배로 높이기 위해',
          'PLC 통신 포트를 변경하기 위해'
        ],
        answer: 1,
        explanation: '유저좌표계(UF)를 사용하면 스캔되는 데이터(모델 Center) 근처로 좌표계의 원점을 옮겨 정밀한 위치 보정을 수행할 수 있습니다.'
      },
      {
        q: 'AbeoScan에서 저장된 기준 모델 `.ply`를 불러온 뒤 UF 원점(ORG)으로 사용하기 위해 확인해야 하는 Info 창 항목은?',
        options: [
          'VertexCount',
          'Center = [x, y, z]',
          'Layer[Normal]',
          'Dims'
        ],
        answer: 1,
        explanation: '모델 `.ply`를 불러온 뒤 좌측 하단 Info 창에서 `Center`의 x, y, z 좌표를 확인하여 Hand-eye UF Ref Frame에 기입합니다.'
      },
      {
        q: 'Hand-eye의 UF Ref Frame 창에서 베이스 좌표계 기준 Rz 회전 각도를 추가하고 싶을 때 사용하는 조작법은?',
        options: [
          'ORG 행을 더블클릭한다',
          'XX와 XY를 우클릭해 Rz+90, Rz-90, Rz+180 등을 선택한다',
          'Enable 스위치를 껐다 켠다',
          'CC 창에서 값을 복사한다'
        ],
        answer: 1,
        explanation: 'UF Ref Frame에서 XX와 XY를 우클릭하면 `Rz+0`, `Rz+90`, `Rz-90`, `Rz+180` 등 Rz 각도 회전 메뉴가 나타납니다.'
      },
      {
        q: 'RobotController의 `Generate vision program` 기능을 이용해 UF 생성 프로그램을 만들 때 선택하는 TYPE은?',
        options: [
          'UF_RESET',
          'CALIB_INIT',
          'SCAN_START',
          'TCP_SET'
        ],
        answer: 0,
        explanation: 'FormGenProgram 창에서 `TYPE: UF_RESET`을 선택하고 `REF_UF`, `WORK_UF`, `P_VAR`, `V_VAR`를 입력해 프로그램을 생성합니다.'
      },
      {
        q: '로봇 티칭 펜던트에서 `MKUCRD` 명령어를 직접 추가할 때 진입하는 메뉴 경로는?',
        options: [
          '명령입력 → Flow제어 → END',
          '명령입력 → 기타 → MKUCRD',
          '시스템 → 사용자 환경 → MKUCRD',
          '프로젝트 → 백업 → MKUCRD'
        ],
        answer: 1,
        explanation: '펜던트에서 [명령입력] → [기타] → [MKUCRD]를 선택하고 P변수를 지정한 뒤 [Flow제어] → [END]로 마무리합니다.'
      },
      {
        q: '펜던트 P변수(예: P111, P112, P113)에 ORG, XX, XY 좌표를 기입할 때 선택해야 하는 좌표계와 기입 후 필수 동작은?',
        options: [
          '툴(TOOL) 좌표계 선택 후 기입 / 프로그램 삭제',
          '베이스(BASE) 좌표계 선택 후 기입 / UF 생성 프로그램을 1회 실행',
          '유저(UF) 좌표계 선택 후 기입 / PC 재부팅',
          '축각도 선택 후 기입 / 저장만 하고 실행하지 않음'
        ],
        answer: 1,
        explanation: 'P변수는 반드시 **베이스 좌표계**로 설정해 ORG, XX, XY를 순서대로 기입하고, 마지막으로 UF 생성 프로그램을 1회 실행해야 UF 생성이 완료됩니다.'
      }
    ]
  },
  {
    id: 7,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '7. ATMC TCP측정의 3가지 방법 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['TCP 측정 3법', '줄자 직접측정', '핀 3포즈', '스캐너 Center distance'],
    overview: '로봇 6축 플랜지 끝단에 장착된 스캐너 또는 툴의 TCP(Tool Center Point)를 구하는 3가지 실무 방법(① 줄자 직접 측정, ② 핀을 이용한 3포즈 이상 측정, ③ 스캐너 자체 Center distance를 이용한 비접촉 측정)과 현대로봇 TP 등록 경로를 다룬 매뉴얼입니다.',
    steps: [
      '1. 측정 방법 (1) 직접 측정: 로봇을 조깅해 X, Y, Z 축 방향을 먼저 확인한 뒤, 로봇 6축 끝단 원점에서 스캐너 전면 중앙까지의 X, Y, Z 거리를 줄자로 직접 측정합니다.',
      '2. 측정 방법 (2) 핀을 이용한 측정: 뾰족한 기준 핀과 툴 핀 끝이 맞닿도록 3가지 이상의 서로 다른 포즈를 티칭합니다. 이후 `RobotController`의 [로봇연결 → 포즈 +] 기능으로 각 포즈를 읽어온 뒤 `TCP` 계산 버튼(스패너/렌치 아이콘)으로 `TOOL = [X; Y; Z]` 값을 산출합니다. (로봇 자체 내장 TCP 기능보다 LotusAPI RobotController 사용이 정밀도가 더 우수함)',
      '3. 측정 방법 (3) 스캐너를 이용한 비접촉 측정: AbeoScan 촬영 화면의 정중앙 `+` 십자선에 고정 기준점을 맞추고 Log 창의 `Center distance`(예: 750mm)를 맞춰 1번 포즈를 잡습니다. 로봇을 다른 포즈로 크게 이동시킨 뒤 동일한 기준점이 `+` 중앙에 오고 `Center distance`도 유사하게 맞춘 포즈 3가지 이상을 `RobotController`로 읽어 TCP를 산출합니다.',
      '4. 터치 펜던트 등록: 현대로봇 TP `[시스템] → [3: 로봇 파라미터] → [1: 툴 데이터]` → 비어있는 T번호(예: T5) 선택 → `길이[mm]`의 X, Y, Z 성분 입력 → `[완료]` 클릭.'
    ],
    learningPoints: [
      { title: '스캐너 이용 비접촉 TCP 측정의 원리', detail: '물리적 핀을 맞대는 대신 "스캐너 화면 정중앙 `+` 십자선 + 일정한 Center distance"를 가상의 뾰족한 핀 끝점으로 삼아 3가지 이상 포즈에서 `RobotController`로 TCP를 역산하는 기법입니다. 줄자/손 측정보다 훨씬 정밀합니다.' },
      { title: 'LotusAPI RobotController TCP 기능 권장', detail: '로봇 제어기 내부의 기본 TCP 측정 기능보다 `RobotController`에서 포즈를 읽어 계산하는 방식이 정도(정밀도)가 더 좋습니다.' },
      { title: '포즈 간 오차 최소화', detail: '핀 방식이든 스캐너 방식이든 3가지 이상 포즈에서 기준점(또는 `+`와 거리)을 엄밀히 맞출수록 `t_stdev`가 줄어들어 정확한 TCP를 구할 수 있습니다.' }
    ],
    warnings: [
      'AbeoScan 및 RobotController 실행을 위해 PC에 USB 라이선스 동글키가 반드시 꽂혀 있어야 합니다.',
      '줄자로 직접 측정할 때는 반드시 직교 좌표계 조깅으로 X, Y, Z 방향 부호(+/-)를 먼저 확인한 뒤 거리를 재야 합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: '매뉴얼에서 소개하는 ATMC TCP(Tool Center Point) 측정의 3가지 방법에 해당하지 않는 것은?',
        options: [
          '줄자를 이용한 각 축(X, Y, Z) 직접 측정',
          '뾰족한 핀을 맞대어 3가지 이상 포즈로 측정',
          '스캐너 화면 중앙(+)과 Center distance를 이용한 비접촉 측정',
          '로봇 관절 모터 전류값을 이용한 자동 추정'
        ],
        answer: 3,
        explanation: 'ATMC TCP 측정 3가지 방법은 ① 직접 측정(줄자), ② 핀을 이용한 측정, ③ 스캐너를 이용한 측정입니다.'
      },
      {
        q: '핀 또는 스캐너를 이용해 TCP를 산출할 때 매뉴얼에서 권장하는 계산 도구는?',
        options: [
          '로봇 자체 내장 TCP 기능만 사용한다',
          'LotusAPI의 RobotController TCP 기능을 사용하는 것이 정도가 더 좋다',
          'Excel 수식으로 수동 계산한다',
          'AbeoJsonEditor로 직접 수정한다'
        ],
        answer: 1,
        explanation: '로봇 내부의 TCP 측정 기능보다 LotusAPI의 `RobotController`([로봇연결]-[포즈 +]-TCP 계산)를 사용하는 것이 정밀도가 더 좋습니다.'
      },
      {
        q: '스캐너를 이용한 TCP 측정법(방법 3)에서 3가지 이상의 포즈를 잡을 때 반드시 일치시켜야 하는 2가지 조건은?',
        options: [
          '촬영 화면의 `+` 정중앙에 기준점이 오도록 맞추고, Log 창의 `Center distance`를 유사하게 맞춘다',
          '스캐너 Gain을 10으로 맞추고 HDR을 켠다',
          '로봇 베이스 좌표계 Z값을 0으로 맞춘다',
          '항상 정면 직각으로만 3번 찍는다'
        ],
        answer: 0,
        explanation: '스캐너 촬영 화면의 `+` 정중앙에 기준점이 오도록 하고 Log 창의 `Center distance`를 기존 값과 거의 유사하게 맞춘 3가지 이상 포즈를 취득합니다.'
      },
      {
        q: '직접 측정법(방법 1)으로 TCP 거리를 잴 때 가장 먼저 확인해야 하는 것은?',
        options: [
          '해당 로봇을 조깅해 X, Y, Z 축 방향(+/-)을 먼저 확인한 후 6축 끝단 원점부터 스캐너 중앙까지 거리를 측정한다',
          '스캐너 펌웨어 버전을 확인한다',
          '카메라 노출 시간을 8333으로 맞춘다',
          'CC 보드판을 바닥에 고정한다'
        ],
        answer: 0,
        explanation: '조깅으로 플랜지/툴의 X, Y, Z 축 방향을 먼저 확인한 뒤 6축 끝단 원점으로부터 스캐너 중앙까지의 거리를 측정해야 부호 오류를 막을 수 있습니다.'
      },
      {
        q: '현대로봇 터치 펜던트에서 측정한 TCP(X, Y, Z) 값을 등록하는 메뉴 경로는?',
        options: [
          '[서비스] → [네트워크] → [HR-RPC]',
          '[터치 펜던트] → [시스템] → [3: 로봇 파라미터] → [1: 툴 데이터]',
          '[프로젝트] → [조건설정] → [툴 번호]',
          '[명령입력] → [기타] → [MKUCRD]'
        ],
        answer: 1,
        explanation: '[시스템] → [3: 로봇 파라미터] → [1: 툴 데이터]에서 비어 있는 T번호를 선택해 `길이[mm]`의 X, Y, Z 성분을 입력하고 [완료]를 누릅니다.'
      },
      {
        q: '핀 또는 스캐너를 이용한 TCP 측정 시 최소 몇 가지 이상의 서로 다른 포즈를 취득해야 하나요?',
        options: [
          '1가지 이상',
          '2가지 이상',
          '3가지 이상',
          '20가지 이상'
        ],
        answer: 2,
        explanation: '기준점(또는 `+`와 Center distance)에 맞춘 3가지 이상의 서로 다른 포즈를 RobotController로 읽어 TCP 값을 계산합니다.'
      }
    ]
  },
  {
    id: 11,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '11. 툴 무게 자동등록 매뉴얼.pptx',
    ext: 'PPTX',
    level: '로봇 설정',
    tags: ['툴 무게 자동등록', 'Yaskawa/Kawasaki/Doosan/Hyundai', '부하 추정', '콕핏 검증'],
    overview: '야스카와(Yaskawa), 가와사키(Kawasaki), 두산(Doosan), 현대(Hyundai) 4대 로봇 제조사별로 툴 무게(Payload)와 무게중심을 자동으로 계측하고 제어기에 등록·적용하는 방법을 정리한 매뉴얼입니다.',
    steps: [
      '1. 야스카와(Yaskawa): [로봇 → Tool]에서 번호 선택 → W(무게) 커서 위치 후 [Utility → W.GRAY.POS MEASURE] → `LOAD SETTING ON U-ARM: CONSIDER` 선택 → SERVO ON 및 데드맨을 누른 채 `FWD` 버튼 유지(HOME, U, B, T(1), T(2) 순 진행) → [REGISTER] → [YES] 쓰기 완료.',
      '2. 가와사키(Kawasaki): [메뉴 → 보조기능 → 04 기본설정 → 06 부하 자동 계측] → 툴 번호 선택 후 엔터 → 3,4,5,6축 동작범위 설정 → [예] 선택 시 1차 [사이클 스타트]로 동작범위 확인 → 2차 [사이클 스타트]로 실제 부하 자동 계측 → 종료 후 결과 확인.',
      '3. 두산(Doosan): [서보 온 → 로봇 → 툴 무게]에서 툴 등록(이름 변경) → 편집에서 [전체 동작] 또는 [4,5,6 부분동작] 선택 후 [자동계산] 실행(팔을 너무 멀리 뻗지 않은 자세 권장) → 홈 화면 우측 상단 [툴 설정]에서 기존 무게중심 초기화 후 새 툴 무게 불러오기 → **콕핏(Cockpit) 버튼만 눌렀을 때 로봇이 처지거나 들리지 않고 자세를 유지하면 정상!**',
      '4. 현대(Hyundai): [로봇 시스템 → 06. 자동 정수 설정 → 04. 부하추정] → 툴 번호 입력 → 데드맨을 누른 채 [확인운전]으로 동작 범위 확인 → 데드맨을 누른 채 [정상운전]으로 실제 측정(매우 빠르게 동작하므로 주의) → 기존 값과 비교 후 [종료]로 추정 데이터 적용 → [툴 데이터] 메뉴에서 최종 확인.'
    ],
    learningPoints: [
      { title: '4대 로봇 제조사별 핵심 메뉴', detail: '야스카와(`W.GRAY.POS MEASURE`), 가와사키(`04 기본설정 → 06 부하 자동 계측`), 두산(`툴 등록 → 무게측정 → 툴 설정 적용`), 현대(`06. 자동 정수 설정 → 04. 부하추정`) 경로를 구분해 익히세요.' },
      { title: '두산 로봇 콕핏(Cockpit) 정상 여부 판별법', detail: '툴 적용 완료 후 콕핏 버튼만 눌렀을 때 로봇 팔이 아래로 내려가거나 위로 올라가면 툴 무게 등록이 잘못된 것이며, 제자리 자세를 유지하면 정상 등록된 것입니다.' },
      { title: '현대 로봇 확인운전 vs 정상운전 안전 주의', detail: '현대로봇 부하추정 시 데드맨을 놓으면 측정이 즉시 중단되며, 특히 [정상운전] 단계는 확인운전과 달리 로봇이 매우 빠르게 움직이므로 간섭물 확인이 필수입니다.' }
    ],
    warnings: [
      '자동 계측 중 로봇 손목(4,5,6축)이 크게 움직이므로 주변 설비 및 케이블 간섭 여부를 반드시 사전 확인하세요.',
      '야스카와 로봇에서 간섭/꼬인 자세로 POSE를 잡을 수 없다는 오류가 나면 초기 시작 포즈를 다른 위치로 옮겨 재시도하세요.'
    ],
    simLink: null,
    quiz: [
      {
        q: '야스카와(Yaskawa) 로봇에서 툴 무게 자동측정(`W.GRAY.POS MEASURE`) 시 `LOAD SETTING ON U-ARM` 항목은 무엇으로 선택해야 하나요?',
        options: [
          'IGNORE',
          'CONSIDER',
          'DELETE',
          'MANUAL'
        ],
        answer: 1,
        explanation: '야스카와 툴 무게 측정 시 `LOAD SETTING ON U-ARM`은 `CONSIDER`로 선택한 뒤 SERVO ON과 데드맨을 활성화한 채 `FWD` 버튼을 계속 눌러 진행합니다.'
      },
      {
        q: '야스카와 로봇에서 `FWD` 버튼을 누르고 있을 때 정상 수행 중임을 알 수 있는 화면 상태 순서 표시는?',
        options: [
          'S1, S2, S3, S4',
          'HOME, U, B, T(1), T(2)',
          'X, Y, Z, Rx, Ry',
          'P1, P2, P3, END'
        ],
        answer: 1,
        explanation: 'FWD 버튼을 누르고 있으면 `HOME, U, B, T(1), T(2)` 상태가 하나씩 활성화되며 자동 측정이 진행됩니다.'
      },
      {
        q: '가와사키(Kawasaki) 로봇의 부하 자동 계측 메뉴 경로로 올바른 것은?',
        options: [
          '메뉴 → 보조기능 → 04 기본설정 → 06 부하 자동 계측',
          '시스템 → 06 자동 정수 설정 → 04 부하추정',
          '로봇 → Tool → Utility',
          '설정 → 툴 설정 → 자동계산'
        ],
        answer: 0,
        explanation: '가와사키 티치펜던트는 [메뉴] → [보조기능] → [04 기본설정] → [06 부하 자동 계측] 순서로 진입합니다.'
      },
      {
        q: '두산(Doosan) 로봇에서 툴 무게 자동계산 시 더 정확한 측정을 위해 권장하는 자세와 동작 설정은?',
        options: [
          '팔을 최대한 멀리 끝까지 뻗은 자세',
          '팔 자세를 너무 멀리 뻗지 않은 상태에서 [전체 동작] 또는 [4,5,6 부분동작] 선택',
          '서보 오프(Servo Off) 상태에서 손으로 흔들어 측정',
          '바닥에 툴을 내려놓은 상태'
        ],
        answer: 1,
        explanation: '두산 로봇은 주변 간섭물을 확인하고 로봇 팔을 너무 멀리 뻗지 않은 상태에서 [전체 동작] 또는 [4,5,6 부분동작]으로 자동계산을 실행하는 것이 정확합니다.'
      },
      {
        q: '두산 로봇에서 툴 무게 적용까지 마친 뒤, 콕핏(Cockpit) 버튼만 눌렀을 때 로봇이 아래로 처지거나 위로 올라간다면 무엇을 의미하나요?',
        options: [
          '중력 보상이 완벽하게 성공했다',
          '툴 무게 또는 무게중심 등록이 잘못되었다',
          '로봇 브레이크가 영구 고장났다',
          '서보 온이 정상 작동 중이다'
        ],
        answer: 1,
        explanation: '콕핏 버튼을 눌렀을 때 로봇이 자세를 그대로 유지해야 정상 등록된 것이며, 위아래로 움직이면 툴 무게 등록이 잘못된 것입니다.'
      },
      {
        q: '두산 로봇에서 새로운 툴을 등록한 뒤 우측 상단 [툴 설정] 화면에서 기존 무게중심 정보는 어떻게 처리해야 하나요?',
        options: [
          '기존 무게중심을 초기화한 뒤 방금 등록한 툴 무게 데이터를 불러와 설정한다',
          '기존 무게중심 값을 2배로 곱한다',
          '무게중심은 절대 건드리지 않는다',
          '모든 툴을 비활성화한다'
        ],
        answer: 0,
        explanation: '새로운 툴을 등록했으므로 기존 사용 중이던 툴의 무게중심 정보는 초기화한 뒤, 방금 등록한 툴을 불러와 적용해야 합니다.'
      },
      {
        q: '현대로봇(Hyundai)에서 툴 무게를 자동 등록하는 메뉴 경로는?',
        options: [
          '로봇 시스템 → 06. 자동 정수 설정 → 04. 부하추정',
          '시스템 → 제어 파라미터 → 네트워크',
          '보조기능 → 04 기본설정 → 06 부하 자동 계측',
          '파일 → 툴 데이터 → 백업'
        ],
        answer: 0,
        explanation: '현대로봇은 [로봇 시스템] → [06. 자동 정수 설정] → [04. 부하추정]에서 툴 번호를 입력해 측정을 진행합니다.'
      },
      {
        q: '현대로봇 부하추정 시 [확인운전]과 [정상운전]에 대한 주의사항으로 옳은 것은?',
        options: [
          '데드맨을 놓아도 측정이 계속 진행된다',
          '데드맨을 놓는 순간 측정이 중단되며, 정상운전은 확인운전과 달리 로봇이 매우 빠르게 동작하므로 주의해야 한다',
          '확인운전이 정상운전보다 10배 빠르다',
          '정상운전 후에는 종료 버튼을 누르지 않고 전원을 끈다'
        ],
        answer: 1,
        explanation: '데드맨을 놓으면 즉시 중단되므로 계속 누른 상태를 유지해야 하며, 특히 정상운전 시 로봇이 매우 빠르게 동작할 수 있으므로 주변 안전에 유의해야 합니다.'
      }
    ]
  },
  {
    id: 15,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '로봇 툴좌표계(TCP) 설정 및 현대로봇 실습 가이드.pdf',
    ext: 'PDF',
    level: '실습 가이드',
    tags: ['현대로봇 Hi5/Hi6', '4점법 구 원리', 'ISO 9409-1', '100mm 실측'],
    overview: '신입사원 교육용으로 TCP의 직관적 이해, 4점법(가상의 구 중심 찾기) 기하학 원리, ISO 9409-1 플랜지 핀 홀(+X) 및 삼지창 법칙, 현대로봇 Hi5/Hi6 Tool 5번 등록 절차, 100mm 조그 실측 및 Reorientation 검증(0.5mm 이내), 15개 채점 체크리스트를 담은 종합 실습 가이드입니다.',
    steps: [
      '1. 사전 준비: 6축 플랜지에 실습용 포인터 핀을 체결하고, 작업대에 고정 기준 핀(Reference Pin)을 클램프로 견고히 고정합니다. 조그 속도는 20% 이하(충돌 예방 10% 이하)로 제한합니다.',
      '2. 플랜지 축 판별 (ISO 9409-1): 기본(Rx=Ry=Rz=0) 상태에서 플랜지 수직 돌출 방향이 `+Z`, 플랜지 면에 단 하나 있는 위치결정 핀 홀(Dowel Pin Hole) 방향이 `+X`, 오른손 직교 법칙에 따른 90° 좌측이 `+Y`입니다. 회전 양(+) 방향은 오른손 엄지를 축(+)에 맞췄을 때 네 손가락이 감기는 반시계 방향입니다.',
      '3. Hi5 / Hi6 Tool 05 등록 (4점법): Hi5 `[설정→1:로봇 파라미터→1:툴 데이터]` 또는 Hi6 `[설정→3:로봇 파라미터→1:툴 데이터]`에서 Tool 05 선택 → [자동 보정/4점 티칭] → Pose 1(수직 접근, 0.1~0.2mm 접촉) 및 Pose 2~4(각도 차이 30° 이상 크게 변경) 티칭 → 계산 후 **잔차 오차 0.2mm 미만** 확인 및 저장 → 상단 좌표계 창에서 **TOOL 5 활성화**.',
      '4. Base 원점 & 100mm 단일 축 실측: Base 원점은 바닥 설치면 중심의 1축(선회축) 수직선과 2축(하부 암) 수평축의 교차점입니다(정면=+X, 좌측=+Y, 상방=+Z). [직교(Base)] 모드에서 +X로 100.0mm 이동해 실제 정면 10cm 전진을 줄자로 검증합니다.',
      '5. Reorientation(자세 전환) 최종 검증: 툴 핀 끝을 고정 핀 끝에 맞대고 좌표를 [TOOL] · Tool 5로 지정한 뒤, Rx/Ry/Rz 회전 조그 시 핀 끝이 고정점에서 **0.5mm 이내**로 제자리 회전하는지 확인합니다.'
    ],
    learningPoints: [
      { title: '4점법(4-Point Calibration)의 기하학적 원리', detail: '서로 다른 4개 이상의 자세에서 플랜지 중심 위치 `(Xi, Yi, Zi)`는 모두 기준 핀 끝점을 중심으로 반경 `R`이 일정한 **가상의 구(Sphere) 표면**에 놓이므로, 제어기가 최소자승법으로 구의 중심(TCP 오프셋)을 역산합니다.' },
      { title: '각도 편차 30° 이상 필수', detail: 'Pose 2~4 티칭 시 각도 차이가 너무 작으면(예: 5° 미만) 구의 중심 방정식 오차가 커지므로 반드시 30° 이상 크게 자세를 꺾어야 합니다.' },
      { title: '합격 판정 수치 (0.2mm / 0.5mm)', detail: '4점 티칭 계산 후 잔차 오차(Residual)는 **0.2mm 미만**이어야 하며, 최종 Reorientation 회전 검증 시 핀 끝 이탈은 **0.5mm 이내**여야 합격입니다.' }
    ],
    warnings: [
      'Tool 데이터 저장 후 상태바/좌표계 선택 창에서 반드시 활성 툴을 `Tool 5`로 전환해야 TOOL 조그 검증이 정상 동작합니다.',
      '티칭 중 충돌 방지를 위해 조그 속도는 10% 이하 저속으로 유지하고 비상정지 스위치를 항시 파지하세요.'
    ],
    simLink: null,
    quiz: [
      {
        q: '툴좌표계(TCP)를 설정해야 하는 가장 핵심적인 이유는?',
        options: [
          '로봇의 작업 속도를 2배로 높이기 위해',
          '도구 끝단을 기준으로 제자리 회전(Reorientation) 및 정확한 경로 티칭을 수행하기 위해',
          '로봇 제어기 메모리를 절약하기 위해',
          '플랜지 볼트 체결을 생략하기 위해'
        ],
        answer: 1,
        explanation: 'TCP가 미설정되면 플랜지 중심을 축으로 회전해 툴 끝이 크게 튕겨 나가지만, TCP 설정 후에는 도구 끝점을 중심으로 제자리 회전이 가능해집니다.'
      },
      {
        q: '4점법(4-Point Calibration) TCP 산출의 기하학적 기본 원리는?',
        options: [
          '4개의 점이 직선 위에 놓이는 원리',
          '4개 이상의 자세에서 플랜지 중심이 기준 핀 끝점을 중심으로 동일 반경 R을 갖는 가상의 구(Sphere) 표면에 위치한다는 원리',
          '4개 축의 모터 전류를 평균 내는 원리',
          '플랜지 면적을 4등분하는 원리'
        ],
        answer: 1,
        explanation: '플랜지 중심에서 TCP 끝까지의 물리적 거리 R이 일정하므로, 4개 이상의 자세는 기준 핀 끝점을 중심으로 하는 가상의 구 표면에 위치하며 최소자승법으로 중심을 찾습니다.'
      },
      {
        q: 'ISO 9409-1 국제표준에 따른 6축 플랜지 기본 좌표계(Rx=Ry=Rz=0)에서 +X축 방향은?',
        options: [
          '플랜지 면에서 도구가 뻗어나가는 수직 방향 (+Z)',
          '플랜지 중심에서 단 하나 뚫려 있는 위치결정 핀 홀(Dowel Pin Hole) 방향',
          '로봇 베이스 뒤쪽 방향',
          '케이블 하네스가 매달린 랜덤 방향'
        ],
        answer: 1,
        explanation: 'ISO 9409-1 기준 +Z는 플랜지 수직 돌출 방향, +X는 위치결정 핀 홀(Dowel Pin Hole) 방향, +Y는 오른손 법칙에 따른 90° 좌측 방향입니다.'
      },
      {
        q: '오른손 법칙에 따른 +Rz(Z축 양의 회전) 방향 결정 방법으로 옳은 것은?',
        options: [
          '오른손 엄지를 +Z축 방향으로 뻗었을 때 나머지 네 손가락이 감싸 쥐는 방향(반시계)',
          '왼손 엄지를 -Z축으로 향했을 때 시계 방향',
          '무조건 시계 방향',
          '로봇 1축이 회전하는 방향'
        ],
        answer: 0,
        explanation: '오른손 엄지를 해당 축의 +방향으로 뻗었을 때 나머지 네 손가락이 손바닥 쪽으로 감겨 들어가는 방향(반시계)이 양(+)의 회전입니다.'
      },
      {
        q: '현대로봇 6축 로봇의 직교(Base) 좌표계 절대 원점(0, 0, 0)의 물리적 위치는?',
        options: [
          '6축 플랜지 정중앙',
          '로봇 바닥 베이스 중심의 1축(선회축) 수직 회전 중심선과 2축(하부 암) 수평 회전축 중심선의 교차점',
          '티칭 펜던트 화면 중앙',
          '작업대 고정 기준 핀 끝점'
        ],
        answer: 1,
        explanation: '베이스 원점은 1축 수직 회전 중심선과 2축 수평 회전축 중심선이 만나는 기구학적 교차점입니다.'
      },
      {
        q: '4점법 티칭 시 Pose 2~4 자세를 잡을 때 올바른 각도 편차 조건과 연산 후 잔차 오차(Residual) 합격 기준은?',
        options: [
          '각도 차이 5° 미만 / 잔차 2.0mm 이내',
          '각도 차이 30° 이상 크게 변경 / 잔차 0.2mm 미만',
          '각도 차이 0° 동일 자세 / 잔차 1.0mm 이내',
          '각도 차이 180° / 잔차 5.0mm 이내'
        ],
        answer: 1,
        explanation: 'Pose 2~4는 동서남북 방향으로 30° 이상 충분한 각도 편차를 주어야 하며, 계산된 잔차 오차는 0.2mm 미만이어야 합니다.'
      },
      {
        q: '툴 데이터 저장 후 조그 테스트 전에 상단 상태바/좌표계 선택 창에서 반드시 확인해야 하는 사항은?',
        options: [
          '활성화된 툴 번호가 등록한 `Tool 5`로 전환되어 있는지 확인',
          '로봇 속도가 100%인지 확인',
          '외부 PLC 출력이 ON인지 확인',
          'Tool 번호를 T0으로 초기화'
        ],
        answer: 0,
        explanation: '툴 데이터를 저장했더라도 활성 툴을 `Tool 5`로 전환하지 않으면 이전 툴 또는 플랜지 기준으로 동작합니다.'
      },
      {
        q: '베이스(Base) 좌표계 모드에서 현재 X=1000.0일 때 +X 조그 키로 100mm 이동하면 실제 로봇은 어떻게 움직이나요?',
        options: [
          'X가 1100.0으로 증가하며 로봇 정면 방향으로 10cm 전진한다',
          'X가 900.0으로 감소하며 로봇 뒤로 후진한다',
          'Z가 100mm 상승한다',
          '로봇 좌측으로 10cm 이동한다'
        ],
        answer: 0,
        explanation: '현대/파낙/야스카와 기본 베이스 좌표계는 정면=+X, 좌측=+Y, 상방=+Z이므로 +X로 100mm 이동 시 X=1100.0이 되며 정면으로 10cm 전진합니다.'
      },
      {
        q: 'Reorientation(자세 전환) 최종 검증 시 합격 판정 기준은?',
        options: [
          '로봇 팔 자세를 크게 변경해도 툴 핀 끝이 고정 핀 끝점에서 0.5mm 이내로 유지된다',
          '툴 핀 끝이 반경 10mm 원을 그리며 회전한다',
          '로봇이 비상정지 알람을 띄운다',
          '조그 속도를 100%로 올려도 소음이 없다'
        ],
        answer: 0,
        explanation: 'Tool 5 회전 조그(Rx, Ry, Rz) 시 툴 핀 끝이 고정 기준점에서 이탈하지 않고 0.5mm 이내에서 제자리 회전하면 합격입니다.'
      }
    ]
  },
  {
    id: 16,
    cat: 'COORD',
    catName: '3. 좌표계(CC/UF/TCP) & 로봇 실습',
    file: '위치보정에 대한 전반적인 작업 안내.docx',
    ext: 'DOCX',
    level: '전체 흐름 (참고)',
    tags: ['DOCX 문서', '위치보정 프로세스', '전체 워크플로우', '보류'],
    overview: '3D 비전 기반 로봇 위치보정 프로젝트의 착수부터 셋업, 캘리브레이션, 시운전, 양산 이관까지 전 과정을 요약한 DOCX 안내 문서입니다. (현재 PDF/PPTX 우선 작업 기준에 따라 퀴즈 보류 대상)',
    steps: [
      '1단계(기구/네트워크): 스캐너 설치 거리(WD) 확보 및 PC-로봇-PLC 간 IP 대역 분리를 완료합니다.',
      '2단계(좌표계/캘리브레이션): TCP 등록 → 스캐너 내부 보정 → Hand-Eye 캘리브레이션을 순차 진행합니다.',
      '3단계(모델 등록/시운전): 기준 모델(REF) 등록 후 반복 정밀도 테스트 및 예외(NG) 처리 인터락을 검증합니다.'
    ],
    warnings: [
      'DOCX 원본 파일입니다. 우측 [다운로드] 버튼을 눌러 Word 또는 한글 뷰어에서 확인하세요.'
    ],
    simLink: null,
    deferred: true,
    quiz: []
  },

  // =========================================================================
  // 카테고리 4: 모델 등록 & 트러블슈팅/기타 (MODEL)
  // =========================================================================
  {
    id: 4,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: '4. ATMC 모델등록 매뉴얼.pdf',
    ext: 'PDF',
    level: '핵심 실무',
    tags: ['3D 모델 등록', 'FormMakeModel', 'PointCloudsmallcluster', 'Reset matrix'],
    overview: '현장 비전 프로그램(`ATMC.App.FoamFiller` 등)에서 스캔 기준이 될 3D 마스터 모델을 촬영·저장(`install_model_base.ply`)하고, AbeoScan의 `PointCloudsmallcluster` 노이즈 필터와 영역 삭제, `Reset matrix` 검증을 거쳐 CONFIG [MODELS]에 최종 등록하는 매뉴얼입니다.',
    steps: [
      '1. 촬영 대상 확인: 이동/특징점이 뚜렷하고 **3면이 드러나는 부분**을 모델로 선정하며, 스캐너와 대상 거리는 약 **700mm**로 맞춥니다. AbeoScan에서 사전 테스트 스캔으로 모델 품질을 확인한 뒤 스캐너 연결을 해제([Connect] → Yes 또는 종료)합니다.',
      '2. 메인 프로그램 연결 및 초기화: `C:\\LotusAPI\\bin\\ATMC.App.FoamFiller.exe`(공정별 프로그램) 실행 → 하단 `S0` 빨간색이면 더블클릭 → `Abeo3DScanner Select`에서 IP 확인 후 [Refresh]→[OK]로 초록색 연결 확인 → [AUTO] 더블클릭(1111) → [MANUAL] 전환.',
      '3. Hand-eye 설정 확인/초기화: [CONFIG] → [HAND-EYE](안 보이면 GENERAL의 `ShowHandEyeConfigPanel: True`) → [INSTALL(S1)] 선택 → `EYE on HAND` 자물쇠 해제(1111) 후 `calib_result.json` 로드 및 잠금 → 기존 `Eye correction matrix`가 있다면 자물쇠 해제 후 `C(Refresh)`로 초기화 → `UF Ref Frame`도 [Reset] 초기화 → [OK] 저장 후 재진입 확인.',
      '4. 모델 촬영 (`FormMakeModel`): 메인 화면에서 **`[Ctrl] + [1.INSTALL]`**(또는 `MODEL` 버튼)을 더블클릭해 `FormMakeModel` 창을 엽니다 → `[SCAN0]`/`[SCAN1]` 클릭해 스캔 → `[SAVE]` 클릭 후 `C:\\LotusAPI\\bin\\ATMC.App.FoamFiller.settings\\Models\\TEST` 경로에 저장합니다.',
      '5. 노이즈 제거 및 크롭 (AbeoScan): 저장된 `install_model_base.ply`를 AbeoScan에서 엽니다 → [PointCloudsmallcluster] 아이콘 클릭 후 `Radius: 0.5`(작을수록 노이즈 많이 삭제), `MinClusterSize: 10000`(높을수록 노이즈 많이 삭제) 적용([Apply]) → `[Ctrl] + 마우스 우클릭 드래그`로 범위 지정 후 `D`/`Del`로 배경 지그를 삭제해 핵심 형상만 남깁니다.',
      '6. 행렬 확인 및 최종 등록: 편집 중 `[Ctrl]+좌클릭`으로 실수 회전했다면 좌측 하단 Info 창 Matrix가 단위행렬이 아니게 되므로 반드시 **[Reset matrix]**를 눌러 단위행렬로 복원합니다 → [Save] 저장 → 메인 프로그램 `[CONFIG] → [MODELS] → [저장(디스켓) 아이콘]`으로 모델을 불러와 정상 등록 여부를 확인합니다.'
    ],
    learningPoints: [
      { title: 'FormMakeModel 호출 단축키', detail: '현장 프로그램 메인 화면에서 그냥 클릭이 아니라 **`[Ctrl] + [1.INSTALL]`(또는 `MODEL`) 더블클릭**을 해야 모델 촬영 창(`FormMakeModel`)이 열립니다.' },
      { title: 'PointCloudsmallcluster 필터 원리', detail: '`Radius`(기본 0.5)는 작을수록, `MinClusterSize`(기본 10000)는 높을수록 밀집도가 낮은 작은 노이즈 군집을 더 많이 제거합니다.' },
      { title: '편집 중 [Ctrl]+좌클릭 주의 & Reset matrix', detail: '영역 선택은 `[Ctrl]+우클릭 드래그`인데 실수로 `[Ctrl]+좌클릭`을 하면 모델 좌표 행렬이 돌아가 버립니다. 저장 전 반드시 Info 창 Matrix가 단위행렬인지 확인하고, 틀어졌다면 `[Reset matrix]`를 클릭해야 합니다.' }
    ],
    warnings: [
      'AbeoScan에서 테스트 스캔을 마친 뒤에는 반드시 스캐너 연결을 해제하거나 AbeoScan을 종료해야 메인 프로그램(`S0`/`S1`)에서 스캐너가 연결됩니다.',
      '신규 캘리브레이션 후 모델을 등록할 때는 이전 설비에 남아 있던 `Eye correction matrix`와 `UF Ref Frame` 값을 초기화(`Refresh` / `Reset`)한 뒤 진행하세요.'
    ],
    simLink: { label: 'ICP 3D 정합 시뮬레이터 실행', url: 'icp_pc.html' },
    quiz: [
      {
        q: '3D 모델 등록 시 촬영 대상을 선정할 때 정합 정밀도에 가장 유리한 형상 조건과 권장 거리는?',
        options: [
          '특징이 없는 평면 1개 / 200mm',
          '3면이 드러나고 특징점이 뚜렷한 부분 / 약 700mm',
          '움직이는 컨베이어 벨트 / 3000mm',
          '완전한 구형 물체 / 100mm'
        ],
        answer: 1,
        explanation: '3면이 드러나고 특징점을 활용할 수 있는 부분을 모델로 설정하는 것이 6자유도 ICP 매칭에 유리하며, 거리는 약 700mm를 맞춥니다.'
      },
      {
        q: '메인 프로그램 좌측 하단 상태바에서 `S0` 버튼이 빨간색일 때 스캐너를 연결하기 위한 조작법은?',
        options: [
          'S0 버튼을 더블클릭해 Abeo3DScanner Select 창에서 IP 확인 후 [Refresh] → [OK]',
          'Ctrl+Alt+Delete를 누른다',
          'AUTO 버튼을 누른다',
          'DB 탭에서 초기화한다'
        ],
        answer: 0,
        explanation: '빨간색은 연결 해제, 초록색은 연결 완료 상태이며 `S0` 더블클릭 후 Scanner Select 창에서 Refresh→OK로 재연결합니다.'
      },
      {
        q: '메인 프로그램 메인 화면에서 모델 촬영 전용 창(`FormMakeModel`)을 여는 올바른 조작법은?',
        options: [
          '[Ctrl]을 누른 상태로 [1.INSTALL](또는 MODEL) 버튼을 더블클릭',
          '[CONFIG] → [GENERAL] 클릭',
          '[LOG] 창 우클릭',
          '[HOME] 아이콘 3회 클릭'
        ],
        answer: 0,
        explanation: '`[Ctrl] + [1.INSTALL]`(타 프로그램은 `MODEL`) 버튼을 더블클릭하면 `FormMakeModel` 창이 열립니다.'
      },
      {
        q: 'AbeoScan에서 `PointCloudsmallcluster`로 모델 주변 노이즈를 제거할 때 기본 `Radius`와 `MinClusterSize` 설정 및 특성으로 옳은 것은?',
        options: [
          'Radius: 0.5 (작을수록 노이즈 많이 삭제) / MinClusterSize: 10000 (높을수록 노이즈 많이 삭제)',
          'Radius: 500 (클수록 많이 삭제) / MinClusterSize: 1 (작을수록 많이 삭제)',
          '둘 다 0으로 설정해야 삭제된다',
          '이 기능은 색깔만 바꾸는 기능이다'
        ],
        answer: 0,
        explanation: 'Radius는 기본 0.5(작을수록 노이즈 많이 삭제), MinClusterSize는 기본 10000(높을수록 밀집도 낮은 군집 많이 삭제)을 사용합니다.'
      },
      {
        q: 'AbeoScan에서 모델의 불필요한 배경을 지우기 위해 영역을 지정하고 삭제하는 단축키는?',
        options: [
          '[Ctrl] + 마우스 좌클릭 드래그 → [Enter]',
          '[Ctrl] + 마우스 우클릭 드래그 → [D] 또는 [Del]',
          '[Shift] + 마우스 휠 → [Space]',
          '[Alt] + 좌클릭 → [ESC]'
        ],
        answer: 1,
        explanation: '영역 선택은 `[Ctrl] + 마우스 우클릭 드래그` 후 `[D]` 또는 `[Del]` 키로 삭제합니다.'
      },
      {
        q: '모델 편집 중 실수로 `[Ctrl] + 좌클릭`을 눌러 모델의 위치/회전 행렬(Matrix)이 틀어졌을 때 복구하는 버튼은?',
        options: [
          'Reset matrix',
          'Combine',
          'Export',
          'TransferCalib'
        ],
        answer: 0,
        explanation: 'Info 창 Matrix가 단위행렬이 아닌 값으로 변했다면 반드시 `[Reset matrix]` 버튼을 클릭해 단위행렬로 복원한 뒤 저장해야 합니다.'
      },
      {
        q: '모델 보정 및 저장 완료 후 메인 프로그램에서 해당 모델이 정상 등록되었는지 조회·저장하는 경로는?',
        options: [
          '[CONFIG] → [MODELS] → [저장(디스켓) 아이콘]',
          '[LOG] → [Clear]',
          '[STATS] → [Export]',
          '[HAND-EYE] → [Calib]'
        ],
        answer: 0,
        explanation: '메인 프로그램 `[CONFIG] → [MODELS]` 탭에서 디스켓 아이콘을 통해 모델 폴더를 불러와 정상 저장·로드 여부를 확인합니다.'
      }
    ]
  },
  {
    id: 14,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: '20250502 - 3D 모델 등록.hwpx',
    ext: 'HWPX',
    level: '실무 양식 (참고)',
    tags: ['한글 문서(HWPX)', '모델 등록 절차', '현장 기록서', '보류'],
    overview: '2025년 5월 개정된 3D 모델 등록 세부 절차 및 현장 적용 파라미터 기록용 한글(HWPX) 문서입니다. (현재 PDF/PPTX 우선 작업 기준에 따라 퀴즈 보류 대상)',
    steps: [
      '우측 [다운로드] 버튼을 클릭하여 HWPX 원본 파일을 PC에 저장합니다.',
      '한컴오피스 한글에서 문서를 열어 차종별 모델 등록 파라미터 및 검증 체크리스트를 확인합니다.'
    ],
    warnings: [
      '웹 브라우저에서는 HWPX 파일이 직접 열리지 않으므로 다운로드 후 한컴오피스 한글로 열람해 주세요.'
    ],
    simLink: { label: 'ICP 정합 시뮬레이터 실행', url: 'icp_pc.html' },
    deferred: true,
    quiz: []
  },
  {
    id: 18,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: 'AbeoSCAN 매뉴얼_3.6_260521.pdf',
    ext: 'PDF',
    level: '소프트웨어 매뉴얼',
    tags: ['AbeoSCAN 3.6', '스캔 파라미터', 'ICP/PatternMatcher', 'Distance Map'],
    overview: 'AbeoSCAN 3.6 기준 화면 구성, 3D 뷰어 단축키, 스캔 속성(PS88 vs PS88_SP, 60Hz 노출 주기 8333/16666μs, Gamma/Gain, HDR CustomConfig), ICP 매칭, 3D PatternMatcher 및 Distance Map 오차 분석 기능을 총망라한 소프트웨어 공식 매뉴얼입니다.',
    steps: [
      '1. 버전 특징 및 화면 구성: v3.5에서 CPU 디코딩 속도 3배 향상(240ms→80ms) 및 SNR 신호 구분(-10dB 노이즈, 20dB 양호)이 개선되었고, v3.6에서 `Ps88_SP`/`Ps88_SP_RGB` 슈퍼픽셀 SNR이 개선되었습니다. 화면은 Preview, Scene, Info, Log, Debug(Normal/Depth/Shade), Pointcloud 창으로 구성됩니다.',
      '2. 핵심 단축키 숙지: 더블클릭(객체 선택), 휠 드래그(전체 이동), 좌클릭(전체 회전), `Ctrl+휠/좌클릭`(선택 객체만 이동/회전), `Ctrl+우클릭`(영역 선택), `D/Del`(삭제), `U`(삭제 취소), `C`(선택 객체 센터뷰).',
      '3. 스캔 속성(Setting Properties): `ElectricFrequency`(한국 60Hz, 인도 50Hz), `CodingStrategy`(`PS88`: 고정밀/작은 물체, `PS88_SP`: 고속/1/4 디테일/큰 물체·검은색 인식 유리, `RGB`: 색상 구분 필요 시), `ScanExposure`는 60Hz 형광등 플리커 방지를 위해 1/60s(16,666μs) 또는 반주기 **8,333μs** 배수를 권장합니다. (권장: Gamma 0.7, Gain 1, LightIntensity 10, Detail 0.950, SmoothLevel 3). 조정 후 `[Apply]`(임시), `[Upload]`(스캐너 저장), `[SAVE]`(파일 저장).',
      '4. HDR CustomConfig: `[Exposure, Gamma, Gain, LightIntensity]` 배열을 여러 스텝으로 지정해 다색상·명암차 큰 물체를 1회 스캔으로 결합 촬영합니다. (예: `[8333,1.0,1,10], [16666,1.0,1,30]`).',
      '5. ICP 매칭 [Align]: 기준 대상 클릭 → `[SetDest]` → 이동할 스캔본 클릭 → `[Align]`. `Metric`은 `PointToPoint`(점-점) 또는 `PointToPlane`(점-접평면)을 선택하며, `Rough Matching`(LowCut 0.5, HighCut 0.01) 후 `Detail Matching`(LowCut 0.1, HighCut 0.5)으로 정밀 정합합니다.',
      '6. 3D PatternMatcher & Distance Map: PatternMatcher는 `[설정 조정 → Train → Search]` 순으로 진행(`SampleRadius` 보통 2, `SearchLevel` 권장 4, `ResultCount` 검출 개수). Distance Map(`Tools → Pointcloud tools → ComputeDistanceMap`)은 0(초록색)에 가까울수록 마스터와 일치하며 Red/Blue로 변형 방향과 크기를 시각화합니다.'
    ],
    learningPoints: [
      { title: '노출 시간(ScanExposure)과 60Hz 주기의 관계', detail: '한국 전원 주파수 60Hz의 1주기는 `1/60 = 16,666μs`입니다. 형광등 깜빡임 노이즈를 막기 위해 `8,333μs`(반주기) 또는 `16,666μs` 배수를 사용하며 `AutoPatternPeriod` 체크 시 자동 보정됩니다.' },
      { title: 'PS88 vs PS88_SP 선택 기준', detail: '`PS88`은 1.8s로 느리지만 높은 디테일(작은 물체 적합), `PS88_SP`는 1.56s로 빠르고 1/4 디테일(큰 물체 및 **검은색 소재** 인식에 유리)입니다.' },
      { title: 'Apply vs Upload vs Save의 차이', detail: '`Apply`는 1회성 임시 적용(저장 안 됨), `Upload`는 스캐너 하드웨어에 실제 업로드/적용, 상단 `SAVE`는 설정값을 파일로 저장하는 버튼입니다.' }
    ],
    warnings: [
      'LightIntensity를 과도하게 높이면 스캐너 열 과부하 확률이 높아지므로 보통 10 수준을 권장합니다.',
      'Gain을 높이면 영상이 밝아지지만 노이즈도 함께 증가하며, Voxel Sampling은 데이터 크기를 줄이지만 물체 표현력이 감소합니다.'
    ],
    simLink: null,
    quiz: [
      {
        q: 'AbeoSCAN 3D 뷰어에서 실수로 삭제한 포인트 클라우드 영역을 되돌리는(삭제 취소) 단축키는?',
        options: [
          '[ D ]',
          '[ U ]',
          '[ C ]',
          '[ Ctrl ] + 좌클릭'
        ],
        answer: 1,
        explanation: '`D` 또는 `Delete`는 선택 영역 삭제, `U`는 삭제 취소(Undelete), `C`는 선택한 포인트 클라우드의 센터뷰로 이동하는 단축키입니다.'
      },
      {
        q: '한국(60Hz) 환경에서 형광등 간섭 노이즈를 방지하기 위한 권장 `ScanExposure`(노출 시간) 값은?',
        options: [
          '1000μs',
          '8333μs 또는 16666μs (60Hz 주기 배율)',
          '50000μs 고정',
          '12345μs'
        ],
        answer: 1,
        explanation: '60Hz 1주기가 16,666μs이므로 형광등 플리커 노이즈 방지를 위해 8333μs 또는 16666μs 등 주기 배율에 맞춰 설정합니다.'
      },
      {
        q: 'AbeoSCAN의 `CodingStrategy` 중 큰 물체나 검은색 소재를 빠르게 스캔할 때 유리한 모드는?',
        options: [
          'PS88',
          'PS88_SP',
          'PointToPoint',
          'Uniform Sampling'
        ],
        answer: 1,
        explanation: 'PS88은 작은 물체 고정밀(Slow)에 적합하고, PS88_SP는 Faster Scan으로 큰 물체 및 검은색 소재 인식에 유리합니다.'
      },
      {
        q: 'Setting Properties 창에서 파라미터를 수정한 뒤 스캐너 하드웨어에 실제로 영구 적용하려면 어떤 버튼을 눌러야 하나요?',
        options: [
          '[Apply]만 누르면 스캐너에 영구 저장된다',
          '[Upload]를 눌러야 실제 스캐너에 업로드되어 적용된다',
          '[Debug] 버튼을 누른다',
          '[Clear Log]를 누른다'
        ],
        answer: 1,
        explanation: '[Apply]는 1회성 임시 적용이며 스캐너에 저장되지 않습니다. 실제 적용을 위해서는 [Upload]를 눌러야 합니다.'
      },
      {
        q: 'AbeoSCAN에서 [ICP 매칭]을 수행할 때 올바른 작업 순서는?',
        options: [
          '목적 대상물(기준) 클릭 → [SetDest] → 매칭할 대상 클릭 → [Align]',
          '매칭할 대상 클릭 → [Align] → [SetDest]',
          '[Train] → [Search] → [SetDest]',
          '[Save All] → [Reset Matrix]'
        ],
        answer: 0,
        explanation: 'ICP 기준이 될 목적 대상물을 클릭해 [SetDest]로 지정한 뒤, 이동/정합할 대상을 클릭하고 [Align]을 누릅니다.'
      },
      {
        q: 'ICP 매칭 파라미터 중 `LowCutRate = 0.5, HighCutRate = 0.01` 조합과 `LowCutRate = 0.1, HighCutRate = 0.5` 조합의 용도 차이는?',
        options: [
          '전자는 대략적 매칭(Rough Matching), 후자는 정밀 매칭(Detail Matching)',
          '전자는 정밀 매칭, 후자는 대략적 매칭',
          '둘 다 3D 스캐너 밝기 조절용이다',
          '전자는 2D 이미지 저장용, 후자는 펌웨어 업데이트용이다'
        ],
        answer: 0,
        explanation: 'LowCutRate=0.5, HighCutRate=0.01은 Rough Matching(초기 큰 오차 정렬)에, LowCutRate=0.1, HighCutRate=0.5는 Detail Matching(정밀 정합)에 사용됩니다.'
      },
      {
        q: '3D PatternMatcher에서 패턴 매칭을 실행하는 올바른 버튼 순서와 `SearchLevel` 기본 권장값은?',
        options: [
          'Search → Train / SearchLevel 10',
          '설정값 조정 → [Train] → [Search] / SearchLevel 기본 4 권장',
          'Apply → Upload / SearchLevel 1',
          'SetDest → Align / SearchLevel 0'
        ],
        answer: 1,
        explanation: '3D PatternMatcher는 설정값 조정 후 반드시 [Train](학습) → [Search](탐색) 순으로 진행하며, SearchLevel은 기본 적정값 4를 권장합니다.'
      },
      {
        q: 'Distance Map(`ComputeDistanceMap`) 실행 결과 디버그 창에서 마스터 데이터와 가장 잘 일치하는(오차 0에 가까운) 영역은 무슨 색으로 표시되나요?',
        options: [
          '빨간색 (Red)',
          '초록색 (Green)',
          '검은색 (Black)',
          '보라색 (Purple)'
        ],
        answer: 1,
        explanation: 'Distance Map은 측정값이 0에 가까울수록 초록색(Green)으로 표시되며, 양/음의 오차 방향과 크기는 Red/Blue로 시각화됩니다.'
      }
    ]
  },
  {
    id: 19,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: 'ATM_3D세팅_메뉴얼_통합.pdf',
    ext: 'PDF',
    level: '종합 가이드 (보류)',
    tags: ['통합 매뉴얼', '전체 세팅', '시운전 가이드', '보류'],
    overview: 'ATM 3D 비전 시스템의 하드웨어 결선, 소프트웨어 설치, 통신 설정, 캘리브레이션, 시운전까지 한 권으로 묶은 통합 매뉴얼입니다. (분리된 개별 PDF로 보강·퀴즈가 제공되므로 본 통합본은 퀴즈 보류 대상)',
    steps: [
      '시스템 전체 구성도 및 입출력 신호(PLC 핸드셰이크 비트맵) 표준 사양을 확인합니다.',
      '단계별 셋업 목차에 따라 초기 설치부터 양산 모드 전환까지 빠짐없이 점검합니다.'
    ],
    warnings: [
      '분량이 방대한 통합본이므로 좌측 검색창이나 PDF 내 목차 검색(Ctrl+F)을 활용해 필요한 파트를 빠르게 찾아보세요.'
    ],
    simLink: null,
    deferred: true,
    quiz: []
  },
  {
    id: 20,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: 'atm_error.pdf',
    ext: 'PDF',
    level: '트러블슈팅 필수',
    tags: ['트러블슈팅', '스캐너 끊김 로그', 'PC CP 재부팅', 'Fitness/Overlap NG'],
    overview: '현장 가동 중 발생하는 스캐너 연결 끊김(LED/로그/1.0Gbps 네트워크 점검 및 CP 전원 20초 재부팅), PC SSD/HDD(RAID) 관리, 그리고 3D 정합 NG 판정(Fitness·Overlap·Shift Limit 초과)의 원인 분석과 즉시 복구 절차를 다룬 필수 트러블슈팅 매뉴얼입니다.',
    steps: [
      '1. 현장 프로그램 연결 상태 파악: 하단 알림창이 **녹색**이면 정상, **빨간색**이면 연결 끊김입니다. 일시 끊김 시 해당 하드웨어(스캐너/로봇/PLC) 아이콘을 **`Ctrl + 더블클릭`**하여 우선 재연결합니다.',
      '2. 스캐너 CP 전원 재부팅: 재연결이 안 되면 PC 랙 후면부를 열어 스캐너 전원부 **CP(Circuit Protector)를 20초 이상 내렸다가** 다시 올립니다. (재부팅 후 스캔센서에서 초록색 프로젝터가 조사되면 부팅 완료)',
      '3. 로그(Log) 원인 판별: ① `"Received time out!"` + `[EVENT_DISCONNECTED]` 없음 → 일시적 keep-alive 지연(통신 살아있음), ② 프로젝터만 `[EVENT_DISCONNECTED]`(카메라는 정상) → 프로젝터 펌웨어 충돌 또는 내부 케이블 손상, ③ `"The camera device has been physically removed"` → **99% LAN 케이블/RJ45 잭 불량**, 1% LAN 카드/Windows 문제.',
      '4. 네트워크 속도 점검: Windows [네트워크 및 인터넷 설정 → 어댑터]에서 스캐너 링크 속도가 **`1.0Gbps`**인지 확인합니다. 100Mbps 등으로 떨어지면 데이터 취득 불량이므로 LAN 케이블을 교체합니다. (AbeoSCAN 테스트 전에는 현장 프로그램 OFF 필수)',
      '5. PC 스토리지 관리: 부팅 불가(SSD 오류) 시 PC 종료 후 트레이 키로 보조 SSD 교체(정상 작동 시 기본 SSD 절대 제거 금지). RAID 없는 HDD에는 결과 파일만 저장되며 설정 파일은 SSD에 있으므로 고장 시 즉시 교체합니다.',
      '6. 정합 NG 판별 및 조치: ① **Fitness**(0~1, 낮을수록 적합 = 오차 평균) 높고 **Overlap**(0~100%, 높을수록 적합 = 형상 매칭률) 낮음 → 모델 형상 변화/스캔 퀄리티 불량(전면 필터·차량 상태 점검 후 리셋 재기동), ② **Limit 초과 NG** → Shift(위치변화량)가 허용 한계 초과(정상 NG 상황이므로 대상물 정렬 후 재기동).'
    ],
    learningPoints: [
      { title: '빈도별 스캐너 끊김 대응 기준', detail: '매일 끊김 = 심각(즉시 케이블/장치/LAN카드 교체), 매주 끊김 = 전원 불안정 또는 LAN 케이블 문제(빠른 조치), 몇 달에 1번 = 장기 가동 누적 오류(PC·하드웨어 재부팅으로 해결).' },
      { title: '"camera physically removed" = 99% 케이블 문제', detail: '카메라 물리적 제거 로그가 뜨면 99%가 LAN 케이블 단선이나 RJ45 커넥터 헐거움이며, 어댑터 속도가 1.0Gbps가 안 나올 때도 케이블 교체가 정답입니다.' },
      { title: 'Fitness vs Overlap 해석 공식', detail: '**Fitness(0~1)**는 오차 평균이므로 **낮을수록** 좋고, **Overlap(0~100%)**은 형상 매칭률이므로 **높을수록** 좋습니다!' }
    ],
    warnings: [
      'PC 랙 후면 CP 차단기로 스캐너 전원을 재부팅할 때는 반드시 **20초 이상** 내린 후 다시 올려야 완전 방전·재부팅됩니다.',
      '정상 작동 중인 기본 SSD는 데이터 복구가 불가능할 수 있으므로 절대 임의로 분리하지 마세요.'
    ],
    simLink: { label: '트러블슈팅 시뮬레이터 실행', url: 'net_comm.html' },
    quiz: [
      {
        q: '현장 비전 프로그램에서 로봇·PLC·스캐너의 연결이 끊어져 하단 아이콘이 빨간색으로 떴을 때 가장 먼저 시도하는 재연결 단축 조작은?',
        options: [
          '해당 아이콘을 Ctrl + 더블클릭',
          'PC 전원 코드를 바로 뽑는다',
          'CONFIG에서 모델을 삭제한다',
          'AbeoSCAN을 동시에 실행한다'
        ],
        answer: 0,
        explanation: '연결되어 있던 하드웨어(스캐너, 로봇, PLC 등)의 연결이 끊어진 경우 해당 상태 아이콘을 `Ctrl + 더블클릭`하여 우선 재연결을 시도합니다.'
      },
      {
        q: 'PC 랙 후면부의 스캐너 전원부 CP(Circuit Protector)를 내려 스캔 센서를 재부팅할 때 지켜야 하는 최소 대기 시간과 부팅 완료 신호는?',
        options: [
          '1초 이상 내림 / 빨간 불 점멸',
          '20초 이상 내림 / 스캔센서에서 초록 프로젝터 조사 시 부팅 완료',
          '5분 이상 내림 / 비프음 3회',
          '전원을 내리지 않고 케이블만 뺐다 꽂음'
        ],
        answer: 1,
        explanation: 'CP 전원을 **20초 이상** 내렸다가 올린 뒤, 스캔 센서에서 초록색 프로젝터 빛이 조사되면 부팅이 완료된 것입니다.'
      },
      {
        q: '비전 로그에 `"The camera device has been physically removed"`가 출력되었을 때 가장 유력한 원인(99%)과 1차 조치는?',
        options: [
          '99% 케이블 문제(손상, 커넥터 느슨함, RJ45 잭) → LAN 연결 상태 확인 및 케이블 교체',
          '99% Windows 11 정품 인증 만료 → 제품 키 재입력',
          '99% 프로젝터 램프 수명 종료 → 스캐너 폐기',
          '99% 로봇 TCP 오류 → 4점 티칭 재수행'
        ],
        answer: 0,
        explanation: '해당 로그는 99%가 케이블 손상, 커넥터 헐거움, RJ45 잭 불량 등 케이블 문제이므로 LAN 연결 확인 및 케이블 교체를 진행합니다.'
      },
      {
        q: '네트워크 어댑터 설정에서 3D 스캐너의 정상 통신 링크 속도는 얼마여야 하며, 그 미만일 때 조치 방법은?',
        options: [
          '100Mbps / 스캐너 펌웨어 다운그레이드',
          '1.0Gbps / 1.0Gbps가 안 나오면 스캐너 통신 케이블을 교체',
          '10Mbps / Jumbo Packet 비활성화',
          '54Mbps / 무선 Wi-Fi 연결'
        ],
        answer: 1,
        explanation: '스캐너는 `1.0Gbps`가 정상 속도이며, 이 속도가 나오지 않으면 데이터 취득 문제가 발생하므로 통신 케이블을 교체해야 합니다.'
      },
      {
        q: '스캐너 연결이 "매일" 빈번하게 끊기는 경우와 "몇 달에 한 번" 끊기는 경우의 판단으로 옳은 것은?',
        options: [
          '둘 다 정상 현상이므로 무시한다',
          '매일 끊김은 케이블·장치·LAN카드 교체 등 즉시 해결해야 할 심각한 문제이고, 몇 달에 한 번은 장기 가동 오류로 PC/장비 재부팅으로 해결한다',
          '매일 끊김은 PC 재부팅만으로 충분하고, 몇 달에 한 번은 스캐너를 폐기한다',
          '둘 다 Windows 업데이트가 원인이다'
        ],
        answer: 1,
        explanation: '매일 끊김은 심각한 물리/하드웨어 문제로 즉시 교체·조치가 필요하고, 몇 달에 한 번 끊기는 것은 장기 가동 누적 오류로 재시작으로 해결합니다.'
      },
      {
        q: 'PC 내부 스토리지 중 비전 설정 파일이 없고 스캔 결과 파일만 저장되는 드라이브는?',
        options: [
          '기본 SSD',
          'RAID 없는 HDD (고장 시 별도 백업 없이 즉시 보조 HDD로 교체)',
          'USB 동글키',
          'PLC 메모리'
        ],
        answer: 1,
        explanation: 'HDD에는 비전 설정 파일이 없고 결과 파일만 저장되며, 설정 파일은 SSD에 있으므로 정상 작동 중인 기본 SSD는 절대 제거하지 않아야 합니다.'
      },
      {
        q: '3D 정합 판정 지표인 `Fitness`와 `Overlap`에 대한 설명으로 옳은 것은?',
        options: [
          'Fitness(0~1): 낮을수록 적합(오차 평균) / Overlap(0~100%): 높을수록 적합(형상 매칭률)',
          'Fitness: 높을수록 적합 / Overlap: 낮을수록 적합',
          '둘 다 0이면 무조건 NG이다',
          '둘 다 스캐너 온도를 나타낸다'
        ],
        answer: 0,
        explanation: 'Fitness는 마스터와 스캔 데이터 간 오차 평균이므로 0에 가깝게 낮을수록 좋고, Overlap은 형상 매칭률(%)이므로 높을수록 적합합니다.'
      },
      {
        q: '`NG (리미트 초과)` 알람이 발생했을 때의 의미와 현장 조치 방법은?',
        options: [
          '스캔 결과물의 Shift(위치 변화량)가 설정한 리미트 값을 초과한 정상 NG 상황이므로, 대상물 위치를 정렬하고 재기동한다',
          '스캐너 렌즈가 파손된 것이므로 즉시 교체한다',
          '로봇 프로그램이 삭제되었으므로 다시 짠다',
          'PC 전원을 차단하고 출하 상태로 복원한다'
        ],
        answer: 0,
        explanation: 'Shift가 허용 리미트를 넘었을 때 로봇 충돌 등을 막기 위해 뜨는 정상 NG 상황이므로 대상물(차량/부품) 안착 상태를 정렬한 뒤 재기동합니다.'
      }
    ]
  },
  {
    id: 21,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: 'comm_uf.pdf',
    ext: 'PDF',
    level: '기술 노트',
    tags: ['공통좌표계 요약', 'CC 보드 15/7/7', 'CalcCC', 'MKUCRD'],
    overview: '다중 로봇 라인에서 공통좌표계(CC)를 구축하기 위한 CC Calib Board(Pitch 15, DimX 7, DimY 7) 배치, 15도 기울기 촬영, AbeoScan `CalcCC` 및 메인 프로그램·티치펜던트(`MKUCRD`) 적용 절차를 정리한 기술 문서입니다.',
    steps: [
      '1. 선행 조건 확인: 공통좌표계를 형성할 모든 로봇의 스캐너 캘리브레이션이 완료되어야 합니다.',
      '2. CC 보드 배치: 대차 진행 방향(L/T 방향)에 맞춰 CC Calib Board를 고정하고, 3Ds/3Du는 700mm, 3Dm은 1400mm 거리에서 정면 반사를 피해 **약 15° 기울여** 촬영 각도를 잡습니다.',
      '3. AbeoScan CalcCC: `RobotController` 연결 → `DataType: CalibBoard`, `Pitch: 15`, `DimX: 7`, `DimY: 7` 설정 → `LoadResult` 로드 → 스캔 및 정도 테스트(`Mean_Err ≤ 0.1`) → `CalcCC`로 `CC.json` 저장.',
      '4. 메인 프로그램 & 펜던트 적용: CONFIG → HAND-EYE 좌측 하단 CC에 `CC.json` 로드(비밀번호 1111) → 펜던트 `MKUCRD` 명령 및 베이스 좌표계 P변수(ORG, XX, XY) 입력 후 줄자 실측으로 최종 검증합니다.'
    ],
    learningPoints: [
      { title: '보드의 +x/+y와 대차의 T/L 매칭', detail: '미국 현장 및 신규 공사 기준 대차 진행 L방향과 CC 보드 +y방향을 일치시키며, 대차 후미 방향이 +T(+x), 마주 봤을 때 좌측(운전석 우측)이 +L(+y)입니다.' },
      { title: '실측 교차 검증의 중요성', detail: 'CC 세팅 완료 후 로봇 베이스 원점으로부터 보드판까지의 실제 X, Y, Z 거리를 줄자로 측정해 Hand-eye CC 테이블 값과 비교하면 좌표계 뒤집힘 사고를 100% 예방할 수 있습니다.' }
    ],
    warnings: [
      '좌표계 변환 및 `MKUCRD` 실행 테스트 시에는 반드시 로봇 속도를 저속으로 설정하고 충돌 위험이 없는지 확인하세요.',
      'CC 작업 도중에는 절대 CC Calib Board를 건드리거나 이동시키지 마세요.'
    ],
    simLink: { label: '공통좌표계 시뮬레이터 실행', url: 'com_uf.html' },
    quiz: [
      {
        q: '공통좌표계(CC) 보드판 세팅 시 대차(차량)의 L/T 방향과 보드판의 +x/+y 방향을 맞추는 표준 기준은?',
        options: [
          '대차의 L 방향과 보드판 +y 방향을 일치시킨다 (후미 +T, 마주봤을 때 좌측 +L)',
          '대차의 방향과 무관하게 보드판을 비스듬히 둔다',
          '보드판 +y 방향을 항상 바닥 아래로 향하게 둔다',
          '대차의 T 방향을 보드판 +z 방향과 맞춘다'
        ],
        answer: 0,
        explanation: '대차의 L 방향과 CC 보드판의 +y 방향을 일치시키며, 대차 후미 방향이 +T, 대차를 마주보고 섰을 때 좌측(운전자 앉은 방향 우측)이 +L 방향입니다.'
      },
      {
        q: 'CC Calib Board 정보에서 `DimX = 7`, `DimY = 7`이 의미하는 것은?',
        options: [
          '보드판 전체 가로세로 길이가 7cm이다',
          '가로·세로 중앙 교점(원점)을 제외하고 각 좌표 방향으로 배치된 점의 개수가 7개이다',
          '보드판 두께가 7mm이다',
          '로봇 7대를 동시에 연결한다'
        ],
        answer: 1,
        explanation: 'DimX=7, DimY=7은 중앙 교점(원점)을 제외한 각 좌표 방향의 점 개수이며, 점과 점 사이 거리는 Pitch(15), 원의 지름은 BlurRadius입니다.'
      },
      {
        q: 'CC 작업 시 스캐너가 보드판을 15도 기울여 촬영한 뒤 정도 테스트에서 확인해야 하는 합격 기준은?',
        options: [
          'Mean_Err ≤ 0.1',
          'Mean_Err ≤ 1.0',
          'Mean_Err ≥ 0.5',
          'Fitness ≥ 1.0'
        ],
        answer: 0,
        explanation: 'Pitch 15, DimX 7, DimY 7 설정 후 Apply를 눌러 `Mean_Err`가 `0.1` 이하로 나오면 `[CalcCC]`를 눌러 데이터를 저장합니다.'
      },
      {
        q: '메인 프로그램에서 `CalcCC`로 저장한 `CC.json` 파일을 등록하는 위치는?',
        options: [
          'HAND-EYE 창의 좌측 하단 CC 영역',
          'HAND-EYE 창의 우측 상단 Eye correction matrix',
          'GENERAL 탭의 Language 항목',
          'MODELS 탭'
        ],
        answer: 0,
        explanation: 'CONFIG → HAND-EYE 진입 후 좌측 하단 CC 영역의 자물쇠를 풀고(1111) Enable을 켠 뒤 `CC.json` 파일을 불러옵니다.'
      },
      {
        q: 'CC 작업 완료 후 현장에서 줄자를 이용해 교차 검증하는 올바른 방법은?',
        options: [
          '로봇 베이스로부터 CC 보드판까지의 X, Y, Z 거리를 재서 Hand-eye CC 수치와 동일한지 확인한다',
          '스캐너와 로봇 플랜지 사이 거리를 잰다',
          '공장 천장 높이를 잰다',
          'LAN 케이블 길이를 잰다'
        ],
        answer: 0,
        explanation: 'CC 보드판 원점 위치를 로봇 베이스로부터 X, Y, Z 실측하여 Hand-eye CC 테이블에 입력된 수치와 일치하는지 검증합니다.'
      },
      {
        q: 'AbeoScan에서 `CalcCC`를 실행할 때 CC 파일이 저장되는 기본 폴더 경로와 확장자는?',
        options: [
          'C:\\LotusAPI\\bin\\CC\\*.json',
          'C:\\LotusAPI\\WJ\\*.ply',
          'D:\\Models\\*.acd',
          'C:\\Windows\\*.xml'
        ],
        answer: 0,
        explanation: '`[내PC] - [로컬디스크(C:)] - [LotusAPI] - [bin] - [CC]` 폴더에 `.json` 확장자로 저장합니다.'
      }
    ]
  },
  {
    id: 22,
    cat: 'MODEL',
    catName: '4. 모델 등록 & 트러블슈팅/기타',
    file: 'Hi5a-ma.pdf',
    ext: 'PDF',
    level: '로봇 제어기 매뉴얼 (보류)',
    tags: ['현대로봇 Hi5a', '파일 관리', '서비스 메뉴', '보류'],
    overview: '현대로봇 Hi5a 제어기의 시스템 조작, 파일 관리(M/B · T/P · USB), 네트워크 서비스, 입출력 신호 설정을 다룬 공식 조작 설명서입니다. (요청에 따라 본 제어기 범용 매뉴얼은 퀴즈 보류 대상)',
    steps: [
      '티칭 펜던트 화면 구성과 M/B(메인보드), T/P, USB 장치 간 프로그램 백업 및 복원 방법을 익힙니다.',
      'HR-BASIC JOB 프로그램 구조 및 외부 입출력(DI/DO) 조건 대기·분기 명령을 확인합니다.'
    ],
    warnings: [
      'USB 메모리에 파일 복사/삭제 작업을 수행하는 중에는 절대 USB 메모리를 분리하지 마십시오.'
    ],
    simLink: null,
    deferred: true,
    quiz: []
  }
];
