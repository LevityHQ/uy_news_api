const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
const FeedSchema = new Schema({
    name: { type: String, required: true },
    feed: { type: String, required: true },
    target: { type: String, required: true },
    cron: { type: String }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

FeedSchema.plugin(mongoosePaginate);

const FeedModel = mongoose.model('media', FeedSchema);

module.exports = FeedModel;

