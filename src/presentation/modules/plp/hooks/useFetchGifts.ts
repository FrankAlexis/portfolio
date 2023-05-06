import { Gift } from "domain/models/Gift"
import giftService from "domain/services/gift.service"
import { FormEvent, useEffect, useState } from "react"

const useFetchGifts = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState<Array<Gift> | undefined>()

    useEffect(() => {
        giftService.getImages('Rick')
            .then((results) => setImages(results))
    }, [])

    const fetchGifts = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setIsLoading(true)

        const formData = new FormData(event.currentTarget);
        const searchText = formData.get('search') as string

        const results = await giftService.getImages(searchText)

        setImages(results)
        setIsLoading(false)
    }

    return {
        images,
        fetchGifts,
        isLoading
    }
}

export default useFetchGifts