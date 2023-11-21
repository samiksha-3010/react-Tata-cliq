// import ProductModal from "./../modal/Product.Modal.js";
// import User from "./../modal/UserModals.js";

import UserModals from "../Modals/User.Modals.js";
import ProductModal from "./../Modals/Product.Modal.js";



// export const deleteYourProduct = async (req, res) => {
//     try {
//         const { productId, token } = req.body;

//         if (!productId) return res.status(404).json({ status: "error", message: "Product id is mandtory.." })

//         const decodedData = jwt.verify(token, process.env.JWT_SECRET);
//         const userId = decodedData.userId;

//         const isDeleted = await ProductModal.findOneAndDelete({ _id: productId, userId: userId })
//         if (isDeleted) {
//             return res.status(200).json({ success: true, message: "Product Deleted Successfully." })
//         }
        
//         throw new Error("Mongodb error")

//     } catch (error) {
//         return res.status(500).json({ status: "error", error: error.message })
//     }
// }




////////////////////delite/////////////////



export const getSingleProductData = async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) return res.status(404).json({ success: false, message: "Product id is mandtory.." })

        const product = await ProductModal.findById(productId);
        if (product) {
            return res.status(200).json({ success: true, product })
        }
        return res.status(404).json({ success: false, error: "Products details not found." })

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
}



export const addToCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        console.log(userId)
        if (!productId) return res.status(404).json({ success: false, message: "Product id is mandtory.." })
        if (!userId) return res.status(404).json({ success: false, message: "Usur id is mandtory.." })
      

        const user = await UserModals.findByIdAndUpdate(userId, { $push: { cart: productId } })
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })


        return res.status(200).json({ success: true })

    } catch (error) {
        console.log(error, "error")
        return res.status(500).json({ success: false, error: error.message })
    }
}

export const allCartProducts = async (req, res) => {
    try {
        const {userId } = req.body;
        if (!userId) return res.status(404).json({ success: false, message: "User id is mandtory.." })

        const user = await user.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        var finalData = [];
        var array = user?.cart;
        for (var i = 0; i < array?.length; i++) {
            const productData = await ProductModal.findById(array[i])
            if (productData) {
                finalData.push(productData)
            }
        }
        return res.status(200).json({ success: true, cartProducts: finalData })

    } catch (error) {
        console.log(error, "error")
        return res.status(500).json({ success: false, error: error.message })
    }
}
