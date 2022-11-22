import crypto from "crypto";

type SellerTypeLevel = "JR" | "PL" | "SR";

interface ISellerProps {
  sellerName: string;
  sellerTypeLevel: SellerTypeLevel;
}

class Seller {
  public id: string;

  private props: ISellerProps;

  get sellerName() {
    return this.props.sellerName;
  }

  get sellerTypeLevel() {
    return this.props.sellerTypeLevel;
  }

  constructor(props: ISellerProps, id?: string) {
    this.id = id ?? crypto.randomUUID();

    this.props = props;
  }
}

export { Seller, ISellerProps, SellerTypeLevel };
