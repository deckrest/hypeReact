const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const UserModel = require('./UserModel');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware


app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  app.use(cors({
    origin: 'https://animated-telegram-g44xwxv47g5ghxgw-5173.app.github.dev', // Укажите домен вашего клиентского приложения
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    credentials: true // Если вам нужны куки или авторизация
}));
// Пример маршрута для получения данных
app.get('/api/users', async (req, res) => {
    try {
        const data = await UserModel.find(); // Получаем всех пользователей из коллекции
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении данных' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});