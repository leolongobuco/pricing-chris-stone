import { Seller } from "../../../../entities/seller";
import { ICreateSellerDTO } from "../../dtos/ICreateSellerDTO";
import { ISellersRespository } from "../ISellersRepository";

class SellersRepositoryInMemory implements ISellersRespository {
  public sellers: Seller[] = [];

  async create({
    sellerName,
    sellerTypeLevel,
  }: ICreateSellerDTO): Promise<Seller> {
    const seller = new Seller({
      sellerName,
      sellerTypeLevel,
    });

    this.sellers.push(seller);

    return seller;
  }
}

export { SellersRepositoryInMemory };
