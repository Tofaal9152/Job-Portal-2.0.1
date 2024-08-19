"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectAuthUser, setAuthUser } from "@/lib/features/user/allSlice";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const AuthUser = useAppSelector(selectAuthUser);
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.get("api/user/logout");
      dispatch(setAuthUser(null));
      const message = res?.data?.message;
      toast.success(message);
      router.push("/login");
    } catch (error: any) {
      const message = error?.response?.data?.message;
      toast.error(message);
    }
  };
  return (
    <div
      className={`fixed flex items-center justify-between w-full top-0 left-0 z-50 p-2 px-[6%] transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
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
        {AuthUser ? (
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
                    {AuthUser.fullname}
                  </h1>
                  <p className="text-xs mt-1 text-gray-600 line-clamp-1">
                    Hi I am a {AuthUser.role} nice to meet you !
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  <Button
                    size="sm"
                    variant="link"
                    className="text-blue-500 hover:underline"
                  >
                    <User2 className="mr-2 h-4 w-4" />
                    <Link href={"/profile"}>View profile</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="link"
                    onClick={handleLogout}
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
