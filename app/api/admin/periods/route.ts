import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import periodSchema from '@/validators/periodSchema';

export async function GET(request: NextRequest) {
  const page_str = request.nextUrl.searchParams.get('page');
  const limit_str = request.nextUrl.searchParams.get('limit');

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 10;
  const skip = (page - 1) * limit;

  const periods = await prisma.period.findMany({
    skip,
    take: limit,
  });

  return NextResponse.json(
    {
      status: 'success',
      results: periods.length,
      periods,
    },
    {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = periodSchema.parse(body);

    const period = await prisma.period.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          period,
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
          message: 'period with same name already exists',
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
