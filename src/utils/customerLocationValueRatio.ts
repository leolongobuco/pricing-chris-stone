const buscaCEP = require("busca-cep");

interface IResponse {
  uf: string;
  valueToAdd: number;
}

export const customerLocationValueRatio = async (
  customerLocation: string,
  existCampaign: boolean,
  campaign?: string
) => {
  try {
    let discountValueSUD;
    let discountValueBRA;
    let discountValueSUL;
    let discountValueNOD;
    let discountValueNOR;

    const percentDiscount = 100;

    const response = await buscaCEP(customerLocation, {
      sync: false,
      timeout: 1000,
    });

    if (existCampaign) {
      if (campaign) {
        const campaignReceived = campaign;
        const campaignReceivedSplit = campaignReceived.split("#");
        const discountValueInNumber = Number(campaignReceivedSplit[1]);
        if (campaignReceived === "SUL#15") {
          discountValueSUL = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "SUD#10") {
          discountValueSUD = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "NOD#20") {
          discountValueNOD = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "NOR#30") {
          discountValueNOR = discountValueInNumber / percentDiscount;
        } else if (campaignReceived === "BRA#40") {
          discountValueBRA = discountValueInNumber / percentDiscount;
        }
      }
    }

    const discountValueSUDFinal = discountValueBRA
      ? discountValueBRA
      : discountValueSUD;

    const discountValueSULFinal = discountValueBRA
      ? discountValueBRA
      : discountValueSUL;

    const discountValueNODFinal = discountValueBRA
      ? discountValueBRA
      : discountValueNOD;

    const discountValueNORFinal = discountValueBRA
      ? discountValueBRA
      : discountValueNOR;

    const states = [
      {
        uf: "AC",
        valueToAdd: discountValueNORFinal ? 4 - discountValueNORFinal : 4,
      },
      {
        uf: "BA",
        valueToAdd: discountValueNODFinal ? 3 - discountValueNODFinal : 3,
      },
      {
        uf: "SP",
        valueToAdd: discountValueSUDFinal ? 1 - discountValueSUDFinal : 1,
      },
      {
        uf: "RS",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "RJ",
        valueToAdd: discountValueSULFinal ? 1 - discountValueSULFinal : 1,
      },
      {
        uf: "MG",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "PR",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "SC",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "PA",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "ES",
        valueToAdd: discountValueSULFinal ? 3 - discountValueSULFinal : 3,
      },
      {
        uf: "PE",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "AM",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "CE",
        valueToAdd: discountValueSULFinal ? 2 - discountValueSULFinal : 2,
      },
      {
        uf: "MT",
        valueToAdd: discountValueSULFinal ? 3 - discountValueSULFinal : 3,
      },
      {
        uf: "MS",
        valueToAdd: discountValueSULFinal ? 3 - discountValueSULFinal : 3,
      },
      {
        uf: "MA",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "PB",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "SE",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "RO",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "AL",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "PI",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "TO",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "AP",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "RR",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
      {
        uf: "AC",
        valueToAdd: discountValueSULFinal ? 4 - discountValueSULFinal : 4,
      },
    ];

    const findStates = states.find(
      (state) => state.uf === response.uf
    ) as IResponse;

    return findStates.valueToAdd;
  } catch (error) {
    throw new Error("CEP is not correct");
  }
};
