import { Request, Response } from "express";
import RestaurantServices from "../services/RestaurantServices";

export default {
    async getAllRestaurants(req: Request, res: Response) {
        const allRestaurant =
            await RestaurantServices.getAllRestaurantsService();

        res.status(200).json(allRestaurant);
    },

    async registerRestaurant(req: Request, res: Response) {
        const { name, restaurant_image, address, opening_hours, products } =
            req.body;

        const registeredRestaurant =
            await RestaurantServices.registerRestaurantService({
                name,
                restaurant_image,
                address,
                opening_hours,
                products,
            });

        return res.status(201).json(registeredRestaurant);
    },

    async findRestaurantById(req: Request, res: Response) {
        const { id } = req.params;

        const restaurant = await RestaurantServices.findRestaurantByIdService({
            id,
        });

        return res.status(200).json(restaurant);
    },

    async updateRestaurant(req: Request, res: Response) {
        const { id } = req.params;
        const { name, restaurant_image, address, opening_hours } = req.body;

        const restaurantUpdated =
            await RestaurantServices.updateRestaurantService({
                name,
                restaurant_image,
                address,
                opening_hours,
                id,
            });

        return res.status(200).json(restaurantUpdated);
    },

    async deleteRestaurant(req: Request, res: Response) {
        const { id } = req.params;

        const restaurantDeleted =
            await RestaurantServices.deleteRestaurantService({ id });

        return res.status(204).json(restaurantDeleted);
    },
};
