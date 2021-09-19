/*
  Warnings:

  - The `phase` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Phase" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "phase",
ADD COLUMN     "phase" "Phase" NOT NULL DEFAULT E'InProgress';
