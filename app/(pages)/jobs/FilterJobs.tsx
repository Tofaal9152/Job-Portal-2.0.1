import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const   FilterJobs = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-6 text-white">
      <h1 className="text-2xl font-bold text-[#10B981]">Filter Jobs</h1>

      <div>
        <h2 className="text-lg font-semibold text-gray-300">Location</h2>

        <RadioGroup defaultValue="remote" className="space-y-2 mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="remote"
              id="location-remote"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="location-remote"
              className="text-gray-400 cursor-pointer"
            >
              Remote
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="onsite"
              id="location-onsite"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="location-onsite"
              className="text-gray-400 cursor-pointer"
            >
              On-site
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="hybrid"
              id="location-hybrid"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="location-hybrid"
              className="text-gray-400 cursor-pointer"
            >
              Hybrid
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-300">Industry</h2>
        <RadioGroup defaultValue="tech" className="space-y-2 mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="tech"
              id="industry-tech"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="industry-tech"
              className="text-gray-400 cursor-pointer"
            >
              Tech
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="finance"
              id="industry-finance"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="industry-finance"
              className="text-gray-400 cursor-pointer"
            >
              Finance
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="healthcare"
              id="industry-healthcare"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="industry-healthcare"
              className="text-gray-400 cursor-pointer"
            >
              Healthcare
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-300">Salary</h2>
        <RadioGroup defaultValue="50k-70k" className="space-y-2 mt-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="30k-50k"
              id="salary-30k-50k"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="salary-30k-50k"
              className="text-gray-400 cursor-pointer"
            >
              $30k - $50k
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="50k-70k"
              id="salary-50k-70k"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="salary-50k-70k"
              className="text-gray-400 cursor-pointer"
            >
              $50k - $70k
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="70k+"
              id="salary-70k+"
              className="text-[#10B981] border-gray-700 focus:ring-[#10B981] "
            />
            <Label
              htmlFor="salary-70k+"
              className="text-gray-400 cursor-pointer"
            >
              $70k+
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterJobs;
