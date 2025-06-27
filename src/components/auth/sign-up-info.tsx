"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSignUpFlow } from "@/contexts/sign-up-flow-context";

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpFormInfo() {
  const router = useRouter();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const { state, setState } = useSignUpFlow();

  const handleSubmit = (values: SignUpFormValues) => {
    // handle form submission (e.g., API call)
    setState({ ...state, firstName: values.firstName, lastName: values.lastName });
    router.push("/auth/sign-up/email");
  };

  return (
    <div className="w-full max-w-sm p-3 space-y-6">
      <div className="w-64 h-20 justify-start text-black text-3xl font-black leading-10">
        Sign up to Bhutan TDI
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="First Name" className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Last Name" className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex justify-center gap-3 w-full h-11 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg text-white text-base font-semibold leading-normal"
          >
            Continue <ArrowRight />
          </Button>
        </form>
      </Form>
    </div>
  );
}
