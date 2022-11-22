import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindSpecificCustomerByEmailUseCase } from "./FindSpecificCustomerByEmailUseCase";

class FindSpecificCustomerByEmailController {
  async handle(request: Request, response: Response) {
    const { customerEmail } = request.body;

    const findSpecificCustomerByEmailUseCase = container.resolve(
      FindSpecificCustomerByEmailUseCase
    );

    const customerSpecific = await findSpecificCustomerByEmailUseCase.execute(
      customerEmail
    );

    return response.json(customerSpecific).send();
  }
}

export { FindSpecificCustomerByEmailController };
