import { Box, Typography, alpha } from "@mui/material";
import {  useReducedMotion } from "framer-motion";
import Section from "../ui/Section";
import TechChips from "../ui/TechChips";
import { MotionBox, fadeUp } from "../ui/motion";
import { experience } from "../../data/experience";

const ease = [0.22, 1, 0.36, 1] as const;

// Replays every time the element enters / leaves the viewport
const replay = { once: false, amount: 0.25 } as const;

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="experience"
      title="Where I've worked"
      subtitle="My professional role, responsibilities and the technologies I work with."
    >
      <Box
        component="ol"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          position: "relative",
          pl: { xs: 4, md: 6 },
        }}
      >
        {/* ---------- Animated timeline rail ---------- */}
        <MotionBox
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={replay}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            left: { xs: 7, md: 11 },
            top: 8,
            bottom: 8,
            width: 2,
            borderRadius: 2,
            bgcolor: "divider",
            transformOrigin: "top",
            // subtle gradient toward primary at the base
            background: (t) =>
              `linear-gradient(to bottom, ${alpha(
                t.palette.primary.main,
                0.35
              )}, ${t.palette.divider})`,
          }}
        />

        {experience.map((e, i) => (
          <li
            key={e.company}
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            <MotionBox
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={replay}
              sx={{
                position: "relative",
                pb: 6,
                "&:last-child": { pb: 0 },
              }}
            >
              {/* ---------- Timeline dot (with pulse ring) ---------- */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  left: { xs: -32, md: -48 },
                  top: 6,
                  width: 16,
                  height: 16,
                }}
              >
                <MotionBox
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={replay}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                    delay: i * 0.08,
                  }}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    boxShadow: (t) =>
                      `0 0 0 5px ${t.palette.background.default}`,
                    zIndex: 1,
                  }}
                />
                {/* Pulse ring — disabled when reduced motion is on */}
                {!reduce && (
                  <MotionBox
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{
                      opacity: [0, 0.6, 0],
                      scale: [0.6, 1.8, 2.2],
                    }}
                    viewport={replay}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: "easeOut",
                      delay: i * 0.15,
                    }}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: (t) =>
                        `2px solid ${alpha(t.palette.primary.main, 0.6)}`,
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>

              {/* ---------- Entry card ---------- */}
              <MotionBox
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={replay}
                transition={{
                  duration: 0.55,
                  ease,
                  delay: i * 0.08 + 0.05,
                }}
                whileHover={reduce ? undefined : { y: -3 }}
                sx={{
                  position: "relative",
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  transition:
                    "border-color .3s ease, box-shadow .3s ease, background-color .3s ease",
                  "&:hover": {
                    borderColor: (t) => alpha(t.palette.primary.main, 0.5),
                    bgcolor: (t) => alpha(t.palette.primary.main, 0.04),
                    boxShadow: (t) =>
                      `0 18px 40px -24px ${alpha(
                        t.palette.primary.main,
                        0.55
                      )}`,
                  },
                }}
              >
                {/* period · location */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {e.period}
                  {e.location ? ` · ${e.location}` : ""}
                </Typography>

                <Typography variant="h5" component="h3">
                  {e.role}
                </Typography>
                <Typography color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                  {e.company}
                </Typography>

                {/* ---------- Responsibilities with stagger ---------- */}
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    mb: 2.5,
                    pl: 2.5,
                    color: "text.secondary",
                    columnGap: 5,
                    columns: { xs: 1, md: 2 },
                    "& li": { mb: 0.75, breakInside: "avoid" },
                  }}
                >
                  {e.responsibilities.map((r, ri) => (
                    <li key={r} style={{ listStyle: "none" }}>
                      <MotionBox
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={replay}
                        transition={{
                          duration: 0.4,
                          ease,
                          delay: i * 0.08 + ri * 0.06,
                        }}
                      >
                        {r}
                      </MotionBox>
                    </li>
                  ))}
                </Box>

                {/* ---------- Tech chips ---------- */}
                <MotionBox
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={replay}
                  transition={{
                    duration: 0.45,
                    ease,
                    delay: i * 0.08 + 0.15,
                  }}
                >
                  <TechChips items={e.tech} />
                </MotionBox>
              </MotionBox>
            </MotionBox>
          </li>
        ))}
      </Box>
    </Section>
  );
}