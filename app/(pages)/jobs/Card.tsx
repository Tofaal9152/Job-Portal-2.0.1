import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Card = ({ item }: { item: any }) => {
  
 const timeAgo = (date: string) => {
   const currentDate = new Date();
   const previousDate = new Date(date);
   const differenceInSeconds =
     (currentDate.getTime() - previousDate.getTime()) / 1000;

   if (differenceInSeconds < 60) {
     return `${Math.floor(differenceInSeconds)} seconds ago`;
   } else if (differenceInSeconds < 3600) {
     return `${Math.floor(differenceInSeconds / 60)} minutes ago`;
   } else if (differenceInSeconds < 86400) {
     return `${Math.floor(differenceInSeconds / 3600)} hours ago`;
   } else if (differenceInSeconds < 2592000) {
     return `${Math.floor(differenceInSeconds / 86400)} days ago`;
   } else if (differenceInSeconds < 31536000) {
     return `${Math.floor(differenceInSeconds / 2592000)} months ago`;
   } else {
     return `${Math.floor(differenceInSeconds / 31536000)} years ago`;
   }
 };

  return (
    <div className="bg-black shadow-lg p-6 rounded-lg space-y-4  shadow-[#10B981]">
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">{timeAgo(item.createdAt)}</p>
        <Bookmark
          className="text-[#10B981] hover:scale-105 duration-300 cursor-pointer"
          size={20}
        />
      </div>

      <div className="flex items-center space-x-3">
        <Avatar className="cursor-pointer hover:shadow-lg">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Profile Image"
          />
          <AvatarFallback className="bg-gray-700 text-white">
            {item?.title}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold text-white">
          {item?.companyId?.name}
        </h1>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">{item?.title}</h1>
      </div>

      <div>
        <p className="text-sm text-gray-300 line-clamp-3">
          {item?.description}
        </p>
      </div>

      <div className="flex space-x-2">
        <Badge className="bg-blue-600 text-white">
          {item?.position} position
        </Badge>
        <Badge className="bg-[#10B981] text-white">{item?.jobType}</Badge>
        <Badge className="bg-yellow-600 text-white">{item?.location}</Badge>
      </div>

      <div className="flex justify-between space-x-2">
        <Link
          className="flex-1 flex items-center justify-center text-white text-center rounded-lg hover:bg-white font-semibold hover:text-black border-[#10B981] border"
          href={`/jobs/${item?._id}`}
        >
          <div className="">Details</div>
        </Link>
        <Button className="flex-1 bg-[#10B981] text-white hover:bg-[#F1F5F9] hover:text-black">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Card;
