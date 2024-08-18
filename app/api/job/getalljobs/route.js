import { NextResponse } from "next/server";
import database from '../../../../database/database';
import { Job } from '../../../../models/jobModel';

database();

export async function GET(req) {
    try {

        const keyword = new URL(req.url).searchParams.get('keyword') || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };

        const jobs = await Job.find(query).populate({
            path: "companyId"
        }).sort({ createdAt: -1 })

        if (jobs.length === 0) {
            return NextResponse.json({ success: false, message: "Jobs not found" }, { status: 400 });
        }
        return NextResponse.json({ success: true, jobs, message: "Jobs found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
