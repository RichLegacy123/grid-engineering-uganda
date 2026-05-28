"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Plot 12, Kampala Road, Cham Towers", "P.O Box 3882, Kampala Uganda"],
    href: null,
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+256 779 426183"],
    href: "tel:+256779426183",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["gridengineerings@gmail.com"],
    href: "mailto:gridengineerings@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+256 779 426183"],
    href: "https://wa.me/256779426183?text=Hello%2C%20I%20need%20MEP%20services%20for%20my%20project",
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl text-balance">
            Request a Consultation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        {/* Contact Info Display */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#2E7D32]/10">
                <item.icon className="h-6 w-6 text-[#2E7D32]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A192F]">{item.title}</h3>
                {item.details.map((detail, index) => (
                  item.href ? (
                    <a 
                      key={index} 
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="block text-sm text-muted-foreground hover:text-[#2E7D32] transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={index} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
          {/* Contact Form */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2E7D32]/10">
                    <Send className="h-8 w-8 text-[#2E7D32]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A192F]">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for contacting us. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#0A192F]">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="border-border focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0A192F]">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="border-border focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0A192F]">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+256 700 000 000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="border-border focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0A192F]">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="border-border focus:border-[#2E7D32] focus:ring-[#2E7D32] resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#2E7D32] text-white hover:bg-[#1B5E20]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
