import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const careersData: Prisma.CareerCreateInput[] = [
  {
    name: 'Licenciatura en informática',
  },
  {
    name: 'Técnicatura en informática',
  },
  {
    name: 'Técnicatura en programación',
  },
  {
    name: 'Técnicatura en redes y operaciones informáticas',
  },
  {
    name: 'Técnicatura en inteligencia artificial',
  },
  {
    name: 'Técnicatura en videojuegos',
  },
];

const CoursesData: Prisma.CourseCreateInput[] = [
  {
    name: 'Matemática I',
    number: 1,
    area: 'CB',
    hsWeekly: 8,
    hsTotal: 128,
  },
  {
    name: 'Introducción a la Programación',
    number: 2,
    area: 'AyL',
    hsWeekly: 8,
    hsTotal: 128,
  },
  {
    name: 'Organización de Computadoras',
    number: 3,
    area: 'ASOyR',
    hsWeekly: 6,
    hsTotal: 96,
  },
  {
    name: 'Nuevos Entornos y Lenguajes',
    number: 4,
    area: 'Otros',
    hsWeekly: 2,
    hsTotal: 32,
  },
  {
    name: 'Estructuras de Datos',
    number: 5,
    area: 'TC',
    hsWeekly: 8,
    hsTotal: 128,
  },
  {
    name: 'Programación con Objetos I',
    number: 6,
    area: 'AyL',
    hsWeekly: 8,
    hsTotal: 128,
  },
  {
    name: 'Bases de Datos',
    number: 7,
    area: 'ISBDySI',
    hsWeekly: 6,
    hsTotal: 96,
  },
  {
    name: 'Inglés I',
    number: 8,
    area: 'Otros',
    hsWeekly: 2,
    hsTotal: 32,
  },
];

async function main() {
  console.log(`Deleting previous data ...`);
  await prisma.career.deleteMany();
  await prisma.course.deleteMany();
  console.log(`Start seeding ...`);
  for (const careerData of careersData) {
    const career = await prisma.career.create({
      data: careerData,
    });
    console.log(`Created career with id: ${career.id}`);
  }
  for (const CourseData of CoursesData) {
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
