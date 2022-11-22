import { CustomerSegment } from "../entities/customer";

export const customerSegmentValueRatio = async (
  customerSegment: CustomerSegment
) => {
  try {
    const valueToAdd = {
      Tech: 8,
      "Real State": 6,
      Health: 4,
      "Personal Services": 4,
      Restaurants: 2,
      Clothing: 2,
      Entertainment: 2,
      Education: 1,
    };

    return valueToAdd[customerSegment];
  } catch (error) {
    throw new Error("Customer Segment is not correct");
  }
};
