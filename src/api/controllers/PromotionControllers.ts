import { Request, Response } from "express";
import PromotionServices from "../services/PromotionServices";

export default {
    async createPromotions(req: Request, res: Response) {
        const { id } = req.params;
        const { description, price_promotional, week_days, schedule } =
            req.body;

        const promotionCreated = await PromotionServices.createPromotion({
            id,
            description,
            price_promotional,
            week_days,
            schedule,
        });

        return res.status(201).json(promotionCreated);
    },
    async updatePromotion(req: Request, res: Response) {
        const { id } = req.params;

        const { description, price_promotional, week_days, schedule } =
            req.body;

        const promotionUpdated = await PromotionServices.updatePromotion({
            id,
            description,
            price_promotional,
            week_days,
            schedule,
        });

        return res.status(200).json(promotionUpdated);
    },

    async getPromotionsFromProduct(req: Request, res: Response) {
        const { id } = req.params;

        const listPromotions = await PromotionServices.getPromotionsFromProduct(
            {
                id,
            }
        );

        return res.status(200).json(listPromotions);
    },
};
