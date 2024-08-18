import { NextResponse } from "next/server";
import database from '../../../../../database/database'
import { Application } from '../../../../../models/applicationModel'

database();

export async function POST(req) {
    try {
        const {status} = await req.json()
        const applicationId = req.nextUrl.pathname.split('/').pop();

        
        if (!status) {
            return NextResponse.json({ success: false, message: "status is required" }, { status: 500 })
        }

        let application = await Application.findById(applicationId)
        if (!application) {
            return NextResponse.json({ success: false, message: "application not found" }, { status: 500 })
        }

        application.status = status.toLowerCase() 
        await application.save()

        return NextResponse.json({ success: true, application, message: "status update successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}