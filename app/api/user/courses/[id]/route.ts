import userCourseSchema from '@/app/api/validators/userCourseSchema';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const courseId = Number(params.id);

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

  const userCourse = await prisma.userCourse.findUnique({
    where: {
      courseId_userId: {
        courseId,
        userId,
      },
    },
    include: {
      course: true,
    },
  });

  if (!userCourse) {
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
        ...userCourse,
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
  { params }: { params: { id: string } }
) {
  try {
    const courseId = Number(params.id);

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

    const updatedUserCourse = await prisma.userCourse.update({
      where: {
        courseId_userId: {
          userId,
          courseId,
        },
      },
      data: {
        status: validatedNewData.status,
        qualification:
          validatedNewData.qualification === undefined
            ? null
            : validatedNewData.qualification,
      },
      select: {
        qualification: true,
        status: true,
      },
    });

    return NextResponse.json(
      {
        status: 'success',
        data: {
          ...updatedUserCourse,
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
  { params }: { params: { id: string } }
) {
  try {
    const courseId = Number(params.id);

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

    const userCourseToDelete = await prisma.userCourse.findFirst({
      where: {
        userId: userId,
        courseId: courseId,
      },
    });

    if (userCourseToDelete) {
      await prisma.userCareer.delete({
        where: {
          id: userCourseToDelete.id,
        },
      });
    } else {
      return NextResponse.json(
        {
          status: 'fail',
          message: `No course to delete found`,
        },
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

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
