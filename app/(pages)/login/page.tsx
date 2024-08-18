"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectLoading, setLoading } from "@/lib/features/user/allSlice";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string(),
  // .email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 1 character long"),
  role: z.enum(["student", "recruiter"], {
    required_error: "You need to select a role.",
  }),
});

const Page = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const loading = useAppSelector(selectLoading)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "student",
    },
  });

  const onSubmit =async (data: any) => {
    try {

      const res = await axios.post("api/user/login",data)
      dispatch(setLoading(true));
      const message = res?.data?.message;
      toast.success(message)
      router.push("/")
      
    } catch (error:any) {

      const message = error?.response?.data?.message;
      toast.error(message);
    }finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-[25rem] border shadow-lg shadow-violet-300 p-8"
        >
          <div className="text-center  text-xl underline font-bold">
            Sign In
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm">Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="outline-none text-black  border focus:ring-1 ring-violet-500 border-gray-300 rounded-md p-2 transition duration-300"
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
                    className="outline-none border text-black  focus:ring-1 ring-violet-500 border-gray-300 rounded-md p-2 transition duration-300"
                    placeholder="Create a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                        <RadioGroupItem id="role-recruiter" value="recruiter" />
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
          {loading ? (
            <Button className="bg-[#9747ff] w-full text-center hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg cursor-not-allowed">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#9747ff] w-full text-center hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg"
            >
              Submit
            </Button>
          )}

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-violet-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page
