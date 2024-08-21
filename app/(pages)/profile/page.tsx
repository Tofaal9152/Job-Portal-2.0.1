'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { Pen, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TableAppliedJob from "./TableAppliedJob";
import { useState } from "react";
import Edit_Modal from "./Edit_Modal";
import { selectAuthUser } from "@/lib/features/user/allSlice";
import { useAppSelector } from "@/lib/hooks";

const page = () => {
  const AuthUser = useAppSelector(selectAuthUser);
  const [open, setopen] = useState(false)

  return (
    <div className="max-w-6xl shadow-xl shadow-[#10B981] mb-4 mx-auto mt-[6rem] p-6 bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Avatar className="cursor-pointer hover:shadow-lg">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Profile Image"
              className="rounded-full"
            />
            <AvatarFallback>
              <User2 className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-white font-bold text-2xl">
              {AuthUser?.fullname}
            </h1>
            <p className="text-gray-400 text-sm">{AuthUser?.profile?.bio}</p>
          </div>
        </div>
        <div
          onClick={() => setopen(true)}
          className="p-2 bg-gray-800 rounded-full hover:shadow-lg cursor-pointer"
        >
          <Pen className="text-[#10B981] hover:scale-125 duration-300" />
        </div>
      </div>

      <div className="text-white space-y-3 mb-8">
        <div className="flex items-center space-x-3">
          <IoMdMail
            size={22}
            className="text-[#10B981] cursor-pointer hover:scale-105 duration-300"
          />
          <span>{AuthUser?.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaSquarePhone
            size={22}
            className="text-[#10B981] cursor-pointer hover:scale-105 duration-300"
          />
          <span>{AuthUser?.phoneNumber}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg text-white mb-2">Skills</h2>
        <div className="flex space-x-2">
          {AuthUser?.profile?.skills.map((item:any, index:any) => (
            <Badge key={index} className="bg-[#10B981] text-white shadow-md">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg text-white mb-2">Resume</h2>
        <p className="text-gray-400">Tofaal MERN Stack Developer</p>
      </div>

      <h2 className="text-xl text-[#10B981] font-bold mb-4">Applied Jobs</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <TableAppliedJob />
      </div>
      <Edit_Modal open={open} setopen={setopen} />
    </div>
  );
};

export default page;
