import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { Company } from "../../../../models/companyModel";

database();
export async function POST(req) {
    try {
        const { name } = await req.json()

        if (!name) {
            return NextResponse.json({ success: false, message: "Company name is required" }, { status: 404 })

        }
        let company = await Company.findOne({ name })

        if (company) {
            return NextResponse.json({ success: false, message: "Company already exist" }, { status: 404 })

        }
        company = await Company.create({
            name: name,
            userId: req.headers.get("xUserId")
        })

        return NextResponse.json({ success: true, message: "Company registered successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}