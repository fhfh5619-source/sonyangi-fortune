const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "sonyangi777"; // 관리자 암호

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'applications.json');

// 폴더 및 파일 초기화
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 신청 접수 API
app.post('/api/apply', (req, res) => {
  try {
    const { type, name, phone, email, story, resultTitle } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: '이름과 연락처를 입력해주세요.' });
    }

    const currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const newEntry = {
      id: Date.now(),
      type: type || '타로상담',
      name,
      phone,
      email: email || '-',
      story: story || '없음',
      resultTitle: resultTitle || '미지정',
      createdAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      status: '신청접수'
    };

    currentData.unshift(newEntry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));

    return res.json({ success: true, message: '신청이 정상적으로 완료되었습니다.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: '서버 에러가 발생했습니다.' });
  }
});

// 관리자 목록 조회 API
app.post('/api/admin/list', (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: '비밀번호가 올바르지 않습니다.' });
  }
  const currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  res.json({ success: true, list: currentData });
});

// 관리자 상태 변경 API
app.post('/api/admin/update-status', (req, res) => {
  const { password, id, status } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: '인증 실패' });
  }
  const currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  const target = currentData.find(item => item.id === id);
  if (target) {
    target.status = status;
    fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));
    return res.json({ success: true });
  }
  res.status(404).json({ success: false, message: '해당 신청을 찾을 수 없습니다.' });
});

app.listen(PORT, () => {
  console.log(`🔮 소냥이 포춘살롱 서버가 실행되었습니다: http://localhost:${PORT}`);
});
