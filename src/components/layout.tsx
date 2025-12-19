import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { colors, typography, spacing } from "./tokens.js";
import { AppStoreButtons } from "./interactive.js";

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";
const defaultWebsiteUrl = "https://tracked.gg";

// ============================================
// EmailLayout - Main wrapper component
// ============================================
interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Section style={boxStyle}>{children}</Section>
        </Container>
      </Body>
    </Html>
  );
};

const mainStyle = {
  backgroundColor: colors.background,
  fontFamily: typography.fontFamily,
};

const containerStyle = {
  backgroundColor: colors.background,
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const boxStyle = {
  padding: "0 24px",
};

// ============================================
// EmailHeader - Logo and brand name
// ============================================
interface EmailHeaderProps {
  showDivider?: boolean;
}

export const EmailHeader = ({ showDivider = true }: EmailHeaderProps) => {
  return (
    <>
      <table cellPadding="0" cellSpacing="0" style={{ marginBottom: spacing.sm }}>
        <tr>
          <td style={{ verticalAlign: "middle" }}>
            <Img src={baseUrl} width="28" height="28" alt="Tracked" />
          </td>
          <td style={{ verticalAlign: "middle", paddingLeft: "6px" }}>
            <Text style={logoStyle}>TRACKED</Text>
          </td>
        </tr>
      </table>
      {showDivider && <Hr style={headerDividerStyle} />}
    </>
  );
};

const logoStyle = {
  fontSize: "28px",
  fontWeight: "900" as const,
  fontFamily: typography.brandFont,
  color: colors.textPrimary,
  margin: "0",
  lineHeight: "32px",
  letterSpacing: "-0.5px",
};

const headerDividerStyle = {
  borderColor: colors.border,
  margin: `${spacing.lg} 0`,
  borderWidth: "1px",
};

// ============================================
// EmailFooter - Copyright and links
// ============================================
interface EmailFooterProps {
  websiteUrl?: string;
  marketing?: boolean;
  unsubscribeUrl?: string;
}

export const EmailFooter = ({
  websiteUrl = defaultWebsiteUrl,
  marketing = false,
  unsubscribeUrl,
}: EmailFooterProps) => {
  return (
    <>
      <Hr style={footerDividerStyle} />
      <AppStoreButtons />
      <Text style={footerTextStyle}>
        Copyright © {new Date().getFullYear()} Tracked Training Platform Inc.{" "}
        <br />
        9101 Horne Street, Vancouver, BC
      </Text>
      <Section style={{ textAlign: "center" as const }}>
        <Link href={`${websiteUrl}/terms`} style={footerLinkStyle}>
          Terms
        </Link>
        <Text style={footerDividerTextStyle}> | </Text>
        <Link href={`${websiteUrl}/privacy`} style={footerLinkStyle}>
          Privacy
        </Link>
        <Text style={footerDividerTextStyle}> | </Text>
        <Link href={`${websiteUrl}/support`} style={footerLinkStyle}>
          Support
        </Link>
        {marketing && unsubscribeUrl && (
          <>
            <Text style={footerDividerTextStyle}> | </Text>
            <Link href={unsubscribeUrl} style={footerLinkStyle}>
              Unsubscribe
            </Link>
          </>
        )}
      </Section>
      <Text style={footerDisclaimerStyle}>
        {marketing
          ? "You're receiving this email because you opted in to marketing communications from Tracked."
          : "This is a service notification by the Tracked Training Platform."}
      </Text>
    </>
  );
};

const footerDividerStyle = {
  borderColor: colors.border,
  margin: `${spacing.lg} 0`,
  borderWidth: "1px",
};

const footerTextStyle = {
  color: colors.textMuted,
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

const footerLinkStyle = {
  color: colors.textMuted,
  fontSize: "12px",
  textDecoration: "none",
};

const footerDividerTextStyle = {
  color: colors.textMuted,
  fontSize: "12px",
  display: "inline" as const,
};

const footerDisclaimerStyle = {
  color: colors.textMuted,
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: spacing.md,
};

// ============================================
// ContentSection - Padded content wrapper
// ============================================
interface ContentSectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ContentSection = ({ children, style }: ContentSectionProps) => {
  return <Section style={{ marginBottom: spacing.lg, ...style }}>{children}</Section>;
};

// ============================================
// Divider - Horizontal rule
// ============================================
interface DividerProps {
  accent?: boolean;
}

export const Divider = ({ accent = false }: DividerProps) => {
  return (
    <Hr
      style={{
        borderColor: accent ? colors.borderAccent : colors.border,
        margin: `${spacing.lg} 0`,
        borderWidth: "1px",
      }}
    />
  );
};
