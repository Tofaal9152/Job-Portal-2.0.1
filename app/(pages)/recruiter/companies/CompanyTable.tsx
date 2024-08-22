"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import axios from "axios";
import { useAppSelector } from "@/lib/hooks";
import { selectFilteR } from "@/lib/features/user/allSlice";

const CompanyTable = () => {
  const FilteR = useAppSelector(selectFilteR);
  const [allCompany, setallCompany] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/company/getcompany");
        setallCompany(res.data.companies);
      } catch (error: any) {
        console.log(
          error?.response?.data?.message || "Failed to load company data."
        );
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const filterCompany =
      allCompany.length > 0 &&
      allCompany.filter((company: any) => {
        if (!FilteR) {
          return true;
        }
        return company.name.toLowerCase().includes(FilteR.toLowerCase());
      });
    setallCompany(filterCompany || []);
  }, [FilteR, allCompany]);

  return (
    <div>
      <Table className="min-w-full bg-gray-800">
        <TableCaption>List of Companies By Recruiter </TableCaption>
        {allCompany.length > 0 ? (
          <>
            <TableHeader>
              <TableRow className="border-b border-[#10B981]">
                <TableHead className="text-[#10B981] font-semibold p-3">
                  Company Name
                </TableHead>
                <TableHead className="text-[#10B981] font-semibold p-3">
                  Location
                </TableHead>
                <TableHead className="text-[#10B981] font-semibold p-3">
                  Website
                </TableHead>
                <TableHead className="text-right text-[#10B981] font-semibold p-3">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allCompany.map((item: any) => (
                <TableRow
                  key={item?._id}
                  className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                >
                  <TableCell className="text-white p-3">{item?.name}</TableCell>
                  <TableCell className="text-white p-3">
                    {item?.location}
                  </TableCell>
                  <TableCell className="text-white p-3">
                    {item?.website}
                  </TableCell>
                  <TableCell className="text-white p-3 text-right flex justify-end">
                    <LuClipboardEdit
                      size={20}
                      className="text-right hover:scale-125 "
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <h1 className="text-[#10B981] text-2xl text-center">
            No Company Found
          </h1>
        )}
      </Table>
    </div>
  );
};

export default CompanyTable;
