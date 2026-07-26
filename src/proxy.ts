import { NextRequest, NextResponse } from 'next/server';

const PROFILE_IMAGE_PATH_PREFIX = '/assets/profile-images/';
const ALLOWED_BACKEND_IMAGE_HOSTS = new Set(['localhost', '127.0.0.1']);

export function proxy(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url');
  if (!imageUrl) {
    return NextResponse.next();
  }

  let parsedImageUrl: URL;
  try {
    parsedImageUrl = new URL(imageUrl);
  } catch {
    return NextResponse.next();
  }

  const isBackendProfileImage =
    parsedImageUrl.protocol === 'http:' &&
    ALLOWED_BACKEND_IMAGE_HOSTS.has(parsedImageUrl.hostname) &&
    parsedImageUrl.port === '8001' &&
    parsedImageUrl.pathname.startsWith(PROFILE_IMAGE_PATH_PREFIX);

  if (!isBackendProfileImage) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL(parsedImageUrl.pathname, request.url));
}

export const config = {
  matcher: '/_next/image',
};
