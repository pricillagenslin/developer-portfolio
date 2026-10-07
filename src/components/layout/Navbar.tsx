import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import { navItems, profile } from "../../data/profile";
import { toggleMode } from "../../store/themeSlice";
import { useAppDispatch, useAppSelector } from "../../store";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hanging Nav Wrapper */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (t) => t.zIndex.appBar,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          px: { xs: 1.5, sm: 2 },
          pt: { xs: 1, sm: 1.5 },
        }}
      >
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 1120,
            borderRadius: 999,
            border: 1,
            borderColor: scrolled ? "divider" : "transparent",
            backdropFilter: scrolled ? "blur(14px)" : "none",
            bgcolor: scrolled
              ? (t) => `${t.palette.background.default}CC`
              : "transparent",
            boxShadow: scrolled ? 3 : 0,
            transition: "all .3s ease",
            mt: scrolled ? 0 : { xs: 0.5, sm: 1 },
            "&:hover": {
              boxShadow: scrolled ? 6 : 2,
            },
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                height: { xs: 56, sm: 64 },
                justifyContent: "space-between",
                px: { xs: 1, sm: 1.5 },
              }}
            >
              <Typography
                component="a"
                href="#top"
                onClick={go("top")}
                variant="h6"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  ml: { xs: 1, sm: 1.5 },
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {/* Styled "GP" span badge */}
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 34,
                    height: 34,
                    borderRadius: "10px",
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    color: "#fff",
                    background: (t) =>
                      `linear-gradient(135deg, ${t.palette.primary.main} 0%, ${t.palette.primary.dark} 100%)`,
                    boxShadow: (t) =>
                      `0 2px 8px ${t.palette.primary.main}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
                    transition: "transform .25s ease, box-shadow .25s ease",
                    userSelect: "none",
                    "&:hover": {
                      transform: "rotate(-6deg) scale(1.06)",
                      boxShadow: (t) =>
                        `0 4px 14px ${t.palette.primary.main}88, inset 0 1px 0 rgba(255,255,255,0.3)`,
                    },
                  }}
                >
                  GP
                </Box>

                {profile.brand}
                <Box component="span" sx={{ color: "primary.main" }}>
                  .dev
                </Box>
              </Typography>

              <Box
                component="nav"
                aria-label="Primary"
                sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}
              >
                {navItems.map((n) => {
                  const isActive = active === n.id;
                  return (
                    <Box
                      key={n.id}
                      component="a"
                      href={`#${n.id}`}
                      onClick={go(n.id)}
                      aria-current={isActive ? "true" : undefined}
                      sx={{
                        position: "relative",
                        px: 1.75,
                        py: 0.75,
                        borderRadius: 999,
                        fontSize: 15,
                        fontWeight: 500,
                        textDecoration: "none",
                        color: isActive ? "text.primary" : "text.secondary",
                        transition: "all .2s",
                        "&:hover": {
                          color: "text.primary",
                          bgcolor: "action.hover",
                        },
                        // The dot below the active item
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -2,
                          left: "50%",
                          transform: isActive
                            ? "translateX(-50%) scale(1)"
                            : "translateX(-50%) scale(0)",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          transition: "transform .25s ease, opacity .25s ease",
                          opacity: isActive ? 1 : 0,
                        },
                      }}
                    >
                      {n.label}
                    </Box>
                  );
                })}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mr: { xs: 0.5, sm: 1 },
                }}
              >
                <IconButton
                  onClick={() => dispatch(toggleMode())}
                  aria-label={`Switch to ${
                    mode === "dark" ? "light" : "dark"
                  } theme`}
                  size="small"
                >
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  sx={{ display: { md: "none" } }}
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  size="small"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {/* Spacer so content doesn't hide behind fixed nav */}
      <Box sx={{ height: { xs: 64, sm: 72 } }} />

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, p: 2 } }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          sx={{ alignSelf: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
        <List component="nav" aria-label="Mobile">
          {navItems.map((n) => {
            const isActive = active === n.id;
            return (
              <ListItemButton
                key={n.id}
                component="a"
                href={`#${n.id}`}
                onClick={go(n.id)}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 6,
                    top: "50%",
                    transform: isActive
                      ? "translateY(-50%) scale(1)"
                      : "translateY(-50%) scale(0)",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    transition: "transform .25s ease, opacity .25s ease",
                    opacity: isActive ? 1 : 0,
                  },
                }}
              >
                <ListItemText
                  primary={n.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}