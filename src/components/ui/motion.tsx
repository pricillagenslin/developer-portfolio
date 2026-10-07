import { Box, Button } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
export const MotionBox = motion.create(Box);
export const MotionButton = motion.create(Button);
const ease = [0.22, 1, 0.36, 1] as const;
export const fadeUp: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
export const container = (stagger = 0.1, delay = 0): Variants => ({ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } });
export const press = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } };
