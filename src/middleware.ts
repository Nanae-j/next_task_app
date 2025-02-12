import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  console.log('ミドルウェア');
  console.log(request);

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/task'],
};
