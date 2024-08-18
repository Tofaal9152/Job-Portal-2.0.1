import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { User } from '../../../../models/userModel'
import bcryptjs from 'bcryptjs'


database();
export async function POST(req) {
    try {
        const body = await req.json()
        const { fullname, email, phoneNumber, role, password } = body

        if (!fullname || !email || !password || !phoneNumber || !role) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 404 })
        }

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ success: false, message: "User already exist" }, { status: 404 })

        }

        const hashPassword = await bcryptjs.hash(password, 10)
        await User.create({
            fullname,
            email,
            password: hashPassword,
            phoneNumber,
            role,
        })
        return NextResponse.json({ success: true, message: "Registered successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}