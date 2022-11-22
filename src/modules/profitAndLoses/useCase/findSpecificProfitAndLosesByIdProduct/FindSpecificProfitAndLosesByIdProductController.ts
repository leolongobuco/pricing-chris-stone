import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindSpecificProfitAndLosesByIdUseCase } from "./FindSpecificProfitAndLosesByIdProductUseCase";

class FindSpecificProfitAndLosesByIdController {
  async handle(request: Request, response: Response) {
    const { productID } = request.params;

    const findSpecificProfitAndLosesByIdUseCase = container.resolve(
      FindSpecificProfitAndLosesByIdUseCase
    );

    const profitAndLose = await findSpecificProfitAndLosesByIdUseCase.execute(
      productID
    );

    return response.json({ profitAndLose }).send();
  }
}

export { FindSpecificProfitAndLosesByIdController };
