/*
  Warnings:

  - Added the required column `reps` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "reps" INTEGER NOT NULL;
