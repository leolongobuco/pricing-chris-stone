import { inject, injectable } from "tsyringe";

import { Customer } from "../../../../entities/customer";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../../repositories/ICustomersRepository";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute({
    customerEmail,
    customerLocation,
    customerSegment,
    soldVolume,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer({
      customerEmail,
      customerLocation,
      customerSegment,
      soldVolume,
    });

    await this.customersRepository.create(customer);

    return customer;
  }
}

export { CreateCustomerUseCase };
