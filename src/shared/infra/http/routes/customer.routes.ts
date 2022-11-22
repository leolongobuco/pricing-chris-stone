import { Router } from "express";

import { CreateCustomerController } from "../../../../modules/customer/useCase/createCustomer/CreateCustomerController";
import { FindSpecificCustomerByEmailController } from "../../../../modules/customer/useCase/findSpecificCustomerByEmail/FindSpecificCustomerByEmailController";

const customerRoutes = Router();

const createCustomerController = new CreateCustomerController();
const findSpecificCustomerByEmailController =
  new FindSpecificCustomerByEmailController();

customerRoutes.post("/", createCustomerController.handle);
customerRoutes.post(
  "/findCustomer",
  findSpecificCustomerByEmailController.handle
);

export { customerRoutes };
