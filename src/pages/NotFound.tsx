import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <Box sx={{ minHeight: '80vh', display: 'grid', placeItems: 'center', textAlign: 'center', px: 3 }}>
      <Box>
        <Typography variant="h1" sx={{ fontSize: { xs: '5rem', md: '8rem' } }}>404</Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>This page doesn&apos;t exist or has moved.</Typography>
        <Button component={Link} to="/" variant="contained">Back to home</Button>
      </Box>
    </Box>
  );
}
