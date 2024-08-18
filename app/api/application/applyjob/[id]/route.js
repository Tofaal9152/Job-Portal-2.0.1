import { NextResponse } from "next/server";
import database from '../../../../../database/database'
import { Application } from '../../../../../models/applicationModel'
import { Job } from '../../../../../models/jobModel'
database();

export async function POST(req) {
    try {

        const userId = req.headers.get("xUserId")
        const jobId = req.nextUrl.pathname.split('/').pop();

        if (!jobId) {
            return NextResponse.json({ success: false, message: "Job Id is is required" }, { status: 400 })
        }
       
        let job = await Job.findById(jobId)
        if (!job) {
            return NextResponse.json({ success: false, message: "Job doesn't exist" }, { status: 400 })
        }
        
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })
        if (existingApplication) {
            return NextResponse.json({ success: false, message: "You have already applied for this job" }, { status: 400 })
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,

        })
        
        job.applications.push(newApplication._id)
        await job.save()

        return NextResponse.json({ success: true, message: "Job applied successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}