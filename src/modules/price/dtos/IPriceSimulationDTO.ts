import { CustomerSegment } from "../../../entities/customer";
import { SellerTypeLevel } from "../../../entities/seller";

interface IPriceSimulationDTO {
  soldVolume: number;
  sellerTypeLevel: SellerTypeLevel;
  customerSegment: CustomerSegment;
  customerLocation: string;
  priceAsked: number;
  existCampaign: boolean;
  campaingPerState?: {
    existCampaign: boolean;
    campaign?: string;
  };
  campaignPerSoldVolume?: {
    existCampaign: boolean;
    campaign?: string;
  };
}

export { IPriceSimulationDTO };
