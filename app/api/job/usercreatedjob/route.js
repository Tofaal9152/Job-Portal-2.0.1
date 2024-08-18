import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { Job } from '../../../../models/jobModel'

database();

export async function GET(req) {
    try {
        const userId = req.headers.get("xUserId");

        if (!userId) {
            return NextResponse.json({ success: false, message: "User ID is missing from headers" }, { status: 400 });
        }

        const jobs = await Job.find({ createdBy: userId });

        if (!jobs || jobs.length === 0) {
            return NextResponse.json({ success: false, message: "Jobs not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, jobs, message: "Jobs found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
