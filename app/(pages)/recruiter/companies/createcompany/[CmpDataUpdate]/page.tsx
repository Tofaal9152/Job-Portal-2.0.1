"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  website: z.string(),
  location: z.string(),
});

const page = ({ params }: { params: { CmpDataUpdate: string } }) => {
  const [companyById, setCompanyById] = useState<{
    name: string;
    description: string;
    website: string;
    location: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/company/getcompanybyid/${params.CmpDataUpdate}`
        );
        setCompanyById(res.data.companies);
      } catch (error: any) {
        console.log(error?.data?.message);
      }
    };
    fetchData();
  }, [params.CmpDataUpdate]);

  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: companyById?.name,
      description: "",
      website: "",
      location: "",
    },
  });
  useEffect(() => {
    if (companyById) {
      form.reset({
        name: companyById.name,
        description: companyById.description,
        website: companyById.website,
        location: companyById.location,
      });
    }
  }, [companyById, form]);

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.put(
        `/api/company/updatecompany/${params.CmpDataUpdate}`,
        data
      );
      toast.success(res?.data?.message);
      router.push("/recruiter/companies");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="max-w-6xl mx-auto shadow-xl shadow-[#10B981] mb-4 mt-[6rem] p-6 bg-gray-900  rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" py-4 text-white max-w-xl mx-auto"
        >
          <div className="space-y-3">
            <Label htmlFor="name">Name</Label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-black text-white border-[#10B981]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="description">Description</Label>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-black text-white border-[#10B981]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="website">Website</Label>
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-black text-white border-[#10B981]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="location">Location</Label>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-black text-white border-[#10B981]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className=" flex items-center justify-center mt-8 space-x-4">
            <Link href={`/recruiter/companies`}>
              <Button
                className="border border-[#10B981] text-black font-bold duration-300 hover:bg-[#10B981] hover:text-white"
                variant="outline"
              >
                Cancel
              </Button>
            </Link>

            <Button
              className="bg-[#10B981]  hover:bg-black text-white border border-[#10B981]"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;
