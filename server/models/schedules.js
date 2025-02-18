const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedulesSchema = new Schema(
    {
        sessionType: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: false,
        },
        user: {
            type: String,
            required: true,
        },
        perSessionLength: {
            type: Number,
            required: true,
        },
        offDay: {
            type: Array,
            required: true,
            default: [],
        },
        timeSlots: {
            type: Array,
            required: true,
            default: [],
        },
        sessionFee: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Schedules', schedulesSchema);
