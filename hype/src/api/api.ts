import axios from 'axios';

const API_URL = 'https://animated-telegram-g44xwxv47g5ghxgw-5000.app.github.dev/api/users';

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};