/*
  Warnings:

  - You are about to drop the column `make` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "make",
DROP COLUMN "model",
DROP COLUMN "year",
ADD COLUMN     "img" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "price" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "url" TEXT;
