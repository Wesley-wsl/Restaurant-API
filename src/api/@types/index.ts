import { ObjectId } from "mongoose";

export interface iRestaurant {
    id?: ObjectId | string;
    name: string;
    address: string;
    opening_hours: string;
    restaurant_image: string;
    products?: iProduct;
}

export interface iProduct {
    id?: string;
    name: string;
    product_image: string;
    price: number;
    category: string;
    promotion?: Array<Object>;
}

export interface id {
    id: string;
}

export interface iPromotion {
    id: string;
    description: string;
    price_promotional: number;
    week_days: string;
    schedule: string;
}
