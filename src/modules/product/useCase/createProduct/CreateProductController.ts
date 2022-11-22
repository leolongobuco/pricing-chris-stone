import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { productName, typeProduct } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      productName,
      typeProduct,
    });

    return response.status(201).json(product).send();
  }
}

export { CreateProductController };
