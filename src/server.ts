import express, { NextFunction, Request, Response } from "express";
import "./config/dbConfig";
import "express-async-errors";
import { RestaurantRoutes } from "./api/routers/Restaurant";
import { ProductRoutes } from "./api/routers/Product";
import { PromotionRoutes } from "./api/routers/Promotion";

const app = express();

app.use(express.json());
app.use("/restaurant", RestaurantRoutes);
app.use("/product", ProductRoutes);
app.use("/promotion", PromotionRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        res.status(400).json({ error: err.message });
    }

    return res
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
});

app.listen(3333, () => console.log("Server is runing"));

export default app