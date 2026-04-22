import jwt from "jsonwebtoken";

const auth = (req, res, next)=>{
    const header = req.headers.authorization || "";
    // Accept both "Bearer <token>" and a raw token for backwards compatibility
    const token = header.startsWith("Bearer ") ? header.slice(7) : header;

    if(!token){
        return res.status(401).json({success: false, message: "Not authorized, token missing"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({success: false, message: "Invalid or expired token"})
    }
}

export default auth;