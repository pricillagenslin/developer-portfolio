import { navItems, site } from '@/data/portfolio'

const social = (label: string, url: string) =>
  url ? <a href={url} className="hover:text-primary" target="_blank" rel="noreferrer">{label}</a> : <span title="Add your link in src/data/portfolio.ts">{label} (link coming soon)</span>

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div><p className="font-extrabold">{site.name}</p><p className="text-sm text-muted-foreground">{site.title}</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((n) => <a key={n.id} href={`#${n.id}`} className="hover:text-primary">{n.label}</a>)}
        </nav>
        <div className="space-y-1 text-sm text-muted-foreground">
          <a href={`mailto:${site.email}`} className="block break-words hover:text-primary">{site.email}</a>
          <a href={`tel:${site.phone}`} className="block hover:text-primary">{site.phone}</a>
          <p className="flex gap-4 pt-1">{social('GitHub', site.github)}{social('LinkedIn', site.linkedin)}</p>
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  )
}
