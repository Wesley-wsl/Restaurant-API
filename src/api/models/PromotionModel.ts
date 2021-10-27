import mongoose from "mongoose";

const PromotionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    price_promotional: { type: Number, required: true },
    week_days: { type: String, required: true },
    schedule: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
});

export default mongoose.model("Promotion", PromotionSchema);
