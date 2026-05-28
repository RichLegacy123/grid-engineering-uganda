import { Target, Eye } from "lucide-react"

export function VisionMission() {
  return (
    <section className="bg-[#0A192F] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">
            Our Purpose
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Vision & Mission
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2E7D32]">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be Uganda&apos;s leading engineering firm delivering projects to international standards.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2E7D32]">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To execute engineering with excellence in quality, safety, cost-effective delivery, and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
