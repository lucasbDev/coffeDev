import { verify } from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

interface Ipayload {
    sub: string
}

export async function ensureAuthenticateDeliveryMan (
  request: Request,
  response: Response,
  next: NextFunction  
) {
    const authHeader = request.headers.authorization; 

    if (!authHeader) {
        return response.status(401).json({
            message: "token missing",
        });
    }
     const [, token] = authHeader.split("");

        try {
          const { sub } = verify(token, "5d584d9c23b48c255c980e013f2f69b6") as Ipayload;
          
          request.id_deliveryman = sub
          
          return next();
        } catch(err) {
            return response.status(401).json({
                message: "Invalid token!"
            })
        }
}