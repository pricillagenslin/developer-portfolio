import { Box, Container, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
interface Props { id: string; title: string; subtitle?: string; children: ReactNode; alt?: boolean }
export default function Section({ id, title, subtitle, children, alt }: Props) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} sx={{ py: { xs: 9, md: 14 }, bgcolor: alt ? 'action.hover' : 'transparent' }}>
      <Container maxWidth="lg">
        <Reveal sx={{ mb: { xs: 5, md: 8 }, maxWidth: 640 }}>
          <Typography id={`${id}-title`} variant="h2" component="h2" sx={{ fontSize: { xs: '2.1rem', md: '3rem' } }}>{title}</Typography>
          {subtitle && <Typography color="text.secondary" sx={{ mt: 2, fontSize: '1.1rem' }}>{subtitle}</Typography>}
        </Reveal>
        {children}
      </Container>
    </Box>
  );
}
