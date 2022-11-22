import { Router } from "express";

import { customerRoutes } from "./customer.routes";
import { priceSimulationRoutes } from "./priceSimulation.routes";
import { productRoutes } from "./products.routes";
import { profitAndLosesRoutes } from "./profitAndLoses.routes";
import { sellerRoutes } from "./seller.routes";

const router = Router();

router.use("/simulationPrice", priceSimulationRoutes);
router.use("/customer", customerRoutes);
router.use("/product", productRoutes);
router.use("/profitAndLoses", profitAndLosesRoutes);
router.use("/seller", sellerRoutes);

export { router };
