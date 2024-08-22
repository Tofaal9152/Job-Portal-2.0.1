import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { Company } from "../../../../models/companyModel";

database();
export async function GET(req) {
    try {
        const userId = req.headers.get("xUserId")
        const companies = await Company.find({ userId }).sort({
            createdAt: -1,
        })

        if (!companies) {
            return NextResponse.json({ success: false, message: "Companies not found" }, { status: 404 })
        }
        return NextResponse.json({ success: true, companies, message: "Company founded" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}
