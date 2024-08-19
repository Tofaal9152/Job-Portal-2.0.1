import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const page = () => {
  const isApplied = 1;
  return (
    <div className="max-w-6xl mx-auto shadow-xl shadow-[#10B981] mb-4 mt-[6rem] p-6 bg-gray-900  rounded-lg">
      {/* Job Title and Badges */}
      <div className="mb-6 flex justify-between ">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white ">Frontend Developer</h1>
          <div className="flex space-x-2">
            <Badge className="bg-blue-600 text-white">Remote</Badge>
            <Badge className="bg-[#10B981] text-white">Full-time</Badge>
            <Badge className="bg-yellow-600 text-white">Mid-level</Badge>
          </div>
        </div>
        <Button
          disabled={!isApplied}
          className={`${
            isApplied
              ? "bg-[#10B981] hover:bg-transparent hover:text-white border border-[#10B981] text-white"
              : "bg-gray-600 cursor-not-allowed"
          } font-bold py-2 px-4 rounded-lg duration-300`}
          variant="outline"
        >
          {isApplied ? "Apply Now" : "Already Applied"}
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
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-400">San Francisco, CA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-400">
              We are looking for a Frontend Developer to join our team and work
              on exciting projects.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-gray-400">3+ years in frontend development</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Salary</h3>
            <p className="text-gray-400">$80,000 - $100,000 per year</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Applicants</h3>
            <p className="text-gray-400">50+</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Posted Date</h3>
            <p className="text-gray-400">2024-08-19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
