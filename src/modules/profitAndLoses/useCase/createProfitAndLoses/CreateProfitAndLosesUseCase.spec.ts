import "reflect-metadata";

import { beforeEach, describe, expect, it, test } from "vitest";

import { ProfitAndLoses } from "../../../../entities/profitAndLoses";
import { CustomersRepositoryInMemory } from "../../../customer/repositories/in-memory/CustomersRepositoryInMemory";
import { CreateCustomerUseCase } from "../../../customer/useCase/createCustomer/CreateCustomerUseCase";
import { ProductsRepositoryInMemory } from "../../../product/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../../product/useCase/createProduct/CreateProductUseCase";
import { ProfitAndLosesRepositoryInMemory } from "../../repositories/in-memory/ProfitAndLosesRepositoryInMemory";
import { CreateProfitAndLosesUseCase } from "./CreateProfitAndLosesUseCase";

let createProfitAndLosesUseCase: CreateProfitAndLosesUseCase;
let profitAndLosesRepositoryInMemory: ProfitAndLosesRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;
let customersRepositoryInMemory: CustomersRepositoryInMemory;

describe("Create Profit and Loses", () => {
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
  });

  test("should be able to create Profit and Loses by Pedra da Sorte", async () => {
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

    const profitAndLoses = await createProfitAndLosesUseCase.execute({
      brazilianTax: 0.1125,
      revenue: 1000,
      costs: 200,
      productID: product.id,
      customerEmail: customer.customerEmail,
    });

    expect(profitAndLoses.netProfit).toEqual(687.5);
    expect(profitAndLoses).toBeInstanceOf(ProfitAndLoses);
  });

  test("should be able to create Profit and Loses by Pedra Fofa", async () => {
    const customer = await createCustomerUseCase.execute({
      customerEmail: "emailTeste@email.com",
      customerLocation: "91920150",
      customerSegment: "Education",
      soldVolume: 1000,
    });

    const product = await createProductUseCase.execute({
      productName: "Pedra Fofa",
      typeProduct: "Pedra Fofa",
    });

    const profitAndLoses = await createProfitAndLosesUseCase.execute({
      brazilianTax: 0.1125,
      revenue: 1000,
      costs: 100,
      productID: product.id,
      valuePerUse: 2,
      customerEmail: customer.customerEmail,
    });

    expect(profitAndLoses.netProfit).toEqual(7.75);
    expect(profitAndLoses).toBeInstanceOf(ProfitAndLoses);
  });

  test("should be able to create Profit and Loses by Pedra Roxa", async () => {
    const customer = await createCustomerUseCase.execute({
      customerEmail: "emailTeste@email.com",
      customerLocation: "91920150",
      customerSegment: "Education",
      soldVolume: 1000,
    });

    const product = await createProductUseCase.execute({
      productName: "Pedra Roxa",
      typeProduct: "Pedra Roxa",
    });

    const profitAndLoses = await createProfitAndLosesUseCase.execute({
      brazilianTax: 0.1125,
      revenue: 1000,
      costs: 200,
      productID: product.id,
      customerEmail: customer.customerEmail,
    });

    expect(profitAndLoses.netProfit).toEqual(68.75);
    expect(profitAndLoses).toBeInstanceOf(ProfitAndLoses);
  });
});
