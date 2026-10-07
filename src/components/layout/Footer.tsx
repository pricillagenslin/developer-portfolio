import { Box, Container, Stack, Typography } from '@mui/material';
import { profile } from '../../data/profile';
import SocialLinks from './SocialLinks';
export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 5 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} gap={3}>
          <Box>
            <Typography variant="h6">{profile.name}</Typography>
            <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} {profile.name}</Typography>
          </Box>
          <SocialLinks />
        </Stack>
      </Container>
    </Box>
  );
}
