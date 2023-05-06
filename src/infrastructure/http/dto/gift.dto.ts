export interface GiftDTO {
    data: Array<{
        id: string
        slug: string
        images: {
            downsized_medium: {
                url: string
            }
        }
    }>
}