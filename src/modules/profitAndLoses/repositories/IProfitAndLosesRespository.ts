import { ProfitAndLoses } from "../../../entities/profitAndLoses";
import { ICreateProfitAndLosesDTO } from "../dtos/ICreateProfitAndLosesDTO";

interface IProfitAndLosesRepository {
  create({
    costs,
    revenue,
    brazilianTax,
    netProfit,
    productID,
  }: ICreateProfitAndLosesDTO): Promise<ProfitAndLoses>;

  findById(productID: string): Promise<ProfitAndLoses | null>;
}

export { IProfitAndLosesRepository };
