import { IPriceSimulationDTO } from "../../dtos/IPriceSimulationDTO";
import { customerLocationValueRatio } from "../../../../utils/customerLocationValueRatio";
import { customerSegmentValueRatio } from "../../../../utils/customerSegmentValueRatio";
import { seniorityValueRatio } from "../../../../utils/seniorityValueRatio";
import { soldVolumeRatio } from "../../../../utils/soldVolumeValueRatio";
import { AppError } from "../../../../shared/infra/http/errors/AppError";

class PriceSimulationUseCase {
  async execute({
    customerLocation,
    customerSegment,
    sellerTypeLevel,
    soldVolume,
    priceAsked,
    campaignPerSoldVolume,
    campaingPerState,
    existCampaign,
  }: IPriceSimulationDTO) {
    const valueOfSeniority = await seniorityValueRatio(sellerTypeLevel);

    if (
      campaignPerSoldVolume?.existCampaign &&
      !campaignPerSoldVolume?.campaign
    )
      throw new AppError("É necessário enviar a campanha por TPV");

    if (campaingPerState?.existCampaign && !campaingPerState?.campaign)
      throw new AppError("É necessário enviar a campanha por estado");

    const valueOfSoldVolume = await soldVolumeRatio(
      soldVolume,
      existCampaign,
      campaignPerSoldVolume?.campaign
    );

    const valueOfCustomerSegment = await customerSegmentValueRatio(
      customerSegment
    );

    const valueOfCustomerLocation = await customerLocationValueRatio(
      customerLocation,
      existCampaign,
      campaingPerState?.campaign
    );

    const valueMinimumNegociate =
      valueOfSeniority *
      valueOfSoldVolume *
      valueOfCustomerSegment *
      valueOfCustomerLocation;

    if (priceAsked < valueMinimumNegociate) {
      throw new AppError("Valor negociado é inferior ao solicitado");
    }

    return valueMinimumNegociate;
  }
}

export { PriceSimulationUseCase };
