import { Request, Response } from "express";
import ProductsServices from "../services/ProductsServices";

export default {
    async listProducts(req: Request, res: Response) {
        const { id } = req.params;
        const productsListed = await ProductsServices.listProducts({ id });

        return res.status(200).json(productsListed);
    },

    async createProducts(req: Request, res: Response) {
        const { name, product_image, price, category } = req.body;
        const { id } = req.params;

        const productCreated = await ProductsServices.createProduct({
            name,
            product_image,
            price,
            category,
            id,
        });

        return res.status(201).json(productCreated);
    },

    async updateProducts(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, product_image, category, promotion } = req.body;

        const productUpdated = await ProductsServices.updateProduct({
            id,
            name,
            price,
            product_image,
            category,
            promotion,
        });

        return res.status(200).json(productUpdated);
    },

    async deleteProducts(req: Request, res: Response) {
        const { id } = req.params;

        const productsDeleted = await ProductsServices.deleteProducts({ id });

        return res.status(200).json(productsDeleted);
    },
};
