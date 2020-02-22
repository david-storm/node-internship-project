const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    fullName: {
        type: String,
        trin: true
    }
}, {
    collection: 'usermodel',
    versionKey: false
});

module.exports = connections.model('UserModel', UserSchema);