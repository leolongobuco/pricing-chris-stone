import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { Product } from "../../../../../entities/product";
import { IProductDTO } from "../../../dtos/IProductDTO";
import { IProductsRepository } from "../../../repositories/IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({ productName, typeProduct }: IProductDTO): Promise<Product> {
    const product = await this.repository.products.create({
      data: {
        productName,
        typeProduct,
      },
    });

    return product as Product;
  }

  async findById(productID: string): Promise<Product | null> {
    const product = await this.repository.products.findFirst({
      where: {
        id: productID,
      },
    });

    return product as Product;
  }
}

export { ProductsRepository };
