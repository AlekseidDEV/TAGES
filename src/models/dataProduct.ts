export interface DataProduct {
    id: string,
    name: string,
    code: string | null,
    price: Price
    image: ImageUrl
    material: number
}

type Price = { old_price: number | null, current_price: number }
type ImageUrl = { url: string }