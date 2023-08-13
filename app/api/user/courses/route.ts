import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { NextRequest, NextResponse } from 'next/server';
import userCourseSchema from '../../validators/userCourseSchema';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const id = session?.user.id;

    if (!id) {
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

    const page_str = request.nextUrl.searchParams.get('page');
    const limit_str = request.nextUrl.searchParams.get('limit');

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;
    const skip = (page - 1) * limit;

    const userCourses = await prisma.userCourse.findMany({
      where: { userId: id },
      skip,
      take: limit,
    });

    return NextResponse.json(
      {
        status: 'success',
        results: userCourses.length,
        data: { userCourses },
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

    const validatedNewData = userCourseSchema.parse(newData);

    const userCareer = await prisma.userCourse.create({
      data: { userId: userId, ...validatedNewData },
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          userCareer,
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
          message: 'Course with same ID already exists',
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
