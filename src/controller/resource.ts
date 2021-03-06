import { Request, Response } from "express";
import { Resource } from "../models/Resource";

export class ResourceControllers {
    static async search(req: Request, res: Response) {
        const { query } = req.params;
        console.log(query)
    }

    static async addResource(req: Request, res: Response) {
        res.send({ message: "successful" })
    }

    static async likeResource(req: Request, res: Response) {

    }
}

/**
 * get the resource category requested from the router parameter
 * get query the database for the requested resource category
 * send the file to the view engine for rendering
 */

 export class ResourceViews {
    static getResourceCategory(req: Request, res: Response) {
        //get the resource type from the category
        const resourceCategory: string = req.params.category
        /**
         * check if category exists
         * fetch data from the store if it;s exists
         * else render 404 page
         */

        res.render("pages/resource", { title: resourceCategory, layout: "", content: "", category: resourceCategory.replaceAll("-", " ") });
    }
}



