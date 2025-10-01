'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function NotFound() {
  const pathname = usePathname()

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-decent-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          <div className="space-y-4">
            <Link href="/">
              <Button className="bg-decent-blue hover:bg-decent-lightBlue text-white">
                Go Home
              </Button>
            </Link>
            <br />
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-decent-blue text-decent-blue hover:bg-decent-blue hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
