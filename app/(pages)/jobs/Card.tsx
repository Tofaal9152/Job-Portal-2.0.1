import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Card = () => {
  return (
    <div className="bg-black shadow-lg p-6 rounded-lg space-y-4  shadow-[#10B981]">
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">2 days ago</p>
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
          <AvatarFallback className="bg-gray-700 text-white">CN</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold text-white">Company Name</h1>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">Job Title</h1>
      </div>

      <div>
        <p className="text-sm text-gray-300 line-clamp-3">
          This is a brief description of the job, highlighting the key
          responsibilities and requirements. This description is kept concise to
          fit within the allowed space. The text will be truncated if it exceeds
          three lines, ensuring a neat appearance.
        </p>
      </div>

      <div className="flex space-x-2">
        <Badge className="bg-blue-600 text-white">Remote</Badge>
        <Badge className="bg-[#10B981] text-white">Full-time</Badge>
        <Badge className="bg-yellow-600 text-white">Mid-level</Badge>
      </div>

      <div className="flex justify-between space-x-2">
        <Button
          variant="outline"
          className="flex-1 border-[#10B981] text-white bg-black"
        >
          Details
        </Button>
        <Button className="flex-1 bg-[#10B981] text-white">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Card;
