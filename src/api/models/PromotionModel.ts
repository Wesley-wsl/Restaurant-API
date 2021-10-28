import mongoose from "mongoose";

const PromotionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    price_promotional: { type: Number, required: true },
    week_days: { type: String, required: true },
    schedule: { type: String, required: true },
});

export default mongoose.model("promotion", PromotionSchema);
