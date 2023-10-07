export interface IProduct {
  _id?: string
  name: string
  original_price: number
  price: number
  description?: string
  imgUrl: string[],
  categoryId?: string
  size_id?: string
  color_id?: string
  quantity?: number
  quantity_sold?: number
  inventory_number?: number
  discount_code_id?: string
  poinId?: string
}
