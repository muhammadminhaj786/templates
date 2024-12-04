import mongoose from 'mongoose'


export const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    media: {
        type: String
    }

},{
    timestamps: true
})


export const Product = mongoose.model('products', ProductSchema);