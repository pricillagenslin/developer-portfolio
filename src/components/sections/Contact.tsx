import { useState } from 'react';
import { Alert, Box, Stack, TextField, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import PinIcon from '@mui/icons-material/PlaceOutlined';
import SendIcon from '@mui/icons-material/Send';
import Section from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { MotionButton, press } from '../ui/motion';
import SocialLinks from '../layout/SocialLinks';
import { profile } from '../../data/profile';

type Form = { name: string; email: string; message: string };
const empty: Form = { name: '', email: '', message: '' };
const validate = (f: Form): Partial<Form> => ({
  ...(f.name.trim() ? {} : { name: 'Enter your name' }),
  ...(/^\S+@\S+\.\S+$/.test(f.email) ? {} : { email: 'Enter a valid email address' }),
  ...(f.message.trim().length >= 10 ? {} : { message: 'Write at least 10 characters' }),
});

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement>) => { setForm({ ...form, [k]: e.target.value }); setSent(false); };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form); setErrors(errs);
    if (Object.keys(errs).length) return;
    // No backend yet: replace with an API call or form service.
    setSent(true); setForm(empty);
  };
  const info = [{ icon: <MailIcon />, label: profile.email, href: `mailto:${profile.email}` }, { icon: <PhoneIcon />, label: profile.phone, href: `tel:${profile.phone}` }, { icon: <PinIcon />, label: profile.location }];
  return (
    <Section id="contact" title="Get in touch" subtitle="Have a project or role in mind? Send a message or reach out directly." alt>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 6, md: 10 }}>
        <Reveal sx={{ flex: 1 }}>
          <Stack spacing={2.5} sx={{ mb: 4 }}>
            {info.map((i) => (
              <Stack key={i.label} direction="row" spacing={2} alignItems="center">
                <Box aria-hidden sx={{ width: 44, height: 44, borderRadius: 2.5, display: 'grid', placeItems: 'center', bgcolor: 'action.selected', color: 'primary.main' }}>{i.icon}</Box>
                {i.href ? <Typography component="a" href={i.href} sx={{ color: 'text.primary', fontWeight: 500 }}>{i.label}</Typography> : <Typography sx={{ fontWeight: 500 }}>{i.label}</Typography>}
              </Stack>
            ))}
          </Stack>
          <SocialLinks />
        </Reveal>
        <Reveal component="form" noValidate onSubmit={submit} aria-label="Contact form" sx={{ flex: 1.2, display: 'grid', gap: 2.5, p: { xs: 3, md: 4 }, borderRadius: 4, border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <TextField label="Name" value={form.name} onChange={set('name')} error={!!errors.name} helperText={errors.name} autoComplete="name" required />
          <TextField label="Email" type="email" value={form.email} onChange={set('email')} error={!!errors.email} helperText={errors.email} autoComplete="email" required />
          <TextField label="Message" value={form.message} onChange={set('message')} error={!!errors.message} helperText={errors.message} multiline minRows={5} required />
          {sent && <Alert severity="success" role="status">Message sent. Thanks for reaching out.</Alert>}
          <MotionButton {...press} type="submit" variant="contained" size="large" endIcon={<SendIcon />} sx={{ justifySelf: 'start' }}>Send message</MotionButton>
        </Reveal>
      </Stack>
    </Section>
  );
}
