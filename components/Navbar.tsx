import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const User = false;
  return (
    <div className="flex items-center justify-between container pt-4 px-[6%]">
      <div className="text-2xl font-extrabold text-[#10B981]">
        Job<span className="text-white">Portal</span>
      </div>
      <div className="flex items-center font-medium space-x-7 text-md text-white">
        <Link href={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link href={"/jobs"} className="cursor-pointer">
          Jobs
        </Link>
        <Link href={"/browse"} className="cursor-pointer">
          Browse
        </Link>
        {User ? (
          <div>
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer hover:shadow-lg">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Profile Image"
                  />
                  <AvatarFallback>
                    <User2 className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4 border rounded-lg shadow-md bg-white">
                <div>
                  <h1 className="font-semibold text-gray-800">
                    Tofaal Mernstack
                  </h1>
                  <p className="text-xs mt-1 text-gray-600 line-clamp-1">
                    Hi nice to meet you !
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <Button
                    size="sm"
                    variant="link"
                    className="text-blue-500 hover:underline"
                  >
                    <User2 className="mr-2 h-4 w-4" /> View profile
                  </Button>
                  <Button
                    size="sm"
                    variant="link"
                    className="text-red-500 hover:underline"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="space-x-2">
            <Link href={"/login"}>
              <Button
                size="sm"
                className="hover:bg-white border border-[#10B981] text-white bg-black hover:text-black font-bold duration-300"
                variant="outline"
              >
                Log In
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button
                size="sm"
                className="bg-[#10B981] border border-[#10B981] text-white font-bold duration-300"
                variant="outline"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
