import { redis } from "../internals/db";

export const layoutController = async (req:any, res: any) => {
    const sequence = await redis.incr(req.token);
    if(sequence >= 3) await redis.set(req.token, 0);

    res.json({
        sequence : sequence,
        layoutTitle: `layout ${sequence}`
    });
}
