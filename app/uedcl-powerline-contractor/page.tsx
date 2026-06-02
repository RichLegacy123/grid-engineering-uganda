export const metadata = {
  title: 'UEDCL Registered Powerline Contractor Uganda | Grid Engineering',
  description: 'UEDCL registered contractor for 33kV, 11kV powerlines in Uganda. UMEME shutdown coordination, HT metering, transformer installation. ERA Class X licensed.',
}

export default function UedclPowerlines() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">UEDCL Registered Powerline Contractor</h1>
        <p className="text-xl text-gray-200">33kV & 11kV Distribution Lines, Transformer Installations, UMEME Projects</p>
      </section>
      
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">UEDCL Certified Works</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Grid Engineering Uganda Ltd is certified and registered with UEDCL - Uganda Electricity Distribution Company Limited. 
          We execute powerline projects across Uganda with full UMEME shutdown coordination and commissioning.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-gray-900">33kV Line Works</h3>
            <p className="text-gray-700">Line extension, pole installation, stringing, HT metering. Kikagati WTP, China Wu Yi Quarry projects delivered.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-gray-900">Transformer Installation</h3>
            <p className="text-gray-700">100kVA to 1000kVA 33kV/11kV transformers. Testing: IR, ratio, oil BDV IEC 60076.</p>
          </div>
        </div>
        <ul className="space-y-3 text-lg text-gray-700 mb-8">
          <li>✓ UMEME Shutdown Coordination & Re-energization</li>
          <li>✓ LV ABC35sqmm Cable Installation</li>
          <li>✓ Rural Electrification Projects - REA</li>
          <li>✓ Health Facility & Industrial Power Supply</li>
        </ul>
        <a href="https://wa.me/256779426183" target="_blank" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition">Request UEDCL Project Quote</a>
      </section>
    </main>
  )
}
