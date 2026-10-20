/* =========================================================
   1. 타로 심리 9종 소냥이 데이터 (에니어그램/유형 완전 배제)
========================================================= */
const TAROT_CATS = [
  {
    code: "CAT1",
    name: "반듯냥",
    subTitle: "정답을 찾는 고양이",
    keywords: "정직 · 신뢰 · 책임",
    image: "images/cat1.jpg",
    teaser: "매사에 원칙과 기준이 명확하고 맡은 일에 끝까지 책임을 다하는 신뢰의 소냥이입니다. 스스로에게 너무 엄격해 마음의 여유가 부족해지기 쉽습니다.",
    // 관리자가 볼 수 있는 풀이 리포트
    fullReport: `[반듯냥 심층 상담 솔루션]
• 핵심 심리: 완벽하지 않으면 비난받을 수 있다는 무의식적 불안이 있습니다.
• 반복되는 고민: "왜 주변 사람들은 나만큼 책임감 있게 행동하지 않을까?" 갈등 시 분노를 억누르다 냉소적으로 변하기 쉽습니다.
• 연애/인간관계: 정직하고 헌신적이나, 상대방을 가르치려 하거나 기준을 강요해 관계가 경직될 수 있습니다.
• 추천 처방: '완벽함'보다 '충분히 좋음(Good enough)'을 받아들이고 스스로에게 따뜻한 칭찬 한마디를 건네보세요.`
  },
  {
    code: "CAT2",
    name: "다정냥",
    subTitle: "사랑을 건네는 고양이",
    keywords: "사랑 · 배려 · 돌봄",
    image: "images/cat2.jpg",
    teaser: "주변 사람들의 감정과 필요를 누구보다 빠르게 알아채고 따뜻한 사랑을 건네는 소냥이입니다. 남을 챙기느라 정작 자신의 욕구는 잊어버리기 쉽습니다.",
    fullReport: `[다정냥 심층 상담 솔루션]
• 핵심 심리: 타인에게 필요한 존재가 되지 못하면 사랑받지 못할 것이라는 불안이 있습니다.
• 반복되는 고민: "내가 이만큼 챙겨줬는데 왜 상대는 그만큼 다가오지 않을까?" 서운함이 누적되어 번아웃이 옵니다.
• 연애/인간관계: 모든 것을 맞춰주려다 상대방에게 감정적으로 과의존하거나 통제하려는 패턴이 나타납니다.
• 추천 처방: 남을 돕기 전에 "지금 정작 내가 진짜 원하는 것은 무엇인가?"를 먼저 스스로에게 물어보는 연습이 필요합니다.`
  },
  {
    code: "CAT3",
    name: "반짝냥",
    subTitle: "빛나고 싶은 고양이",
    keywords: "도전 · 인정 · 활력",
    image: "images/cat3.jpg",
    teaser: "목표를 향해 거침없이 달리며 언제나 반짝이는 성과를 이루어내는 열정적인 소냥이입니다. 결과에 지나치게 몰입해 실패에 대한 두려움을 숨기려 합니다.",
    fullReport: `[반짝냥 심층 상담 솔루션]
• 핵심 심리: 성공하고 인정받지 못하면 무가치하다는 내면의 성취 강박이 있습니다.
• 반복되는 고민: "더 잘해야 해, 뒤처지면 어쩌지?" 감정을 억누르고 일에만 몰두하다 불현듯 공허감이 찾아옵니다.
• 연애/인간관계: 매력적이고 유능해 보이지만, 자신의 약점이나 솔직한 아픔을 털어놓지 못해 깊은 유대감을 맺기 어려울 수 있습니다.
• 추천 처방: 성취하지 않은 '그냥 나 자신'으로도 충분히 사랑받을 자격이 있음을 인정하고, 잠시 멈춰 감정을 마주하세요.`
  },
  {
    code: "CAT4",
    name: "몽상냥",
    subTitle: "감정을 품은 고양이",
    keywords: "사랑 · 감정 · 여유",
    image: "images/cat4.jpg",
    teaser: "남다른 감수성과 깊은 상상력으로 자신만의 아름다운 세계를 그려가는 소냥이입니다. 분위기에 쉽게 휩쓸리거나 혼자만의 외로움에 깊이 빠질 수 있습니다.",
    fullReport: `[몽상냥 심층 상담 솔루션]
• 핵심 심리: 나를 온전히 이해해주는 사람이 없다는 결핍감과 남들과는 다르다는 고유성에 대한 집착이 있습니다.
• 반복되는 고민: "왜 세상은 이렇게 건조할까? 내 마음은 왜 이렇게 널뛸까?" 감정 기복으로 일상의 리듬이 깨지기 쉽습니다.
• 연애/인간관계: 드라마틱한 교감을 원하지만, 현실 연애의 사소한 마찰에 깊이 상처받고 마음의 문을 닫아버립니다.
• 추천 처방: 지나친 감정의 소용돌이에서 벗어나 현실적인 루틴(운동, 산책, 작은 과업 완료)을 몸으로 직접 실천해보세요.`
  },
  {
    code: "CAT5",
    name: "탐구냥",
    subTitle: "세상을 관찰하는 고양이",
    keywords: "지적 · 호기심 · 지식",
    image: "images/cat5.jpg",
    teaser: "차분한 눈으로 세상을 분석하고 지적 호기심을 탐구하는 지혜로운 소냥이입니다. 머리로만 이해하려다 마음을 열고 감정을 나누는 것이 서툴 수 있습니다.",
    fullReport: `[탐구냥 심층 상담 솔루션]
• 핵심 심리: 자신이 준비되지 않은 채 세상에 나서면 압도당할 것이라는 두려움 때문에 지식 속으로 숨습니다.
• 반복되는 고민: "사람들과 어울리면 에너지가 너무 빨려." 사교적 상황을 회피하고 고립을 자초하기 쉽습니다.
• 연애/인간관계: 지나치게 논리적이고 차분하여 상대방에게 '벽이 느껴진다'는 피드백을 받을 수 있습니다.
• 추천 처방: 머리로만 분석하지 말고, 몸으로 직접 경험하고 느끼는 안전한 대인관계를 조금씩 넓혀가 보세요.`
  },
  {
    code: "CAT6",
    name: "살핌냥",
    subTitle: "불안을 지키는 고양이",
    keywords: "보살핌 · 배려 · 안정",
    image: "images/cat6.jpg",
    teaser: "만약의 위험을 세심하게 살피고 신뢰하는 이들을 끝까지 지켜내는 충직한 소냥이입니다. 앞선 걱정과 불안 때문에 첫걸음을 떼기가 어렵습니다.",
    fullReport: `[살핌냥 심층 상담 솔루션]
• 핵심 심리: 미래의 위험과 불확실성에 대비하지 않으면 배신당하거나 무너질 수 있다는 불안이 깊습니다.
• 반복되는 고민: "혹시 이런 문제가 생기면 어쩌지?" 최악의 시나리오를 미리 그리느라 결정을 계속 미룹니다.
• 연애/인간관계: 신뢰가 쌓이기 전까진 상대를 끊임없이 시험하지만, 믿음이 서면 무조건적으로 헌신합니다.
• 추천 처방: 세상은 생각보다 안전하며, 나의 내면에도 문제를 해결할 충분한 힘이 있음을 신뢰하는 용기가 필요합니다.`
  },
  {
    code: "CAT7",
    name: "두근냥",
    subTitle: "모험을 떠나는 고양이",
    keywords: "열정 · 도전 · 성장",
    image: "images/cat7.jpg",
    teaser: "매일 새로운 즐거움과 모험을 꿈꾸며 사람들에게 밝은 에너지를 전하는 활기찬 소냥이입니다. 지루함을 견디지 못하고 한 가지 일에 집중하기 어렵습니다.",
    fullReport: `[두근냥 심층 상담 솔루션]
• 핵심 심리: 지루함, 고통, 결핍을 느끼는 것을 극도로 회피하고 언제나 신나는 자극만을 쫓으려 합니다.
• 반복되는 고민: "시작은 재미있는데 왜 끝까지 마무리가 안 될까?" 산만함과 책임 회피로 번지기 쉽습니다.
• 연애/인간관계: 유쾌하고 매력적인 분위기 메이커이지만, 진지하고 무거운 갈등 상황을 회피하려 들어 서운함을 살 수 있습니다.
• 추천 처방: 현재 마주한 작은 불편함과 고요함을 회피하지 말고, 하나를 끝까지 마무리할 때 오는 깊은 충만감을 느껴보세요.`
  },
  {
    code: "CAT8",
    name: "대장냥",
    subTitle: "깃발을 든 리더 고양이",
    keywords: "리더십 · 추진력 · 책임감",
    image: "images/cat8.jpg",
    teaser: "당당한 결단력과 묵직한 카리스마로 사람들을 이끌고 불의에 맞서는 든든한 소냥이입니다. 자기주장이 강해 본의 아니게 주변에 위압감을 줄 수 있습니다.",
    fullReport: `[대장냥 심층 상담 솔루션]
• 핵심 심리: 내가 약해지면 남들에게 조종당하고 억압받을 것이라는 두려움 때문에 강한 척 갑옷을 두릅니다.
• 반복되는 고민: "왜 다들 답답하게 결정을 못 내릴까?" 직설적인 태도로 인해 갈등을 빚기 쉽습니다.
• 연애/인간관계: 내 사람이라 생각하면 모든 걸 걸고 지켜주지만, 관계의 주도권을 쥐려 해 상대방이 위축될 수 있습니다.
• 추천 처방: 나의 연약함과 부드러운 속마음을 솔직히 보여주는 것이 진짜 강함이라는 사실을 기억하세요.`
  },
  {
    code: "CAT9",
    name: "포근냥",
    subTitle: "평온을 지키는 고양이",
    keywords: "평화 · 공감 · 조화",
    image: "images/cat9.jpg",
    teaser: "따스한 품으로 모두를 품어주며 갈등 없는 조화로운 세상을 만드는 온화한 소냥이입니다. 평화를 지키려다 정작 내 생각과 감정을 뒤로 미루기 쉽습니다.",
    fullReport: `[포근냥 심층 상담 솔루션]
• 핵심 심리: 갈등이 일어나면 관계가 깨지고 평온이 파괴될 것이라는 두려움 때문에 침묵을 선택합니다.
• 반복되는 고민: "좋은 게 좋은 거지..." 하다가 뒤늦게 후회하거나 수동적인 고집(무반응, 게으름)으로 저항합니다.
• 연애/인간관계: 상대에게 모든 걸 맞춰주지만, 진정한 속마음을 털어놓지 않아 상대가 답답함을 느낄 수 있습니다.
• 추천 처방: 나의 솔직한 의견을 표현해도 관계는 깨지지 않습니다. 불편한 진실을 당당히 말하는 용기를 내보세요.`
  }
];

/* 81개 질문지 평탄화 매핑 */
const TAROT_RAW_QUESTIONS = [
  // 1군 (반듯냥)
  [
    "나는 모든 일을 계획하기 위해 깊이 생각해서 행동한다.",
    "나는 완벽을 위해 끊임자 하고 노력한다.",
    "나는 다른 사람들보다 근면하게 책임감이 강하다.",
    "나는 다른 사람들의 신임을 얻을 수 있다.",
    "나는 정직하고 거짓말이 없는 사람이다.",
    "나는 정의감이 강하고 공정하다.",
    "나의 행동은 원칙에 기초를 둔다.",
    "나는 옳고 그른 일에 분명히 이해한다.",
    "나는 규칙을 잘 지키며 엄격하다."
  ],
  // 2군 (다정냥)
  [
    "나는 다른 사람들을 함께 일하기를 더 좋아한다.",
    "나는 사람들을 관심 있게 대하고 보살핀다.",
    "나의 관심사는 다른 사람들을 도와주는 것이다.",
    "나는 사람들과 친해지려고 많이 노력하고 있다.",
    "나는 사람들에게 칭찬을 잘 한다.",
    "나는 타인의 만족을 위해 노력한다.",
    "내 생각보다는 남의 생각을 먼저 생각해 준다.",
    "나는 타인의 호감을 얻기 위해 노력한다.",
    "나는 친구들이 나에게 의지할 때 기분이 좋다."
  ],
  // 3군 (반짝냥)
  [
    "나는 능력을 발휘하는 데 많은 시간을 투자한다.",
    "나는 사람들에 대한 배려보다는 일의 성취를 더 중요하게 생각한다.",
    "나는 과정보다는 결과를 중시한다.",
    "나는 성공적이기 위해 최선을 다하고 끝낸다.",
    "나는 인간 중심적이기보다는 논리와 목표 중심적이다.",
    "나는 실패를 두려워하여 과장하는 경향이 있다.",
    "나는 적응력이 뛰어나 상황에 적절히 대응한다.",
    "나는 원칙에 빠지지 않고 유연한기를 활용한다.",
    "나는 사람들에게 지나친 경쟁을 강조한다."
  ],
  // 4군 (몽상냥)
  [
    "나는 감성적이어서 혼자 있을 때가 많다.",
    "나는 분위기에 약하고 자기 생각에 흔들리는 편이다.",
    "나는 혼자서 자신만의 고상한 취미를 즐긴다.",
    "나는 내 행동의 동기가 감정에 의해 의식적인 생각이 들 때가 있다.",
    "나는 낭만적이고 예술가적인 기질이 있다.",
    "나는 감동적인 것을 추구하다가 혼자 우울해지기도 한다.",
    "나는 창의적일 때 삶의 의미가 크다.",
    "나는 비현실적이며 몽상가적인 기질을 가지고 있다.",
    "나는 다른 사람들과는 다른 독특한 감정을 가지고 있다."
  ],
  // 5군 (탐구냥)
  [
    "나는 무엇인가에 집중하여 몰입한다.",
    "나의 관심사는 나를 둘러싼 세계를 이해하는 것이다.",
    "나는 문제가 있으면 풀릴 때까지 고민한 끝을 해결한다.",
    "나는 관찰을 먼저 하고 과식을 무시한다.",
    "나는 공적인 것보다는 개인생활에 대한 관심이 많다.",
    "나는 지적이고 냉철하게 결정하는 편이다.",
    "나는 감성보다는 이성을 추구한다.",
    "나는 머리로 모든 것을 이해하고 판단한다.",
    "나는 시간이나 돈을 아끼는 경향이 있다."
  ],
  // 6군 (살핌냥)
  [
    "나는 유일한 자신이 있을 때 일이 능률이 오른다.",
    "나는 결과에 대한 두려움 때문에 일을 잘 끝내는 경향이 있다.",
    "나는 사랑하는 사람을 가끔 의심하는 경향이 있다.",
    "나는 충성할 만한 사람이라고 판단되면 헌신할 수 있다.",
    "나는 잘 준비되어 있어 조심이나 걱정이 현실적 수 있다.",
    "나는 신뢰하기 전에는 사람과 일관된 우정을 유지하도록 노력한다.",
    "나는 모든 일에서 안정을 중요하게 생각한다.",
    "나는 성공이 되어서도 가장 평가 잘하하는 경향이 있다.",
    "사람들은 내게 때로 용기가 필요하다고 말한다."
  ],
  // 7군 (두근냥)
  [
    "나는 전반적으로 재미있는 일을 즐긴다.",
    "나는 미래에 대해 항상 열정을 가지고 있다.",
    "나는 모험적이며 위험을 감수한다.",
    "나는 여러 가지 것들을 즐기고 새로운 경험을 갈망한다.",
    "나는 끊임없이 변화를 찾기를 즐긴다.",
    "나는 한 가지 일에 집중하기가 어렵다.",
    "나는 자극과 흥분을 유발하는 활동을 좋아한다.",
    "나는 현실에 만족하지 않고 새로운 것을 추구한다.",
    "나는 어린아이처럼 명랑하고 순진하다."
  ],
  // 8군 (대장냥)
  [
    "나는 지도자로서의 기질이 있다.",
    "나는 공격적이고 자기주장이 강하다.",
    "나는 의사 결정을 할 때 적극히 지도력을 발휘한다.",
    "나는 사람들을 통제하려 한다.",
    "나는 큰 권한이 있다고 생각한다.",
    "나는 사람들을 지시하고 동기를 부여한다.",
    "나는 사람들에게 영향력이 있는 사람이다.",
    "나는 강한 자신감으로 사람들을 설득시킨다.",
    "나는 다른 사람들의 말하기 어려워하는 것을 이야기한다."
  ],
  // 9군 (포근냥)
  [
    "나는 자기만족적이며 태평한 편이다.",
    "사람들은 나를 그냥 좋아한다.",
    "나는 갈등의 동요가 없고 매우 편안한 사람이다.",
    "나는 세상에 대해 넓고 편안한 편이다.",
    "나는 안정한 해결책을 원하고 되도록 갈등을 피한다.",
    "사람들이 하는 일은 각각의 몫이며, 나와 상관없는 일이다.",
    "나는 친구들과 긴장을 풀고 마음 편하게 지낸다.",
    "나는 조화로움을 추구하는 평화주의자이다.",
    "나는 사람들을 유쾌하고 편하게 대한다."
  ]
];

let flattenedQuestions = [];
TAROT_RAW_QUESTIONS.forEach((qList, gIdx) => {
  qList.forEach(text => {
    flattenedQuestions.push({ catIndex: gIdx, text: text });
  });
});

let currentQuestionIdx = 0;
let tarotScores = new Array(9).fill(0);
let currentResultCode = "";
let currentResultTitle = "";

function initTarotQuiz() {
  currentQuestionIdx = 0;
  tarotScores = new Array(9).fill(0);
  renderQuestion();
}

function renderQuestion() {
  if (currentQuestionIdx >= flattenedQuestions.length) {
    showTarotResult();
    return;
  }
  const item = flattenedQuestions[currentQuestionIdx];
  document.getElementById('question-text').innerText = item.text;
  document.getElementById('progress-text').innerText = `${currentQuestionIdx + 1} / ${flattenedQuestions.length}`;
  const pct = ((currentQuestionIdx + 1) / flattenedQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = `${pct}%`;
}

function answerQuestion(score) {
  const catIdx = flattenedQuestions[currentQuestionIdx].catIndex;
  tarotScores[catIdx] += score;
  currentQuestionIdx++;
  renderQuestion();
}

function showTarotResult() {
  let bestIdx = 0;
  let maxScore = -1;
  tarotScores.forEach((val, idx) => {
    if (val > maxScore) {
      maxScore = val;
      bestIdx = idx;
    }
  });

  const cat = TAROT_CATS[bestIdx];
  currentResultCode = cat.code;
  currentResultTitle = `[타로] ${cat.subTitle} ${cat.name}`;

  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('result-view').style.display = 'block';

  document.getElementById('res-img').src = cat.image;
  document.getElementById('res-sub').innerText = `✨ ${cat.subTitle}`;
  document.getElementById('res-title').innerText = cat.name;
  document.getElementById('res-keywords').innerText = cat.keywords;
  document.getElementById('res-summary').innerText = cat.teaser;
}

/* =========================================================
   2. 사주 오행 5종 소냥이 데이터 & 만세력 산출
========================================================= */
const SAJU_CATS = {
  "목": {
    code: "ELEM_WOOD",
    name: "쑥쑥냥",
    elementTitle: "목(木) - 성장의 에너지",
    keywords: "성장 · 배움 · 가능성",
    image: "images/wood.jpg",
    teaser: "씨앗을 뚫고 자라나는 새싹처럼 새로운 배움과 성장의 에너지를 품고 태어난 쑥쑥냥입니다. 곧은 추진력이 뛰어나지만 시작한 일을 맺는 끈기가 필요합니다.",
    fullReport: `[쑥쑥냥 (목 기운) 심층 사주 풀이]
• 본원 특성: 생명력, 기획력, 끊임없는 호기심과 도덕성을 상징합니다.
• 운의 흐름: 새로운 시작과 아이디어가 넘치나, 불(火) 기운의 표현력과 흙(土)의 정착력이 부족하면 중도에 지칠 수 있습니다.
• 연애/대인관계: 상대방을 잘 챙기고 이끌지만, 때때로 융통성이 부족해 '내 방식이 옳다'고 고집부릴 수 있습니다.
• 보완 개운법: 푸른색 의상, 식물 기르기, 일의 마무리 리스트를 작성하여 완결 짓는 습관을 기르면 대운이 활짝 열립니다.`
  },
  "화": {
    code: "ELEM_FIRE",
    name: "활활냥",
    elementTitle: "화(火) - 열정의 에너지",
    keywords: "열정 · 도전 · 성장",
    image: "images/fire.jpg",
    teaser: "세상을 환하게 비추는 태양처럼 뜨거운 열정과 솔직한 매력을 지닌 활활냥입니다. 밝고 당당하지만 감정의 불꽃이 쉽게 타올라 쉽게 방전될 수 있습니다.",
    fullReport: `[활활냥 (화 기운) 심층 사주 풀이]
• 본원 특성: 예의, 솔직함, 정열, 화려함을 주관하며 어두운 곳을 밝히는 빛입니다.
• 운의 흐름: 행동력과 대인관계 흡인력이 최상이지만, 감정 조절이 서투르면 말실수로 구설에 오르거나 금방 지치기 쉽습니다.
• 연애/대인관계: 뜨겁고 로맨틱한 연애를 선호하지만, 불꽃처럼 타오르다 식어버리는 권태기를 주의해야 합니다.
• 보완 개운법: 붉은색보다 차분한 수(水) 기운인 네이비/블랙 계열 소품, 명상과 차분한 호흡으로 내면의 열기를 식혀주세요.`
  },
  "토": {
    code: "ELEM_EARTH",
    name: "든든냥",
    elementTitle: "토(土) - 안정의 에너지",
    keywords: "안정 · 신뢰 · 꾸준함",
    image: "images/earth.jpg",
    teaser: "만물을 품어주는 넓은 대지처럼 깊은 신뢰와 묵직한 포용력을 지닌 든든냥입니다. 속마음을 잘 드러내지 않아 오해를 사거나 홀로 앓을 수 있습니다.",
    fullReport: `[든든냥 (토 기운) 심층 사주 풀이]
• 본원 특성: 신용, 중재자, 포용력, 꾸준함을 상징하며 사람들을 이어주는 징검다리 역할을 합니다.
• 운의 흐름: 큰 굴곡 없이 단단하게 자산을 축적하지만, 지나치게 보수적이라 새로운 기회를 놓칠 수 있습니다.
• 연애/대인관계: 한결같고 믿음직스럽지만 무뚝뚝하고 고집이 세 상대방이 외로움을 느낄 수 있습니다.
• 보완 개운법: 부드러운 산책, 속마음을 주기적으로 일기에 털어놓기, 과감한 결정력을 훈련하면 큰 운을 거머쥡니다.`
  },
  "금": {
    code: "ELEM_METAL",
    name: "반짝금냥",
    elementTitle: "금(金) - 원칙의 에너지",
    keywords: "정확함 · 신뢰 · 성취",
    image: "images/metal.jpg",
    teaser: "단단한 바위와 빛나는 보석처럼 칼 같은 결단력과 확고한 원칙을 지닌 반짝금냥입니다. 의리가 깊고 정직하지만 냉철한 기준 탓에 다가가기 어려울 수 있습니다.",
    fullReport: `[반짝금냥 (금 기운) 심층 사주 풀이]
• 본원 특성: 의리, 결단력, 완결성, 정밀함을 주관하는 단단한 원칙주의자입니다.
• 운의 흐름: 마무리가 뛰어나고 전문 분야에서 두각을 나타내지만, 융통성이 부족하면 주변 사람과의 마찰이 잦습니다.
• 연애/대인관계: 맺고 끊음이 확실하여 뒤끝은 없으나, 냉정한 말 한마디로 연인의 가슴에 상처를 줄 수 있습니다.
• 보완 개운법: 백색보다는 따스한 목(木) 기운의 우드 인테리어, 상대방의 실수를 부드럽게 넘어가 주는 유연함을 품어보세요.`
  },
  "수": {
    code: "ELEM_WATER",
    name: "찰랑냥",
    elementTitle: "수(水) - 지혜의 에너지",
    keywords: "지혜 · 통찰 · 유연함",
    image: "images/water.jpg",
    teaser: "굽이쳐 흐르는 강물처럼 유연한 적응력과 깊은 지혜를 품고 태어난 찰랑냥입니다. 생각이 너무 깊어 밤마다 잠 못 드는 고민과 방황에 빠지기 쉽습니다.",
    fullReport: `[찰랑냥 (수 기운) 심층 사주 풀이]
• 본원 특성: 지혜, 통찰력, 영민함, 임기응변을 주관하며 상황에 맞춰 변신하는 물과 같습니다.
• 운의 흐름: 위기 극복 능력이 탁월하고 학습 능력이 빠르나, 잡생각이 많고 우울감에 빠지기 쉽습니다.
• 연애/대인관계: 공감 능력이 좋아 인기가 많지만, 속마음을 끝까지 감춰 진솔한 관계 형성에 시간이 걸립니다.
• 보완 개운법: 밝은 조명, 햇볕 쬐기, 생각을 즉시 행동으로 옮기는 단호한 루틴을 가지면 사주의 격이 극대화됩니다.`
  }
};

const HEAVENLY_STEMS_MAP = {
  0: { stem: "갑(甲)", elem: "목" },
  1: { stem: "을(乙)", elem: "목" },
  2: { stem: "병(丙)", elem: "화" },
  3: { stem: "정(丁)", elem: "화" },
  4: { stem: "무(戊)", elem: "토" },
  5: { stem: "기(己)", elem: "토" },
  6: { stem: "경(庚)", elem: "금" },
  7: { stem: "신(辛)", elem: "금" },
  8: { stem: "임(壬)", elem: "수" },
  9: { stem: "계(癸)", elem: "수" }
};
const EARTHLY_BRANCHES = ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(戌)", "해(亥)"];

function calculateSaju() {
  const birthInput = document.getElementById('saju-birth').value;
  if (!birthInput) {
    alert("생년월일을 선택해주세요.");
    return;
  }

  const birthDate = new Date(birthInput);
  const baseDate = new Date(1900, 0, 31);
  const diffDays = Math.floor((birthDate - baseDate) / (1000 * 60 * 60 * 24));

  const stemIdx = (diffDays % 10 + 10) % 10;
  const branchIdx = (diffDays % 12 + 12) % 12;

  const stemObj = HEAVENLY_STEMS_MAP[stemIdx];
  const branch = EARTHLY_BRANCHES[branchIdx];
  const iljuName = `${stemObj.stem}${branch} 일주`;

  const sajuCat = SAJU_CATS[stemObj.elem];
  currentResultCode = sajuCat.code;
  currentResultTitle = `[사주] ${iljuName} - ${sajuCat.name} (${sajuCat.elementTitle})`;

  document.getElementById('saju-input-view').style.display = 'none';
  document.getElementById('saju-result-view').style.display = 'block';

  document.getElementById('saju-res-img').src = sajuCat.image;
  document.getElementById('saju-badge').innerText = `🌟 ${sajuCat.elementTitle}`;
  document.getElementById('saju-res-title').innerText = sajuCat.name;
  document.getElementById('saju-keywords').innerText = sajuCat.keywords;
  document.getElementById('saju-summary').innerText = sajuCat.teaser;
}

/* =========================================================
   3. 모달 & 신청 접수 로직
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
        resultCode: currentResultCode,
        resultTitle: currentResultTitle
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
    alert("서버 통신 중 오류가 발생했습니다.");
  }
}
