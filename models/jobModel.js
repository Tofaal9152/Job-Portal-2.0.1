import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    },
    requirements: [{
        type: String
    }],
    salary: {
        required: true,
        type: Number
    },
    experienceLevel: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
    }],

}, { timestamps: true })

export const Job =mongoose.models.Job || mongoose.model("Job", jobSchema)
