import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../../../database/prismaClient";
import { Customer } from "../../../../../entities/customer";
import { ICreateCustomerDTO } from "../../../dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "../../../repositories/ICustomersRepository";

class CustomersRepository implements ICustomersRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({
    customerEmail,
    customerLocation,
    customerSegment,
    soldVolume,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = await this.repository.customers.create({
      data: {
        customerEmail,
        customerLocation,
        customerSegment,
        soldVolume,
      },
    });

    return customer as Customer;
  }

  async findByEmail(customerEmail: string): Promise<Customer | null> {
    const customer = await this.repository.customers.findFirst({
      where: {
        customerEmail: {
          equals: customerEmail,
          mode: "insensitive",
        },
      },
    });

    return customer as Customer;
  }
}

export { CustomersRepository };
