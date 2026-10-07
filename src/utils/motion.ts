import { Box, Button } from '@mui/material';
import type { BoxProps, ButtonProps } from '@mui/material';
import { motion, type MotionProps, type Variants } from 'framer-motion';

/* Merge MUI props with Framer Motion props.
   The index signature is what unlocks `component`, `href`, `download`,
   `target`, `rel`, etc. on the wrapped MUI components. */
type MotionBoxProps = BoxProps<React.ElementType> &
  MotionProps & {
    component?: React.ElementType;
    [key: string]: any;
  };

type MotionButtonProps = ButtonProps<
  React.ElementType,
  { href?: string; download?: any; target?: string; rel?: string }
> &
  MotionProps & {
    component?: React.ElementType;
    download?: any;
    [key: string]: any;
  };

export const MotionBox = motion.create(Box) as React.ComponentType<MotionBoxProps>;
export const MotionButton = motion.create(Button) as React.ComponentType<MotionButtonProps>;

/* Variants */
const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const container = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const viewport = { once: true, margin: '-80px' } as const;

export const press = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
};