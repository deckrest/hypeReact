// backend/UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true }
});

const UserModel = mongoose.model('User', userSchema); // 'User' - это имя коллекции

module.exports = UserModel;
