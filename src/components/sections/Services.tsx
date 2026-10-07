import type { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/DataObject';
import ResponsiveIcon from '@mui/icons-material/DevicesOutlined';
import ApiIcon from '@mui/icons-material/Hub';
import MobileIcon from '@mui/icons-material/PhoneIphone';
import Section from '../ui/Section';
import { Stagger, StaggerItem } from '../ui/Reveal';
import { services } from '../../data/services';
import type { ServiceIcon } from '../../types';
const icons: Record<ServiceIcon, ReactElement> = { web: <WebIcon />, react: <CodeIcon />, responsive: <ResponsiveIcon />, api: <ApiIcon />, mobile: <MobileIcon /> };
export default function Services() {
  return (
    <Section id="services" title="How I can help" subtitle="Focused services for teams and founders who need reliable front-end delivery.">
      <Stagger gap={0.08} sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
        {services.map((s) => (
          <StaggerItem key={s.title} whileHover={{ y: -4 }} sx={{ p: 3.5, borderRadius: 4, border: 1, borderColor: 'divider', bgcolor: 'background.paper', transition: 'border-color .25s', '&:hover': { borderColor: 'primary.main' } }}>
            <Box aria-hidden sx={{ width: 48, height: 48, borderRadius: 2.5, display: 'grid', placeItems: 'center', mb: 2.5, bgcolor: 'action.selected', color: 'primary.main' }}>{icons[s.icon]}</Box>
            <Typography variant="h6" component="h3" sx={{ mb: 1 }}>{s.title}</Typography>
            <Typography color="text.secondary">{s.description}</Typography>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
