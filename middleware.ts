import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.includes('admin') &&
      req.nextauth.token?.role !== 'ADMIN'
    ) {
      return new NextResponse('You are not authorized!');
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = { matcher: ['/admin(.*)', '/api/admin(.*)'] };
