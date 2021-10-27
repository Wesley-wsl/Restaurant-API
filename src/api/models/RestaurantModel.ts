import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    restaurant_image: { type: String, required: true },
    address: { type: String, required: true },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
        },
    ],
    opening_hours: { type: String, required: true },
    created_at: { type: Date, default: Date.now(), required: true },
    updated_at: { type: Date, default: Date.now(), required: true },
});

export default mongoose.model("Restaurant", RestaurantSchema);
