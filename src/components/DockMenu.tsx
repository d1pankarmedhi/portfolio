import React from "react";
import { Dock } from "@/components/ui/dock";
import {
  Home,
  Linkedin,
  Github,
  Mail,
  BookOpen,
  Moon,
  Sun,
  LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

export function DockMenu() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Making sure theme toggle is rendered on client-side only
  const ThemeIcon = React.useMemo(() => {
    if (!mounted) return Moon;
    return theme === "dark" ? Sun : Moon;
  }, [theme, mounted]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const items = [
    {
      icon: Home,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/dipankarmedhi/", "_blank"),
    },
    {
      icon: Github,
      label: "GitHub",
      onClick: () => window.open("https://github.com/d1pankarmedhi", "_blank"),
    },
    {
      icon: Mail,
      label: "Email",
      onClick: () =>
        (window.location.href = "mailto:dipankarmedhi11@gmail.com"),
    },
    {
      icon: BookOpen,
      label: "Blog",
      onClick: () => window.open("https://dipankarmedh1.medium.com/", "_blank"),
    },
    {
      icon: ThemeIcon as LucideIcon,
      label: "Toggle Theme",
      onClick: handleThemeToggle,
    },
  ];

  return <Dock items={items} />;
}
