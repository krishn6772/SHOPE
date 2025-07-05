import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Validate file and images
        if (!req.files || !req.files.image1 || !req.files.image2 || !req.files.image3 || !req.files.image4) {
            return res.status(400).json({ message: "Missing one or more image files" });
        }

        let image1, image2, image3, image4;
        console.log(image1, image2, image3, image4, "Images")
        try {
            image1 = await uploadOnCloudinary(req.files.image1[0].path);
            image2 = await uploadOnCloudinary(req.files.image2[0].path);
            image3 = await uploadOnCloudinary(req.files.image3[0].path);
            image4 = await uploadOnCloudinary(req.files.image4[0].path);
        } catch (imgErr) {
            console.log("Cloudinary upload error", imgErr);
            return res.status(500).json({ message: `Image upload error: ${imgErr}` });
        }

        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        };

        console.log(productData, "Product details");
        const product = await Product.create(productData);

        return res.status(201).json(product);
    } catch (error) {
        console.log("AddProduct error", error);
        return res.status(500).json({ message: `AddProduct error: ${error}` });
    }
}

export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({});
        return res.status(200).json(product)
    } catch (error) {
       console.log("ListProduct error", error);
        return res.status(500).json({ message: `ListProduct error: ${error}` });
    }
}

export const removeProduct = async (req, res) => {
    try {
        let {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: `RemoveProduct error: ${error}` });
    }
}