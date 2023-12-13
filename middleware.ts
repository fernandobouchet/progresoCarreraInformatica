import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== 'ADMIN'
    ) {
      return new NextResponse('You are not authorized!');
    }
  },
  {
    pages: {
      signIn: '/login',
    },
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ['/admin(.*)', '/(.*)'] };
