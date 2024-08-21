"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectAuthUser, setAuthUser } from "@/lib/features/user/allSlice";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const formSchema = z.object({
  fullname: z.string(),
  phoneNumber: z.string(),
  bio: z.string(),
  skills: z.string(),
});

const ModalData = ({ setopen }:{setopen:any}) => {
  const dispatch = useAppDispatch();
  const AuthUser = useAppSelector(selectAuthUser);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: AuthUser?.fullname || "",
      phoneNumber: AuthUser?.phoneNumber || "",
      bio: AuthUser?.profile?.bio || "",
      skills: AuthUser?.profile?.skills.join(", ") || "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("api/user/updateprofile", data);
      dispatch(setAuthUser(res?.data?.user));
      const message = res?.data?.message;
      toast.success(message);
      setopen(false)
    } catch (error: any) {
      const message = error?.response?.data?.message;
      toast.error(message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 py-4 text-white"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <FormField
            control={form.control}
            name="fullname"
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
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phoneNumber" className="text-right">
            Number
          </Label>
          <FormField
            control={form.control}
            name="phoneNumber"
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
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="bio" className="text-right">
            Bio
          </Label>
          <FormField
            control={form.control}
            name="bio"
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
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="skills" className="text-right">
            Skills
          </Label>
          <FormField
            control={form.control}
            name="skills"
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

        <Button
          className="bg-[#10B981] mt-3 hover:bg-black text-white border border-[#10B981]"
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default ModalData;
