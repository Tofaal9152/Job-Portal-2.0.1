import Card from "./Card";
import FilterJobs from "./FilterJobs";

const page = () => {
  return (
    <div className="flex px-[5%] pt-[4%] space-x-3">
      <div className="w-[15%]">
        <FilterJobs />
      </div>
      <div className="flex-1  grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default page;
