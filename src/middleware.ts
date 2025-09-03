import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/protected') {
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }
}
