interface ICalculateNetProfitDTO {
  revenue: number;
  brazilianTax: number;
  costs: number;
  productID: string;
  customerEmail: string;
  valuePerUse?: number;
}

export { ICalculateNetProfitDTO };
