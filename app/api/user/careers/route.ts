import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import userCareerSchema from '../../validators/userCareerSchema';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user.id;

    if (!userId) {
      return NextResponse.json(
        {
          status: 'fail',
          message: `The user ID is invalid`,
        },
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const userCareers = await prisma.userCareer.findMany({
      where: {
        userId: userId,
      },
      select: {
        career: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        status: 'success',
        data: { userCareers },
      },
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: error.message,
      },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user.id;

    if (!userId) {
      return NextResponse.json(
        {
          status: 'fail',
          message: `The user ID is invalid`,
        },
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const newData = await request.json();

    const validatedNewData = userCareerSchema.parse(newData.courseIds);

    console.log(validatedNewData);

    const news = validatedNewData.map((data) => ({
      userId: userId,
      careerId: data,
    }));

    console.log(news);

    // Iterar sobre el array de IDs y crear un registro para cada uno
    const deleteOld = await prisma.userCareer.deleteMany({
      where: {
        userId: userId,
      },
    });

    const newUserCareer = await prisma.userCareer.createMany({
      data: news,
    });

    console.log(newUserCareer);

    return NextResponse.json(
      {
        status: 'success',
        data: {
          newUserCareer,
        },
      },
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'Career with same ID already exists',
        },
        {
          status: 409,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    return NextResponse.json(
      {
        status: 'error',
        message: error.message,
      },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
