import { NextResponse } from "next/server";
import database from '../../../../database/database'
import { User } from '../../../../models/userModel'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

database();
export async function POST(req) {
    try {
        const body = await req.json()
        const { email, password, role } = body
        if (!email || !password || !role) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 404 })
        }

        let user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 404 })
        }

        const isPasswordMatch = await bcryptjs.compare(password, user.password)
        if (!isPasswordMatch) {
            return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 404 })
        }

        if (role !== user.role) {
            return NextResponse.json({ success: false, message: "User doesn't exist with curent role" }, { status: 404 })
        }

        const tokenData = {
            userId: user._id,
        };
        const token = await jwt.sign(tokenData, process.env.JWT_TOKEN, { expiresIn: "1d" })
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        const res = NextResponse.json({ success: true, user, message: `Welcome back ${user.fullname}` }, { status: 200 })

        res.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60,
            sameSite: "strict",

        })

        return res
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}