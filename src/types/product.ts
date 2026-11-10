// Formato bruto devolvido pela API de produtos
export interface ApiProduct {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProductsResponse {
  success: boolean
  products: ApiProduct[]
}

// Produto usado na aplicação (ganha um id estável para uso como key)
export interface Product extends ApiProduct {
  id: number
}
