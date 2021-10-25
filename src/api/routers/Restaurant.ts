import express from "express";
import RestaurantControllers from "../controllers/RestaurantControllers";
import isValidId from "../middlewares/isValidId";

const routes = express.Router();

routes.get("/", RestaurantControllers.getAllRestaurants);
routes.post("/", RestaurantControllers.registerRestaurant);
routes.get("/:id", isValidId, RestaurantControllers.findRestaurantById);
routes.put("/:id", isValidId, RestaurantControllers.updateRestaurant);
routes.delete("/:id", isValidId, RestaurantControllers.deleteRestaurant);

export { routes as RestaurantRoutes };
