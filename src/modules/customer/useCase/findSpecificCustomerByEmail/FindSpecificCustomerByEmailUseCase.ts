import { inject, injectable } from "tsyringe";

import { Customer } from "../../../../entities/customer";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";
import { AppError } from "../../../../shared/infra/http/errors/AppError";

@injectable()
class FindSpecificCustomerByEmailUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute(customerEmail: string): Promise<Customer | null> {
    const customer = await this.customersRepository.findByEmail(customerEmail);

    if (!customer) throw new AppError("E-mail incorreto!");

    return customer;
  }
}

export { FindSpecificCustomerByEmailUseCase };
