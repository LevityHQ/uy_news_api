const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
const NewsSchema = new Schema({
    publish_date: { type: Date },
    title: { type: String },
    subtitle: { type: String },
    category: { type: String },
    description: { type: String },
    author: { type: String },
    link: { type: String },
    feed: { type: Schema.Types.ObjectId, ref: 'feed' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

NewsSchema.plugin(mongoosePaginate);

const NewsModel = mongoose.model('news', NewsSchema);

module.exports = NewsModel;

