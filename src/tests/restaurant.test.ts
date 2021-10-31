import request from "supertest";
import app from "../server";
import RestaurantModel from "../api/models/RestaurantModel";

describe("test restaurants", () => {
    test("get request must be successful ", async () => {
        const res = await request(app).get("/restaurant");
        expect(res.statusCode).toEqual(200);
    });

    test("should create new restaurant", async () => {
        const res = await request(app).post("/restaurant").send({
            name: "ok",
            restaurant_image: "img",
            address: "12",
            opening_hours: "4",
            products: [],
        });

        expect(res.statusCode).toEqual(201);
    });

    test("should get restaurant by id", async () => {
        const findRestaurant = await RestaurantModel.findOne({ name: "ok" });

        const res = await request(app).get(`/restaurant/${findRestaurant._id}`);

        expect(res.statusCode).toEqual(200);
    });

    test("should update restaurant by id", async () => {
        const findRestaurant = await RestaurantModel.findOne({ name: "ok" });
        const res = await request(app)
            .put(`/restaurant/${findRestaurant._id}`)
            .send({
                name: "alterado",
            });

        expect(res.statusCode).toEqual(200);
    });

    test("should delete restaurant by id", async () => {
        const findRestaurant = await RestaurantModel.findOne({
            name: "alterado",
        });
        const res = await request(app).delete(
            `/restaurant/${findRestaurant._id}`
        );

        expect(res.statusCode).toEqual(204);
    });
});
