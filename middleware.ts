import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };


// /// 여기부터는 시간이 좀 여유가 있으면 설명.
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/about')) {
      return NextResponse.rewrite(new URL('/coding', request.url))
    }
  }