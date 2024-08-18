import { NextResponse } from "next/server";
import database from '../../../../../database/database';
import { Company } from "../../../../../models/companyModel";

database();

export async function PUT(req) {
    try {
        const body = await req.json();
        const { name, description, location, website } = body;

        const updateData = { name, description, website, location };

        const _id = req.nextUrl.pathname.split('/').pop();

        const company = await Company.findByIdAndUpdate(_id, updateData, { new: true });
        if (!company) {
            return NextResponse.json({ success: false, message: "Company not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, company, message: "Company information updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
