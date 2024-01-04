/*
  Warnings:

  - A unique constraint covering the columns `[careerId,userId]` on the table `UserCareer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `UserCareer_careerId_idx` ON `UserCareer`;

-- DropIndex
DROP INDEX `UserCareer_userId_careerId_key` ON `UserCareer`;

-- AlterTable
ALTER TABLE `Course` MODIFY `description` TEXT NULL;

-- CreateIndex
CREATE INDEX `UserCareer_userId_idx` ON `UserCareer`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserCareer_careerId_userId_key` ON `UserCareer`(`careerId`, `userId`);
