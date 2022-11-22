import { SellerTypeLevel } from "../entities/seller";

export const seniorityValueRatio = async (sellerTypeLevel: SellerTypeLevel) => {
  try {
    const valueToAdd = {
      JR: 4,
      PL: 2,
      SR: 1,
    };

    return valueToAdd[sellerTypeLevel];
  } catch (error) {
    throw new Error("Seniority is not correct");
  }
};
