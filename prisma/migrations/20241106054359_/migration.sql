/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Project` table. All the data in the column will be lost.
  - Added the required column `priority` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_createdBy_fkey";

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "priority" "priority" NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdBy",
DROP COLUMN "priority",
ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
