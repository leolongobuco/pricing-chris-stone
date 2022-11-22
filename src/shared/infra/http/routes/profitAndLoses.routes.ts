import { Router } from "express";

import { CreateProfitAndLosesController } from "../../../../modules/profitAndLoses/useCase/createProfitAndLoses/CreateProfitAndLosesController";
import { FindSpecificProfitAndLosesByIdController } from "../../../../modules/profitAndLoses/useCase/findSpecificProfitAndLosesByIdProduct/FindSpecificProfitAndLosesByIdProductController";

const profitAndLosesRoutes = Router();

const createProfitAndLosesController = new CreateProfitAndLosesController();
const findSpecificProfitAndLosesByIdController =
  new FindSpecificProfitAndLosesByIdController();

profitAndLosesRoutes.post("/", createProfitAndLosesController.handle);

profitAndLosesRoutes.post(
  "/:productID",
  findSpecificProfitAndLosesByIdController.handle
);

export { profitAndLosesRoutes };
