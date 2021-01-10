const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true},
    name: { type: String },
    last_name: { type: String }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

UserSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;

