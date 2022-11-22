import { Request, Response } from "express";
import { PriceSimulationUseCase } from "./PriceSimulationUseCase";

class PriceSimulationController {
  async handle(request: Request, response: Response) {
    const {
      customerLocation,
      customerSegment,
      sellerTypeLevel,
      soldVolume,
      priceAsked,
      campaignPerSoldVolume,
      campaingPerState,
      existCampaign,
    } = request.body;

    const priceSimulationUseCase = new PriceSimulationUseCase();

    const priceSimulation = await priceSimulationUseCase.execute({
      customerLocation,
      customerSegment,
      sellerTypeLevel,
      soldVolume,
      priceAsked,
      campaignPerSoldVolume,
      campaingPerState,
      existCampaign,
    });

    return response.json({ priceSimulation }).status(200).send();
  }
}

export { PriceSimulationController };
