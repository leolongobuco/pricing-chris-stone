import crypto from "crypto";

type TypeProducts = "Pedra da Sorte" | "Pedra Roxa" | "Pedra Fofa";

interface IProduct {
  productName: string;
  typeProduct: TypeProducts;
}

class Product {
  public id: string;
  private props: IProduct;

  get productName() {
    return this.props.productName;
  }

  get typeProduct() {
    return this.props.typeProduct;
  }

  constructor(props: IProduct, id?: string) {
    this.id = id ?? crypto.randomUUID();

    this.props = props;
  }
}

export { Product, TypeProducts };
