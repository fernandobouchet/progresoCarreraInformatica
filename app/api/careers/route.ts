import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import careerSchema from '../validators/careerSchema';

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get('page');
  const limit_str = request.nextUrl.searchParams.get('limit');

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 10;
  const skip = (page - 1) * limit;

  const careers = await prisma.career.findMany({
    skip,
    take: limit,
  });

  return NextResponse.json(
    {
      status: 'success',
      results: careers.length,
      careers,
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

    const validatedNewData = careerSchema.parse(newData);

    const career = await prisma.career.create({
      data: validatedNewData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          career,
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
          message: 'Career with same name already exists',
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
