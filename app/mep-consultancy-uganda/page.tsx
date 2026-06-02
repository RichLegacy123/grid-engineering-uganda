export const metadata = {
  title: 'MEP Consultancy Uganda | Mechanical Electrical Plumbing Design',
  description: 'Professional MEP consultancy in Uganda. Electrical design BS 7671, HVAC, plumbing, fire protection BS 5839. Design, load calculations, tender docs.',
}

export default function MepConsultancy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">MEP Consultancy Uganda</h1>
        <p className="text-xl text-gray-200">Mechanical, Electrical & Plumbing Design for Commercial & Industrial Projects</p>
      </section>
      
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert MEP Design Services</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          We provide end-to-end MEP consultancy for buildings and infrastructure in Uganda. From concept design to tender documentation, 
          our designs meet BS 7671, IEC 60364, BS 5839, and BS 5266 standards.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Electrical Design</h3>
            <p className="text-gray-700 text-sm">Load calculations, cable sizing, lighting design, earthing systems</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2 text-gray-900">HVAC & Plumbing</h3>
            <p className="text-gray-700 text-sm">Ventilation design, water supply, drainage, energy efficiency</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Fire Protection</h3>
            <p className="text-gray-700 text-sm">Fire alarm BS 5839, suppression systems, ELV integration</p>
          </div>
        </div>
        <ul className="space-y-3 text-lg text-gray-700 mb-8">
          <li>✓ Concept Design & Feasibility Studies</li>
          <li>✓ Detailed Engineering & Shop Drawings</li>
          <li>✓ Bill of Quantities & Tender Documents</li>
          <li>✓ Site Supervision & Commissioning</li>
        </ul>
        <a href="https://wa.me/256779426183" target="_blank" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition">Get MEP Design Quote</a>
      </section>
    </main>
  )
}
