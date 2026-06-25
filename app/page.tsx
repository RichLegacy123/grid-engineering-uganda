'use client'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [showVision, setShowVision] = useState(false)
  const [showMission, setShowMission] = useState(false)
  const [showValues, setShowValues] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showElectrical, setShowElectrical] = useState(false)
  const [showMechanical, setShowMechanical] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showClients, setShowClients] = useState(false)

  const electricalServices = [
    "Electrical Installation Design",
    "CCTV Installation",
    "Access Control",
    "Structured Cabling",
    "Voice and Data",
    "Fire Alarm and Evacuation Systems",
    "IT Infrastructure Design",
    "Powerlines Construction",
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
      title: "Gulu Blood Bank Power System",
      client: "Gulu Blood Bank",
      location: "Gulu",
      desc: "200kVA 11kV transformer and HT metering. UMEME load app, standby power. ELV fire alarm interface. Critical health facility."
    },
    {
      title: "Generator Design and Installation",
      client: "Kiryandongo District Headquarters",
      location: "Kiryandongo",
      desc: "Installation of 3 phase 80kVA generator with ATS."
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

  const clients = [
    "Mbarara Blood Bank",
    "Gulu Blood Bank",
    "Kiryandongo District Headquarters",
    "Kiryandongo District Local Government",
    "National Water and Sewerage Corporation",
    "Kyegegwa Rural Electricity Cooperative Society",
    "Vinci Construction Grands Projects Uganda",
    "Ambitious Construction Company",
    "China National Aero-Technology",
    "China Wu Yi",
    "TBEA Co LTD / Rural Electrification Agency",
    "Oryx Petrol Station",
    "National Housing Construction Company"
  ];

  const galleryImages = [
    {
      src: "/images/kikagati-pole-delivery.jpg",
      alt: "Pole delivery at Kikagati"
    },
    {
      src: "/images/kyanja-pole-top.jpg",
      alt: "Pole top assembly"
    },
    {
      src: "/images/sanga-double-pole.jpg",
      alt: "33kV double pole line"
    },
    {
      src: "/images/IMG-20241111-WA0054-1.jpg",
      alt: "Kikagati site works"
    }
  ];

  const whatsappLink = "https://wa.me/256762411230";
  const lightGreen = "#f0fdf4";
  const darkGreen = "#16a34a";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "Grid Engineering Uganda Ltd",
    "description": "Mechanical, Electrical and Plumbing MEP Consultancy and Electrical Contracting in Uganda. ERA Class X Licensed Contractor, UEDCL Registered.",
    "url": "https://gridengineerings.com",
    "telephone": "+256762411230",
    "email": "gridengineerings@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 12 Kampala Road, Cham Tow",
      "addressLocality": "Kampala",
      "postalCode": "P.O. Box 3882",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.3136,
      "longitude": 32.5811
    },
    "areaServed": "Uganda",
    "foundingDate": "2016",
    "sameAs": [whatsappLink]
  };

  return (
    <>
      <Head>
        <title>Grid Engineering Uganda Ltd | MEP Consultancy & Electrical Contracting Kampala</title>
        <meta name="description" content="ERA Class X Licensed Electrical Contractor in Uganda. MEP consultancy, electrical contracting, solar installation, UEDCL powerlines. Plot 12 Kampala Road. Call +256 762 411230" />
        <meta name="keywords" content="MEP consultancy Uganda, electrical contractor Kampala, ERA Class X, UEDCL registered, solar installation Uganda" />
        <link rel="canonical" href="https://gridengineerings.com" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <nav className="bg-gray-900 h-3 sm:h-4 sticky top-0 z-50 shadow-md"></nav>

        <section className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide leading-tight">GRID ENGINEERING UGANDA LTD</h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">Mechanical, Electrical and Plumbing MEP Consultancy and Electrical Contracting in Uganda</p>
        </section>

        <section id="vision-mission-values" className="py-10 sm:py-16 px-4 sm:px-6" style={{backgroundColor: lightGreen}}>
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12 space-y-6" style={{borderBottom: `1px solid #bbf7d0`}}>

            {/* Vision */}
            <div>
              <button onClick={() => setShowVision(!showVision)} className="w-full flex items-center gap-3 mb-4 group">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Vision</h2>
                <span className={`text-2xl transition-transform duration-300 ${showVision? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
              </button>
              {showVision && (
                <div className="pl-4">
                  <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                    To be Uganda's trusted MEP consultancy and electrical contracting partner, delivering world-class infrastructure that powers communities and industries.
                  </p>
                </div>
              )}
            </div>

            {/* Mission */}
            <div>
              <button onClick={() => setShowMission(!showMission)} className="w-full flex items-center gap-3 mb-4 group">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Mission</h2>
                <span className={`text-2xl transition-transform duration-300 ${showMission? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
              </button>
              {showMission && (
                <div className="pl-4">
                  <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
                    To provide expert MEP consultancy and electrical contracting services with cost-effective, innovative solutions that meet global standards of safety, reliability, and timely delivery.
                  </p>
                </div>
              )}
            </div>

            {/* Core Values */}
            <div>
              <button onClick={() => setShowValues(!showValues)} className="w-full flex items-center gap-3 mb-4 group">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Core Values</h2>
                <span className={`text-2xl transition-transform duration-300 ${showValues? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
              </button>
              {showValues && (
                <div className="pl-4">
                  <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed max-w-4xl">
                    Safety First, Engineering Excellence, Innovation, Cost Effective, Timely Delivery, Reliability, Integrity, Customer Focus
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>

        <section id="about" className="py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto bg-white mt-12 sm:mt-16">
          <button onClick={() => setShowAbout(!showAbout)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">About Grid Engineering</h2>
            <span className={`text-2xl transition-transform duration-300 ${showAbout? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
          </button>
          {showAbout && (
            <div className="space-y-4 pl-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services.
                We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">In operation since 2016</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">
                ERA Class X Licensed Contractor | Certified and Registered with UEDCL - Uganda Electricity Distribution Company Limited
              </p>
            </div>
          )}
        </section>

        <section id="electrical" className="py-10 sm:py-16 px-4 sm:px-6 mt-12 sm:mt-16" style={{backgroundColor: lightGreen}}>
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12" style={{borderBottom: `1px solid #bbf7d0`}}>
            <button onClick={() => setShowElectrical(!showElectrical)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Electrical Services</h2>
              <span className={`text-2xl transition-transform duration-300 ${showElectrical? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
            </button>
            {showElectrical && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 pl-4">
                {electricalServices.map((service, i) => (
                  <div key={i} className="bg-white p-4 sm:p-6 shadow hover:shadow-lg transition flex items-center min-h-[120px]" style={{border: `1px solid #bbf7d0`}}>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug">{service}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="mechanical" className="py-10 sm:py-16 px-4 sm:px-6 bg-white mt-2 sm:mt-3">
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12" style={{borderBottom: `1px solid #e5e7eb`}}>
            <button onClick={() => setShowMechanical(!showMechanical)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Mechanical Services</h2>
              <span className={`text-2xl transition-transform duration-300 ${showMechanical? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
            </button>
            {showMechanical && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 pl-4">
                {mechanicalServices.map((service, i) => (
                  <div key={i} className="p-4 sm:p-6 shadow hover:shadow-lg transition flex items-center min-h-[120px]" style={{backgroundColor: lightGreen, border: `1px solid #bbf7d0`}}>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug">{service}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="py-10 sm:py-12 px-4 sm:px-6 mt-12 sm:mt-16" style={{backgroundColor: lightGreen}}>
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12">
            <button onClick={() => setShowProjects(!showProjects)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Selected Projects</h2>
              <span className={`text-2xl transition-transform duration-300 ${showProjects? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
            </button>
            {showProjects && (
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 pl-4">
                {projects.map((project, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-lg shadow hover:shadow-lg transition mb-2" style={{border: `1px solid #bbf7d0`}}>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 leading-snug">{project.title}</h3>
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
            )}
          </div>
        </section>

        <section id="clients" className="py-10 sm:py-16 px-4 sm:px-6 bg-white mt-12 sm:mt-16">
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12" style={{borderBottom: `1px solid #e5e7eb`}}>
            <button onClick={() => setShowClients(!showClients)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Our Clients</h2>
              <span className={`text-2xl transition-transform duration-300 ${showClients? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
            </button>
            {showClients && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-4">
                {clients.map((client, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg border-gray-200 text-left">
                    <p className="font-semibold text-gray-800">{client}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="gallery" className="py-10 sm:py-16 px-4 sm:px-6 bg-white mt-12 sm:mt-16">
          <div className="max-w-6xl mx-auto pb-8 sm:pb-12" style={{borderBottom: `1px solid #e5e7eb`}}>
            <button onClick={() => setShowGallery(!showGallery)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wide pl-4">Project Gallery</h2>
              <span className={`text-2xl transition-transform duration-300 ${showGallery? 'rotate-180' : ''}`} style={{color: darkGreen}}>▼</span>
            </button>
            {showGallery && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pl-4">
                {galleryImages.map((img, i) => (
                  <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover"
                      unoptimized={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="py-10 sm:py-16 px-4 sm:px-6 bg-gray-900 text-white mt-12 sm:mt-16">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setShowContact(!showContact)} className="w-full flex items-center gap-3 mb-6 sm:mb-8 group">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide pl-4">Get In Touch</h2>
              <span className={`text-2xl transition-transform duration-300 ${showContact? 'rotate-180' : ''}`}>▼</span>
            </button>

            {showContact && (
              <div className="pl-4">
                <form action="mailto:gridengineerings@gmail.com" method="post" encType="text/plain" className="bg-white text-gray-900 p-6 sm:p-8 rounded-xl shadow-lg max-w-2xl mb-8 sm:mb-10">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input type="text" name="name" required className="w-full px-4 py-2 border rounded outline-none" style={{borderColor: '#d1d5db'}} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded outline-none" style={{borderColor: '#d1d5db'}} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input type="email" name="email" required className="w-full px-4 py-2 border rounded outline-none" style={{borderColor: '#d1d5db'}} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Service Needed</label>
                    <select name="service" className="w-full px-4 py-2 border rounded outline-none" style={{borderColor: '#d1d5db'}}>
                      <option>Electrical Services</option>
                      <option>Mechanical Services</option>
                      <option>MEP Consultancy</option>
                      <option>Solar Installation</option>
                      <option>Powerlines Construction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea name="message" rows={4} required placeholder="Tell us about your project..." className="w-full px-4 py-2 border rounded outline-none" style={{borderColor: '#d1d5db'}}></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg font-semibold text-base sm:text-lg text-white transition" style={{backgroundColor: darkGreen}}>Send Message</button>
                </form>

                <div>
                  <div className="space-y-2 text-base sm:text-lg mb-6 sm:mb-8 text-gray-300">
                    <p>Call: +256 762 411230</p>
                    <p>Email: gridengineerings@gmail.com</p>
                    <p>Plot 12 Kampala Road, Cham Tow</p>
                    <p>P.O. Box 3882, Kampala - Uganda</p>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white transition" style={{backgroundColor: darkGreen}}>Chat on WhatsApp</a>
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className="bg-gray-950 text-white py-6 sm:py-8 text-center px-4 mt-auto">
          <p className="uppercase text-sm sm:text-base tracking-wide leading-relaxed">
            2026 Grid Engineering Uganda Ltd. All rights reserved. | ERA Class X Licensed Contractor | UEDCL Registered Contractor
          </p>
        </footer>
      </main>
    </>
  );
}
