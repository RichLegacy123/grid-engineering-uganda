import Link from "next/link"
import { Zap, Shield, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Electrical Services",
  "Mechanical Services",
  "UEDCL Powerlines",
  "Solar Installation",
]

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E7D32]">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Grid Engineering</span>
                <span className="text-xs text-gray-400">Uganda Limited</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Mechanical, Electrical & Plumbing Consultancy Solutions. Adding value to your business since 2016.
            </p>
            {/* UEDCL Badge */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-[#2E7D32]/30 bg-[#2E7D32]/10 px-4 py-3">
              <Shield className="h-8 w-8 text-[#2E7D32]" />
              <div>
                <p className="text-xs text-gray-400">Registered</p>
                <p className="font-semibold text-[#2E7D32]">UEDCL Electrical Contractor</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 text-[#2E7D32]" />
                <span>Plot 12, Kampala Road, Cham Towers, P.O Box 3882, Kampala Uganda</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#2E7D32]" />
                <a href="tel:+256779426183" className="hover:text-[#2E7D32] transition-colors">
                  Tel: +256 779 426183
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#2E7D32]" />
                <a href="mailto:gridengineerings@gmail.com" className="hover:text-[#2E7D32] transition-colors">
                  gridengineerings@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#2E7D32]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              &copy; 2024 Grid Engineering Uganda Limited. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              UEDCL Registered Contractor
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
