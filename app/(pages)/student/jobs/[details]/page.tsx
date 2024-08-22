"use client";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectAuthUser,
  selectGetJobById,
  setGetJobById,
} from "@/lib/features/user/allSlice";
import { toast } from "sonner";

const page = ({ params }: { params: { details: string } }) => {
  const dispatch = useAppDispatch();
  const GetJobById = useAppSelector(selectGetJobById);
  const AuthUser = useAppSelector(selectAuthUser);

  useEffect(() => {
    const fetchJobById = async () => {
      try {
        const res = await axios.get(`/api/job/getjobbyid/${params.details}`);
        dispatch(setGetJobById(res?.data?.jobs));
      } catch (error: any) {
        console.log(error?.response?.data?.message);
      }
    };

    fetchJobById();
  }, [dispatch, params.details]);

  const submitApplication = async () => {
    try {
      const res = await axios.post(
        `/api/application/applyjob/${params.details}`
      );

      toast.success(res?.data?.message);
    } catch (error: any) {
      toast.success(error?.response?.data?.message);
    }
  };

  const isApplied = GetJobById?.applications?.some(
    (e: any) => e.applicant === AuthUser._id
  );
  return (
    <div className="max-w-6xl mx-auto shadow-xl shadow-[#10B981] mb-4 mt-[6rem] p-6 bg-gray-900  rounded-lg">
      {/* Job Title and Badges */}
      <div className="mb-6 flex justify-between ">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white ">
            {GetJobById?.title}
          </h1>
          <div className="flex space-x-2">
            <Badge className="bg-blue-600 text-white">Remote</Badge>
            <Badge className="bg-[#10B981] text-white">
              {GetJobById?.jobType}
            </Badge>
            <Badge className="bg-yellow-600 text-white">Mid-level</Badge>
          </div>
        </div>
        <Button
          onClick={submitApplication}
          disabled={isApplied}
          className={`${
            isApplied
              ? "bg-gray-600 text-white cursor-not-allowed"
              : "bg-[#10B981] hover:bg-transparent hover:text-white border border-[#10B981] text-white"
          } font-bold  py-2 px-4 rounded-lg duration-300`}
          variant="outline"
        >
          {!isApplied ? "Apply Now" : "Already Applied"}
        </Button>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-xl text-[#10B981] font-bold mb-4">
          Job Description
        </h2>
        <div className="border-b border-[#10B981] mb-4"></div>
        <div className="space-y-4 text-white">
          <div>
            <h3 className="text-lg font-semibold">Role</h3>
            <p className="text-gray-400"> {GetJobById?.title}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Requirements</h3>
            <p className="text-gray-400">
              {" "}
              {GetJobById?.requirements.join(" ,")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-400">{GetJobById?.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-400">{GetJobById?.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-gray-400">
              {GetJobById?.experienceLevel} years in {GetJobById?.title}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Salary</h3>
            <p className="text-gray-400">$ {GetJobById?.salary} per month</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Applicants</h3>
            <p className="text-gray-400">{GetJobById?.applications.length}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Posted Date</h3>
            <p className="text-gray-400">
              {" "}
              {GetJobById?.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
