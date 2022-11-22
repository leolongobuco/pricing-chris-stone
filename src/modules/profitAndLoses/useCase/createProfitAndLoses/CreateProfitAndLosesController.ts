import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProfitAndLosesUseCase } from "./CreateProfitAndLosesUseCase";

class CreateProfitAndLosesController {
  async handle(request: Request, response: Response) {
    const {
      brazilianTax,
      costs,
      revenue,
      customerEmail,
      productID,
      valuePerUse,
    } = request.body;

    const createProfitAndLosesUseCase = container.resolve(
      CreateProfitAndLosesUseCase
    );

    const profitAndLoseUseCase = await createProfitAndLosesUseCase.execute({
      valuePerUse,
      brazilianTax,
      costs,
      revenue,
      customerEmail,
      productID,
    });

    return response
      .status(201)
      .json({ profitAndLose: profitAndLoseUseCase })
      .send();
  }
}

export { CreateProfitAndLosesController };
