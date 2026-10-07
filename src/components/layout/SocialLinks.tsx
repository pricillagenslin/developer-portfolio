import { IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
const icons = { github: <GitHubIcon />, linkedin: <LinkedInIcon />, x: <XIcon /> };
export default function SocialLinks() {
  return (
    <Stack direction="row" spacing={1}>
      {profile.socials.map((s) => (
        <IconButton key={s.label} component={motion.a} whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
          sx={{ border: 1, borderColor: 'divider' }}>{icons[s.icon]}</IconButton>
      ))}
    </Stack>
  );
}
