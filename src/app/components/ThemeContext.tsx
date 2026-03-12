import { createContext, useContext, useState, type ReactNode } from "react";

export type CardVariant = "default" | "notion" | "classic";

interface ThemeColors {
  text: string;
  textMuted: string;
  textDimmed: string;
  textSecondary: string;
  card: string;
  cardHover: string;
  bg: string;
  accent: string;
  accentBg: string;
}

interface ThemeConfig {
  accent: string;
}

interface ThemeContextValue {
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
  cardVariant: CardVariant;
  setCardVariant: (v: CardVariant) => void;
  appTheme: string;
  themeConfig: ThemeConfig;
}

const darkColors: ThemeColors = {
  text: "text-[#f0e6d0]",
  textMuted: "text-[#8a7d6b]",
  textDimmed: "text-[#6b5f4e]",
  textSecondary: "text-[#d0c4b0]",
  card: "bg-[#2d2418]/70",
  cardHover: "hover:bg-[#3a2e20]/80 transition-colors",
  bg: "bg-[#1a1208]",
  accent: "text-[#7ec8a9]",
  accentBg: "bg-[#7ec8a9]",
};

const lightColors: ThemeColors = {
  text: "text-[#2a1e10]",
  textMuted: "text-[#8a7a5a]",
  textDimmed: "text-[#9a8a6a]",
  textSecondary: "text-[#4a3a20]",
  card: "bg-[#fdf8f0]/80",
  cardHover: "hover:bg-[#f5edd8]/90 transition-colors",
  bg: "bg-[#faf7f2]",
  accent: "text-[#5aab8b]",
  accentBg: "bg-[#5aab8b]",
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [cardVariant, setCardVariant] = useState<CardVariant>("default");

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        colors: isDark ? darkColors : lightColors,
        isDark,
        toggleTheme,
        cardVariant,
        setCardVariant,
        appTheme: "default",
        themeConfig: { accent: isDark ? "#7ec8a9" : "#5aab8b" },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}