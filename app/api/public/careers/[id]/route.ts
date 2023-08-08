import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const career = await prisma.career.findUnique({
    where: {
      id,
    },
    include: {
      periods: {
        select: {
          id: true,
          order: true,
          courses: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!career) {
    return NextResponse.json(
      {
        status: 'fail',
        message: 'No career with the Provided ID Found',
      },
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

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
}
