import * as React from "react";
import { Img, Section } from "@react-email/components";
import { colors, borderRadius, spacing } from "./tokens.js";

// ============================================
// PrimaryButton - Main CTA button
// ============================================
interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const PrimaryButton = ({
  href,
  children,
  fullWidth = false,
}: PrimaryButtonProps) => {
  return (
    <Section style={{ margin: `${spacing.lg} 0`, textAlign: "left" as const }}>
      <a
        href={href}
        style={{
          backgroundColor: colors.primary,
          borderRadius: borderRadius.md,
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "12px 32px",
          display: fullWidth ? "block" : "inline-block",
          textAlign: "center" as const,
        }}
      >
        {children}
      </a>
    </Section>
  );
};

// ============================================
// SecondaryButton - Secondary action button
// ============================================
interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const SecondaryButton = ({
  href,
  children,
  fullWidth = false,
}: SecondaryButtonProps) => {
  return (
    <Section style={{ margin: `${spacing.md} 0`, textAlign: "left" as const }}>
      <a
        href={href}
        style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.borderStrong}`,
          borderRadius: borderRadius.md,
          color: colors.textPrimary,
          fontSize: "16px",
          fontWeight: "600",
          textDecoration: "none",
          padding: "12px 32px",
          display: fullWidth ? "block" : "inline-block",
          textAlign: "center" as const,
        }}
      >
        {children}
      </a>
    </Section>
  );
};

// ============================================
// SocialButtons - Discord and YouTube icon buttons
// ============================================
export const SocialButtons = () => {
  return (
    <Section style={{ margin: `${spacing.sm} 0`, textAlign: "center" as const }}>
      <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
        <tr>
          {/* Discord */}
          <td style={{ paddingRight: "12px" }}>
            <a
              href="https://www.discord.gg/trackedgg"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 127.14 96.36"
              >
                <path
                  fill={colors.textSecondary}
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                />
              </svg>
            </a>
          </td>
          {/* YouTube */}
          <td style={{ paddingRight: "12px" }}>
            <a
              href="https://www.youtube.com/@Keenanrmalloy"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colors.textSecondary}
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </td>
          {/* TikTok */}
          <td style={{ paddingRight: "12px" }}>
            <a
              href="https://www.tiktok.com/@keenanrmalloy"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colors.textSecondary}
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                />
              </svg>
            </a>
          </td>
          {/* Instagram */}
          <td style={{ paddingRight: "12px" }}>
            <a
              href="https://www.instagram.com/keenanrmalloy/"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colors.textSecondary}
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
          </td>
          {/* Reddit */}
          <td>
            <a
              href="https://www.reddit.com/r/trackedapp/"
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={colors.textSecondary}
                  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                />
              </svg>
            </a>
          </td>
        </tr>
      </table>
    </Section>
  );
};

// Keep DiscordButton for backward compatibility
export const DiscordButton = SocialButtons;

// ============================================
// AppStoreButtons - iOS/Android download buttons
// ============================================
export const AppStoreButtons = () => {
  return (
    <Section style={{ marginTop: spacing.lg, textAlign: "center" as const }}>
      <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
        <tr>
          <td style={{ paddingRight: "8px" }}>
            <a
              href="https://apps.apple.com/app/tracked-training/id6450913418"
              style={{ display: "block", textDecoration: "none" }}
            >
              <Img
                src="https://cdn.trckd.ca/assets/Download_on_the_App_Store_Badge_US-UK_blk_092917.png"
                alt="Download on the App Store"
                height="36"
                style={{ display: "block" }}
              />
            </a>
          </td>
          <td style={{ paddingLeft: "8px" }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.tracked.mobile"
              style={{ display: "block", textDecoration: "none" }}
            >
              <Img
                src="https://cdn.trckd.ca/assets/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                height="36"
                style={{ display: "block" }}
              />
            </a>
          </td>
        </tr>
      </table>
    </Section>
  );
};

// ============================================
// TextLink - Inline text link
// ============================================
interface TextLinkProps {
  href: string;
  children: React.ReactNode;
}

export const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <a
      href={href}
      style={{
        color: colors.accent,
        textDecoration: "underline",
      }}
    >
      {children}
    </a>
  );
};
