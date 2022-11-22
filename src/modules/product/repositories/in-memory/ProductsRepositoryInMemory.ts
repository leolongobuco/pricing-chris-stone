import { Product } from "../../../../entities/product";
import { IProductDTO } from "../../dtos/IProductDTO";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  public products: Product[] = [];

  async create({ productName, typeProduct }: IProductDTO): Promise<Product> {
    const product = new Product({
      productName,
      typeProduct,
    });

    this.products.push(product);

    return product;
  }

  async findById(productID: string): Promise<Product | null> {
    const product = this.products.find((product) => product.id === productID);

    if (!product) return null;

    return product;
  }
}

export { ProductsRepositoryInMemory };
