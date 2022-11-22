import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { customerEmail, customerLocation, customerSegment, soldVolume } =
      request.body;

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    const customer = await createCustomerUseCase.execute({
      customerEmail,
      customerLocation,
      customerSegment,
      soldVolume,
    });

    return response.status(201).json(customer).send();
  }
}

export { CreateCustomerController };
