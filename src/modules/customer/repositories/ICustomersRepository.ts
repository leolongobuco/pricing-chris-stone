import { Customer } from "../../../entities/customer";
import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";

interface ICustomersRepository {
  create({
    customerEmail,
    customerLocation,
    customerSegment,
    soldVolume,
  }: ICreateCustomerDTO): Promise<Customer>;

  findByEmail(customerEmail: string): Promise<Customer | null>;
}

export { ICustomersRepository };
