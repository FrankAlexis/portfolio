export interface Http {
    get: <T>(path: string, config?: RequestInit) => Promise<T>
    post: <T>(path: string, config: RequestInit) => Promise<T>
    put: <T>(path: string, config: RequestInit) => Promise<T>
    delete: <T>(path: string, config: RequestInit) => Promise<T>
}