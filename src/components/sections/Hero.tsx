import { useEffect, useRef, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import MailIcon from "@mui/icons-material/MailOutline";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { profile } from "../../data/profile";
import {
  MotionBox,
  MotionButton,
  container,
  fadeUp,
  press,
} from "../ui/motion";
import SocialLinks from "../layout/SocialLinks";

const word = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function RotatingRole() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setI((p) => (p + 1) % profile.roles.length),
      2800,
    );
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <Box
      sx={{
        height: { xs: 34, md: 40 },
        overflow: "hidden",
        position: "relative",
      }}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute", whiteSpace: "nowrap" }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "1.15rem", md: "1.5rem" },
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            {profile.roles[i]}
          </Typography>
        </motion.span>
      </AnimatePresence>
    </Box>
  );
}

/* Stacked "UI window" that assembles itself: the hero's single orchestrated visual. */
function HeroVisual() {
  const reduce = useReducedMotion();
  const rows = [78, 52, 90, 64];
  return (
    <MotionBox
      aria-hidden
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      sx={{
        position: "relative",
        height: { xs: 300, md: 420 },
        width: "100%",
        maxWidth: 460,
        mx: "auto",
      }}
    >
      <MotionBox
        animate={reduce ? {} : { rotate: [0, 8, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          inset: "8% 4%",
          borderRadius: "50%",
          filter: "blur(60px)",
          opacity: 0.55,
          background: (t) =>
            `conic-gradient(${t.palette.primary.main}, ${t.palette.secondary.main}, ${t.palette.primary.main})`,
        }}
      />
      <MotionBox
        animate={reduce ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          inset: "6% 0 14% 6%",
          borderRadius: 4,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow: (t) => `0 30px 80px -30px ${t.palette.primary.main}66`,
          p: 3,
        }}
      >
        <Stack direction="row" spacing={0.75} sx={{ mb: 3 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <Box
              key={c}
              sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }}
            />
          ))}
        </Stack>
        <Typography
          sx={{
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 13,
            color: "text.secondary",
            mb: 2,
          }}
        >
          {'<Portfolio mode="production" />'}
        </Typography>
        {rows.map((w, k) => (
          <MotionBox
            key={k}
            initial={{ width: 0 }}
            animate={{ width: `${w}%` }}
            transition={{ delay: 0.9 + k * 0.15, duration: 0.8 }}
            sx={{
              height: 12,
              borderRadius: 6,
              mb: 1.75,
              bgcolor: k === 2 ? "primary.main" : "action.selected",
            }}
          />
        ))}
        <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
          {[0, 1, 2].map((k) => (
            <Box
              key={k}
              sx={{
                flex: 1,
                height: 70,
                borderRadius: 2,
                bgcolor: "action.hover",
                border: 1,
                borderColor: "divider",
              }}
            />
          ))}
        </Stack>
      </MotionBox>
      <MotionBox
        animate={reduce ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          px: 2.5,
          py: 1.5,
          borderRadius: 3,
          bgcolor: "secondary.main",
          color: "#07201C",
          fontWeight: 700,
          boxShadow: 6,
        }}
      >
        TypeScript ✓ 0 errors
      </MotionBox>
    </MotionBox>
  );
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="top"
      aria-label="Introduction"
      sx={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 14, md: 10 },
        pb: 8,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={{ xs: 8, md: 6 }}
        >
          <MotionBox
            key={isInView ? "visible" : "hidden"}
            variants={container(0.12, 0.1)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            sx={{ flex: 1.2 }}
          >
            <MotionBox variants={fadeUp}>
              <Typography
                color="text.secondary"
                sx={{ mb: 1.5, fontWeight: 500 }}
              >
                Hi, I&apos;m {profile.shortName}. {profile.title}.
              </Typography>
            </MotionBox>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontSize: { xs: "3.2rem", sm: "3.5rem", md: "3.6rem" },
                mb: 3,
              }}
            >
              {[first, ...rest].map((w, i) => (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "top",
                    mr: "0.25em",
                    pb: "0.08em",
                  }}
                >
                  <motion.span
                    variants={word}
                    style={{ display: "inline-block" }}
                  >
                    {w}
                  </motion.span>
                </Box>
              ))}
            </Typography>
            <MotionBox variants={fadeUp} sx={{ mb: 3 }}>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  color: "text.secondary",
                  fontSize: { xs: "1.15rem", md: "1.5rem" },
                }}
              >
                I craft <RotatingRole />
              </Typography>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Typography
                color="text.secondary"
                sx={{ maxWidth: 540, fontSize: "1.15rem", mb: 4.5 }}
              >
                {profile.intro}
              </Typography>
            </MotionBox>
            <MotionBox variants={fadeUp}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mb: 4 }}
              >
                <MotionButton
                  {...press}
                  variant="contained"
                  size="large"
                  href="#contact"
                  startIcon={<MailIcon />}
                >
                  Contact me
                </MotionButton>
                <MotionButton
                  {...press}
                  variant="outlined"
                  size="large"
                  href={profile.resumeUrl}
                  startIcon={<DownloadIcon />}
                >
                  Download résumé
                </MotionButton>
              </Stack>
              <SocialLinks />
            </MotionBox>
          </MotionBox>
          <Box sx={{ flex: 1, width: "100%" }}>
            <HeroVisual key={isInView ? "visible-visual" : "hidden-visual"} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
