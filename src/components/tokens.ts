/**
 * Design tokens for email templates
 * Light/professional theme
 */

export const colors = {
  // Backgrounds
  background: "#ffffff",
  surface: "#f8fafc", // slate-50
  surfaceAlt: "#f1f5f9", // slate-100

  // Text
  textPrimary: "#0f172a", // slate-900
  textSecondary: "#475569", // slate-600
  textMuted: "#94a3b8", // slate-400

  // Brand
  primary: "#0f172a", // dark navy for buttons
  accent: "#10b981", // emerald-500 for highlights
  discord: "#5865F2",
  youtube: "#FF0000",
  tiktok: "#000000",
  instagram: "#E4405F",

  // Borders
  border: "#e2e8f0", // slate-200
  borderStrong: "#cbd5e1", // slate-300
  borderAccent: "#10b981", // emerald-500

  // Status
  success: "#10b981", // emerald-500
  error: "#ef4444", // red-500
  warning: "#f59e0b", // amber-500
};

export const typography = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  brandFont:
    'Raleway, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

export const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  full: "9999px",
};

// Base styles used across components
export const baseStyles = {
  main: {
    backgroundColor: colors.background,
    fontFamily: typography.fontFamily,
  },
  container: {
    backgroundColor: colors.background,
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "600px",
  },
  box: {
    padding: "0 24px",
  },
};
