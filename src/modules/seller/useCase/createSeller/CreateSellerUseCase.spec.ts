import "reflect-metadata";

import { beforeEach, describe, expect, it } from "vitest";

import { Seller } from "../../../../entities/seller";
import { SellersRepositoryInMemory } from "../../repositories/in-memory/SellersRepositoryInMemory";
import { CreateSellerUseCase } from "./CreateSellerUseCase";

let createSellerUseCase: CreateSellerUseCase;
let sellersRepositoryInMemory: SellersRepositoryInMemory;

describe("Create Seller", () => {
  beforeEach(() => {
    sellersRepositoryInMemory = new SellersRepositoryInMemory();
    createSellerUseCase = new CreateSellerUseCase(sellersRepositoryInMemory);
  });

  it("should be able to create an seller", async () => {
    expect(
      createSellerUseCase.execute({
        sellerName: "John Doe Seller",
        sellerTypeLevel: "SR",
      })
    ).resolves.toBeInstanceOf(Seller);
  });
});
