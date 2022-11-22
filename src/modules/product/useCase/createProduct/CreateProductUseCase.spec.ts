import "reflect-metadata";

import { beforeEach, describe, expect, test } from "vitest";

import { Product } from "../../../../entities/product";
import { ProductsRepositoryInMemory } from "../../repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Create new Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  test("should be able to create Product", async () => {
    const product = await createProductUseCase.execute({
      productName: "Pedra da Sorte",
      typeProduct: "Pedra da Sorte",
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.productName).toEqual("Pedra da Sorte");
  });
});
