import { NextFunction, Request, Response } from "express";

export default async function isValidId(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { id } = req.params;

    const isValidId = id.match(/^[0-9a-fA-F]{24}$/);

    if (!isValidId) {
        throw new Error("Id is not valid");
    }

    return next();
}
