import { Http } from "domain/repositories/Http";

const headers = {
    'Content-Type': 'application/json'
};

export const http: Http = {
    get: async <T>(path: string, config?: RequestInit) => {
        const response = await fetch(path, { ...config, method: 'GET', headers });
        return response.json() as T
    },
    post: async <T>(path: string, config: RequestInit) => {
        const response = await fetch(path, { ...config, method: 'POST', headers });
        return response.json() as T
    },
    put: async <T>(path: string, config: RequestInit) => {
        const response = await fetch(path, { ...config, method: 'PUT', headers });
        return response.json() as T
    },
    delete: async <T>(path: string, config: RequestInit) => {
        const response = await fetch(path, { ...config, method: 'DELETE', headers });
        return response.json() as T
    },
};