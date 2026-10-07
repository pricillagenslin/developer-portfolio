import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ContactForm } from '@/components/ContactForm'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Contact() {
  const rows = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone}` },
    { icon: MapPin, label: 'Location', value: site.location },
  ]
  return (
    <AnimatedSection id="contact" title="Let's Build Something Great Together">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <Card key={label} className="flex items-center gap-4 p-4">
              <Icon className="shrink-0 text-primary" aria-hidden />
              <div className="min-w-0"><p className="text-sm text-muted-foreground">{label}</p>
                {href ? <a href={href} className="break-words font-semibold hover:text-primary">{value}</a> : <p className="font-semibold">{value}</p>}</div>
            </Card>
          ))}
          <Button href={site.resumePath} download variant="outline" className="w-full">Download Resume</Button>
        </div>
        <Card className="p-6 md:p-8"><ContactForm /></Card>
      </div>
    </AnimatedSection>
  )
}
