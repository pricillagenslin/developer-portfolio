import { education } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card } from '@/components/ui/card'

export function Education() {
  return (
    <AnimatedSection id="education" title="Education">
      {education.length === 0 ? (
        <Card className="border-dashed p-6 text-muted-foreground">Education details coming soon</Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <Card key={e.degree + e.institution} className="p-6"><h3 className="font-bold">{e.degree}</h3><p className="text-muted-foreground">{e.institution}</p><p className="mt-1 text-sm text-primary">{e.period}</p></Card>
          ))}
        </div>
      )}
    </AnimatedSection>
  )
}
