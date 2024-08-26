import { decodeToken } from "../services/token";

export const identifyMiddleware = async (req:any, res:any, next:any) => {
    try {
        const { token} = req.query;
        const payload:any = decodeToken(token);
        console.log(payload);
        if(!payload) return res.status(401).json({ message: "Unauthorized request"});
        if(payload.userAgent !== req.headers['user-agent'] || payload.origin !== req.headers['origin'])  return res.status(401).json({ message: "Unauthorized request"});
        req.token = token;
        next();
    } catch(e) {
        return res.json({message: "Unauthorized request"});
    }
}
