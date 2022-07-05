const mongoose = require ("mongoose");

const productSchema = mongoose.Schema({
   title: String,
   
   price: Number,
   
});
const ProductModel = mongoose.model("Post", productSchema);
module.exports = ProductModel;