app.post('/api/apply', (req, res) => {
  try {
    const { type, name, phone, email, story, resultTitle, resultCode } = req.body;
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
      resultCode: resultCode || '',
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
