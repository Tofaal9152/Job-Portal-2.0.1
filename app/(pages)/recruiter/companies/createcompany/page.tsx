"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectCompanyId, setCompanyId } from "@/lib/features/user/allSlice";
import { useRouter } from "next/navigation";
const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const companyId = useAppSelector(selectCompanyId);
  const [companyName, setCompanyName] = useState("");

  const submitCompany = async () => {
    try {
      const res = await axios.post("/api/company/register", {
        name: companyName,
      });
      console.log(res?.data?.company?._id);
      dispatch(setCompanyId(res?.data?.company?._id));
      toast.success(res?.data?.message);
      router.push(`/recruiter/companies/createcompany/${res?.data?.company?._id}`);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="max-w-6xl shadow-xl shadow-[#10B981] mb-4 mx-auto mt-[6rem] p-6 bg-gray-900 rounded-lg">
      <h1 className="text-2xl font-semibold text-white">Your Company Name</h1>
      <p className="text-gray-400 mt-5">
        What would you like to give your company name? You can change this
        later.
      </p>

      <label htmlFor="company-name" className="block text-white my-4">
        Company Name
      </label>
      <Input
        id="company-name"
        className="w-1/3 bg-transparent outline-none border-[#10B981] text-white"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <div className="mt-4 space-x-4">
        <Link href={`/recruiter/companies`}>
          <Button
            className="border border-[#10B981] text-black font-bold duration-300 hover:bg-[#10B981] hover:text-white"
            variant="outline"
          >
            Cancel
          </Button>
        </Link>

        <Button
          className="bg-[#10B981] border border-[#10B981] text-white font-bold duration-300 hover:bg-green-600"
          onClick={submitCompany}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Page;
