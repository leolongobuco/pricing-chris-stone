import { inject, injectable } from "tsyringe";

import { ProfitAndLoses } from "../../../../entities/profitAndLoses";
import { IProductsRepository } from "../../../product/repositories/IProductsRepository";
import { ICustomersRepository } from "../../../customer/repositories/ICustomersRepository";
import { ICalculateNetProfitDTO } from "../../dtos/ICalculateNetProfitDTO";
import { IProfitAndLosesRepository } from "../../repositories/IProfitAndLosesRespository";
import { AppError } from "../../../../shared/infra/http/errors/AppError";
import { ProductsRepository } from "../../../product/infra/prisma/repositories/ProductsRepository";

@injectable()
class CreateProfitAndLosesUseCase {
  constructor(
    @inject("ProfitAndLosesRepository")
    private profitAndLosesRepository: IProfitAndLosesRepository,
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute({
    revenue,
    brazilianTax,
    costs,
    productID,
    customerEmail,
    valuePerUse,
  }: ICalculateNetProfitDTO): Promise<ProfitAndLoses> {
    let profitAndLoses;

    const brazilianTaxToShow = brazilianTax * 100;
    const split = 10;

    const customer = await this.customersRepository.findByEmail(customerEmail);

    if (!customer) throw new AppError("Cliente não encontrado");

    const product = await this.productsRepository.findById(productID);

    if (!product) throw new AppError("Produto não encontrado");

    const typeProduct = product.typeProduct;

    if (typeProduct === "Pedra Fofa") {
      const soldVolume = customer.soldVolume;
      const usageCharge = 0.1;

      if (!valuePerUse)
        throw new AppError(
          "O valor por uso é obrigatório para calcular o Profit and Loses desse produto"
        );

      const revenue = soldVolume * usageCharge * valuePerUse;
      const revenueLessaBrazilianTax = revenue * brazilianTax;
      const grossProfit = revenue - revenueLessaBrazilianTax;
      const revenueProfit = grossProfit - costs;
      const revenueProfitPerMonth = revenueProfit / split;

      profitAndLoses = {
        revenue,
        costs,
        brazilianTax: brazilianTaxToShow,
        netProfit: revenueProfitPerMonth,
        productID,
      };
    } else if (typeProduct === "Pedra Roxa") {
      const revenueSplit = revenue / split;
      const revenueLessaBrazilianTax = revenue * brazilianTax;
      const grossProfit = revenue - revenueLessaBrazilianTax;
      const revenueProfit = grossProfit - costs;
      const revenueProfitPerMonth = revenueProfit / split;

      profitAndLoses = {
        revenue: revenueSplit,
        costs,
        brazilianTax: brazilianTaxToShow,
        netProfit: revenueProfitPerMonth,
        productID,
      };
    } else {
      const brazilianTaxToShow = brazilianTax * 100;

      const revenueLessBrazilianTax = revenue * brazilianTax;

      const grossProfit = revenue - revenueLessBrazilianTax;

      const revenueProfit = grossProfit - costs;

      profitAndLoses = {
        revenue,
        costs,
        brazilianTax: brazilianTaxToShow,
        netProfit: revenueProfit,
        productID,
      };
    }

    const profitAndLosesCalculated = await this.profitAndLosesRepository.create(
      profitAndLoses
    );

    return profitAndLosesCalculated;
  }
}

export { CreateProfitAndLosesUseCase };
