export const soldVolumeRatio = async (
  soldVolume: number,
  existCampaign: boolean,
  campaign?: string
) => {
  try {
    let valueToAdd;
    let discountValueMore2000;
    let discountValueMore1000;
    let discountValueLess1000;
    let discountValueBRA;

    const percentDiscount = 100;

    if (existCampaign) {
      if (campaign) {
        const campaignReceived = campaign;
        const campaignReceivedSplit = campaignReceived.split("#");
        const discountValueInNumber = Number(campaignReceivedSplit[1]);
        if (campaignReceived === "MORE2000#15") {
          discountValueMore2000 = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "MORE1000#10") {
          discountValueMore1000 = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "LESS1000#5") {
          discountValueLess1000 = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "BRA#20") {
          discountValueBRA = discountValueInNumber / percentDiscount;
        }
      }
    }

    const discountValueMore2000Final = discountValueBRA
      ? discountValueBRA
      : discountValueMore2000;

    const discountValueMore1000Final = discountValueBRA
      ? discountValueBRA
      : discountValueMore1000;

    const discountValueLess1000Final = discountValueBRA
      ? discountValueBRA
      : discountValueLess1000;

    if (soldVolume >= 2000) {
      valueToAdd = discountValueMore2000Final
        ? 1 - discountValueMore2000Final
        : 1;
    } else if (soldVolume < 2000 && soldVolume >= 1000) {
      valueToAdd = discountValueMore1000Final
        ? 2 - discountValueMore1000Final
        : 2;
    } else {
      valueToAdd = discountValueLess1000Final
        ? 4 - discountValueLess1000Final
        : 4;
    }
    return valueToAdd;
  } catch (error) {
    throw new Error("Sold Volume is not correct");
  }
};
