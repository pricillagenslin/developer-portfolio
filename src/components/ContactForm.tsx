import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'

type Fields = { name: string; email: string; subject: string; message: string }
const empty: Fields = { name: '', email: '', subject: '', message: '' }

const validate = (v: Fields) => {
  const e: Partial<Fields> = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [sent, setSent] = useState(false)

  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    if (Object.keys(e).length === 0) { setSent(true); setValues(empty) } // frontend only: no backend
  }

  const field = (key: keyof Fields, label: string, type = 'text') => {
    const err = errors[key]
    const props = { id: key, name: key, value: values[key], 'aria-invalid': !!err, 'aria-describedby': err ? `${key}-err` : undefined,
      onChange: (e: { target: { value: string } }) => setValues({ ...values, [key]: e.target.value }) }
    return (
      <div>
        <label htmlFor={key} className="mb-1.5 block text-sm font-semibold">{label}</label>
        {key === 'message' ? <Textarea {...props} /> : <Input type={type} {...props} />}
        {err && <p id={`${key}-err`} role="alert" className="mt-1 text-sm text-red-500">{err}</p>}
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">{field('name', 'Name')}{field('email', 'Email', 'email')}</div>
      {field('subject', 'Subject')}
      {field('message', 'Message')}
      <Button type="submit">Send message</Button>
      <AnimatePresence>
        {sent && (
          <motion.p role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 p-3 text-sm">
            <CheckCircle2 size={18} className="text-primary" /> Thanks for reaching out. Your message passed validation (this demo form has no backend yet).
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
