import { Product } from "@src/entities/product/product";
import { ProductData } from "@src/entities/product/product-data";
import { ProductRepository } from "../ports/product.repository";

export class ManageProducts {
  private readonly productRepository: ProductRepository;

  constructor (productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async listAll(): Promise<ProductData[]> {
    const produtcs: ProductData[] = await this.productRepository.findAll();
    return produtcs;
  }

  updateOne() {
    return null;
  }
}