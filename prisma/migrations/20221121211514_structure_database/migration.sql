-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerSegment" TEXT NOT NULL,
    "customerLocation" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "typeProduct" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profitAndLose" (
    "id" TEXT NOT NULL,
    "revenue" INTEGER NOT NULL,
    "costs" INTEGER NOT NULL,
    "brazilianTax" INTEGER NOT NULL,
    "netProfit" INTEGER NOT NULL,
    "productsId" TEXT NOT NULL,

    CONSTRAINT "profitAndLose_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seller" (
    "id" TEXT NOT NULL,
    "sellerTypeLevel" TEXT NOT NULL,

    CONSTRAINT "seller_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_customerEmail_key" ON "customer"("customerEmail");

-- AddForeignKey
ALTER TABLE "profitAndLose" ADD CONSTRAINT "profitAndLose_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
