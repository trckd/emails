import * as React from "react";
import {
  Body,
  Button,
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

interface CoachInviteEmailProps {
  coachName: string;
  coachEmail: string;
  websiteUrl: string;
  invitationLink: string;
  coachAvatarUrl?: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const CoachInviteEmail = ({
  coachName,
  coachEmail,
  websiteUrl = "https://tracked.gg",
  invitationLink,
  coachAvatarUrl,
}: CoachInviteEmailProps) => {
  const displayName = coachName || coachEmail;

  return (
    <Html>
      <Head />
      <Preview>Join {displayName}'s coaching program on Tracked</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {/* Logo */}
            <Img src={baseUrl} width="40" height="40" alt="Tracked" />
            <Hr style={hr} />

            {/* Coach Info Section */}
            <Section style={coachSection}>
              {coachAvatarUrl && (
                <Img
                  src={coachAvatarUrl}
                  width="64"
                  height="64"
                  alt={displayName}
                  style={avatarStyle}
                />
              )}
              <Text style={heading}>Join {displayName}'s Coaching Program</Text>
            </Section>

            {/* Main Content */}
            <Text style={paragraph}>
              Hi there! {displayName} wants to coach you on Tracked - a platform
              for personalized fitness coaching and progress tracking.
            </Text>

            {/* Features List */}
            <Section style={featureSection}>
              <Text style={featureHeading}>What you'll get:</Text>
              <ul style={featureList}>
                <li style={featureItem}>✓ Personalized workout programs</li>
                <li style={featureItem}>
                  ✓ Direct communication with your coach
                </li>
                <li style={featureItem}>✓ Progress tracking & analytics</li>
                <li style={featureItem}>✓ Nutrition guidance</li>
              </ul>
            </Section>

            {/* CTA Button */}
            <Button style={button} href={invitationLink}>
              Accept Coaching Invitation
            </Button>

            {/* Footer */}
            <Text style={disclaimer}>
              If this email was not expected, please ignore it. Learn more about
              Tracked at{" "}
              <Link style={link} href={websiteUrl}>
                tracked.gg
              </Link>
            </Text>

            <div
              style={{
                textAlign: "left" as const,
                margin: "24px 0",
              }}
            >
              <a
                href="https://www.discord.gg/trackedgg"
                style={{
                  backgroundColor: "#5865F2",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "12px 32px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: "#ffffff", textDecoration: "none" }}>
                  Join our Discord Community
                </span>
              </a>
            </div>

            <Hr style={hr} />

            {/* Legal Footer */}
            <Text style={footer}>
              © Tracked Training Platform Inc. <br />
              9101 Horne Street, Vancouver, BC
            </Text>
            <Section style={footerLinksContainer}>
              <Link href={`${websiteUrl}/terms`} style={footerLink}>
                Terms
              </Link>
              <span style={footerDivider}>|</span>
              <Link href={`${websiteUrl}/privacy`} style={footerLink}>
                Privacy
              </Link>
              <span style={footerDivider}>|</span>
              <Link href={`${websiteUrl}/support`} style={footerLink}>
                Support
              </Link>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#1e293b",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#0f172a",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const box = {
  padding: "0 48px",
};

const coachSection = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const avatarStyle = {
  borderRadius: "50%",
  margin: "0 auto 16px",
};

const hr = {
  borderColor: "#475569",
  margin: "20px 0",
};

const paragraph = {
  color: "#e2e8f0",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const heading = {
  color: "#e2e8f0",
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "24px 0",
};

const featureSection = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const featureHeading = {
  color: "#e2e8f0",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const featureList = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const featureItem = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "8px",
};

const link = {
  color: "#4ade80",
  textDecoration: "underline",
};

const button = {
  backgroundColor: "#4ade80",
  borderRadius: "5px",
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "16px 0",
  margin: "24px 0",
};

const disclaimer = {
  color: "#94a3b8",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "16px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

const footerLinksContainer = {
  textAlign: "center" as const,
  margin: "12px 0",
};

const footerLink = {
  color: "#8898aa",
  fontSize: "12px",
  textDecoration: "none",
  padding: "0 8px",
};

const footerDivider = {
  color: "#8898aa",
  fontSize: "12px",
};

export default CoachInviteEmail;
