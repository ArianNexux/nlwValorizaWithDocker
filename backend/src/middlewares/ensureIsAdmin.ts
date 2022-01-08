import { Response, Request, NextFunction } from 'express'


export default function ensureIsAdmin(request: Request, response: Response, next: NextFunction){

    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized"
    })
}