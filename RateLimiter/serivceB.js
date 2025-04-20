const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/process', (req, res) => {
  console.log('Nhận request từ Service A:', req.body);
  
  res.json({
    status: 'success',
    message: 'Dữ liệu đã được xử lý bởi Service B',
    data: req.body
  });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Service B đang chạy tại http://localhost:${PORT}`);
}); 