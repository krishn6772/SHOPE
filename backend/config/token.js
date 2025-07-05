import jwt from "jsonwebtoken";

export const genToken = async (userId) => {
    try {
    let token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
    } catch (error) {
        console.log("Token generation failed");
    }
}

export const genToken1 = async (email) => {
    try {
    let token = await jwt.sign({email }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
    } catch (error) {
        console.log("Token generation failed");
    }
}