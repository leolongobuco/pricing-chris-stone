import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindSpecificProductByIdUseCase } from "./FindSpecificProductByIdUseCase";

class FindSpecificProductByIdController {
  async handle(request: Request, response: Response) {
    const { productID } = request.params;

    const findSpecificProductByIdUseCase = container.resolve(
      FindSpecificProductByIdUseCase
    );

    const specificProduct = await findSpecificProductByIdUseCase.execute(
      productID
    );

    return response.json(specificProduct).send();
  }
}

export { FindSpecificProductByIdController };
