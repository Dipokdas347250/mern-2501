const asyncHandler = require("../utils/asyncHandler");

exports.productsController = asyncHandler(async(req, res) => {
    res.send("Products Controller new main");
});