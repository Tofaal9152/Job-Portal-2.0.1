import { NextResponse } from "next/server";
import { User } from '../../../../models/userModel';
import database from '../../../../database/database';

database();

export async function POST(req) {
    try {

        const body = await req.json();
        const { fullname, email, phoneNumber, bio, skills } = body;

        let skillArray = skills.split(",");

        const userId = req.headers.get('xUserId'); //important

        let user = await User.findById(userId)
        if (!user) {
            return NextResponse.json({ success: false, message: "user not found" }, { status: 404 })
        }

        if (fullname) { user.fullname = fullname }
        if (email) { user.email = email }
        if (phoneNumber) { user.phoneNumber = phoneNumber }
        if (bio) { user.profile.bio = bio }
        if (skills) { user.profile.skills = skillArray }

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return NextResponse.json({ success: true, user, message: "Profile updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
