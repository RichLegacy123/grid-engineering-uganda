

export default function Home() {
  const electricalServices = [
    "Design & Consulting",
    "Installation & Maintenance", 
    "Energy Efficiency & Solar",
    "Smart Automation & Security",
    "Project Management",
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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <span className="font-bold text-xl">Grid Engineering</span>
        <a href="#contact" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold">Contact</a>
      </nav>

      {/* Hero - Green theme */}
      <section className="bg-green-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Grid Engineering Uganda Ltd</h1>
        <p className="text-xl md:text-2xl mb-6">MEP Consultancy & Electrical Contracting in Uganda</p>
        <a href="#contact" className="inline-block bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold text-lg">Get a Quote</a>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">About Us</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services. 
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
      </section>

      {/* Electrical Services */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">Electrical Services</h2>
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
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">Mechanical Services</h2>
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
        <p>© 2026 Grid Engineering Uganda Ltd. All rights reserved.</p>
      </footer>
    </main>
  )
}
