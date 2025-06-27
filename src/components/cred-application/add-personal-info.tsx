'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { DatePicker } from '@/components/ui/date-picker'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { useTdiForm } from '@/contexts/tdi-form-context'
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

const personalInfoSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  nationality: z.string().min(1, 'Nationality is required'),
  gender: z.string().min(1, 'Gender is required'),
});

type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

export default function PersonalInfoForm() {
  const { state, setState } = useTdiForm();
  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      full_name: state.full_name || '',
      dob: state.dob || '',
      nationality: state.nationality || '',
      gender: state.gender || '',
    },
  });

  const handleNext = (values: PersonalInfoFormValues) => {
    setState(prev => ({
      ...prev,
      ...values,
    }));
    // proceed to next step here
  };

  return (
    <Card className="max-w-md mx-auto mb-[100px]">
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="text-2xl text-center">
          Personal Info
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src="/personal-info-avatar.png"
            alt="Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handleNext)}>
            {/* Full Name */}
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Jigme Tashi Namgyal"
                      className="mt-1 w-full h-11 rounded-[5px] border placeholder-gray-400 text-[14px] border-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <DatePicker
                      value={field.value}
                      onChange={(value) => field.onChange(value || '')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Nationality */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Bhutanese"
                      className="mt-1 w-full h-11 rounded-[5px] border placeholder-gray-400 text-[14px] border-zinc-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="mt-1 w-full h-11 rounded-[5px] border text-[14px] border-zinc-500">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-br from-orange-400 to-orange-600 text-white mt-4"
            >
              Next <ArrowRight className="inline ml-2" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
