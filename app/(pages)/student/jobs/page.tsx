"use client";
import { useEffect } from "react";
import Card from "./Card";
import FilterJobs from "./FilterJobs";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectGetAllJobs, setGetAllJobs } from "@/lib/features/user/allSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  const getAllJobs = useAppSelector(selectGetAllJobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/job/getalljobs");
        dispatch(setGetAllJobs(res?.data?.jobs));
      } catch (error: any) {
        console.log(error?.response?.data?.message);
      }
    };
    fetchJobs();
  }, [dispatch]);

  return (
    <div className="flex px-[1%] py-[4%] pt-[6rem] space-x-3">
      <div className="w-full md:w-[20%] lg:w-[15%]">
        <FilterJobs />
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {getAllJobs?.length > 0 ? (
          getAllJobs.map((item: any) => (
            <div key={item._id} className="flex justify-center">
              <Card item={item} />
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Page;
