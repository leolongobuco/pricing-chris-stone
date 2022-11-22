import { Router } from "express";

import { CreateSellerController } from "../../../../modules/seller/useCase/createSeller/CreateSellerController";

const sellerRoutes = Router();

const createSellerController = new CreateSellerController();

sellerRoutes.post("/", createSellerController.handle);

export { sellerRoutes };
