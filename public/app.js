/* =========================================================
   1. 타로 심리 문항 데이터 (에니어그램/유형 단어 완전 제거)
   9개 성향군 × 9문항 = 총 81문항
========================================================= */
const TAROT_GROUPS = [
  // 1군 (기존 1유형 대체 -> 올곧은 정의의 안내자)
  {
    archetype: "올곧은 정의의 안내자 (The Guide of Integrity)",
    summary: "높은 도덕성과 원칙을 지니고 매사에 신중하며 책임을 다하는 성향입니다. 공정함을 중요시하지만 스스로에게 엄격해 쉽게 피로해질 수 있습니다.",
    questions: [
      "나는 모든 일을 계획하기 위해 깊이 생각해서 행동한다.",
      "나는 완벽을 위해 끊임없이 노력한다.",
      "나는 다른 사람들보다 근면하고 책임감이 강하다.",
      "나는 다른 사람들의 신임을 얻을 수 있다.",
      "나는 정직하고 거짓말이 없는 사람이다.",
      "나는 정의감이 강하고 공정하다.",
      "나의 행동은 원칙에 기초를 둔다.",
      "나는 옳고 그른 일을 분명하게 이해한다.",
      "나는 규칙을 잘 지키며 스스로에게 엄격하다."
    ]
  },
  // 2군 (기존 2유형 대체 -> 다정한 사랑의 치유사)
  {
    archetype: "다정한 사랑의 치유사 (The Gentle Healer)",
    summary: "타인의 감정과 필요를 세심하게 알아채며 따뜻한 온기를 나누는 성향입니다. 남을 챙기느라 정작 자신의 마음을 돌보지 못할 때가 있습니다.",
    questions: [
      "나는 다른 사람들과 함께 일하기를 더 좋아한다.",
      "나는 사람들을 관심 있게 대하고 보살핀다.",
      "나의 관심사는 다른 사람들을 도와주는 것이다.",
      "나는 사람들과 친해지려고 많이 노력하고 있다.",
      "나는 사람들에게 칭찬을 잘 한다.",
      "나는 타인의 만족을 위해 노력한다.",
      "내 생각보다는 남의 생각을 먼저 생각해 준다.",
      "나는 타인의 호감을 얻기 위해 노력한다.",
      "나는 친구들이 나에게 의지할 때 기분이 좋다."
    ]
  },
  // 3군 (기존 3유형 대체 -> 빛나는 성취의 개척자)
  {
    archetype: "빛나는 성취의 개척자 (The Radiant Achiever)",
    summary: "목표를 향해 효율적으로 달려가며 눈부신 성취를 이루어내는 열정가입니다. 과정보다 결과를 앞세우다 실패에 대한 두려움이 커질 수 있습니다.",
    questions: [
      "나는 능력을 발휘하는 데 많은 시간을 투자한다.",
      "나는 사람들에 대한 배려보다는 일의 성취를 더 중요하게 생각한다.",
      "나는 과정보다는 결과를 중시한다.",
      "나는 성공하기 위해 최선을 다하고 끝까지 해낸다.",
      "나는 인간 중심적이기보다는 논리와 목표 중심적이다.",
      "나는 실패를 두려워하여 과장하는 경향이 있다.",
      "나는 적응력이 뛰어나 상황에 적절히 대응한다.",
      "나는 원칙에 얽매이지 않고 유연함을 활용한다.",
      "나는 사람들에게 때때로 경쟁을 강조한다."
    ]
  },
  // 4군 (기존 4유형 대체 -> 감성 가득한 예술가)
  {
    archetype: "감성 가득한 예술가 (The Mystical Artist)",
    summary: "풍부한 감수성과 독창적인 시선으로 세상을 바라보는 낭만주의자입니다. 분위기에 쉽게 휩쓸리거나 혼자만의 우울에 빠질 수 있습니다.",
    questions: [
      "나는 감성적이어서 혼자 있을 때가 많다.",
      "나는 분위기에 약하고 자기 생각에 흔들리는 편이다.",
      "나는 혼자서 자신만의 고상한 취미를 즐긴다.",
      "나는 내 행동의 동기가 감정에 의해 의식적인 생각이 들 때가 있다.",
      "나는 낭만적이고 예술가적인 기질이 있다.",
      "나는 감동적인 것을 추구하다가 혼자 우울해지기도 한다.",
      "나는 창의적일 때 삶의 의미가 크다.",
      "나는 비현실적이며 몽상가적인 기질을 가지고 있다.",
      "나는 다른 사람들과는 다른 독특한 감정을 가지고 있다."
    ]
  },
  // 5군 (기존 5유형 대체 -> 지혜로운 통찰의 탐구자)
  {
    archetype: "지혜로운 통찰의 탐구자 (The Wise Observer)",
    summary: "현상을 객관적으로 관찰하고 깊이 탐구하여 본질을 꿰뚫는 지성인입니다. 지나치게 이성적이라 감정적인 공감이나 에너지 소모를 피하려 합니다.",
    questions: [
      "나는 무엇인가에 집중하여 깊이 몰입한다.",
      "나의 관심사는 나를 둘러싼 세계를 이해하는 것이다.",
      "나는 문제가 있으면 풀릴 때까지 고민한 끝에 해결한다.",
      "나는 관찰을 먼저 하고 충동을 억제한다.",
      "나는 공적인 것보다는 개인적인 삶에 관심이 많다.",
      "나는 지적이고 냉철하게 결정하는 편이다.",
      "나는 감성보다는 이성을 추구한다.",
      "나는 머리로 모든 것을 이해하고 판단한다.",
      "나는 시간이나 에너지를 아끼는 경향이 있다."
    ]
  },
  // 6군 (기존 6유형 대체 -> 든든한 신뢰의 수호신)
  {
    archetype: "든든한 신뢰의 수호신 (The Loyal Guardian)",
    summary: "안정과 신뢰를 최우선으로 여기며 성실하게 조직과 관계를 지키는 수호자입니다. 미래에 대한 걱정과 불확실성에 대한 불안이 잦을 수 있습니다.",
    questions: [
      "나는 확실한 확신이 있을 때 일의 능률이 오른다.",
      "나는 결과에 대한 두려움 때문에 일을 꼼꼼히 끝내는 편이다.",
      "나는 믿었던 사람도 가끔 의심하는 경향이 있다.",
      "나는 충성할 만한 사람이라고 판단되면 끝까지 헌신한다.",
      "나는 철저히 준비하여 조심이나 걱정을 현실적으로 대비한다.",
      "나는 신뢰하기 전에는 사람과 일정한 거리를 유지하려 한다.",
      "나는 모든 일에서 안정을 가장 중요하게 생각한다.",
      "나는 성공했을 때도 혹시 모를 위험을 먼저 떠올린다.",
      "사람들은 내게 때로 용기가 더 필요하다고 말한다."
    ]
  },
  // 7군 (기존 7유형 대체 -> 자유로운 꿈의 모험가)
  {
    archetype: "자유로운 꿈의 모험가 (The Joyful Dreamer)",
    summary: "매사에 호기심과 에너지가 넘치며 새로운 경험과 즐거움을 찾아 나서는 긍정가입니다. 한곳에 진득하게 집중하지 못하고 지루함을 참기 어려워합니다.",
    questions: [
      "나는 전반적으로 재미있고 신나는 일을 즐긴다.",
      "나는 미래에 대해 항상 열정을 가지고 있다.",
      "나는 모험적이며 새로운 시도를 감수한다.",
      "나는 여러 가지 것들을 즐기고 새로운 경험을 갈망한다.",
      "나는 끊임없이 변화를 찾는 것을 즐긴다.",
      "나는 한 가지 일에 오랫동안 집중하기가 어렵다.",
      "나는 자극과 흥분을 유발하는 활동을 좋아한다.",
      "나는 현실에 안주하지 않고 항상 새로운 것을 추구한다.",
      "나는 어린아이처럼 명랑하고 순진하다."
    ]
  },
  // 8군 (기존 8유형 대체 -> 용기 있는 열정의 도전자)
  {
    archetype: "용기 있는 열정의 도전자 (The Brave Challenger)",
    summary: "당당한 자신감과 리더십으로 사람들을 이끌며 불의에 맞서는 개척자입니다. 자기주장이 강해 타인에게 위압감을 주거나 통제하려 들 수 있습니다.",
    questions: [
      "나는 지도자로서의 기질과 결단력이 있다.",
      "나는 공격적이고 자기주장이 뚜렷하다.",
      "나는 의사 결정을 할 때 적극적으로 리더십을 발휘한다.",
      "나는 상황과 사람들을 주도적으로 이끌려 한다.",
      "나는 내가 큰 권한과 영향력을 지녔다고 생각한다.",
      "나는 사람들을 지시하고 동기를 부여하는 데 능하다.",
      "나는 사람들에게 영향력을 행사하는 사람이다.",
      "나는 강한 자신감으로 사람들을 설득시킨다.",
      "나는 다른 사람들이 말하기 꺼려하는 것도 솔직히 이야기한다."
    ]
  },
  // 9군 (기존 9유형 대체 -> 평온을 품은 평화주의자)
  {
    archetype: "평온을 품은 평화주의자 (The Peaceful Harmonizer)",
    summary: "마음이 넓고 조화로움을 사랑하며 다툼 없는 편안한 세상을 지향하는 치유자입니다. 갈등을 피하려다 자기 생각이나 욕구를 뒤로 미루기 쉽습니다.",
    questions: [
      "나는 자기만족적이며 태평한 편이다.",
      "사람들은 나를 편안하고 부담 없는 사람으로 여긴다.",
      "나는 갈등의 동요가 적고 매우 차분한 편이다.",
      "나는 세상을 너그럽고 편안하게 바라본다.",
      "나는 온화한 해결책을 원하고 되도록 갈등을 피한다.",
      "사람들이 하는 일은 각자의 몫이라 여기며 지나치게 참견하지 않는다.",
      "나는 친구들과 긴장을 풀고 마음 편하게 지낸다.",
      "나는 조화로움을 추구하는 평화주의자이다.",
      "나는 사람들을 유쾌하고 온화하게 대한다."
    ]
  }
];

// 타로 질문 평탄화
let flattenedQuestions = [];
TAROT_GROUPS.forEach((group, gIdx) => {
  group.questions.forEach(q => {
    flattenedQuestions.push({ groupIndex: gIdx, text: q });
  });
});

let currentQuestionIdx = 0;
let groupScores = new Array(9).fill(0);
let chosenResultTitle = "";

function initTarotQuiz() {
  currentQuestionIdx = 0;
  groupScores = new Array(9).fill(0);
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestionIdx >= flattenedQuestions.length) {
    showTarotResult();
    return;
  }
  const qObj = flattenedQuestions[currentQuestionIdx];
  document.getElementById('question-text').innerText = qObj.text;
  document.getElementById('progress-text').innerText = `${currentQuestionIdx + 1} / ${flattenedQuestions.length}`;
  const pct = ((currentQuestionIdx + 1) / flattenedQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = `${pct}%`;
}

function answerQuestion(score) {
  const gIdx = flattenedQuestions[currentQuestionIdx].groupIndex;
  groupScores[gIdx] += score;
  currentQuestionIdx++;
  renderQuestion();
}

function showTarotResult() {
  let highestIdx = 0;
  let maxScore = -1;
  groupScores.forEach((score, idx) => {
    if (score > maxScore) {
      maxScore = score;
      highestIdx = idx;
    }
  });

  const best = TAROT_GROUPS[highestIdx];
  chosenResultTitle = best.archetype;

  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('result-view').style.display = 'block';

  document.getElementById('res-title').innerText = best.archetype;
  document.getElementById('res-summary').innerText = best.summary;
}

/* =========================================================
   2. 사주 오행 & 일주(日柱) 산출 알고리즘
========================================================= */
const HEAVENLY_STEMS = ["갑(甲)", "을(乙)", "병(丙)", "정(丁)", "무(戊)", "기(己)", "경(庚)", "신(辛)", "임(壬)", "계(癸)"];
const EARTHLY_BRANCHES = ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(戌)", "해(亥)"];

// 천간별 대표 오행
const STEM_ELEMENTS = {
  "갑(甲)": { elem: "목(木) - 큰 나무", color: "푸른 나무", trait: "곧게 뻗어나가는 개척 정신과 추진력" },
  "을(乙)": { elem: "목(木) - 부드러운 풀", color: "푸른 잎", trait: "유연한 적응력과 끈기 있는 생명력" },
  "병(丙)": { elem: "화(火) - 태양", color: "붉은 태양", trait: "세상을 환하게 비추는 열정과 솔직함" },
  "정(丁)": { elem: "화(火) - 촛불", color: "따뜻한 등불", trait: "섬세하고 은은한 배려와 헌신적인 온기" },
  "무(戊)": { elem: "토(土) - 넓은 대지", color: "황금빛 대지", trait: "믿음직한 포용력과 묵직한 신뢰감" },
  "기(己)": { elem: "토(土) - 비옥한 밭", color: "비옥한 흙", trait: "세심하게 키워내는 양육의 미덕과 현실 감각" },
  "경(庚)": { elem: "금(金) - 단단한 바위/쇠", color: "하얀 칼날", trait: "단호한 결단력과 강직한 의리" },
  "신(辛)": { elem: "금(金) - 정밀한 보석", color: "빛나는 보석", trait: "예리하고 세련된 심미안과 자존감" },
  "임(壬)": { elem: "수(水) - 깊은 바다", color: "검은 바다", trait: "끝없이 생각하는 지혜와 포용력" },
  "계(癸)": { elem: "수(水) - 촉촉한 단비", color: "맑은 샘물", trait: "상대방의 마음을 적셔주는 감수성과 영민함" }
};

function calculateSaju() {
  const birthInput = document.getElementById('saju-birth').value;
  if (!birthInput) {
    alert("생년월일을 선택해주세요.");
    return;
  }

  const birthDate = new Date(birthInput);
  // 기준일: 1900년 1월 31일 (갑진일 일주 기준)
  const baseDate = new Date(1900, 0, 31);
  const diffDays = Math.floor((birthDate - baseDate) / (1000 * 60 * 60 * 24));

  const stemIdx = (diffDays % 10 + 10) % 10;
  const branchIdx = (diffDays % 12 + 12) % 12;

  const stem = HEAVENLY_STEMS[stemIdx];
  const branch = EARTHLY_BRANCHES[branchIdx];
  const ilju = `${stem}${branch} 일주`;
  const elementInfo = STEM_ELEMENTS[stem];

  chosenResultTitle = `${ilju} (${elementInfo.elem})`;

  document.getElementById('saju-input-view').style.display = 'none';
  document.getElementById('saju-result-view').style.display = 'block';

  document.getElementById('saju-res-title').innerText = `${ilju}`;
  document.getElementById('saju-badge').innerText = `✨ 타고난 본원: ${elementInfo.elem}`;
  document.getElementById('saju-summary').innerText = 
    `당신은 ${elementInfo.color}의 기운을 품고 태어났습니다. ${elementInfo.trait}을 지니고 있어 사람들에게 든든한 존재가 되어주지만, 내면의 고독감이 찾아올 수 있습니다.`;
}

/* =========================================================
   3. 모달 & 상담 신청 로직
========================================================= */
function openModal() {
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

async function submitApplication(type) {
  const name = document.getElementById('apply-name').value.trim();
  const phone = document.getElementById('apply-phone').value.trim();
  const email = document.getElementById('apply-email').value.trim();
  const story = document.getElementById('apply-story').value.trim();

  if (!name || !phone) {
    alert("이름과 연락처를 꼭 입력해주세요.");
    return;
  }

  try {
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        name,
        phone,
        email,
        story,
        resultTitle: chosenResultTitle
      })
    });

    const data = await res.json();
    if (data.success) {
      alert("🎉 무료 풀이 신청이 접수되었습니다!\n소냥이 상담사가 확인 후 정성스러운 풀이서를 전송해 드립니다.");
      closeModal();
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("서버 통신 중 문제가 발생했습니다.");
  }
}
