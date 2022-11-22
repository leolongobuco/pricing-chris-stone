/*
  Warnings:

  - You are about to drop the column `productsId` on the `profitAndLose` table. All the data in the column will be lost.
  - Added the required column `productID` to the `profitAndLose` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "profitAndLose" DROP CONSTRAINT "profitAndLose_productsId_fkey";

-- AlterTable
ALTER TABLE "profitAndLose" DROP COLUMN "productsId",
ADD COLUMN     "productID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "profitAndLose" ADD CONSTRAINT "profitAndLose_productID_fkey" FOREIGN KEY ("productID") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
