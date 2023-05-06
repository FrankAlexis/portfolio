import { GiftRepository } from "domain/repositories/Gift"
import { giftAdapter } from "infrastructure/http/adapter/gift.adapter"
import { GiftDTO } from "infrastructure/http/dto/gift.dto"
import giftInstance from "infrastructure/instances/gift.instance"
import { http } from "infrastructure/instances/http.service"

const getImages = async (search: string) => {
    const images = await http.get<GiftDTO>(giftInstance.getRequestUrl(search))
    return giftAdapter(images)
}

export const giftRepository: GiftRepository = {
    getImages
}