import { IPriceSimulationDTO } from "../dtos/IPriceSimulationDTO";

interface IPriceRepository {
  calculatePriceSimulation({
    customerLocation,
    customerSegment,
    sellerTypeLevel,
    soldVolume,
  }: IPriceSimulationDTO): Promise<number>;
}

export { IPriceRepository };
