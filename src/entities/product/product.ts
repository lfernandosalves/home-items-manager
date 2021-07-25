import { ProductData } from "./product-data";

export class Product {
  public readonly name: string;
  public readonly description: string | null;

  private constructor(name: string, description: string | null = null) {
    this.name = name;
    this.description = description;
  }

  static create(productData: ProductData) {
    const name: string = productData.name;
    const description: string | null = productData.description;
    return new Product(name, description);
  }
}