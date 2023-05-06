import { Gift } from "domain/models/Gift"

export interface GiftRepository {
    getImages: (search: string) => Promise<Array<Gift>>
}

export interface GiftUrl {
    getRequestUrl: (search: string, url?: string, key?: string) => string
}