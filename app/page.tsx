'use client'
export default function Home() {
  const electricalServices = [
    "Design and Consulting",
    "Installation and Maintenance",
    "Energy Efficiency and Solar",
    "Smart Automation and Security",
    "UEDCL Powerlines",
    "CCTV and Data Installation",
    "Generator Installation"
  ];

  const mechanicalServices = [
    "Design and Consulting",
    "HVAC and Plumbing Systems",
    "Fire Protection Systems",
    "Maintenance and Repair",
    "Energy Efficiency Solutions",
    "Project Management",
    "Inspections and Testing"
  ];

  const projects = [
    {
      title: "Mbarara Blood Bank Power System",
      client: "Mbarara Blood Bank",
      location: "Mbarara",
      desc: "200kVA 11kV transformer and HT metering. UMEME load app, standby power. ELV fire alarm interface. Critical health facility.",
      scope: "200kVA 11kV • HT metering • Fire alarm ELV interface"
    },
    {
      title: "Oryx Petrol Station 3-Phase Upgrade",
      client: "Oryx Petrol Station",
      location: "Mubende",
      desc: "Distribution upgrade, earthing BS 7671. Canopy lighting and fire alarm BS 5839. UMEME commissioning with zero downtime. Oil and Gas.",
      scope: "3-phase upgrade • BS 7671 earthing • Zero downtime commissioning"
    },
    {
      title: "Kikagati WTP 33kV Line Extension",
      client: "Vinci Construction Grands Projects Uganda",
      location: "Isingiro",
      desc: "33kV line extension, pole installation and stringing. UMEME shutdown coordination. French EPC project.",
      scope: "33kV line extension • Pole installation • UMEME shutdown coordination"
    },
    {
      title: "China Wu Yi Quarry Power Supply",
      client: "China Wu Yi",
      location: "Kasambya",
      desc: "1000kVA and 315kVA 33kV transformers. 1.8km 33kV line, HT metering. IR, ratio, oil BDV testing IEC 60076.",
      scope: "1.8km 33kV • 1000kVA + 315kVA • IEC 60076 testing"
    }
  ];

  const whatsappLink = "https://wa.me/256779426183?text=Hi%20Grid%20Engineering%2C%20I%20need%20a%20quote%20for";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <span className="font-bold text-xl uppercase tracking-wide">Grid Engineering Uganda Ltd</span>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition">Contact</a>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide">GRID ENGINEERING UGANDA LTD</h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-200">Mechanical, Electrical and Plumbing MEP Consultancy and Electrical Contracting in Uganda</p>
        <p className="text-lg mb-8 font-semibold text-blue-300">We are also registered UEDCL Electrical Contractors</p>
        <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition">Get a Quote</a>
      </section>

      {/* UEDCL Badge */}
      <section className="bg-blue-50 py-6 px-6">
        <p className="text-center text-sm uppercase tracking-wide text-blue-800 font-semibold">
          UEDCL Registered Contractor | 12+ Years 33kV/11kV | TBEA • HT metering • Fire alarm ELV interface
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">About Grid Engineering</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services.
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
        <p className="text-lg font-semibold text-center mb-2 text-gray-900">In operation since 2016</p>
        <p className="text-lg font-semibold text-center text-gray-900">Certified and Registered with UEDCL - Uganda Electricity Distribution Company Limited</p>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Electrical Services</h2>
          <p className="text-center text-gray-600 mb-10">Professional electrical solutions tailored to your needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {electricalServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center min-h-[120px]">
                <h3 className="font-semibold text-lg text-gray-900 text-center">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Services */}
      <section id="mechanical" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Mechanical Services</h2>
          <p className="text-center text-gray-600 mb-10">Complete mechanical systems for commercial and residential projects</p>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center min-h-[120px]">
                <h3 className="font-semibold text-lg text-gray-900 text-center">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Fixed labels + reduced spacing */}
      <section id="projects" className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Selected Projects</h2>
          <p className="text-center text-gray-600 mb-8">Delivering reliable MEP and powerline solutions across Uganda since 2016</p>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Location: </span>
                  <span className="text-xs text-gray-700">{project.location}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-500">Client: </span>
                  <span className="text-sm font-semibold text-gray-700">{project.client}</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-500">Description: </span>
                  <span className="text-sm text-gray-600">{project.desc}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-700">Scope: </span>
                  <span className="text-xs text-blue-600">{project.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-lg mb-10 text-center text-gray-300">Ready to start your project? Send us a message</p>

          <div className="max-w-2xl mx-auto mb-10">
            <a href={whatsappLink} target="_blank" className="w-full py-4 rounded-lg font-semibold text-lg text-white bg-green-600 hover:bg-green-700 transition block text-center">
              Send Message on WhatsApp
            </a>
          </div>

          <div className="text-center">
            <div className="space-y-2 text-lg mb-8 text-gray-300">
              <p>Call: +256 779 426 183</p>
              <p>Email: gridengineerings@gmail.com</p>
              <p>Plot 12 Kampala Road, Cham Tow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-6 text-center">
        <p className="uppercase text-sm tracking-wide">2026 Grid Engineering Uganda Ltd. All rights reserved. | UEDCL Registered Contractor</p>
      </footer>
    </main>
  );
}
