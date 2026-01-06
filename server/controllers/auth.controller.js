const userModel = require("../models/user.model");

exports.signupController = async (req, res) => {

    let { fullname, email, password, phone, address, photo } = req.body;

    let user = new userModel({
        fullname, email, password, phone, address, photo
    })

    await user.save()
    res.send(user);


}
exports.productsController = (req, res) => {
    res.send("Products Controller");
}

