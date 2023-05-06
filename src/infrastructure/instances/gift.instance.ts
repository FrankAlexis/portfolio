import { GiftUrl } from "domain/repositories/Gift"

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const getRequestUrl = (
    search: string,
    url: string = API_URL,
    key: string = API_KEY
) => {
    const path = new URLSearchParams()

    path.set('api_key', key)
    path.set('q', search)
    path.set('limit', '5')
    path.set('offset', '0')
    path.set('lang', 'en')
    path.set('rating', 'g')

    return `${url}?${path.toString()}`

}


const giftInstance: GiftUrl = {
    getRequestUrl
}

export default giftInstance