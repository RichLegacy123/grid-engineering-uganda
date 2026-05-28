import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "UEDCL Registered Contractor",
  "Commercial & Industrial Projects",
  "Serving Uganda Since 2016",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
          alt="Engineering construction site"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-[#0A192F]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/20 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#2E7D32] animate-pulse" />
            <span className="text-sm font-medium text-[#2E7D32]">Adding value to your business</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Mechanical, Electrical and Plumbing (MEP) Consultancy &{" "}
            <span className="text-[#2E7D32]">Electrical Contracting</span>{" "}
            in Uganda
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            MEP solutions for commercial, industrial, and residential projects.
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#2E7D32] text-white hover:bg-[#1B5E20]">
              <Link href="#contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white">
              <Link href="#services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
