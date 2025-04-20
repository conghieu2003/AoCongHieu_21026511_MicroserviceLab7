
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const delay = 5000;
    setTimeout(() => {
        res.send('Phản hồi từ serviceB sau khi chờ đợi');
    }, delay);
});

app.listen(PORT, () => {
    console.log('serviceB đang chạy tại http://localhost:' + PORT);
});