'use client'

import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CloudUpload, X, ArrowRight } from 'lucide-react'
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

const visaUploadSchema = z.object({
  file: z
    .custom<File | null>((file) => file instanceof File && ["image/png", "image/jpeg"].includes(file.type) && file.size <= 50 * 1024 * 1024, {
      message: "File must be a PNG or JPG image and less than 50MB",
    })
});

type VisaUploadFormValues = z.infer<typeof visaUploadSchema>;

export default function VisaUpload() {
  const form = useForm<VisaUploadFormValues>({
    resolver: zodResolver(visaUploadSchema),
    defaultValues: {
      file: null,
    },
  });

  const file = form.watch('file');
  const [preview, setPreview] = React.useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      form.setValue('file', acceptedFiles[0], { shouldValidate: true });
    }
  }, [form]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
    maxSize: 50 * 1024 * 1024,
    multiple: false,
  });

  const removeFile = () => form.setValue('file', null, { shouldValidate: true });

  const handleNext = (values: VisaUploadFormValues) => {
    // handle next step with values.file
    // e.g., upload to server or update context
    console.log(values.file);
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
            Document
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleNext)} className="space-y-4">
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FormLabel className="block text-sm font-black">Upload Visa</FormLabel>
                  <FormControl>
                    <div
                      {...getRootProps()}
                      className={`
                        flex flex-col items-center justify-center
                        border-2 border-dashed rounded-lg
                        px-6 py-10 cursor-pointer
                        transition-colors
                        ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300'}
                      `}
                    >
                      <input {...getInputProps()} />
                      {preview ? (
                        <div className="relative">
                          <img
                            src={preview}
                            alt="Visa preview"
                            className="h-32 w-auto object-contain rounded-md mb-2"
                          />
                          <button
                            type="button"
                            onClick={e => { e.stopPropagation(); removeFile(); }}
                            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow"
                          >
                            <X className="h-4 w-4 text-gray-600" />
                          </button>
                          <p className="text-sm text-gray-700">{file?.name}</p>
                        </div>
                      ) : (
                        <>
                          <CloudUpload className="h-6 w-6 text-gray-400 mb-2" />
                          <p className="text-base font-medium text-gray-700">
                            Choose a file or drag & drop it here.
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            File format in .png/.jpg only up to 50 MB
                          </p>
                          <Button variant="outline" className="mt-4" type="button">
                            + Browse File
                          </Button>
                        </>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-5 w-full bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              Next <span><ArrowRight/></span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
