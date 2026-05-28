import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const projects = [
  {
    title: "Mbarara Blood Bank",
    description: "200kVA transformer and HT metering for critical health facility.",
    location: "Mbarara",
  },
  {
    title: "Oryx Petrol Station Mubende",
    description: "3-phase upgrade with earthing and fire alarm systems.",
    location: "Mubende",
  },
  {
    title: "Kikagati WTP Isingiro",
    description: "33kV line extension for Vinci Construction.",
    location: "Isingiro",
  },
  {
    title: "Kyanja Bridge Kasese",
    description: "HV line shift and re-energization.",
    location: "Kasese",
  },
  {
    title: "Disease Control Centre Sanga",
    description: "33kV extension for China National Aero-Technology.",
    location: "Sanga",
  },
  {
    title: "China Wu Yi Quarry",
    description: "1000kVA and 315kVA transformer installation with 1.8km 33kV line.",
    location: "Uganda",
  },
  {
    title: "Cheema-Kapkwata Kapchorwa",
    description: "33kV rural electrification with underground cables and transformers for TBEA/Rural Electrification Agency.",
    location: "Kapchorwa",
    completed: "Dec 2021",
  },
  {
    title: "Kiryandongo District Offices",
    description: "100kVA transformer and 33kV line with underground cabling and metering.",
    location: "Kiryandongo",
    completed: "Jul 2020",
  },
  {
    title: "Kyegegwa Rural Electricity Cooperative",
    description: "LV pole extensions with ABC 35sqmm cabling across Nabingoola, Kyegegwa, Kyetume, Apuyo, Kyenjo.",
    location: "Kyegegwa",
    completed: "Feb 2020",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl text-balance">
            Selected Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delivering quality MEP solutions across Uganda for commercial, industrial, and infrastructure projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#2E7D32]/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-[#2E7D32]" />
                  <span>{project.location}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0A192F] group-hover:text-[#2E7D32] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
