import { GiftRepository } from "domain/repositories/Gift"
import { giftRepository } from "infrastructure/repositories/gift.repository"

const getImages = (search: string) => {
    return giftRepository.getImages(search)
}

const giftService: GiftRepository = {
    getImages
}

export default giftService