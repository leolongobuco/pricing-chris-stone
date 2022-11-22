import { inject, injectable } from "tsyringe";

import { Product } from "../../../../entities/product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { AppError } from "../../../../shared/infra/http/errors/AppError";

@injectable()
class FindSpecificProductByIdUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(productID: string): Promise<Product> {
    const product = await this.productsRepository.findById(productID);

    console.log(productID);

    if (!product) throw new AppError("Produto não encontrado");

    return product;
  }
}

export { FindSpecificProductByIdUseCase };
