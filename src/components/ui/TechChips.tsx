import { Chip, Stack } from '@mui/material';
export default function TechChips({ items }: { items: string[] }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {items.map((t) => <Chip key={t} component="li" label={t} size="small" variant="outlined" />)}
    </Stack>
  );
}
