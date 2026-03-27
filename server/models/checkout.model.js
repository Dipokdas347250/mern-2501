const mongoose = require("mongoose");
const {Schema} = mongoose;

const shippingSchema = new Schema({
    phone:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    district:{
        type: String,
        require: true,
    },
    postcode:{
        type: String
    },
},
{
    _id: false
}
)



const orderSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    totalprice:{
        type: Number,
        require: true,
    },
    cart:{
        type: mongoose.Types.ObjectId,
        ref: "Cart"
    },
    shipping : shippingSchema,
    paymentMethod:{
        type: String,
        enum: ["cod ", "online"],
        require: true,
    },
    deliveryStatus:{
        type: String,
        enum: ["pending", "confirm", "deliverd", "cenceled"],
        default: "pending"
    }
})

module.exports = mongoose.model("Order",orderSchema)