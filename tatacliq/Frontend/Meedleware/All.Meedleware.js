
import jwt from "jsonwebtoken";
import UserModals from "../Modals/User.Modals.js";


export const checkseller = async (req, res, next) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(404).json({success: false, message: "Token is mandtory.." })

        const decodedData = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({success: false, message: "Token not valid." })
        }

        const userId = decodedData.userId;

        const user = await UserModals.findById(userId)

        if (!user || user?.role != "Seller") {
            return res.status(404).json({success: false, message: "User not valid to add product from middleware." })
        }
        next();
    } catch (error) {
        return res.status(500).json({success: false, message: error.response.data.message })
    }
} 


