import crypto from "crypto";

interface IProfitAndLoses {
  revenue: number;
  costs: number;
  brazilianTax: number;
  netProfit: number;
  productID: string;
}

class ProfitAndLoses {
  public id: string;
  private props: IProfitAndLoses;

  get revenue() {
    return this.props.revenue;
  }

  get brazilianTax() {
    return this.props.brazilianTax;
  }

  get costs() {
    return this.props.costs;
  }

  get netProfit() {
    return this.props.netProfit;
  }

  get productID() {
    return this.props.productID;
  }

  constructor(props: IProfitAndLoses, id?: string) {
    this.id = id ?? crypto.randomUUID();

    this.props = props;
  }
}

export { ProfitAndLoses };
