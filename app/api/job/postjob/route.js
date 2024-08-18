import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { Job } from '../../../../models/jobModel'



database();
export async function POST(req) {
    try {

        const userId = req.headers.get('xUserId');

        let body = await req.json()
        let { title, description, requirements, experienceLevel, salary, location, jobType, position, companyId } = body

        if (!title || !description || !requirements || !experienceLevel || !salary || !location || !jobType || !position || !companyId) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 404 });
        }

        let job = await Job.create({
            title,
            description,
            requirements: requirements.split(','),
            experienceLevel,
            salary,
            location,
            jobType,
            position,
            companyId,
            createdBy: userId
        })

        return NextResponse.json({ success: true, job, message: "Job created successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}

