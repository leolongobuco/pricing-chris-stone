import { container } from "tsyringe";

import { CustomersRepository } from "../../modules/customer/infra/prisma/repositories/CustomersRepository";
import { ICustomersRepository } from "../../modules/customer/repositories/ICustomersRepository";

import { ProductsRepository } from "../../modules/product/infra/prisma/repositories/ProductsRepository";
import { IProductsRepository } from "../../modules/product/repositories/IProductsRepository";

import { ProfitAndLosesRepository } from "../../modules/profitAndLoses/infra/prisma/repositories/ProfitAndLosesRepository";
import { IProfitAndLosesRepository } from "../../modules/profitAndLoses/repositories/IProfitAndLosesRespository";

import { SellerRepository } from "../../modules/seller/infra/prisma/repositories/SellerRepository";
import { ISellersRespository } from "../../modules/seller/repositories/ISellersRepository";

container.registerSingleton<ICustomersRepository>(
  "CustomersRepository",
  CustomersRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IProfitAndLosesRepository>(
  "ProfitAndLosesRepository",
  ProfitAndLosesRepository
);

container.registerSingleton<ISellersRespository>(
  "SellersRepository",
  SellerRepository
);
