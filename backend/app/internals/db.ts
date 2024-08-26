import Redis from 'ioredis';

const config = {
    port: 11129,
    host: 'redis-11129.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
    username: 'default',
    password: 'nWZ80xfCekV5VORzkeqE8yZ7cBbKSMp1',
    db: 0,
};

export const redis = new Redis(config);
