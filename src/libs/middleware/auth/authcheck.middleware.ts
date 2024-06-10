import { NextFunction, Request, Response } from "express";

export const VerifyToken = async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const token =  req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).json([]);
        }
        //efectuar llamado desde axios
        const response = await fetch(`${process.env.AUTH_API}/api/user`,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        
        if(response.status == 200){
            const dataresponse = await response.json()
            req.body.uuidKey = dataresponse.uuidKey
            next()
        }
        else {
            res.status(401).json([])
        }
    } catch (error) {
        res.status(401).json([])
    }
}