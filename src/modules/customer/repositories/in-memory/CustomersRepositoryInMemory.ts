import { Customer } from "../../../../entities/customer";
import { ICreateCustomerDTO } from "../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../ICustomersRepository";

class CustomersRepositoryInMemory implements ICustomersRepository {
  public customers: Customer[] = [];

  async create({
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

    this.customers.push(customer);

    return customer;
  }

  async findByEmail(customerEmail: string): Promise<Customer | null> {
    const customer = this.customers.find(
      (customer) => customer.customerEmail === customerEmail
    );

    if (!customer) return null;

    return customer;
  }
}

export { CustomersRepositoryInMemory };
