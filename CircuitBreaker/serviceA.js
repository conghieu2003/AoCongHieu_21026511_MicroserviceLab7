
const axios = require('axios');

const callServiceB = async () => {
    try {
        console.log('Gửi yêu cầu đến serviceB...');
        const response = await axios.get('http://localhost:3000', { timeout: 3000 });
        console.log('Phản hồi từ serviceB:', response.data);
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.error('Yêu cầu đến serviceB đã bị timeout.');
        } else {
            console.error('Lỗi khi gọi serviceB:', error.message);
        }
    }
};

callServiceB();