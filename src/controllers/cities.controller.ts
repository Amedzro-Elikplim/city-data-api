import { Request, Response } from 'express';
import { httpStatus } from '../utils/contants';
import db from '../schemas';

const getAllCities = async (req: Request, res: Response) => {
    try {
        const limit: number = parseInt(req.query.limit as string) || 10;
        const response = await db.Cities.findAll({
            limit: limit,
            order: [["name", "ASC"]],
            raw: true,
            nest: true
        });


        if (!response) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Cities not found" });
        }

        return res.status(httpStatus.OK).json({
            message: "Cities fetched successfully",
            data: response
        });


    } catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
}



export {
    getAllCities
}