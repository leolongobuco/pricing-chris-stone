import "reflect-metadata";

import { beforeEach, describe, expect, test } from "vitest";

import { ProfitAndLoses } from "../../../../entities/profitAndLoses";
import { CustomersRepositoryInMemory } from "../../../customer/repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "../../../customer/useCase/createCustomer/CreateCustomerUseCase";
import { ProductsRepositoryInMemory } from "../../../product/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../../product/useCase/createProduct/CreateProductUseCase";
import { ProfitAndLosesRepositoryInMemory } from "../../repositories/in-memory/ProfitAndLosesRepositoryInMemory";
import { CreateProfitAndLosesUseCase } from "../createProfitAndLoses/CreateProfitAndLosesUseCase";
import { FindSpecificProfitAndLosesByIdUseCase } from "./FindSpecificProfitAndLosesByIdProductUseCase";

let createProfitAndLosesUseCase: CreateProfitAndLosesUseCase;
let profitAndLosesRepositoryInMemory: ProfitAndLosesRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;
let customersRepositoryInMemory: CustomersRepositoryInMemory;
let findSpecificProfitAndLosesByIdUseCase: FindSpecificProfitAndLosesByIdUseCase;

describe("Find specific Profit and Lose by id by product", () => {
  beforeEach(() => {
    profitAndLosesRepositoryInMemory = new ProfitAndLosesRepositoryInMemory();
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory
    );
    createProfitAndLosesUseCase = new CreateProfitAndLosesUseCase(
      profitAndLosesRepositoryInMemory,
      productsRepositoryInMemory,
      customersRepositoryInMemory
    );
    findSpecificProfitAndLosesByIdUseCase =
      new FindSpecificProfitAndLosesByIdUseCase(
        profitAndLosesRepositoryInMemory
      );
  });

  test("should be able to find specific Profit and Lose by id by product", async () => {
    const customer = await createCustomerUseCase.execute({
      customerEmail: "emailTeste@email.com",
      customerLocation: "91920150",
      customerSegment: "Education",
      soldVolume: 3000,
    });

    const product = await createProductUseCase.execute({
      productName: "Pedra da Sorte",
      typeProduct: "Pedra da Sorte",
    });

    await createProfitAndLosesUseCase.execute({
      brazilianTax: 0.1125,
      revenue: 1000,
      costs: 200,
      productID: product.id,
      customerEmail: customer.customerEmail,
    });

    const productID = product.id;

    const specificProfitAndLose =
      await findSpecificProfitAndLosesByIdUseCase.execute(productID);

    expect(specificProfitAndLose).toBeInstanceOf(ProfitAndLoses);
    expect(specificProfitAndLose?.netProfit).toEqual(687.5);
    expect(specificProfitAndLose?.productID).toEqual(product.id);
  });
});
