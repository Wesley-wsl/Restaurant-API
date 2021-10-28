import PromotionModel from "../models/PromotionModel";
import ProductsModel from "../models/ProductsModel";
import { id, iPromotion } from "../@types";
export default {
    async createPromotion({
        id,
        description,
        price_promotional,
        week_days,
        schedule,
    }: iPromotion) {
        const promotionCreated = await PromotionModel.create({
            description,
            price_promotional,
            week_days,
            schedule,
        });

        const insertPromotionInProduct = await ProductsModel.findById({
            _id: id,
        });

        if (insertPromotionInProduct === null) {
            throw new Error("Product don't exists.");
        }

        insertPromotionInProduct.promotion.push(promotionCreated._id);

        insertPromotionInProduct.save();

        return promotionCreated;
    },

    async updatePromotion({
        id,
        description,
        price_promotional,
        week_days,
        schedule,
    }: iPromotion) {
        const promotionUpdated = await PromotionModel.findByIdAndUpdate(
            { _id: id },
            {
                description,
                price_promotional,
                week_days,
                schedule,
            },
            {
                new: true,
            }
        );

        if (promotionUpdated === null) {
            throw new Error("Product don't exists.");
        }

        return promotionUpdated;
    },

    async getPromotionsFromProduct({ id }: id) {
        const promotions = await ProductsModel.findById({ _id: id }).populate({
            path: "promotion",
        });

        if (promotions === null) {
            throw new Error("Product don't exists");
        }

        return promotions.promotion;
    },
};
