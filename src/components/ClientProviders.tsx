'use client'

import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster />
      <Sonner />
      {children}
    </>
  )
} 