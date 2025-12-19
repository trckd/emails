import * as React from "react";
import { Text, Heading as EmailHeading } from "@react-email/components";
import { colors, spacing } from "./tokens.js";

// ============================================
// Heading - Title text with variants
// ============================================
interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  style?: React.CSSProperties;
}

export const Heading = ({ children, as = "h1", style }: HeadingProps) => {
  const baseStyle = headingStyles[as];
  return (
    <EmailHeading as={as} style={{ ...baseStyle, ...style }}>
      {children}
    </EmailHeading>
  );
};

const headingStyles = {
  h1: {
    color: colors.textPrimary,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "bold" as const,
    marginBottom: spacing.md,
    marginTop: "0",
  },
  h2: {
    color: colors.textPrimary,
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600" as const,
    marginBottom: spacing.sm,
    marginTop: "0",
  },
  h3: {
    color: colors.textPrimary,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600" as const,
    marginBottom: spacing.sm,
    marginTop: "0",
  },
};

// ============================================
// Paragraph - Standard body text
// ============================================
interface ParagraphProps {
  children: React.ReactNode;
  muted?: boolean;
  style?: React.CSSProperties;
}

export const Paragraph = ({ children, muted = false, style }: ParagraphProps) => {
  return (
    <Text
      style={{
        color: muted ? colors.textSecondary : colors.textPrimary,
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "left" as const,
        margin: `0 0 ${spacing.md} 0`,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

// ============================================
// Label - Small muted text for labels
// ============================================
interface LabelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Label = ({ children, style }: LabelProps) => {
  return (
    <Text
      style={{
        color: colors.textMuted,
        fontSize: "14px",
        lineHeight: "20px",
        margin: "0",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

// ============================================
// HighlightText - Accent-colored text
// ============================================
interface HighlightTextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const HighlightText = ({ children, style }: HighlightTextProps) => {
  return (
    <Text
      style={{
        color: colors.accent,
        fontSize: "16px",
        fontWeight: "600" as const,
        lineHeight: "24px",
        margin: "0",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

// ============================================
// SmallText - Smaller body text
// ============================================
interface SmallTextProps {
  children: React.ReactNode;
  muted?: boolean;
  style?: React.CSSProperties;
}

export const SmallText = ({ children, muted = false, style }: SmallTextProps) => {
  return (
    <Text
      style={{
        color: muted ? colors.textMuted : colors.textSecondary,
        fontSize: "14px",
        lineHeight: "20px",
        margin: "0",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
