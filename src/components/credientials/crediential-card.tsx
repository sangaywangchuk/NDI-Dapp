'use client'
import React, { useState } from 'react'
import { QRCode } from "react-qrcode-logo"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function FlipCredentialCard() {
  const [flipped, setFlipped] = useState(false)
  const router = useRouter()

  const flipperStyle: React.CSSProperties = {
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  }

  const faceStyle: React.CSSProperties = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  }

  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card flip
    router.push('/dashboard/apply') // Navigate to application form
  }

  return (
    <div
      className="w-full max-w-md mx-auto my-8"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="relative w-full" style={flipperStyle}>

        {/* ─── FRONT: Credential Profile ─── */}
        <div
          className="absolute inset-0 cursor-pointer"
          style={faceStyle}
        >
          <Card className="overflow-hidden gap-1 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
            <CardHeader className="px-4 pt-2">
              <CardTitle className="text-[12px] md:text-xl text-center">
                Kingdom Of Bhutan
                <p>Temporary Digital Identity Card</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 pb-4 overflow-x-clip">
              <div className="flex flex-row items-center justify-center gap-3 min-w-max">
                {/* Portrait */}
                <div>
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/man-3d-icon-download-in-png-blend-fbx-gltf-file-formats--male-person-happy-people-human-avatar-pack-icons-7590876.png?f=webp"
                    alt="Portrait"
                    className="h-24 w-24 md:h-32 md:w-32 rounded-lg object-cover"
                  />
                  <p className="mt-1 text-[9px] text-white/90">
                    Temp ID No.: <span className="font-bold">11509005983</span>
                  </p>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-0.5 text-[11px] md:text-base">
                  <p><span className="font-medium">Name:</span> Jigme Tashi Namgyal</p>
                  <p><span className="font-medium">Sex:</span> Male</p>
                  <p><span className="font-medium">DOB:</span> 11 11 2001</p>
                  <p><span className="font-medium">Issue:</span> 19 09 2023</p>
                  <p><span className="font-medium">Expiry:</span> 19 09 2033</p>
                </div>

                {/* QR Code */}
                <div className="flex-shrink-0">
                  <QRCode
                    value="https://ndi.gov.bt/verify/11509005983"
                    size={57}
                    fgColor="#fff"
                    bgColor="transparent"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ─── BACK: Apply Button ─── */}
        <div
          className="absolute inset-0 cursor-pointer"
          style={{
            ...faceStyle,
            transform: 'rotateY(180deg)',
          }}
        >
          <Card className="rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
            <CardHeader className="py-3">
              <CardTitle className="text-xl text-center">
                Apply for Temporary<br/>Digital Identity Card
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4 flex justify-center">
              <Button
                onClick={handleApplyClick}
                className="px-8 py-3 w-full bg-white text-black font-medium rounded-lg shadow hover:shadow-md transition hover:bg-gray-50"
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
