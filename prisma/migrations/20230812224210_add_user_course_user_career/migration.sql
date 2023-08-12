/*
  Warnings:

  - Added the required column `order` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `order` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `UserCourse` (
    `id` VARCHAR(191) NOT NULL,
    `courseId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `qualification` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('CURSANDO', 'PENDIENTE', 'REGULARIZADA', 'APROBADA') NOT NULL DEFAULT 'PENDIENTE',

    INDEX `UserCourse_userId_idx`(`userId`),
    UNIQUE INDEX `UserCourse_courseId_userId_key`(`courseId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCareer` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `careerId` INTEGER NOT NULL,

    INDEX `UserCareer_careerId_idx`(`careerId`),
    UNIQUE INDEX `UserCareer_userId_careerId_key`(`userId`, `careerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
