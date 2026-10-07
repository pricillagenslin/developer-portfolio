import type { ComponentProps } from 'react';
import { MotionBox, container, fadeUp } from './motion';
type P = ComponentProps<typeof MotionBox>;
const viewport = { once: true, amount: 0.2 } as const;
export const Reveal = (p: P) => <MotionBox variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} {...p} />;
export const Stagger = ({ gap = 0.1, ...p }: P & { gap?: number }) => <MotionBox variants={container(gap)} initial="hidden" whileInView="show" viewport={viewport} {...p} />;
export const StaggerItem = (p: P) => <MotionBox variants={fadeUp} {...p} />;
