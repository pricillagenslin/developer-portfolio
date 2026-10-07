import { Box, Button, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenIcon from "@mui/icons-material/OpenInNew";
import CheckIcon from "@mui/icons-material/Check";
import type { Project } from "../../types";
import TechChips from "../ui/TechChips";
import { StaggerItem } from "../ui/Reveal";

const MAX_FEATURES = 3;
const MAX_TECH = 4;

export default function ProjectCard({ project: p }: { project: Project }) {
  const isProfessional = p.kind === "professional";
  const features = p.features.slice(0, MAX_FEATURES);
  const extraFeatures = p.features.length - features.length;
  const tech = p.tech.slice(0, MAX_TECH);
  const extraTech = p.tech.length - tech.length;

  return (
    <StaggerItem
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 380,
        mx: "auto",
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        overflow: "hidden",
        height: "100%",
        transition: "border-color .2s ease, box-shadow .25s ease",
        "&:hover": {
          borderColor: isProfessional ? "primary.main" : "text.primary",
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 14px 32px -18px rgba(0,0,0,0.85)"
              : "0 14px 32px -20px rgba(15,23,42,0.3)",
        },
        "&:hover .ProjectCard-media": { transform: "scale(1.04)" },
      }}
    >
      {/* ── Hero (compact) ───────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})`,
        }}
      >
        {p.image ? (
          <Box
            className="ProjectCard-media"
            component="img"
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform .45s ease",
            }}
          />
        ) : (
          <Box
            role="img"
            aria-label={`${p.title} preview`}
            className="ProjectCard-media"
            sx={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              transition: "transform .45s ease",
            }}
          >
            <Typography
              variant="h3"
              component="span"
              sx={{
                color: "#fff",
                opacity: 0.95,
                fontWeight: 800,
                letterSpacing: -0.5,
                fontSize: { xs: "2rem", md: "2.6rem" },
                textShadow: "0 2px 16px rgba(0,0,0,.25)",
              }}
            >
              {p.title}
            </Typography>
          </Box>
        )}

        <Chip
          size="small"
          color={isProfessional ? "primary" : "default"}
          label={isProfessional ? "Professional" : "Personal"}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            height: 22,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.3,
            backdropFilter: "blur(6px)",
            ...(isProfessional
              ? {}
              : {
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "text.primary",
                  "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }),
          }}
        />
      </Box>

      {/* ── Body (compact) ───────────────────────────────────── */}
      <Stack spacing={1.5} sx={{ p: 2, flex: 1 }}>
        <Box>
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{ fontWeight: 700, lineHeight: 1.25, letterSpacing: -0.2 }}
          >
            {p.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 0.25,
              color: "text.secondary",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              letterSpacing: 0.2,
            }}
          >
            {p.tagline}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.5,
          }}
        >
          {p.description}
        </Typography>

        {p.contribution && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              fontStyle: "italic",
              borderLeft: 2,
              borderColor: isProfessional ? "primary.main" : "divider",
              pl: 1,
            }}
          >
            {p.contribution}
          </Typography>
        )}

        {features.length > 0 && (
          <Box
            component="ul"
            sx={{
              m: 0,
              p: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 0.4,
            }}
          >
            {features.map((f) => (
              <Box
                component="li"
                key={f}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 0.75,
                  color: "text.secondary",
                  fontSize: 13.5,
                  lineHeight: 1.45,
                }}
              >
                <CheckIcon
                  sx={{
                    fontSize: 14,
                    mt: "2px",
                    color: isProfessional ? "primary.main" : "text.secondary",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f}
                </span>
              </Box>
            ))}
            {extraFeatures > 0 && (
              <Typography
                component="li"
                variant="caption"
                sx={{ color: "text.secondary", pl: "22px", listStyle: "none" }}
              >
                +{extraFeatures} more
              </Typography>
            )}
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
          <TechChips items={tech} />
          {extraTech > 0 && (
            <Typography variant="caption" sx={{ color: "text.secondary", ml: 0.5 }}>
              +{extraTech}
            </Typography>
          )}
        </Box>

        {(p.demo || p.github) && (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              pt: 1.25,
              mt: "auto",
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            {p.demo && (
              <Button
                variant="contained"
                size="small"
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenIcon sx={{ fontSize: 16 }} />}
                aria-label={`${p.title} live demo`}
                sx={{
                  flex: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 13,
                  py: 0.5,
                }}
              >
                Live demo
              </Button>
            )}
            {p.github && (
              <Tooltip title="View source on GitHub">
                <IconButton
                  size="small"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} source on GitHub`}
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 2,
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "text.primary",
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        )}
      </Stack>
    </StaggerItem>
  );
}