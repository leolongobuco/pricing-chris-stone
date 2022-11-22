import { Router } from "express";

import { CreateProductController } from "../../../../modules/product/useCase/createProduct/CreateProductController";
import { FindSpecificProductByIdController } from "../../../../modules/product/useCase/findSpecificProductById/FindSpecificProductByIdController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const findSpecificProductByIdController =
  new FindSpecificProductByIdController();

productRoutes.post("/", createProductController.handle);
productRoutes.post("/:productID", findSpecificProductByIdController.handle);

export { productRoutes };
