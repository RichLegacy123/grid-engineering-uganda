

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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Brand Colors: Dark Gray #1f2937, Accent Blue #2563eb, Light Gray #f9fafb */}

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <span className="font-bold text-xl uppercase tracking-wide">Grid Engineering Uganda Ltd</span>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition">Contact</a>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide">GRID ENGINEERING UGANDA LTD</h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-200">Mechanical, Electrical and Plumbing (MEP) Consultancy & Electrical Contracting in Uganda</p>
        <p className="text-lg mb-8 font-semibold text-blue-300">We are also registered UEDCL Electrical Contractors</p>
        <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition">Get a Quote</a>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">About Grid Engineering</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services. 
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
        <p className="text-lg font-semibold text-center mb-2 text-gray-900">
          In operation since 2016
        </p>
        <p className="text-lg font-semibold text-center text-gray-900">
          Certified & Registered with UEDCL - Uganda Electricity Distribution Company Limited
        </p>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Electrical Services</h2>
          <p className="text-center text-gray-600 mb-10">Professional electrical solutions tailored to your needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {electricalServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Reliable and code-compliant electrical work.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Services */}
      <section id="mechanical" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Mechanical Services</h2>
          <p className="text-center text-gray-600 mb-10">Complete mechanical systems for commercial & residential projects</p>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Engineered for efficiency and safety.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with Form */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-lg mb-10 text-center text-gray-300">Ready to start your project? Send us a message</p>
          
          {/* Contact Form */}
          <form 
            action="mailto:gridengineerings@gmail.com" 
            method="post" 
            encType="text/plain"
            className="bg-white text-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-10"
          >
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
            
            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-700 transition">
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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Brand Colors: Dark Gray #1f2937, Accent Blue #2563eb, Light Gray #f9fafb */}

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <span className="font-bold text-xl uppercase tracking-wide">Grid Engineering Uganda Ltd</span>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold transition">Contact</a>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wide">GRID ENGINEERING UGANDA LTD</h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-200">Mechanical, Electrical and Plumbing (MEP) Consultancy & Electrical Contracting in Uganda</p>
        <p className="text-lg mb-8 font-semibold text-blue-300">We are also registered UEDCL Electrical Contractors</p>
        <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition">Get a Quote</a>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">About Grid Engineering</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-4">
          Grid Engineering Uganda Ltd provides professional MEP consultancy and electrical contracting services. 
          We deliver safe, efficient, and reliable solutions for residential, commercial, and industrial projects across Uganda.
        </p>
        <p className="text-lg font-semibold text-center mb-2 text-gray-900">
          In operation since 2016
        </p>
        <p className="text-lg font-semibold text-center text-gray-900">
          Certified & Registered with UEDCL - Uganda Electricity Distribution Company Limited
        </p>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Electrical Services</h2>
          <p className="text-center text-gray-600 mb-10">Professional electrical solutions tailored to your needs</p>
          <div className="grid md:grid-cols-3 gap-6">
            {electricalServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center">
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
          <p className="text-center text-gray-600 mb-10">Complete mechanical systems for commercial & residential projects</p>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg border-gray-200 hover:border-blue-600 transition flex items-center justify-center">
                <h3 className="font-semibold text-lg text-gray-900 text-center">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with Form */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-lg mb-10 text-center text-gray-300">Ready to start your project? Send us a message</p>
          
          {/* Contact Form */}
          <form 
            action="mailto:gridengineerings@gmail.com" 
            method="post" 
            encType="text/plain"
            className="bg-white text-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-10"
          >
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
            
            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Details + WhatsApp */}
          <div className="text-center">
            <div className="space-y-2 text-lg mb-8 text-gray-300">
              <p>📞 Call: +256 779 426183</p>
              <p>✉️ Email: gridengineerings@gmail.com</p>
              <p>📍 Plot 12 Kampala Road, Cham Tow</p>
              <p>P.O. Box 3882, Kampala - Uganda</p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-6 text-center">
        <p className="uppercase text-sm tracking-wide">© 2026 Grid Engineering Uganda Ltd. All rights reserved. | UEDCL Registered Contractor</p>
      </footer>
    </main>
  )
}
