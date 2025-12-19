import * as React from "react";
import { Section, Text, Row, Column } from "@react-email/components";
import { colors, borderRadius, spacing } from "./tokens.js";

// ============================================
// FeatureBox - Highlighted feature/info box
// ============================================
interface FeatureBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const FeatureBox = ({ title, children }: FeatureBoxProps) => {
  return (
    <Section style={featureBoxStyle}>
      {title && <Text style={featureBoxTitleStyle}>{title}</Text>}
      {children}
    </Section>
  );
};

const featureBoxStyle = {
  backgroundColor: colors.surface,
  padding: `${spacing.md} ${spacing.lg}`,
  borderRadius: borderRadius.md,
  margin: `${spacing.lg} 0`,
  border: `1px solid ${colors.border}`,
};

const featureBoxTitleStyle = {
  color: colors.textPrimary,
  fontSize: "16px",
  fontWeight: "bold" as const,
  marginBottom: spacing.sm,
  marginTop: "0",
};

// ============================================
// TipBox - Bordered tip/callout box
// ============================================
interface TipBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const TipBox = ({ title = "Tip", children }: TipBoxProps) => {
  return (
    <Section style={tipBoxStyle}>
      <Text style={tipBoxTitleStyle}>{title}</Text>
      <Text style={tipBoxTextStyle}>{children}</Text>
    </Section>
  );
};

const tipBoxStyle = {
  backgroundColor: colors.surface,
  padding: `${spacing.md} ${spacing.lg}`,
  borderRadius: borderRadius.md,
  margin: `${spacing.lg} 0`,
  borderLeft: `4px solid ${colors.accent}`,
};

const tipBoxTitleStyle = {
  color: colors.accent,
  fontSize: "14px",
  fontWeight: "bold" as const,
  marginBottom: spacing.xs,
  marginTop: "0",
};

const tipBoxTextStyle = {
  color: colors.textSecondary,
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};

// ============================================
// MetricCard - Stat display with label/value
// ============================================
interface MetricCardProps {
  label: string;
  value: string | number;
  change?: React.ReactNode;
  size?: "normal" | "small";
}

export const MetricCard = ({
  label,
  value,
  change,
  size = "normal",
}: MetricCardProps) => {
  return (
    <Section style={metricCardStyle}>
      <Text style={metricLabelStyle}>{label}</Text>
      <table>
        <tr>
          <td style={{ verticalAlign: "middle" }}>
            <Text style={size === "small" ? metricValueSmallStyle : metricValueStyle}>
              {value}
            </Text>
          </td>
          {change && (
            <td style={{ verticalAlign: "middle", paddingLeft: spacing.sm }}>
              {change}
            </td>
          )}
        </tr>
      </table>
    </Section>
  );
};

const metricCardStyle = {
  backgroundColor: colors.surface,
  padding: `${spacing.sm} ${spacing.md} ${spacing.md} ${spacing.md}`,
  borderRadius: borderRadius.md,
  border: `1px solid ${colors.border}`,
};

const metricLabelStyle = {
  color: colors.textMuted,
  fontSize: "14px",
  marginBottom: "2px",
  marginTop: "0",
};

const metricValueStyle = {
  color: colors.textPrimary,
  fontSize: "24px",
  fontWeight: "700" as const,
  margin: "0",
};

const metricValueSmallStyle = {
  color: colors.textPrimary,
  fontSize: "20px",
  fontWeight: "700" as const,
  margin: "0",
};

// ============================================
// ChangeIndicator - Up/down/neutral indicator
// ============================================
interface ChangeIndicatorProps {
  value: number | null;
  previousValue: number | null;
  decimals?: number;
}

export const ChangeIndicator = ({
  value,
  previousValue,
  decimals = 1,
}: ChangeIndicatorProps) => {
  if (value === null || previousValue === null) return null;

  const diff = value - previousValue;
  const formatted = Math.abs(diff).toFixed(decimals);

  if (diff > 0) {
    return <Text style={changePositiveStyle}>&#9650; {formatted}</Text>;
  }
  if (diff < 0) {
    return <Text style={changeNegativeStyle}>&#9660; {formatted}</Text>;
  }
  return <Text style={changeNeutralStyle}>—</Text>;
};

const changePositiveStyle = {
  color: colors.success,
  fontSize: "14px",
  margin: "0",
};

const changeNegativeStyle = {
  color: colors.error,
  fontSize: "14px",
  margin: "0",
};

const changeNeutralStyle = {
  color: colors.textMuted,
  fontSize: "14px",
  margin: "0",
};

// ============================================
// DataRow - Key-value pair row
// ============================================
interface DataRowProps {
  label: string;
  value: string | number;
  isLast?: boolean;
}

export const DataRow = ({ label, value, isLast = false }: DataRowProps) => {
  return (
    <Row
      style={{
        padding: spacing.sm,
        borderBottom: isLast ? "none" : `1px solid ${colors.border}`,
      }}
    >
      <Column>
        <Text style={dataRowLabelStyle}>{label}</Text>
      </Column>
      <Column style={{ textAlign: "right" as const }}>
        <Text style={dataRowValueStyle}>{value}</Text>
      </Column>
    </Row>
  );
};

const dataRowLabelStyle = {
  color: colors.textSecondary,
  fontSize: "14px",
  margin: "0",
};

const dataRowValueStyle = {
  color: colors.accent,
  fontSize: "16px",
  fontWeight: "600" as const,
  margin: "0",
};

// ============================================
// FeatureList - Bulleted feature list
// ============================================
interface FeatureListItem {
  title: string;
  description?: string;
}

interface FeatureListProps {
  items: FeatureListItem[];
}

export const FeatureList = ({ items }: FeatureListProps) => {
  return (
    <ul style={featureListStyle}>
      {items.map((item, index) => (
        <li key={index} style={featureListItemStyle}>
          {item.description ? (
            <>
              <strong>{item.title}:</strong> {item.description}
            </>
          ) : (
            item.title
          )}
        </li>
      ))}
    </ul>
  );
};

const featureListStyle = {
  margin: "0",
  paddingLeft: "20px",
};

const featureListItemStyle = {
  color: colors.textSecondary,
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: spacing.sm,
};

// ============================================
// ListBox - Container for list items
// ============================================
interface ListBoxProps {
  children: React.ReactNode;
}

export const ListBox = ({ children }: ListBoxProps) => {
  return <Section style={listBoxStyle}>{children}</Section>;
};

const listBoxStyle = {
  backgroundColor: colors.surface,
  borderRadius: borderRadius.md,
  overflow: "hidden" as const,
  border: `1px solid ${colors.border}`,
};

// ============================================
// SectionHeading - Section title
// ============================================
interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <Text style={sectionHeadingStyle}>{children}</Text>;
};

const sectionHeadingStyle = {
  color: colors.textPrimary,
  fontSize: "18px",
  margin: `0 0 ${spacing.sm} 0`,
  fontWeight: "600" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

// ============================================
// HighlightBanner - Accent colored banner
// ============================================
interface HighlightBannerProps {
  children: React.ReactNode;
}

export const HighlightBanner = ({ children }: HighlightBannerProps) => {
  return <Section style={highlightBannerStyle}>{children}</Section>;
};

const highlightBannerStyle = {
  backgroundColor: colors.accent,
  padding: `${spacing.sm} ${spacing.lg}`,
  textAlign: "center" as const,
  borderRadius: borderRadius.md,
  margin: `${spacing.lg} 0`,
};

// ============================================
// Avatar - Circular profile image
// ============================================
interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar = ({ src, alt, size = 64 }: AvatarProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: "50%",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
};
