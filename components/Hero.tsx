import { FaSearch } from "react-icons/fa";
import { CarouselPlugin } from "./Carousel";
import { useAppSelector } from "@/lib/hooks";
import { selectAuthUser } from "@/lib/features/user/allSlice";

const Hero = () => {
  const authUser= useAppSelector(selectAuthUser)
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="text-5xl font-extrabold text-[#10B981] mb-4 leading-tight">
      {authUser?.role==="student"?"Search Apply &":"Hire Top Talent &"}
      </div>
      <div className="text-5xl font-extrabold text-[#10B981] mb-6 leading-tight">
      {authUser?.role==="student"?"Get Your Dream Jobs":"Drive Your Business Forward"}
      </div>
      <h4 className="text-xl text-slate-500 mb-10 max-w-lg">
      {authUser?.role==="student"?"Discover opportunities, connect with employers, and take the next step":" Connect with the best professionals and take your company to new heights."}
      </h4>
      <div className="flex items-center w-full max-w-lg rounded-full overflow-hidden shadow-lg shadow-[#10B981]">
        <div className="bg-[#10B981] p-4 pr-4  flex items-center justify-center cursor-pointer">
          <FaSearch className="text-white text-xl" />
        </div>
        <input
          type="search"
          placeholder="Search for jobs..."
          className="w-full px-6 py-3  outline-none bg-white text-gray-800 text-lg "
        />
      </div>
      {/* carousel */}
      <CarouselPlugin />
    </div>
  );
};

export default Hero;
