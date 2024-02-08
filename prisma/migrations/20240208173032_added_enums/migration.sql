/*
  Warnings:

  - Changed the type of `group` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ExerciseGroup" AS ENUM ('Prepare', 'Work', 'Rest', 'CoolDown');

-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('Reps', 'Duration');

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "group",
ADD COLUMN     "group" "ExerciseGroup" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "ExerciseType" NOT NULL;
