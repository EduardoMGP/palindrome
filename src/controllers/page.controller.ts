import {Request, Response} from "express";

export class PageController {

    public index(req: Request, res: Response) {
        res.render('index', {title: 'Palindromo'});
    }

}