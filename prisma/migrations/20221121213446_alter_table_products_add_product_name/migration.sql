/*
  Warnings:

  - Added the required column `productName` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "productName" TEXT NOT NULL;
