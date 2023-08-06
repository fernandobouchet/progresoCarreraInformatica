import { PrismaClient, Prisma } from '@prisma/client';
import { coursesData } from './data/courses';
import { careersData } from './data/careers';

const prisma = new PrismaClient();

const careers: Prisma.CareerCreateInput[] = careersData;
const courses: Prisma.CourseCreateInput[] = coursesData;

async function main() {
  console.log(`Deleting previous data ...`);
  await prisma.career.deleteMany();
  await prisma.course.deleteMany();
  console.log(`Start seeding ...`);
  for (const careerData of careers) {
    const career = await prisma.career.create({
      data: careerData,
    });
    console.log(`Created career with id: ${career.id}`);
  }
  for (const CourseData of courses) {
    const course = await prisma.course.create({
      data: CourseData,
    });
    console.log(`Created course with id: ${course.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
