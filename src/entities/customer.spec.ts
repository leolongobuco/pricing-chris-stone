import { Customer } from "./customer";

import { expect, test } from "vitest";

test("create an customer", () => {
  const customer = new Customer({
    customerEmail: "johndoecustomer@email.com",
    customerLocation: "91920150",
    customerSegment: "Education",
    soldVolume: 3000,
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.customerSegment).toEqual("Education");
});

test("cannot create an customer with volume sold being less than or equal 0", () => {
  expect(() => {
    return new Customer({
      customerEmail: "johndoecustomer@email.com",
      customerLocation: "91920150",
      customerSegment: "Education",
      soldVolume: 0,
    });
  }).toThrow();
});
