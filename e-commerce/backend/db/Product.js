const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: String,
    category: String,
    UserId: String,
    company: String
});

const Product = mongoose.model("products", ProductSchema)
module.exports = Product;