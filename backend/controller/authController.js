import User from "../model/userModel.js"
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";

export const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if(!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter a valid Email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter Strong Password" });
        }
        let hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        return res.status(201).json(user);
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: `Registration error: ${error}` });
    } 
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        return res.status(201).json(user);
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: `Login error: ${error}` });
    }   
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "None", // or "Lax" depending on your setup
            secure: true      // required if using HTTPS
        });
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: `Logout error: ${error}` });
    }
}

export const googleLogin = async (req, res) => {
    try {
        let { name, email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email });
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error("Google login error:", error);
        return res.status(500).json({ message: `Google login error: ${error}` });
    }
}

export const adminLogin = async (req, res) => {
    try {
        let { email, password } = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            let token = await genToken1(email);
            res.cookie("token", token, {
                httpOnly: true,
                secure: true, // Set to true if using HTTPS
                sameSite: "none",
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
            });
            return res.status(200).json(token);
        }
        return res.status(400).json({ message: "Invalid admin credentials" });
    } catch (error) {
        console.error("Admin login error:", error);
        return res.status(500).json({ message: `Admin login error: ${error}` });
    }
}
