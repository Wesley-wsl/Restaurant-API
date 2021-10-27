import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    product_image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    promotion: [{ type: mongoose.Schema.Types.ObjectId, ref: "Promotion" }],
});

export default mongoose.model("products", ProductsSchema);
