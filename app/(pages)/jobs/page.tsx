import Card from "./Card";
import FilterJobs from "./FilterJobs";

const Page = () => {
  const number = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex px-[5%] py-[4%] pt-[6rem] space-x-3">
      <div className="w-full md:w-[20%] lg:w-[15%]">
        <FilterJobs />
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {number.map((item) => (
          <div key={item} className="flex justify-center">
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
