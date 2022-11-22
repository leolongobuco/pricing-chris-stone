import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSellerUseCase } from "./CreateSellerUseCase";

class CreateSellerController {
  async handle(request: Request, response: Response) {
    const { sellerName, sellerTypeLevel } = request.body;

    const createSellerUseCase = container.resolve(CreateSellerUseCase);

    const seller = await createSellerUseCase.execute({
      sellerName,
      sellerTypeLevel,
    });

    return response.status(201).json({ seller }).send();
  }
}

export { CreateSellerController };
