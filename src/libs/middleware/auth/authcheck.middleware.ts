import { NextFunction, Request, Response } from "express";

export const VerifyToken = async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const token =  req.headers.authorization?.split(" ")[1]
        if(!token){
            return [];
        }
        //efectuar llamado desde axios
        const response = await fetch(`${process.env.AUTH_API}/api/user`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        
        if(response.status == 200){
            next()
        }
        else {
            res.status(401).json([])
        }
    } catch (error) {
        res.status(401).json([])
    }
}