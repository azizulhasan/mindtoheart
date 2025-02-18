const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Services', ServicesSchema);
