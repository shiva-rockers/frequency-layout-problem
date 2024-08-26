import jwt from 'jsonwebtoken';

const SECRET = 'layout-encoder'

export const generateToken = (payload: any) => {
    return jwt.sign(payload, SECRET);
}

export const decodeToken = (token: string) => {
    return jwt.verify(token, SECRET);
}
