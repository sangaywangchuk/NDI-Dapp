import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function CredientialRejectedCard() {
  return (
    <div className="w-full max-w-md mx-auto my-8">
      <Card className="rounded-xl bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg">
        <CardHeader className="py-3">
          <CardTitle className="text-xl text-center">
            Apply for Temporary<br/>Digital Identity Card
          </CardTitle>
        </CardHeader>
        <CardContent className="py-4 flex justify-center">
          <button
            className="px-8 py-3 w-full bg-white text-black font-medium rounded-lg shadow hover:shadow-md transition"
          >
            View Reasons
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
