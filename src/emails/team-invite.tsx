import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface TeamInviteEmailProps {
  teamName?: string;
  teamRole?: string;
  invitedByUsername?: string;
  websiteUrl?: string;
  teamImage?: string;
  invitationLink?: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const TeamInviteEmail = ({
  teamName = "Team Tracked Training",
  teamRole = "Athlete",
  websiteUrl = "https://www.tracked.training",
  teamImage,
  invitationLink,
}: TeamInviteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Team Invite for {teamName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Row>
              <Img src={`${baseUrl}`} width="40" height="40" alt="Tracked" />
            </Row>
            <Hr style={hr} />
            {teamImage && (
              <Img
                src={teamImage || baseUrl}
                height="70"
                alt="Tracked"
                style={{
                  margin: "0 auto",
                  padding: "20px",
                }}
              />
            )}

            <Text style={heading}>Invitation to join {teamName}</Text>
            <Text style={paragraph}>
              Join the team as a <strong>{teamRole}</strong> by pressing the
              button below.
            </Text>
            <Button style={button} href={invitationLink}>
              Join Team
            </Button>

            <Text style={{ ...paragraph }}>
              If this email was not expected, please ignore it. You can learn
              more about the Tracked Training Platform by visiting our{" "}
              <Link style={anchor} href={websiteUrl}>
                website
              </Link>
              .
            </Text>

            <Row style={row}>
              <Column style={column}>
                <Button
                  style={appButton}
                  href="https://apps.apple.com/app/tracked-training/id6450913418"
                >
                  <Img
                    src="https://cdn.trckd.ca/assets/app-store-black.png"
                    alt="Download on the App Store"
                    style={img}
                  />
                </Button>
              </Column>
              <Column style={column}>
                <Button
                  style={appButton}
                  href="https://play.google.com/store/apps/details?id=com.tracked.mobile"
                >
                  <Img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Google Play"
                    style={img}
                  />
                </Button>
              </Column>
            </Row>

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
            <Text style={footer}>
              Copyright © Tracked Training Platform Inc. <br /> 9101 Horne
              Street, Vancouver, BC
            </Text>

            <Container>
              <Link
                href="https://tracked.gg/terms"
                style={{ ...footer, paddingRight: 10 }}
              >
                Terms
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href="https://tracked.gg/privacy"
                style={{ ...footer, paddingRight: 10 }}
              >
                Privacy
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href="https://tracked.gg/support"
                style={{ ...footer, paddingRight: 10 }}
              >
                Support
              </Link>
            </Container>

            <Text style={footer}>
              This is a service notification by the Tracked Training Platform.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default TeamInviteEmail;

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
  borderRadius: "5px",
};

const box = {
  padding: "0 48px",
};

const row = {
  display: "flex",
  flexDirection: "row" as const,
};

const column = {
  flex: "0 0 48%",
  "@media (maxWidth: 600px)": {
    flex: "0 0 100%",
    marginBottom: "10px",
  },
};

const img = {
  maxWidth: "100%",
  height: "auto",
};

const appButton = {
  backgroundColor: "transparent",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  maxWidth: "150px",
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
  textAlign: "left" as const,
};

const anchor = {
  color: "#4ade80",
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
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
