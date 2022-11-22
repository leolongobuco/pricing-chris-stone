import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { Seller } from "../../../../../entities/seller";
import { ICreateSellerDTO } from "../../../dtos/ICreateSellerDTO";
import { ISellersRespository } from "../../../repositories/ISellersRepository";

class SellerRepository implements ISellersRespository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({
    sellerName,
    sellerTypeLevel,
  }: ICreateSellerDTO): Promise<Seller> {
    const seller = await this.repository.sellers.create({
      data: {
        sellerName,
        sellerTypeLevel,
      },
    });

    return seller as Seller;
  }
}

export { SellerRepository };
