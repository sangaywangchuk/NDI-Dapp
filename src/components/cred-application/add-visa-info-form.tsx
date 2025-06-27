'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { DatePicker } from "@/components/ui/date-picker"
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

const visaSchema = z.object({
  visa_no: z.string().min(1, 'Visa number is required'),
  visa_issue_date: z.string().min(1, 'Date of issue is required'),
  visa_expiry_date: z.string().min(1, 'Date of expiry is required'),
});

type VisaFormValues = z.infer<typeof visaSchema>;

export default function AddVisaForm() {
  const form = useForm<VisaFormValues>({
    resolver: zodResolver(visaSchema),
    defaultValues: {
      visa_no: '',
      visa_issue_date: '',
      visa_expiry_date: '',
    },
  });

  const handleNext = (values: VisaFormValues) => {
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
            Visa Info
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleNext)}>
            <FormField
              control={form.control}
              name="visa_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visa Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="V123456"
                      className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visa_issue_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Issue</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visa_expiry_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Expiry</FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
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
