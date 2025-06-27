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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useLogin } from "@/services/auth/auth-api";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: SignInFormValues) => {
    try {
      await login({
        email: values.email,
        password: values.password,
      });
      debugger
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-sm p-3 space-y-6 [font-family:'Urbanist-Black',Helvetica]">
      <div className="text-black text-2xl md:text-3xl font-black leading-10 text-left">
        Sign In To Your Account
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="jtn@jaggle.ai"
                    className="mt-1 w-full h-11 rounded-[5px] border"
                    autoComplete="email"
                    inputMode="email"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="********"
                    className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-600 font-medium"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/auth/login"
              className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            isLoading={isPending}
            className="flex justify-center gap-3 w-full h-11 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg text-white text-base font-semibold leading-normal"
          >
            Continue <ArrowRight />
          </Button>
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href="/auth/sign-up"
              className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
      <div className="flex items-center justify-between space-x-3">
        <div className="flex-1 h-px bg-zinc-300" />
        <div className="w-25 h-2 text-center text-zinc-300 text-[12px] font-bold leading-3">
          Are you Vendors
        </div>
        <div className="flex-1 h-px bg-zinc-300" />
      </div>
      {/* Bhutan NDI Login Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full bg-teal-800 text-white hover:bg-teal-700"
          >
            Login with Bhutan NDI
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bhutan NDI Login</DialogTitle>
            <DialogDescription>
              Please proceed with Bhutan NDI authentication to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full overflow-hidden pb-[75%]">
            <iframe
              src={`https://gooey-psi.vercel.app/proof-request/${72}?sessionId=<accesstoken>`}
              title="Bhutan NDI Authentication"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
