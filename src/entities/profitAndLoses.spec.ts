import { expect, test } from "vitest";

import { ProfitAndLoses } from "./profitAndLoses";

import { Product } from "./product";

test("create an Profit and Loses", () => {
  const product = new Product({
    productName: "Pedra da Sorte",
    typeProduct: "Pedra da Sorte",
  });

  const profitAndLoses = new ProfitAndLoses({
    revenue: 11000,
    costs: 800,
    netProfit: 200,
    brazilianTax: 0.1125,
    productID: product.id,
  });

  expect(profitAndLoses).toBeInstanceOf(ProfitAndLoses);
  expect(profitAndLoses.brazilianTax).toEqual(0.1125);
});
