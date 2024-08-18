import { NextResponse } from "next/server";
import database from '../../../../../database/database';
import { Job } from '../../../../../models/jobModel';

database();

export async function GET(req) {
    try {
        const _id = req.nextUrl.pathname.split('/').pop();

        const jobs = await Job.findById(_id);
        if (!jobs) {
            return NextResponse.json({ success: false, message: "Jobs not found" }, { status: 400 });
        }

        return NextResponse.json({ success: true, jobs, message: "Jobs found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
