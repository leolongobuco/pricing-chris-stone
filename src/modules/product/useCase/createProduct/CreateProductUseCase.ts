import { inject, injectable } from "tsyringe";

import { Product } from "../../../../entities/product";
import { IProductDTO } from "../../dtos/IProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({ productName, typeProduct }: IProductDTO): Promise<Product> {
    const product = await this.productsRepository.create({
      productName,
      typeProduct,
    });
    return product;
  }
}

export { CreateProductUseCase };
