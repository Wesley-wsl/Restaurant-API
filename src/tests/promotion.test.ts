import request from "supertest";
import app from "../server";
import ProductsModel from "../api/models/ProductsModel";
import RestaurantModel from "../api/models/RestaurantModel";
import PromotionModel from "../api/models/PromotionModel";

describe("test promotion", () => {
    beforeAll(async () => {
        await request(app).post("/restaurant").send({
            name: "k",
            restaurant_image: "img",
            address: "12",
            opening_hours: "4",
            products: [],
        });

        const findRestaurant = await RestaurantModel.findOne({ name: "k" });

        await request(app).post(`/product/${findRestaurant._id}`).send({
            name: "legal",
            product_image: "imagem",
            price: 30,
            category: "Doce",
            id: "",
        });
    });

    test("create promotion must be successful", async () => {
        const findProducts = await ProductsModel.findOne({ name: "legal" });

        const res = await request(app)
            .post(`/promotion/${findProducts._id}`)
            .send({
                description: "new",
                price_promotional: 50,
                week_days: "Segunda",
                schedule: "10hr",
            });

        expect(res.statusCode).toEqual(201);
    });

    test("should update promotion", async () => {
        const findPromotion = await PromotionModel.findOne({ name: "new" });

        const res = await request(app)
            .put(`/promotion/${findPromotion._id}`)
            .send({
                description: "legal",
            });

        expect(res.statusCode).toEqual(200);
    });

    test("should get product by product id", async () => {
        const findPromotion = await ProductsModel.findOne({ name: "legal" });

        const res = await request(app).get(`/promotion/${findPromotion._id}`);

        expect(res.statusCode).toEqual(200);
    });

    afterAll(async () => {
        const findRestaurant = await RestaurantModel.findOne({
            name: "k",
        });

        await request(app).delete(`/restaurant/${findRestaurant._id}`);
    });
});
