import { ProductData } from "@src/entities/product/product-data";

export interface ProductRepository {
  findAll: () => Promise<ProductData[]>
}