import { FaSearch } from "react-icons/fa";
import { CarouselPlugin } from "./Carousel";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="text-5xl font-extrabold text-violet-800 mb-4 leading-tight">
        Search, Apply &
      </div>
      <div className="text-5xl font-extrabold text-violet-600 mb-6 leading-tight">
        Get Your Dream Jobs
      </div>
      <h4 className="text-xl text-slate-500 mb-10 max-w-lg">
        Discover opportunities, connect with employers, and take the next step
        in your career journey.
      </h4>
      <div className="flex items-center w-full max-w-lg rounded-full overflow-hidden shadow-lg shadow-violet-300">
        <div className="bg-violet-600 p-4 pr-4  flex items-center justify-center cursor-pointer">
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
