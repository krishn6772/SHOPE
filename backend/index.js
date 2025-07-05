import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter.js';
dotenv.config();
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRouter.js';

let port = process.env.PORT || 6000;

let app = express();
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["https://shope-frontend.onrender.com", "http://localhost:5174"], // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));
// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send('Hello From Server!');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    connectDB();
});
