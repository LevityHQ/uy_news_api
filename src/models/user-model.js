const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
const ROLES = ['admin', 'guest'];
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true},
    name: { type: String },
    password: { type: String },
    role: {type: String, enum: ROLES, required: true},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

UserSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;

