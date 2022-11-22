import "reflect-metadata";

import { beforeEach, describe, expect, test } from "vitest";

import { Customer } from "../../../../entities/customer";
import { CustomersRepositoryInMemory } from "../../repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "../createCustomer/CreateCustomerUseCase";
import { FindSpecificCustomerByEmailUseCase } from "./FindSpecificCustomerByEmailUseCase";

let findSpecificCustomerByEmailUseCase: FindSpecificCustomerByEmailUseCase;
let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;

describe("Find Specific Client by E-mail", () => {
  beforeEach(() => {
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    findSpecificCustomerByEmailUseCase = new FindSpecificCustomerByEmailUseCase(
      customersRepositoryInMemory
    );
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory
    );
  });

  test("should be able to specific customer by e-mail", async () => {
    const customer = await createCustomerUseCase.execute({
      customerEmail: "johndoecustomeremail@email.com",
      customerLocation: "91920150",
      customerSegment: "Tech",
      soldVolume: 3000,
    });

    const specificCustomer = await findSpecificCustomerByEmailUseCase.execute(
      customer.customerEmail
    );

    expect(specificCustomer).toBeInstanceOf(Customer);
    expect(specificCustomer?.customerSegment).toEqual("Tech");
    expect(specificCustomer?.customerLocation).toEqual("91920150");
  });
});
