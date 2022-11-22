import { Product } from "../../../entities/product";
import { IProductDTO } from "../dtos/IProductDTO";

interface IProductsRepository {
  create({ productName, typeProduct }: IProductDTO): Promise<Product>;
  findById(productID: string): Promise<Product | null>;
}

export { IProductsRepository };
