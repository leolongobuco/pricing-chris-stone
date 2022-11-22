import { inject, injectable } from "tsyringe";

import { Seller } from "../../../../entities/seller";
import { ICreateSellerDTO } from "../../dtos/ICreateSellerDTO";
import { ISellersRespository } from "../../repositories/ISellersRepository";

@injectable()
class CreateSellerUseCase {
  constructor(
    @inject("SellersRepository")
    private sellersRepository: ISellersRespository
  ) {}

  async execute({
    sellerName,
    sellerTypeLevel,
  }: ICreateSellerDTO): Promise<Seller> {
    const seller = await this.sellersRepository.create({
      sellerName,
      sellerTypeLevel,
    });

    return seller;
  }
}

export { CreateSellerUseCase };
