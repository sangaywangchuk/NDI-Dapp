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
import { useSignUpFlow } from "@/contexts/sign-up-flow-context";
import { useRouter } from "next/navigation";

const signUpEmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SignUpEmailFormValues = z.infer<typeof signUpEmailSchema>;

export default function SignUpFormEmail() {
  const router = useRouter();
  const { state, setState } = useSignUpFlow();
  const form = useForm<SignUpEmailFormValues>({
    resolver: zodResolver(signUpEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: SignUpEmailFormValues) => {
    setState({ ...state, email: values.email });
    router.push("/auth/sign-up/confirm-password");
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="jtn@jaggle.ai"
                    className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
                    autoComplete="email"
                    inputMode="email"
                  />
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
