

export default function Home() {
  const electricalServices = [
    "Design & Consulting",
    "Installation & Maintenance", 
    "Energy Efficiency & Solar",
    "Smart Automation & Security",
    "UEDCL Powerlines",
    "CCTV & Data Installation",
    "Generator Installation",
    "Solar Energy"
  ];

  const mechanicalServices = [
    "Design & Consulting",
    "HVAC & Plumbing Systems",
    "Fire Protection Systems", 
    "Maintenance & Repair",
    "Energy Efficiency Solutions",
    "Project Management",
    "Inspections & Testing"
  ];

  const whatsappLink = "https://wa.me/256779426183";

  return (
    <main className="min-h-screen bg-green-50 text-gray-900">
      {/* Brand Colors Reference:
        Dark Green: #166534 - bg-green-800
        Light Green: #f0fdf4 - bg-green-50  
        Button Green: #22c55e - bg-green-500
        Text Green: #15803d - text-green-700
      */}

      {/* Navbar */}
      <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <span className="font-bold text-xl uppercase">Grid Engineering Uganda Ltd</span>
        <a href="#contact" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold">Contact</a>
      </nav>

      {/* Hero */}
      <section className="bg-green-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">GRID ENGINEERING UGANDA LTD</h1>
        <p className="text-xl md:text-2xl mb-6">Mechanical, Electrical and Plumbing (MEP) Consultancy & Electrical Contracting in Uganda</p>
        <p className="text-lg mb-8 font-semibold text-green-200">We are also registered UEDCL Electrical Contractors</p>
        <a href="#contact" className="inline-block bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold text-lg">Get a Quote</a>
      </section>

      {/* About - Moved above services */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">About Grid Engineering</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services. 
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
        <p className="text-lg font-semibold text-green-800 text-center">
          Certified & Registered with UEDCL - Uganda Electricity Distribution Company Limited
        </p>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Electrical Services</h2>
          <p className="text-center text-gray-600 mb-10">Professional electrical solutions tailored to your needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {electricalServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:border-green-500 border-2 border-transparent transition">
                <h3 className="font-semibold text-lg text-green-700">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Services */}
      <section id="mechanical" className="py-16 px-6 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Mechanical Services</h2>
          <p className="text-center text-gray-600 mb-10">Complete mechanical systems for commercial & residential projects</p>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:border-green-500 border-2 border-transparent transition">
                <h3 className="font-semibold text-lg text-green-700">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6">Ready to start your project? Contact us today.</p>
          
          <div className="space-y-2 text-lg mb-8">
            <p>📞 Call: +256 779 426183</p>
            <p>✉️ Email: gridengineerings@gmail.com</p>
            <p>📍 Plot 12 Kampala Road, Cham Tow</p>
            <p>P.O. Box 3882, Kampala - Uganda</p>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="uppercase">© 2026 Grid Engineering Uganda Ltd. All rights reserved. | UEDCL Registered Contractor</p>
      </footer>
    </main>
  )
}
