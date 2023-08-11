import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import courseSchema from '@/validators/courseSchema';

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get('page');
  const limit_str = request.nextUrl.searchParams.get('limit');

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 10;
  const skip = (page - 1) * limit;

  const courses = await prisma.course.findMany({
    skip,
    take: limit,
  });

  return NextResponse.json(
    {
      status: 'success',
      results: courses.length,
      data: { courses },
    },
    {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(request: Request) {
  try {
    const newData = await request.json();

    const validatedNewData = courseSchema.parse(newData);

    const course = await prisma.course.create({
      data: validatedNewData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          course,
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
          message: 'Course with same name already exists',
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
