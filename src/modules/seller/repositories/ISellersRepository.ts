import { Seller } from "../../../entities/seller";
import { ICreateSellerDTO } from "../dtos/ICreateSellerDTO";

interface ISellersRespository {
  create({ sellerName, sellerTypeLevel }: ICreateSellerDTO): Promise<Seller>;
}

export { ISellersRespository };
