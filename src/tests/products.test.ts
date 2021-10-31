import request from "supertest";
import app from "../server";
import RestaurantModel from "../api/models/RestaurantModel";
import ProductsModel from "../api/models/ProductsModel";

describe("test products", () => {
    beforeAll(async () => {
        await request(app).post("/restaurant").send({
            name: "k",
            restaurant_image: "img",
            address: "12",
            opening_hours: "4",
            products: [],
        });
    });

    test("list products must be successful", async () => {
        const findRestaurant = await RestaurantModel.findOne({ name: "k" });
        const res = await request(app).get(`/product/${findRestaurant._id}`);

        expect(res.statusCode).toEqual(200);
    });

    test("should create new products", async () => {
        const findRestaurant = await RestaurantModel.findOne({ name: "k" });

        const res = await request(app)
            .post(`/product/${findRestaurant._id}`)
            .send({
                name: "legal",
                product_image: "imagem",
                price: 30,
                category: "Doce",
            });

        expect(res.statusCode).toEqual(201);
    });

    test("should update product by id", async () => {
        const findProduct = await ProductsModel.findOne({ name: "legal" });
        const res = await request(app).put(`/product/${findProduct._id}`).send({
            name: "produto alterado",
        });

        expect(res.statusCode).toEqual(200);
    });

    test("should delete product by id", async () => {
        const findProduct = await ProductsModel.findOne({
            name: "produto alterado",
        });

        const findRestaurant = await RestaurantModel.findOne({
            name: "k",
        });

        const res = await request(app).delete(
            `/product/${findRestaurant._id}/${findProduct._id}`
        );

        expect(res.statusCode).toEqual(200);
    });

    afterAll(async () => {
        const findRestaurant = await RestaurantModel.findOne({
            name: "k",
        });

        await request(app).delete(`/restaurant/${findRestaurant._id}`);
    });
});
