const HOST = 'http://localhost:3000';

export const getIdentify = async () => {
    const token = localStorage.getItem('token');
    if (token) return token;

    const response = await fetch(`${HOST}/identify`);
    if (!response.ok) throw new Error('Something went wrong');
    const json = await response.json();
    localStorage.setItem('token', json.token);
};

export const getLayout = async () => {
    const identifier = await getIdentify();
    const response = await fetch(`${HOST}/layout?token=${identifier}`);
    if (!response.ok) throw new Error('Something went wrong');
    return response.json();
};
