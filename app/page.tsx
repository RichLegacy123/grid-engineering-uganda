'use client'
export default function Home() {
  const electricalServices = [
    "Design and Consulting",
    "Installation and Maintenance",
    "Energy Efficiency and Solar",
    "Smart Automation and Security",
    "UEDCL Powerlines",
    "CCTV and Data Installation",
    "Generator Installation",
    "Solar Energy"
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
      title: "Kampala Office Complex MEP Design",
      client: "Private Developer",
      location: "Kampala",
      desc: "Full MEP design for 8-storey office building. Load calculations, cable sizing, lighting design BS 5266."
    },
    {
      title: "Mbarara Blood Bank Power System",
      client: "Mbarara Blood Bank",
      location: "Mbarara",
      desc: "200kVA 11kV transformer and HT metering. UMEME load app, standby power. ELV fire alarm interface. Critical health facility."
    },
    {
      title: "Oryx Petrol Station 3-Phase Upgrade",
      client: "Oryx Petrol Station",
      location: "Mubende",
      desc: "Distribution upgrade, earthing BS 7671. Canopy lighting and fire alarm BS 5839. UMEME commissioning with zero downtime. Oil and Gas."
    },
    {
      title: "Kisiita Borehole 3-Phase Transformer",
      client: "National Water and Sewerage Corporation",
      location: "Kakumiro Area",
      desc: "Installation of 3-Phase Transformer for borehole water supply system. Power reliability for rural water access."
    },
    {
      title: "Kyegegwa LV Extension Works",
      client: "Kyegegwa Rural Electricity Cooperative Society",
      location: "Kyegegwa, Mubende",
      desc: "Extension of poles and service works with LV single phase ABC35sqmm cables and accessories in Nabingoola, Kyegegwa, Kyetume, Apuyo, Kyenjo."
    },
    {
      title: "Kikagati WTP 33kV Line Extension",
      client: "Vinci Construction Grands Projects Uganda",
      location: "Isingiro",
      desc: "33kV line extension, pole installation and stringing. UMEME shutdown coordination. French EPC project."
    },
    {
      title: "Kyanja Bridge HV Line Shift",
      client: "Ambitious Construction Company",
      location: "Kasese",
      desc: "High voltage line shift, UMEME shutdown, rebuild, testing and re-energization IEC 60364."
    },
    {
      title: "Disease Control Centre 33kV Extension",
      client: "China National Aero-Technology",
      location: "Sanga",
      desc: "33kV extension works, UMEME shutdown and energization for health facility."
    },
    {
      title: "China Wu Yi Quarry Power Supply",
      client: "China Wu Yi",
      location: "Kasambya",
      desc: "1000kVA and 315kVA 33kV transformers. 1.8km 33kV line, HT metering. IR, ratio, oil BDV testing IEC 60076."
    },
    {
      title: "33KV Power Supply Cheema - Kapkwata - Kapchorwa",
      client: "TBEA Co LTD / Rural Electrification Agency",
      location: "Kapchorwa District",
      desc: "Underground cables, low voltage lines and Transformers. Accelerated Rural Electrification Programme."
    },
    {
      title: "Power Supply to Kiryandongo District HQ",
      client: "Kiryandongo District Local Government",
      location: "Kiryandongo District",
      desc: "Installation of 100KVA 33KV Transformer and 33KV Powerline with metering and underground cable laying."
    }
  ];

  const whatsappLink = "https://wa.me/256779426183";

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="bg-gray-900 text-white px-4 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <span className="font-bold text-base sm:text-xl uppercase tracking-wide">Grid Engineering Uganda Ltd</span>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded font-semibold transition text-sm sm:text-base">Contact</a>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide leading-tight">GRID ENGINEERING UGANDA LTD</h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">Mechanical, Electrical and Plumbing MEP Consultancy and Electrical Contracting in Uganda</p>
      </section>

      {/* Vision, Mission, Core Values */}
      <section id="about-values" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Vision</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              To be Uganda's trusted MEP consultancy and electrical contracting partner, delivering world-class infrastructure that powers communities and industries.
            </p>
          </div>

          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              To provide expert MEP consultancy and electrical contracting services with cost-effective, innovative solutions that meet global standards of safety, reliability, and timely delivery.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-wide">Core Values</h2>
            <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed max-w-4xl mx-auto">
              Safety First, Engineering Excellence, Innovation, Cost Effective, Timely Delivery, Reliability, Integrity, Customer Focus
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-6 text-gray-900 uppercase tracking-wide">About Grid Engineering</h2>
        <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed mb-4">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services.
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
        <p className="text-base sm:text-lg font-semibold text-center mb-2 text-gray-900">In operation since 2016</p>
        <p className="text-base sm:text-lg font-semibold text-center text-gray-900">
          ERA Class X Licensed Contractor | Certified and Registered with UEDCL - Uganda Electricity Distribution Company Limited
        </p>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-10 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900 uppercase tracking-wide">Electrical Services</h2>
          <p className="text-left text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base max-w-3xl mx-auto">Professional electrical solutions tailored to your needs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {electricalServices.map((service, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center min-h- sm:min-h-[120px]">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 text-center leading-snug">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Services */}
      <section id="mechanical" className="py-10 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900 uppercase tracking-wide">Mechanical Services</h2>
          <p className="text-left text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base max-w-3xl mx-auto">Complete mechanical systems for commercial and residential projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center min-h- sm:min-h-[120px]">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 text-center leading-snug">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 sm:py-12 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4 text-gray-900 uppercase tracking-wide">Selected Projects</h2>
          <p className="text-left text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-3xl mx-auto">Delivering reliable MEP and powerline solutions across Uganda since 2016</p>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 leading-snug">{project.title}</h3>
                <div className="mb-2">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">Client: </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">{project.client}</span>
                </div>
                <div className="mb-2">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">Description: </span>
                  <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{project.desc}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500">Location: </span>
                  <span className="text-xs text-gray-600">{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center uppercase tracking-wide">Get In Touch</h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-center text-gray-300 max-w-2xl mx-auto">Ready to start your project? Send us a message</p>

          <form action="mailto:gridengineerings@gmail.com" method="post" encType="text/plain" className="bg-white text-gray-900 p-6 sm:p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border-gray-300 rounded focus:border-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 border-gray-300 rounded focus:border-blue-600 outline-none" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border-gray-300 rounded focus:border-blue-600 outline-none" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Service Needed</label>
              <select name="service" className="w-full px-4 py-2 border-gray-300 rounded focus:border-blue-600 outline-none">
                <option>Electrical Services</option>
                <option>Mechanical Services</option>
                <option>MEP Consultancy</option>
                <option>Solar Installation</option>
                <option>UEDCL Powerlines</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Message *</label>
              <textarea name="message" rows={4} required placeholder="Tell us about your project..." className="w-full px-4 py-2 border-gray-300 rounded focus:border-blue-600 outline-none"></textarea>
            </div>

            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-base sm:text-lg text-white bg-blue-600 hover:bg-blue-700 transition">Send Message</button>
          </form>

          <div className="text-center">
            <div className="space-y-2 text-base sm:text-lg mb-6 sm:mb-8 text-gray-300">
              <p>Call: +256 779 426183</p>
              <p>Email: gridengineerings@gmail.com</p>
              <p>Plot 12 Kampala Road, Cham Tow</p>
              <p>P.O. Box 3882, Kampala - Uganda</p>
            </div>
            <a href={whatsappLink} target="_blank" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white bg-blue-600 hover:bg-blue-700 transition">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-5 sm:py-6 text-center px-4">
        <p className="uppercase text-xs sm:text-sm tracking-wide leading-relaxed">
          2026 Grid Engineering Uganda Ltd. All rights reserved. | ERA Class X Licensed Contractor | UEDCL Registered Contractor
        </p>
      </footer>
    </main>
  );
}
