import { Seller } from "./seller";

import { expect, test } from "vitest";

test("create an seller", () => {
  const seller = new Seller({
    sellerName: "John Doe",
    sellerTypeLevel: "JR",
  });

  expect(seller).toBeInstanceOf(Seller);
  expect(seller.sellerName).toEqual("John Doe");
});
