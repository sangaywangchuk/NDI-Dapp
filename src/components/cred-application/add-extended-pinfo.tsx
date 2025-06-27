'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const extendedInfoSchema = z.object({
  emergency_contact_info: z.string().min(1, 'Emergency contact is required'),
  blood_group: z.string().min(1, 'Blood group is required'),
  address: z.string().min(1, 'Address is required'),
});

type ExtendedInfoFormValues = z.infer<typeof extendedInfoSchema>;

export default function ExtendedPersonalInfo() {
  const form = useForm<ExtendedInfoFormValues>({
    resolver: zodResolver(extendedInfoSchema),
    defaultValues: {
      emergency_contact_info: '',
      blood_group: '',
      address: '',
    },
  });

  const handleSubmit = (values: ExtendedInfoFormValues) => {
    // handle next step with values
    console.log(values);
  };

  return (
    <Card className="max-w-md mx-auto mb-[100px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-center m-auto">
          <div>
            <img
              src="/upload-hero.png"
              alt="Upload placeholder"
              className="h-32 w-auto mb-4"
            />
            Personal Info
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="emergency_contact_info"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Contact</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter emergency contact number"
                      className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500 text-[14px]"
                      autoComplete="off"
                      inputMode="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blood_group"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Group</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="A+, O-, etc."
                      className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500 text-[14px]"
                      autoComplete="off"
                      inputMode="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your address"
                      className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500 text-[14px]"
                      autoComplete="off"
                      inputMode="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-5 w-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              Next <ArrowRight className="inline ml-2" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
