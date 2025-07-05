import express from 'express'
import isAuth from '../middleware/isAuth.js';
import { allOrders, placeOrder, updateStatus, userOrders } from '../controller/orderController.js';

const orderRouter = express.Router();

// for User
orderRouter.post("/placeorder", isAuth, placeOrder)
orderRouter.post("/userorder", isAuth, userOrders)

// for Admin
orderRouter.post("/list", isAuth, allOrders)
orderRouter.post("/status", isAuth, updateStatus)

export default orderRouter;