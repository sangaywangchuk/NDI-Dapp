import React from 'react'
import {
  Card,
  CardDescription,
} from "@/components/ui/card"

export default function CredientialPendingCard() {
  return (
    <div className="w-full max-w-lg mx-auto my-8">
    
      <Card className="rounded-xl bg-gradient-to-br from-amber-300 to-yellow-300 text-white min-h-[200px] shadow-lg pt-6">
     
          <CardDescription className="m-auto w-80 h-12 text-center justify-start text-neutral-700/90 text-sm font-black  leading-tight">
          Our team is reviewing your<br/>
          application.
     
          </CardDescription>
        
       
      </Card>
    </div>
  )
}
