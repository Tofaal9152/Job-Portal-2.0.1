import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { Application } from '../../../../models/applicationModel'

database();

export async function GET(req) {
    try {

        const userId = req.headers.get("xUserId")
        if (!userId) {
            return NextResponse.json({ success: false, message: "user not found" }, { status: 500 })
        }

        const getappliedjobs = await Application.find({ applicant: userId }).sort({ createdAt:-1}).populate({
            path: "job",
            options: {sort:{ createdAt: -1 }},
            populate:{
                path: "companyId",
                options: { sort: { createdAt: -1 } },
            }
        })
        if (!getappliedjobs || getappliedjobs.length===0) {
            return NextResponse.json({ success: false, message: "Don't apply any job" }, { status: 500 })
        }
        
        return NextResponse.json({ success: true, getappliedjobs, message: "Found appliedjobs successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}