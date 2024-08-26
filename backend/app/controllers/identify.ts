import { generateToken } from "../services/token";

export const identifyController = async (req:any, res:any) => {
    const token = generateToken({
        userAgent: req.headers['user-agent'],
        origin: req.headers['origin'],
    });
    res.json({token: token});
}
