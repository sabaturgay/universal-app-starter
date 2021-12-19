import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log('middleware', req.headers)
  NextResponse.next()
  // return new Response('Hello, world!')
}
