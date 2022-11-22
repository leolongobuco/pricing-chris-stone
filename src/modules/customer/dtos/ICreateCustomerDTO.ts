import { CustomerSegment } from "../../../entities/customer";

interface ICreateCustomerDTO {
  customerEmail: string;
  soldVolume: number;
  customerSegment: CustomerSegment;
  customerLocation: string;
}

export { ICreateCustomerDTO };
