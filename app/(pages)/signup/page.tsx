"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaCamera } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string(),
  // .email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 1 character long"),
  phoneNumber: z
    .string()
    .min(1, "Phone number must be at least 1 digit long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  role: z.enum(["student", "recruiter"], {
    required_error: "You need to select a role.",
  }),
  // profile: z.string().optional(),
});

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "student",
      profile: "",
    },
  });
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("/api/user/register", data);
      const message = res?.data?.message;
      console.log(res?.data?.message);
      toast.success(message);
      router.push("/login");
    } catch (error: any) {
      console.log(error?.response?.data?.message);

      const message = error?.response?.data?.message;
      toast.error(message);
    }
  };

  return (
    <div className="flex h-screen items-center relative w-full z-50  justify-center bg-black text-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-[25rem] border border-[#10B981] shadow-lg shadow-[#10B981] p-8"
        >
          <div className="text-center text-xl underline font-bold">Sign Up</div>

          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold  text-sm">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="outline-none border text-black focus:ring-1 ring-[#10B981] border-gray-300 rounded-md p-2 transition duration-300"
                    placeholder="Enter your full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm">Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="outline-none border text-black focus:ring-1 ring-[#10B981] border-gray-300 rounded-md p-2 transition duration-300"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="outline-none border text-black focus:ring-1 ring-[#10B981] border-gray-300 rounded-md p-2 transition duration-300"
                    placeholder="Create a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="outline-none border text-black focus:ring-1 ring-[#10B981] border-gray-300 rounded-md p-2 transition duration-300"
                    placeholder="Enter your phone number (e.g., 01XXXXXXXX)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex  items-center justify-between">
            {/* <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Select your position
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex items-center space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem id="role-student" value="student" />
                        </FormControl>
                        <FormLabel
                          htmlFor="role-student"
                          className="font-normal cursor-pointer"
                        >
                          Student
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            id="role-recruiter"
                            value="recruiter"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="role-recruiter"
                          className="font-normal cursor-pointer"
                        >
                          Recruiter
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-white">
                    Select your position
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex items-center space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            id="role-student"
                            value="student"
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="role-student"
                          className="font-normal cursor-pointer text-white"
                        >
                          Student
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            id="role-recruiter"
                            value="recruiter"
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="role-recruiter"
                          className="font-normal cursor-pointer text-white"
                        >
                          Recruiter
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="relative cursor-pointer shadow shadow-[#10B981] p-2 flex items-center justify-center space-x-3">
                    <span>Profile</span>
                    <FaCamera className="text-[#10B981]" size={20} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="absolute top-0 left-0  opacity-0 cursor-pointer" // Hide the default file input
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#10B981] w-full text-center hover:bg-[#20775a] duration-300 text-white font-semibold py-2 px-4 border rounded-lg"
          >
            Submit
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#10B981] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
