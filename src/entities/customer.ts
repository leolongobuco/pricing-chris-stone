import crypto from "crypto";

type CustomerSegment =
  | "Restaurants"
  | "Education"
  | "Health"
  | "Tech"
  | "Clothing"
  | "Real State"
  | "Personal Services"
  | "Entertainment";

interface ICustomerProps {
  customerEmail: string;
  soldVolume: number;
  customerSegment: CustomerSegment;
  customerLocation: string;
}

class Customer {
  public id: string;
  private props: ICustomerProps;

  get customerEmail() {
    return this.props.customerEmail;
  }

  get soldVolume() {
    return this.props.soldVolume;
  }

  get customerSegment() {
    return this.props.customerSegment;
  }

  get customerLocation() {
    return this.props.customerLocation;
  }

  constructor(props: ICustomerProps, id?: string) {
    const { soldVolume } = props;

    this.id = id ?? crypto.randomUUID();

    if (soldVolume <= 0) {
      throw new Error("the volume sold must not be less than or equal to 0");
    }

    this.props = props;
  }
}

export { Customer, ICustomerProps, CustomerSegment };
