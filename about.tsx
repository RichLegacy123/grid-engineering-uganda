import { Shield } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering team at work"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-[#0A192F] p-6 shadow-xl md:-bottom-8 md:-right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2E7D32]">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Certified</p>
                  <p className="text-lg font-bold text-white">UEDCL Contractor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">
              Who We Are
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl text-balance">
              Your Trusted MEP Partner in Uganda
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Grid Engineering Uganda Ltd is a team of seasoned MEP engineers delivering electrical, mechanical, and civil works across Uganda.
              </p>
              <p className="leading-relaxed">
                We&apos;ve executed and supervised projects for UNHCR, National Housing, Umeme, Rural Electrification Agency, district governments, and private clients. As registered UEDCL powerlines contractors, we prioritize safety, quality, and on-time delivery on every project.
              </p>
            </div>

            {/* Subtext Badge */}
            <div className="mt-8 rounded-lg bg-[#F5F5F5] p-4">
              <p className="text-sm font-medium text-[#0A192F]">
                We are MEP (Mechanical, Electrical and Plumbing) Consultants and Registered UEDCL Electric Powerlines Contractors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
