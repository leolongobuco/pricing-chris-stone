import "reflect-metadata";

import { beforeEach, describe, expect, it } from "vitest";

import { Customer } from "../../../../entities/customer";
import { CustomersRepositoryInMemory } from "../../repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

let createCustomerUseCase: CreateCustomerUseCase;
let customersRepositoryInMemory: CustomersRepositoryInMemory;

describe("Create Customer", () => {
  beforeEach(() => {
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory
    );
  });

  it("should be able to create an customer", async () => {
    expect(
      createCustomerUseCase.execute({
        customerEmail: "johndoecustomer@email.com",
        customerLocation: "91920150",
        customerSegment: "Education",
        soldVolume: 3000,
      })
    ).resolves.toBeInstanceOf(Customer);
  });
});
