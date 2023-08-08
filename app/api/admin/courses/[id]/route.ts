import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import courseSchema from '@/validators/courseSchema';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  if (!course) {
    return NextResponse.json(
      {
        status: 'fail',
        message: 'No course with the Provided ID Found',
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
        course,
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

    const validatedNewData = courseSchema.parse(newData);

    const updatedCourse = await prisma.course.update({
      where: { id },
      data: validatedNewData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          course: updatedCourse,
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
          message: 'No course with the Provided ID Found',
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

    await prisma.course.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'No course with the Provided ID Found',
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
