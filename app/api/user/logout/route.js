import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const res = NextResponse.json({ success: true, message: `logged out successfully` }, { status: 200 })
        res.cookies.set("token","",{maxAge:0})
        return res
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}