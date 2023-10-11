import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from "cors"
import { Login, Register, getCurrentUser } from './Controolers/User.Controolers.js';
import { addProduct, allProducts, getYourProducts, updateYourProduct } from './Controolers/Sellers.Controolers.js';
import { removeAllCartProducts, removecartproduct } from './Controolers/Buyer.controller.js';
import { addToCart, allCartProducts, getSingleProductData } from './Controolers/product.Controolers.js';
import { checkseller } from './Meedleware/All.Meedleware.js';



const app = express();
app.use(express.json())
dotenv.config();
app.use(cors())


app.get("/", (req, res) => {
    res.send("Working...samiksha..backend")
})
//ALL
app.post("/register", Register)
app.post("/login", Login)
app.post("/get-current-user",getCurrentUser )
app.get("/all-products", allProducts)

// BUYER
app.post('/cart',addToCart)
app.post('/get-single-product-data',getSingleProductData)
app.post('/your-cart-product',allCartProducts)
app.post('/remove-all-cart-products',removeAllCartProducts)
app.post('/remove-cart-product',removecartproduct)



//Seller

app.post('/get-your-product' , checkseller, getYourProducts) 
app.post('/add-product',checkseller,addProduct )  
app.post('/edit-product', updateYourProduct)




mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB...")
})

app.listen(8000, () => {
    console.log("Listening on port 8000")
})