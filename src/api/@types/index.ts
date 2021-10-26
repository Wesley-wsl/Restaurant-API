import { ObjectId } from "mongoose";

export interface iRestaurant {
    id?: ObjectId | string;
    name: string;
    address: string;
    opening_hours: string;
    restaurant_image: string;
}

export interface iProduct {
    id?: string;
    name: string;
    product_image: string;
    price: number;
    category: string;
}
