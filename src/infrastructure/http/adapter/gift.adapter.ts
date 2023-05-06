import { Gift } from "domain/models/Gift"
import { GiftDTO } from "../dto/gift.dto"

export const giftAdapter = (gifts: GiftDTO): Array<Gift> => {
    return gifts.data.map(gift => ({
        image: {
            id: gift.id,
            alt: gift.slug,
            src: gift.images.downsized_medium.url
        }
    }))
}