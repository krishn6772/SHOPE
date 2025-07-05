import User from "../model/userModel.js"

export const getCurrentUser = async (req, res) => {
    try {
        let user = await User.findById(req.userId).select("-password");
        console.log("Current user data:", user);
        console.log("User ID from request:", req.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `getCurrentUser error: ${error}` });
    }
}

export const getAdmin = async (req, res) => {
    try {
        let adminEmail = req.adminEmail;
        if (!adminEmail) {
            return res.status(400).json({ message: "Admin is not found" });
        }
        return res.status(200).json({
            email: adminEmail,
            role: "admin"
        });
    } catch (error) {
        console.error("Get admin error:", error);
        return res.status(500).json({ message: `Get admin error: ${error}` });
        
    }
}
