const { default: mongoose } = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },

    discount: {
        type: Number,
        default: 0,
    },
    subcategories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Subcategory',
    }],


}, {
    timestamps: true,
});
module.exports = mongoose.model("categoryModle", categorySchema);