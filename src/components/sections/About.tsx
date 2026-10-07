import { Box, Stack, Typography, alpha } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../ui/Section";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import Counter from "../ui/Counter";
import { profile } from "../../data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

// Reusable viewport config — replays every time it scrolls into view
const replayViewport = { once: false, amount: 0.3 };

export default function About() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="about"
      title="About me"
      subtitle="A short introduction to my background and experience."
    >
      <Stack direction={{ xs: "column", md: "row" }} gap={{ xs: 6, md: 10 }}>
        {/* ---------- Bio paragraphs ---------- */}
        <Reveal sx={{ flex: 1.1 }}>
          <Box
            sx={{
              position: "relative",
              pl: { xs: 0, md: 3 },
              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 8,
                bottom: 8,
                width: 3,
                borderRadius: 2,
                background: (t) =>
                  `linear-gradient(180deg, ${t.palette.primary.main}, ${alpha(
                    t.palette.primary.main,
                    0
                  )})`,
                display: { xs: "none", md: "block" },
              },
            }}
          >
            {profile.about.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={replayViewport}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 2.5,
                    fontSize: "1.1rem",
                    lineHeight: 1.75,
                    maxWidth: "62ch",
                    "&:last-of-type": { mb: 0 },
                  }}
                >
                  {p}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </Reveal>

        {/* ---------- Stats grid ---------- */}
        <Stagger
          gap={0.1}
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            alignContent: "start",
          }}
        >
          {profile.stats.map((s, i) => (
            <StaggerItem key={s.label}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={replayViewport}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                sx={{
                  position: "relative",
                  p: 3,
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: (t) =>
                      `0 12px 32px -12px ${alpha(
                        t.palette.primary.main,
                        0.35
                      )}`,
                  },
                  // Decorative corner glow
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: (t) =>
                      `radial-gradient(circle, ${alpha(
                        t.palette.primary.main,
                        0.18
                      )}, transparent 70%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  },
                  "&:hover::after": { opacity: 1 },
                }}
              >
                {/* Index badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 14,
                    fontSize: 11,
                    fontFamily: "ui-monospace, Menlo, monospace",
                    color: "text.disabled",
                    letterSpacing: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Box>

                <Typography
                  variant="h3"
                  component="p"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "2.8rem" },
                    fontWeight: 700,
                    background: (t) =>
                      `linear-gradient(135deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.1,
                    mb: 0.5,
                  }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </Typography>
                <Box
                  component="span"
                  sx={{
                    color: "text.secondary",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: 0.3,
                  }}
                >
                  {s.label}
                </Box>
              </Box>
            </StaggerItem>
          ))}
        </Stagger>
      </Stack>
    </Section>
  );
}