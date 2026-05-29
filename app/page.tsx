

export default function Home() {
  const electricalServices = [
    "Design & Consulting",
    "Installation & Maintenance", 
    "Energy Efficiency & Solar",
    "Smart Automation & Security",
    "UEDCL Registered Contractor"
  ];

  const mechanicalServices = [
    "HVAC Systems",
    "Plumbing & Sanitation",
    "Fire Protection",
    "Ventilation Systems",
    "Building Services"
  ];

  const whatsappLink = "https://wa.me/256779426183";

  return (
    <main className="min-h-screen bg-[#f0fdf4] text-gray-900">
      {/* Brand Colors Reference:
        Dark Green: #166534 - navbar/hero
        Light Green: #f0fdf4 - background  
        Button Green: #22c55e - CTAs
        Text Green: #15803d - headings
      */}

      {/* Navbar */}
      <nav className="bg-[#166534] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-2xl font-bold">Grid Engineering Ltd</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-green-200">Home</a>
          <a href="#electrical" className="hover:text-green-200">Electrical</a>
          <a href="#mechanical" className="hover:text-green-200">Mechanical</a>
          <a href="#about" className="hover:text-green-200">About</a>
          <a href="#contact" className="hover:text-green-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-[#166534] text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Mechanical, Electrical & Plumbing Experts
        </h2>
        <p className="text-xl mb-2">MEP Consultancy & Contracting in Uganda</p>
        <p className="text-lg mb-8 font-semibold text-green-200">UEDCL Registered Electrical Contractor</p>
        <a 
          href={whatsappLink}
          target="_blank"
          className="bg-[#22c55e] hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block transition"
        >
          Get a Quote on WhatsApp
        </a>
      </section>

      {/* Electrical Services */}
      <section id="electrical" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#15803d]">Electrical Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {electricalServices.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-[#22c55e]">
              <h4 className="font-bold text-xl mb-2 text-[#166534]">{service}</h4>
              <p className="text-gray-600">Professional electrical solutions tailored to your needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanical Services */}
      <section id="mechanical" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#15803d]">Mechanical Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mechanicalServices.map((service, i) => (
              <div key={i} className="bg-[#f0fdf4] p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-[#166534]">
                <h4 className="font-bold text-xl mb-2 text-[#166534]">{service}</h4>
                <p className="text-gray-600">Complete mechanical systems for commercial & residential projects.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 text-[#15803d]">About Grid Engineering Ltd</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Grid Engineering Ltd is a leading MEP consultancy and contracting firm in Uganda. 
          We specialize in delivering comprehensive mechanical, electrical, and plumbing solutions 
          for residential, commercial, and industrial projects.
        </p>
        <p className="text-lg font-semibold text-[#166534]">
          Certified & Registered with UEDCL - Uganda Electricity Distribution Company Limited
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#166534] text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <p className="text-xl mb-8">Ready to start your MEP project?</p>
        <a 
          href={whatsappLink}
          target="_blank"
          className="bg-[#22c55e] hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg inline-block transition"
        >
          Chat on WhatsApp
        </a>
        <div className="mt-8 text-green-200">
          <p>Email: info@gridengineering.co.ug</p>
          <p>Phone: +256 779 426 183</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2026 Grid Engineering Ltd. All rights reserved. | UEDCL Registered Contractor</p>
      </footer>
    </main>
  );
}
