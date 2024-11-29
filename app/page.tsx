import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, ImageIcon, MonitorPlay, MessageSquare, Zap, Shield, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-xl font-bold">Nexoria AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Button variant="outline" size="sm" className="bg-black text-white hover:bg-black/90 border-0">
            <Link href="/loginpage">Sign In</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nexoria AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Transform your ideas into reality with our powerful AI-driven content creation tools.
              </p>
              <div>
                <Button variant="outline" className="bg-black text-white hover:bg-black/90 border-0 inline-flex items-center" size="lg">
                  <Link href="/loginpage" className="inline-flex items-center">
                    Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <ImageIcon className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle>Text to Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Transform your ideas into stunning visuals using our advanced AI image generation technology.</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <MonitorPlay className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle>Image to Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Bring your images to life with smooth animations and dynamic video transformations.</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle>Text to Speech</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Convert text into natural-sounding speech with multiple languages and voices.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Why Choose Nexoria AI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Advanced AI Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Powered by state-of-the-art AI models for exceptional results.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Get high-quality results in seconds with our optimized processing.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Your content and data are protected with enterprise-grade security.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="#" className="group relative">
                <Image
                  alt="AI-Generated Artwork"
                  className="object-cover w-full aspect-video rounded-lg transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="absolute inset-0 bg-black/60 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <h3 className="font-bold text-xl">AI-Generated Artwork</h3>
                  <p className="text-sm mt-2">Stunning visuals created using our text-to-image technology.</p>
                </div>
              </Link>
              <Link href="#" className="group relative">
                <Image
                  alt="Dynamic Videos"
                  className="object-cover w-full aspect-video rounded-lg transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="absolute inset-0 bg-black/60 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <h3 className="font-bold text-xl">Dynamic Videos</h3>
                  <p className="text-sm mt-2">Engaging animations transformed from static images.</p>
                </div>
              </Link>
              <Link href="#" className="group relative">
                <Image
                  alt="Voice Generation"
                  className="object-cover w-full aspect-video rounded-lg transition-transform group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="absolute inset-0 bg-black/60 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <h3 className="font-bold text-xl">Voice Generation</h3>
                  <p className="text-sm mt-2">Natural-sounding voices in multiple languages.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="pricing">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <p className="text-3xl font-bold">$0</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      50 generations per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Basic image resolution
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Standard processing speed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Community support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-purple-600">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <p className="text-3xl font-bold">$29<span className="text-sm font-normal">/month</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      500 generations per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      HD image resolution
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Priority processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Advanced features
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Free Trial</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <p className="text-3xl font-bold">Custom</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      Unlimited generations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      8K image resolution
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      24/7 priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      API access
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      alt="Sarah Johnson"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Digital Artist</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500">
                    Nexoria AI has revolutionized my creative workflow. The image generation quality is exceptional, and the
                    auto-enhancement feature saves me hours of work.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      alt="Michael Chen"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-500">Content Creator</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500">
                    The text-to-speech capabilities are incredible. I use it for all my video content, and the natural-sounding
                    voices have greatly improved my production quality.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      alt="Emily Rodriguez"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-gray-500">Marketing Director</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-500">
                    As a marketing team, we rely heavily on Nexoria AI for our content creation. The platform's versatility and
                    quality of output have made it an invaluable tool.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Nexoria AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Use
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Code of Conduct
          </Link>
        </nav>
      </footer>
    </div>
  )
}


