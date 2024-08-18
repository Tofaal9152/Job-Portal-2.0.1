import { NextResponse } from "next/server";
import database from '../../../../../database/database'
import { Job } from '../../../../../models/jobModel'
database();

export async function GET(req) {
    try {
        const jobId = req.nextUrl.pathname.split('/').pop();

        if (!jobId) {
            return NextResponse.json({ success: false, message: "Job Id is required" }, { status: 400 })
        }

        let job = await Job.findById(jobId).populate({
            path: "applications",
            options: { sort: { createdAt: -1 } },
            populate:{
                path:"applicant",
                options: { sort: { createdAt: -1 } },
            }

        })

        if (!job) {
            return NextResponse.json({ success: false, message: "Job doesn't exist" }, { status: 400 })
        }

        return NextResponse.json({ success: true, job, message: "Job applicant found successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}