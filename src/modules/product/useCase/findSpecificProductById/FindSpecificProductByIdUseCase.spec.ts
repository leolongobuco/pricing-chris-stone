import "reflect-metadata";

import { describe, beforeEach, test, expect } from "vitest";

import { Product } from "../../../../entities/product";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { FindSpecificProductByIdUseCase } from "./FindSpecificProductByIdUseCase";

let createProductUseCase: CreateProductUseCase;
let findSpecificProductByIdUseCase: FindSpecificProductByIdUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Find specific product by id", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    findSpecificProductByIdUseCase = new FindSpecificProductByIdUseCase(
      productsRepositoryInMemory
    );
  });

  test("should be able to find specific product by id", async () => {
    const product = await createProductUseCase.execute({
      productName: "Pedra da Sorte",
      typeProduct: "Pedra da Sorte",
    });

    const specificProduct = await findSpecificProductByIdUseCase.execute(
      product.id
    );

    expect(specificProduct).toHaveProperty("productName");
    expect(specificProduct).toBeInstanceOf(Product);
  });
});
