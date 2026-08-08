// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuth = request.cookies.has('admin_token');

  // Agar user /admin routes par hai aur logged in nahi hai
  if (path.startsWith('/admin') && path !== '/admin/login') {
    if (!isAuth) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Agar logged in hai aur login page par jane ki koshish kare
  if (path === '/admin/login' && isAuth) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};