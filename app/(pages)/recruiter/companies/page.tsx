"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CompanyTable from "./CompanyTable";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setFilteR } from "@/lib/features/user/allSlice";
const page = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setFilteR(filter));
  }, [filter]);
  return (
    <div className="max-w-6xl space-y-10 shadow-xl shadow-[#10B981] mb-4 mx-auto mt-[6rem] p-6 bg-gray-900 rounded-lg">
      <div className="flex items-center justify-between">
        <Input
          onChange={(e) => setFilter(e.target.value)}
          className="w-1/3 bg-transparent outline-none border-[#10B981] text-white"
          placeholder="Filter By Company"
        />
        <Link href={`/recruiter/companies/createcompany`}>
          <Button
            className="bg-[#10B981] border border-[#10B981] text-white font-bold duration-300"
            variant="outline"
          >
            New Company
          </Button>
        </Link>
      </div>
      <CompanyTable />
    </div>
  );
};

export default page;
