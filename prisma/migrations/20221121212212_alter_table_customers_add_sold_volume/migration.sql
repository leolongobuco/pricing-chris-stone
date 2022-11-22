/*
  Warnings:

  - Added the required column `soldVolume` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "soldVolume" INTEGER NOT NULL;
