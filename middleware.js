import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req) {
    try {
        const token = req.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json({ success: false, message: "Log in first" }, { status: 404 });
        }

        const secret = new TextEncoder().encode(process.env.JWT_TOKEN)
        const { payload } = await jwtVerify(token, secret)

        const res = NextResponse.next();
        res.headers.set('xUserId', payload.userId);

        return res;
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export const config = {
    matcher: [
        '/api/user/updateprofile',
        '/api/company/register',
        '/api/company/getcompany',
        '/api/company/getcompanybyid/:id*',
        '/api/company/updatecompany/:id*',
        '/api/job/postjob',
        '/api/job/getalljobs',
        '/api/job/usercreatedjob',
        '/api/job/getjobbyid/:id*',
        '/api/application/applyjob/:id*',
        '/api/application/getappliedjobs',
        '/api/application/getapplicant/:id*',
        '/api/application/updatestatus/:id*',
    ],
};
