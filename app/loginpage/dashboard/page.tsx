'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Home, History, Upload, Volume2, Play, Download, Coins } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [speedValue, setSpeedValue] = useState([1])
  const [pitchValue, setPitchValue] = useState([1])

  const handleImageGeneration = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-14 items-center px-4">
          <div className="flex items-center gap-2"> {/* Updated line */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <History className="h-5 w-5" />
              <span className="sr-only">History</span>
            </Button>
          </div>
          <div className="flex-1 text-center">
            <Link href="/" className="text-2xl font-bold">
              Nexoria AI
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">demo</span>
            <Button variant="outline" size="sm">
              <Coins className="mr-2 h-4 w-4" />
              Upgrade
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Transform your content across different media formats</h1>
            <p className="mt-2 text-muted-foreground">
              Generate images from text, convert images to videos, or create natural-sounding speech.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Text to Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Text to Image
                  <span className="text-sm font-normal text-muted-foreground">
                    <Coins className="mr-1 inline h-4 w-4" />
                    50 tokens remaining
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe the image you want to generate..."
                  className="mb-4 min-h-[150px]"
                />
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700" 
                  onClick={handleImageGeneration}
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Generate Image"}
                </Button>
              </CardContent>
            </Card>

            {/* Image to Video */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Image to Video
                  <span className="text-sm font-normal text-muted-foreground">
                    <Coins className="mr-1 inline h-4 w-4" />
                    50 tokens remaining
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex min-h-[150px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-4">
                  <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
                  <p className="mb-2 text-sm font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                </div>
              </CardContent>
            </Card>

            {/* Text to Speech */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Text to Speech
                  <span className="text-sm font-normal text-muted-foreground">
                    <Coins className="mr-1 inline h-4 w-4" />
                    50 tokens remaining
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Enter text to convert to speech..."
                  className="mb-4 min-h-[100px]"
                />
                <div className="mb-4 grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Language</label>
                      <Select defaultValue="en-US">
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Voice</label>
                      <Select defaultValue="google-us-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google-us-1">Google US En</SelectItem>
                          <SelectItem value="google-us-2">Google US En 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Speed (1.0x)</label>
                      <Slider
                        value={speedValue}
                        onValueChange={setSpeedValue}
                        max={2}
                        min={0.5}
                        step={0.1}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Pitch (1.0)</label>
                      <Slider
                        value={pitchValue}
                        onValueChange={setPitchValue}
                        max={2}
                        min={0.5}
                        step={0.1}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Generate Speech
                  </Button>
                  <Button variant="outline" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 Nexoria AI. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Code of Conduct
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

