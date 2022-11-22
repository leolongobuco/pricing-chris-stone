import { ProfitAndLoses } from "../../../../entities/profitAndLoses";
import { ICreateProfitAndLosesDTO } from "../../dtos/ICreateProfitAndLosesDTO";
import { IProfitAndLosesRepository } from "../IProfitAndLosesRespository";

class ProfitAndLosesRepositoryInMemory implements IProfitAndLosesRepository {
  public profitAndLoses: ProfitAndLoses[] = [];

  async create({
    costs,
    revenue,
    brazilianTax,
    netProfit,
    productID,
  }: ICreateProfitAndLosesDTO): Promise<ProfitAndLoses> {
    const profitAndLoses = new ProfitAndLoses({
      revenue,
      costs,
      brazilianTax,
      netProfit,
      productID,
    });

    this.profitAndLoses.push(profitAndLoses);

    return profitAndLoses;
  }

  async findById(productID: string): Promise<ProfitAndLoses | null> {
    const profitAndLoses = this.profitAndLoses.find(
      (profitAndLose) => profitAndLose.productID === productID
    );

    if (!profitAndLoses) return null;

    return profitAndLoses;
  }
}

export { ProfitAndLosesRepositoryInMemory };
