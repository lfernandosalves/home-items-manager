
import { ProductData } from '@src/entities/product/product-data';
// import { ProductRepository } from '@src/usecases/ports/product.repository';
import { ManageProducts } from '../manage-products';

const mockProducts = [
  { name: 'Product1', description: 'first product' },
  { name: 'Product2', description: 'second product' },
];

const mockProductRepository = {
  findAll: async () => Promise.resolve(mockProducts)
};

describe('Use case - List Product', () => {
  it('should return an empty array when there is no products', async () => {
    jest.spyOn(mockProductRepository, 'findAll').mockImplementationOnce(async() => []);
    const sut = new ManageProducts(mockProductRepository);
    const products = await sut.listAll();
    expect(products).toEqual([])
  })

  it('should return a list of products', async () => {
    const sut = new ManageProducts(mockProductRepository);
    const products = await sut.listAll();
    expect(products[0]).toEqual(products[0]);
    expect(products).toHaveLength(2);
  })
})