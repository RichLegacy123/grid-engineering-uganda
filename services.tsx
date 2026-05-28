import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Zap, 
  Cog, 
  Lightbulb, 
  Sun, 
  Wrench,
  Thermometer,
  Flame,
  Camera,
  Cable,
  Cpu,
  ClipboardCheck,
  Settings,
  Search,
  Droplets,
  PenTool,
  Volume2,
  Bell,
  Plug,
  Pipette,
} from "lucide-react"

const electricalServices = [
  { icon: PenTool, title: "Electrical Installation Design" },
  { icon: Lightbulb, title: "Lighting & Small Power Systems" },
  { icon: Bell, title: "Fire Alarm & Detection Systems" },
  { icon: Volume2, title: "Public Address Systems" },
  { icon: Wrench, title: "Installation & Maintenance" },
  { icon: Sun, title: "Energy Efficiency & Solar" },
  { icon: Sun, title: "Solar Design & Installation Supervision" },
  { icon: Cpu, title: "Smart Automation & Security" },
  { icon: ClipboardCheck, title: "Project Management" },
  { icon: Cable, title: "UEDCL Powerlines" },
  { icon: Camera, title: "CCTV & Data Installation" },
  { icon: Settings, title: "Generator Installation" },
]

const mechanicalServices = [
  { icon: PenTool, title: "Mechanical Installation Design" },
  { icon: Pipette, title: "Drainage & Sewage Design" },
  { icon: Plug, title: "Design & Consulting" },
  { icon: Thermometer, title: "HVAC & Plumbing Systems" },
  { icon: Flame, title: "Fire Protection Systems" },
  { icon: Wrench, title: "Maintenance & Repair" },
  { icon: Droplets, title: "Energy Efficiency Solutions" },
  { icon: ClipboardCheck, title: "Project Management" },
  { icon: Search, title: "Inspections & Testing" },
]

export function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">
            Our Expertise
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl text-balance">
            Comprehensive MEP Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end mechanical, electrical, and plumbing services tailored to your project requirements.
          </p>
        </div>

        {/* Services Grid - Two Columns */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Electrical Services */}
          <Card className="border-none bg-white shadow-lg">
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2E7D32]">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#0A192F]">Electrical Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {electricalServices.map((service) => (
                  <div 
                    key={service.title} 
                    className="flex items-center gap-3 rounded-lg bg-[#F5F5F5] p-3 transition-colors hover:bg-[#2E7D32]/10"
                  >
                    <service.icon className="h-5 w-5 flex-shrink-0 text-[#2E7D32]" />
                    <span className="font-medium text-[#0A192F]">{service.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mechanical Services */}
          <Card className="border-none bg-white shadow-lg">
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2E7D32]">
                <Cog className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#0A192F]">Mechanical Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {mechanicalServices.map((service) => (
                  <div 
                    key={service.title} 
                    className="flex items-center gap-3 rounded-lg bg-[#F5F5F5] p-3 transition-colors hover:bg-[#2E7D32]/10"
                  >
                    <service.icon className="h-5 w-5 flex-shrink-0 text-[#2E7D32]" />
                    <span className="font-medium text-[#0A192F]">{service.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
