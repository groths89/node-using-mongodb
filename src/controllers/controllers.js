import mongoose from 'mongoose';
import ProductSchema from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        res.json(Product)
    });
}

export const getProducts = (req, res) => {

    Product.find({}, (err, Product) => {
        if (!req.body)
            throw err;
        res.json(Product);
    });
}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if(!req.body)
            throw err;
        res.json(Product);
    });
}