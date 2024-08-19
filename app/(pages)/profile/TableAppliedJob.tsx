import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableAppliedJob = () => {
  const Data = [
    {
      Date: "2024-08-19",
      Job_Role: "Frontend Developer",
      Company: "Tech Solutions Ltd.",
      Status: "accepted",
    },
    {
      Date: "2024-08-18",
      Job_Role: "Backend Developer",
      Company: "Innovative Systems",
      Status: "rejected",
    },
    {
      Date: "2024-08-17",
      Job_Role: "Full Stack Developer",
      Company: "WebCraft Inc.",
      Status: "pending",
    },
    {
      Date: "2024-08-16",
      Job_Role: "UI/UX Designer",
      Company: "Creative Minds",
      Status: "accepted",
    },
    {
      Date: "2024-08-15",
      Job_Role: "DevOps Engineer",
      Company: "CloudWorks",
      Status: "rejected",
    },
    {
      Date: "2024-08-15",
      Job_Role: "DevOps Engineer",
      Company: "CloudWorks",
      Status: "rejected",
    },
    {
      Date: "2024-08-15",
      Job_Role: "DevOps Engineer",
      Company: "CloudWorks",
      Status: "rejected",
    },
    {
      Date: "2024-08-15",
      Job_Role: "DevOps Engineer",
      Company: "CloudWorks",
      Status: "rejected",
    },
  ];
  return (
    // overflow-y-scroll h-[20rem]
    <div className=" shadow-lg rounded-lg">
      <Table className="min-w-full bg-gray-800">
        <TableHeader>
          <TableRow className="border-b border-[#10B981]">
            <TableHead className="text-[#10B981] font-semibold p-3">
              Date
            </TableHead>
            <TableHead className="text-[#10B981] font-semibold p-3">
              Job Role
            </TableHead>
            <TableHead className="text-[#10B981] font-semibold p-3">
              Company
            </TableHead>
            <TableHead className="text-right text-[#10B981] font-semibold p-3">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((job) => (
            <TableRow
              key={job.Date}
              className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
            >
              <TableCell className="text-white p-3">{job.Date}</TableCell>
              <TableCell className="text-white p-3">{job.Job_Role}</TableCell>
              <TableCell className="text-white p-3">{job.Company}</TableCell>
              <TableCell className="text-right text-white p-3">
                <Badge
                  className={`
                    ${job.Status === "accepted" ? "bg-[#10B981]" : ""}
                    ${job.Status === "pending" ? "bg-[#717a77]" : ""}
                    ${job.Status === "rejected" ? "bg-[#b91026]" : ""}
                       text-white shadow-md`}
                >
                  {job.Status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableAppliedJob;
