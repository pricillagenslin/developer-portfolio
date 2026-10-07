import { Box, Stack, Typography, alpha } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../ui/Section";
import { skillGroups } from "../../data/skills";

// Icons — adjust the mapping to match your preferred icon per skill
import HtmlRoundedIcon from "@mui/icons-material/HtmlRounded";
import CssRoundedIcon from "@mui/icons-material/CssRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import JavascriptRoundedIcon from "@mui/icons-material/JavascriptRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeOffRoundedIcon from "@mui/icons-material/CodeOffRounded";
import StorageRoundedIcon2 from "@mui/icons-material/StorageRounded";

const ease = [0.22, 1, 0.36, 1] as const;
const replayViewport = { once: false, amount: 0.2 };

// Single accent color used for every category & card
const ACCENT = "#7C5CFF";

// Skill → icon map. Unmapped skills fall back to a generic code icon.
const skillIcons: Record<string, typeof CodeRoundedIcon> = {
  HTML: HtmlRoundedIcon,
  CSS: CssRoundedIcon,
  SCSS: CodeRoundedIcon,
  JavaScript: JavascriptRoundedIcon,
  TypeScript: DataObjectRoundedIcon,
  "React.js": WidgetsRoundedIcon,
  "React Native": PhoneIphoneRoundedIcon,
  TSX: TerminalRoundedIcon,

  "Material UI (MUI)": BrushRoundedIcon,
  "Responsive Design": DevicesRoundedIcon,
  "Component-based UI Development": ViewQuiltRoundedIcon,

  Redux: MemoryRoundedIcon,
  "Redux Toolkit": MemoryRoundedIcon,
  Zustand: BoltRoundedIcon,
  "TanStack Query": SyncAltRoundedIcon,

  "REST APIs": ApiRoundedIcon,
  Axios: SendRoundedIcon,
  "CRUD Operations": StorageRoundedIcon,
  Authentication: LockRoundedIcon,
  "API Integration": CloudRoundedIcon,
  Postman: SendRoundedIcon,

  Git: CommitRoundedIcon,
  GitHub: GitHubIcon,
  "VS Code": CodeOffRoundedIcon,

  "SQL Basics": StorageRoundedIcon2,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      subtitle="The languages, libraries and tools I use in day-to-day frontend and mobile work."
      alt
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: 880, lg: 960 },
          mx: "auto",
        }}
      >
        <Stack spacing={{ xs: 6, md: 7 }}>
          {skillGroups.map((g, gi) => {
            const hue = ACCENT;
            return (
              <Box key={g.category}>
                {/* ---------- Category header ---------- */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: { xs: 2.5, md: 3 } }}
                >
                  <Box
                    component={motion.span}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={replayViewport}
                    transition={{ duration: 0.5, delay: gi * 0.05, ease }}
                    sx={{
                      display: "block",
                      width: { xs: 24, md: 40 },
                      height: 3,
                      borderRadius: 2,
                      bgcolor: hue,
                      transformOrigin: "left center",
                      boxShadow: `0 0 12px ${alpha(hue, 0.6)}`,
                    }}
                  />
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.15rem", md: "1.4rem" },
                      fontWeight: 700,
                      letterSpacing: -0.3,
                    }}
                  >
                    {g.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontFamily: "ui-monospace, Menlo, monospace",
                      letterSpacing: 1.5,
                      fontWeight: 600,
                      color: alpha(hue, 0.9),
                    }}
                  >
                    {String(g.skills.length).padStart(2, "0")}
                  </Typography>
                </Stack>

                {/* ---------- Skill cards grid ---------- */}
                <Box
                  sx={{
                    display: "grid",
                    gap: { xs: 1.25, md: 1.5 },
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      sm: "repeat(3, 1fr)",
                      md: "repeat(4, 1fr)",
                    },
                  }}
                >
                  {g.skills.map((s, i) => {
                    const Icon = skillIcons[s] ?? CodeRoundedIcon;
                    return (
                      <SkillCard
                        key={s}
                        label={s}
                        Icon={Icon}
                        hue={hue}
                        index={i}
                        groupIndex={gi}
                      />
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

function SkillCard({
  label,
  Icon,
  hue,
  index,
  groupIndex,
}: {
  label: string;
  Icon: typeof CodeRoundedIcon;
  hue: string;
  index: number;
  groupIndex: number;
}) {
  const reduce = useReducedMotion();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={replayViewport}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.05 + index * 0.035,
        ease,
      }}
      whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        px: 1.5,
        py: { xs: 2, md: 2.25 },
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        cursor: "default",
        overflow: "hidden",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          borderColor: alpha(hue, 0.55),
          bgcolor: alpha(hue, 0.06),
          boxShadow: `0 16px 32px -20px ${alpha(hue, 0.55)}`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${alpha(
            hue,
            0.18
          )}, transparent 70%)`,
          opacity: 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        },
        "&:hover::after": { opacity: 1 },
      }}
    >
      {/* Icon badge */}
      <Box
        component={motion.div}
        whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: 2,
          color: hue,
          bgcolor: alpha(hue, 0.12),
          border: 1,
          borderColor: alpha(hue, 0.3),
        }}
      >
        <Icon sx={{ fontSize: 20 }} />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: 12, md: 12.5 },
          fontWeight: 600,
          textAlign: "center",
          lineHeight: 1.3,
          color: "text.primary",
          letterSpacing: -0.1,
          maxWidth: "100%",
          wordBreak: "break-word",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}