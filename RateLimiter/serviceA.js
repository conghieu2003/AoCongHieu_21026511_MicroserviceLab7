const express = require('express');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5,
  message: 'Quá yêu cầu, chờ thử lại sau 1 phút'
});

app.use(limiter);

app.post('/api/data', async (req, res) => {
  try {
    console.log('Nhận request từ Postman:', req.body);
    
    const response = await axios.post('http://localhost:3002/api/process', req.body);
    
    res.status(200).json({
      message: 'Xử lý thành công',
      data: response.data
    });
  } catch (error) {
    console.error('Lỗi:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Service A đang chạy tại http://localhost:${PORT}`);
  console.log('Rate Limiter: 5 request/phút');
}); 