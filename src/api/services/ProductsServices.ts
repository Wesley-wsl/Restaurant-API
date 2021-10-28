import ProductsModel from "../models/ProductsModel";
import RestaurantModel from "../models/RestaurantModel";
import { id, iProduct } from "../@types";

export default {
    async listProducts({ id }: id) {
        const restaurantTarget = await RestaurantModel.findById({
            _id: id,
        }).populate({ path: "products" });
        const allProducts: Array<object> = [];

        if (restaurantTarget === null) {
            throw new Error("Restaurant don't exists.");
        }

        restaurantTarget.products.forEach((element: object) => {
            allProducts.push(element);
        });

        return allProducts;
    },

    async createProduct({
        name,
        product_image,
        price,
        category,
        id,
    }: iProduct) {
        const productExists = await ProductsModel.findOne({ name });

        if (productExists) {
            throw new Error("Product already exists");
        }

        let findRestaurant = await RestaurantModel.findById({ _id: id });

        if (findRestaurant === null) {
            throw new Error("Restaurant don't exists.");
        }

        const createProduct = await ProductsModel.create({
            name,
            product_image,
            price,
            category,
        });

        findRestaurant.products.push(createProduct._id);

        await findRestaurant.save();

        return createProduct;
    },

    async updateProduct({
        id,
        name,
        price,
        product_image,
        category,
        promotion = [],
    }: iProduct) {
        const productUpdated = await ProductsModel.findByIdAndUpdate(
            { _id: id },
            {
                name,
                price,
                product_image,
                category,
                promotion,
            },
            { new: true }
        );

        if (productUpdated === null) {
            throw new Error("Product don't exists.");
        }

        return productUpdated;
    },

    async deleteProducts({ id }: id) {
        const productDeleted = await ProductsModel.findByIdAndDelete({
            _id: id,
        });

        if (productDeleted === null) {
            throw new Error("Product don't exists.");
        }

        return productDeleted;
    },
};
