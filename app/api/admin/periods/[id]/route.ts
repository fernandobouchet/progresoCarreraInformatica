import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import periodSchema from '@/validators/periodSchema';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);
  const period = await prisma.period.findUnique({
    where: {
      id,
    },
  });

  if (!period) {
    return NextResponse.json(
      {
        status: 'fail',
        message: 'No period with the Provided ID Found',
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
        period,
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
    const body = await request.json();

    const validatedData = periodSchema.parse(body);

    const updated_period = await prisma.period.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          period: updated_period,
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
          message: 'No period with the Provided ID Found',
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

    await prisma.period.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        {
          status: 'fail',
          message: 'No period with the Provided ID Found',
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
