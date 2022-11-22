import { inject, injectable } from "tsyringe";

import { ProfitAndLoses } from "../../../../entities/profitAndLoses";
import { IProfitAndLosesRepository } from "../../repositories/IProfitAndLosesRespository";
import { AppError } from "../../../../shared/infra/http/errors/AppError";

@injectable()
class FindSpecificProfitAndLosesByIdUseCase {
  constructor(
    @inject("ProfitAndLosesRepository")
    private profitAndLosesRepository: IProfitAndLosesRepository
  ) {}

  async execute(productID: string): Promise<ProfitAndLoses | null> {
    const profitAndLose = await this.profitAndLosesRepository.findById(
      productID
    );

    if (!profitAndLose) throw new AppError("Profit and Loses não encontrado");

    return profitAndLose;
  }
}

export { FindSpecificProfitAndLosesByIdUseCase };
