'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add any login logic here if needed
    router.push("/loginpage/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href="/" className="text-xl font-semibold">
          Nexoria AI
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/features" className="text-sm">
            Features
          </Link>
          <Link href="/about" className="text-sm">
            About
          </Link>
          <Link href="/pricing" className="text-sm">
            Pricing
          </Link>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
            <p className="text-base text-gray-600">
              Sign in to continue with Nexoria AI
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-black">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
                className="h-12"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 rounded-md bg-black text-white hover:bg-black/90"
            >
              Sign In
            </Button>
          </form>
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-black hover:underline">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

