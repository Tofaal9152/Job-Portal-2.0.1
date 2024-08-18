import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    phoneNumber: {
        required: true,
        type: Number
    },
    password: {
        required: true,
        type: String
    },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true
    },
    profile: {
        profilePhoto: {
            type: String,
            default: ""
        },
        bio: {
            type: String
        },
        skills: [{
            type: String
        }],
        resume: {
            type: String
        },
        resumeOriginalName: {
            type: String
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "company"
        },
    },
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema)