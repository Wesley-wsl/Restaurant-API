import express from "express";
import PromotionControllers from "../controllers/PromotionControllers";
import isValidId from "../middlewares/isValidId";

const routes = express.Router();

routes.post("/:id", isValidId, PromotionControllers.createPromotions);
routes.put("/:id", isValidId, PromotionControllers.updatePromotion);
routes.get("/:id", isValidId, PromotionControllers.getPromotionsFromProduct);

export { routes as PromotionRoutes };
