import { Router } from "express";

import { PriceSimulationController } from "../../../../modules/price/useCase/priceSimulation/PriceSimulationController";

const priceSimulationRoutes = Router();

const priceSimulationController = new PriceSimulationController();

priceSimulationRoutes.post("/", priceSimulationController.handle);

export { priceSimulationRoutes };
