import axios from 'axios'
import type { Product, ProductType } from '../../../server/src/products/schemas/product.schema'

const BASE_URL = `http://localhost:${process.env.SERVER_PORT}/`

export const api = axios.create({
  baseURL: BASE_URL
})

api.defaults.headers.common['Content-Type'] = 'application/json'

const apiService = {
  products: {
    async create(product: Product) {
      return (await api.post<ProductType[]>('products', product)).data
    },
    async find() {
      return (await api.get<ProductType[]>('products')).data
    },
    async findOne(id: string) {
      return (await api.get<ProductType[]>(`products/${id}`)).data
    },
    async update(id: string, productData: Product) {
      return (await api.patch<ProductType[]>(`products/${id}`, productData)).data
    },
    async remove(id: string) {
      return (await api.delete<ProductType[]>(`products/${id}`)).data
    }
  }
}

export default apiService
