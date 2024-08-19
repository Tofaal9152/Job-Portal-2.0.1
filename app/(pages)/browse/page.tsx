import Card from "@/app/(pages)/jobs/Card";

const Page = () => {
  const number = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="px-[5%] py-[4%] pt-[6rem]">
      <h1 className="text-2xl text-[#10B981] font-bold mb-4 ">
        Search result ({number.length})
      </h1>
      <div className="border-b border-[#10B981]"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
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
