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
    if (req.nextUrl.pathname.startsWith('user') && !req.nextauth.token?.id) {
      return new NextResponse('You must be logged in!');
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

export const config = {
  matcher: ['/admin(.*)', '/api/admin(.*)', '/api/user(.*)'],
};
