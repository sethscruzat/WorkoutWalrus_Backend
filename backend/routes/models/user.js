const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* Hindi pa final, hindi pa kasi ako sure kung anong mga
    document/field ang pwede sa database */
    userID: String,
    name: String,
    birthday: Date,
    username: String,
    height: Number,
    weight: Number,
    totalCalBurned: Number
});

userSchema.set('collection', 'profile')

const User = mongoose.model('User', userSchema);

module.exports = User;
