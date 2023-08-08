import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import careerSchema from '@/validators/careerSchema';

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

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = Number(params.id);
    const newData = await request.json();

    const validatedNewData = careerSchema.parse(newData);

    const updatedCareer = await prisma.career.update({
      where: { id },
      data: validatedNewData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          career: updatedCareer,
        },
      },
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    if (error.code === 'P2025') {
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
export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = Number(params.id);

    await prisma.career.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
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
