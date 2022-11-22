import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { ProfitAndLoses } from "../../../../../entities/profitAndLoses";
import { ICreateProfitAndLosesDTO } from "../../../dtos/ICreateProfitAndLosesDTO";
import { IProfitAndLosesRepository } from "../../../repositories/IProfitAndLosesRespository";

class ProfitAndLosesRepository implements IProfitAndLosesRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({
    costs,
    revenue,
    brazilianTax,
    netProfit,
    productID,
  }: ICreateProfitAndLosesDTO): Promise<ProfitAndLoses> {
    const profitAndLose = await this.repository.profitAndLoses.create({
      data: {
        revenue,
        costs,
        brazilianTax,
        netProfit,
        productID,
      },
    });

    return profitAndLose as ProfitAndLoses;
  }

  async findById(productID: string): Promise<ProfitAndLoses | null> {
    const profitAndLose = await this.repository.profitAndLoses.findFirst({
      where: {
        productID,
      },
    });

    return profitAndLose as ProfitAndLoses;
  }
}

export { ProfitAndLosesRepository };
