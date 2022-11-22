import "reflect-metadata";

import { describe, expect, beforeEach, test } from "vitest";

import { PriceSimulationUseCase } from "./PriceSimulationUseCase";

let priceSimulationUseCase: PriceSimulationUseCase;

describe("create a simulation", () => {
  beforeEach(() => {
    priceSimulationUseCase = new PriceSimulationUseCase();
  });

  test("should be able to simulate a value", async () => {
    const simulation = await priceSimulationUseCase.execute({
      customerLocation: "91920150",
      customerSegment: "Tech",
      sellerTypeLevel: "JR",
      soldVolume: 120,
      priceAsked: 400,
      existCampaign: false,
    });
    expect(simulation).toEqual(256);
  });

  test("should be able to simulate a value RS", async () => {
    const simulation = await priceSimulationUseCase.execute({
      customerLocation: "91920150",
      customerSegment: "Tech",
      sellerTypeLevel: "JR",
      soldVolume: 1000,
      priceAsked: 400,
      existCampaign: false,
    });
    expect(simulation).toEqual(128);
  });

  test("should be able to simulate a value with campaign per state", async () => {
    const simulation = await priceSimulationUseCase.execute({
      customerLocation: "91920150",
      customerSegment: "Tech",
      sellerTypeLevel: "JR",
      soldVolume: 120,
      priceAsked: 400,
      existCampaign: true,
      campaingPerState: {
        existCampaign: true,
        campaign: "SUL#15",
      },
    });
    expect(simulation).toEqual(236.8);
  });

  test("should be able to simulate a value with campaign per sold volume", async () => {
    const simulation = await priceSimulationUseCase.execute({
      customerLocation: "91920150",
      customerSegment: "Tech",
      sellerTypeLevel: "JR",
      soldVolume: 120,
      priceAsked: 400,
      existCampaign: true,
      campaignPerSoldVolume: {
        existCampaign: true,
        campaign: "BRA#20",
      },
    });
    expect(simulation).toEqual(243.2);
  });
});
