import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import Section from '../ui/Section';
import { Stagger, StaggerItem } from '../ui/Reveal';
import { education } from '../../data/education';
const isPlaceholder = (v: string) => v.startsWith('[');
const Field = ({ label, value }: { label: string; value: string }) => (
  <Box>
    <Typography variant="body2" color="text.secondary">{label}</Typography>
    <Typography sx={{ fontWeight: 600, fontStyle: isPlaceholder(value) ? 'italic' : 'normal', color: isPlaceholder(value) ? 'text.secondary' : 'text.primary' }}>{value}</Typography>
  </Box>
);
export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background.">
      <Stagger gap={0.12} sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: education.length > 1 ? 'repeat(2, 1fr)' : '1fr' }, maxWidth: education.length > 1 ? 'none' : 720 }}>
        {education.map((e) => (
          <StaggerItem key={`${e.degree}-${e.year}`} whileHover={{ y: -4 }} sx={{ display: 'flex', gap: 2.5, p: { xs: 3, md: 3.5 }, borderRadius: 4, border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
            <Box aria-hidden sx={{ flexShrink: 0, width: 48, height: 48, borderRadius: 2.5, display: 'grid', placeItems: 'center', bgcolor: 'action.selected', color: 'primary.main' }}><SchoolIcon /></Box>
            <Box sx={{ display: 'grid', gap: 1.5, minWidth: 0 }}>
              <Field label="Degree" value={e.degree} />
              <Field label="Specialization" value={e.specialization} />
              <Field label="College / University" value={e.institution} />
              <Field label="Year" value={e.year} />
            </Box>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
