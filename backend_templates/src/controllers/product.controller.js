import { Product } from "../models/product.model.js"

//create product api
export const createProduct = async (req,res)=> {
    try {

        const product = new Product(req.body)
        await product.save()

        return res.status(201).json({
            message: 'Product created successfully',
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred while creating product',
            details: error.message
        })
    }
}

//get all products api
export const getProducts = async (req, res)=> {
    try {

        const product = await Product.find()

        return res.json(product)
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting products",
            details: error.message
        })
    }
}

//get product by id
export const getProductById = async (req,res)=> {
    try {

        const {id} = req.params

        const product = await Product.findById(id)

        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.json(product);
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting product by ID",
            details: error.message
        })
    }
}

//update product api
export const updateProduct = async (req,res)=> {
    try {

        const {id} = req.params
        
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.json({message: "Product updated successfully", product})
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while updating product",
            details: error.message
        })
    }
}

//delete product api
export const deleteProduct = async (req,res)=> {
    try {

        const { id} = req.params

        const product = await Product.findByIdAndDelete(id)
        
        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.json({message: 'Product Deleted successfully'});
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting product",
            details: error.message
        })
    }
}

//product views api
export const productView = async (req,res)=> {
    try {

        const {id} = req.params;

        const product = await Product.findById(id)
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while viewing product",
            details: error.message
        })
    }
}