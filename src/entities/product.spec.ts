import { Product } from "./product";

import { expect, test } from "vitest";

test("create an Product", () => {
  const product = new Product({
    productName: "Pedra da Sorte",
    typeProduct: "Pedra da Sorte",
  });

  expect(product).toHaveProperty("id");
  expect(product).toBeInstanceOf(Product);
});
