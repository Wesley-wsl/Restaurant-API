import express from "express";
import ProductsControllers from "../controllers/ProductsControllers";
import isValidId from "../middlewares/isValidId";

const routes = express.Router();

routes.get("/:id", isValidId, ProductsControllers.listProducts);
routes.post("/:id", isValidId, ProductsControllers.createProducts);
routes.put("/:id", isValidId, ProductsControllers.updateProducts);
routes.delete(
    "/:idRestaurant/:id",
    isValidId,
    ProductsControllers.deleteProducts
);

export { routes as ProductRoutes };
