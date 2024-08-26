import { objectToQueryString } from '../utils/objectToQueryString';

const BASE_URL = 'localhost:3000';

export const GetRequest = async (path, payload = {}, headers = {}) => {
    const queryString = objectToQueryString(payload);
    const response = await fetch(`${BASE_URL}/${path}?${queryString}`, {
        method: 'GET',
        headers: headers,
    });
    if (!response.ok) throw new Error(response.status);

    return response.json();
};
