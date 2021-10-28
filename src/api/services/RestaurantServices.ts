import { iRestaurant, id } from "../@types";
import RestaurantModel from "../models/RestaurantModel";

export default {
    async getAllRestaurantsService() {
        const allRestaurants = await RestaurantModel.find().populate(
            "products"
        );

        return allRestaurants;
    },
    async registerRestaurantService({
        name,
        address,
        opening_hours,
        restaurant_image,
        products,
    }: iRestaurant) {
        const restaurantAlreadyExists = await RestaurantModel.findOne({ name });

        if (restaurantAlreadyExists) {
            throw new Error("Restaurant name already exists.");
        }

        const registerRestaurant = RestaurantModel.create({
            name,
            address,
            opening_hours,
            restaurant_image,
            products,
        });

        return registerRestaurant;
    },

    async findRestaurantByIdService({ id }: id) {
        const restaurant = await RestaurantModel.findById({ _id: id }).populate(
            { path: "products" }
        );

        if (restaurant === null) {
            throw new Error("Restaurant don't exists.");
        }

        return restaurant;
    },

    async updateRestaurantService({
        id,
        name,
        address,
        opening_hours,
        restaurant_image,
    }: iRestaurant) {
        const restaurantUpdated = await RestaurantModel.findByIdAndUpdate(
            { _id: id },
            { name, address, opening_hours, restaurant_image },
            { new: true }
        );

        if (restaurantUpdated === null) {
            throw new Error("Restaurant don't exists.");
        }

        return restaurantUpdated;
    },

    async deleteRestaurantService({ id }: id) {
        const restaurantDeleted = await RestaurantModel.findByIdAndDelete({
            _id: id,
        });

        if (restaurantDeleted === null) {
            throw new Error("Restaurant don't exists.");
        }

        return restaurantDeleted;
    },
};
