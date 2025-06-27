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
import { useSignUp } from "@/services/auth/auth-api";

const confirmPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ConfirmPasswordFormValues = z.infer<typeof confirmPasswordSchema>;

export default function ConfirmPassword() {
  const { state, setState } = useSignUpFlow();
  const { mutateAsync: signUp, isPending } = useSignUp();
  const form = useForm<ConfirmPasswordFormValues>({
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: ConfirmPasswordFormValues) => {
    // handle form submission (e.g., API call)
    setState({
      ...state,
      password: values.password,
      confirm_password: values.confirmPassword,
    });
    try {
      await signUp({
        email: state.email,
        first_name: state.firstName,
        last_name: state.lastName,
        password: values.password,
        password_confirmation: values.confirmPassword,
      });
    } catch (error) {
      console.log(error);
    }

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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                    className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            isLoading={isPending}
            disabled={isPending}
            className="flex justify-center gap-3 w-full h-11 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg text-white text-base font-semibold leading-normal"
          >
            Continue <ArrowRight />
          </Button>
        </form>
      </Form>
    </div>
  );
}
