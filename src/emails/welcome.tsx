import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  userName: string;
  appUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const WelcomeEmail = ({
  userName,
  appUrl,
  websiteUrl = "https://tracked.gg",
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Welcome to Tracked - Let's start your fitness journey!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Row style={{ marginBottom: "8px" }}>
              <Column style={{ width: "auto", verticalAlign: "middle" }}>
                <Img src={`${baseUrl}`} width="28" height="28" alt="Tracked" />
              </Column>
              <Column
                style={{
                  width: "auto",
                  verticalAlign: "middle",
                  paddingLeft: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "28px",
                    fontWeight: "900",
                    fontFamily:
                      "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    color: "#020617",
                    margin: "0",
                    lineHeight: "32px",
                    letterSpacing: "0.5px",
                  }}
                >
                  TRACKED
                </Text>
              </Column>
            </Row>
            <Hr style={hr} />

            <Text style={heading}>Welcome to Tracked!</Text>
            <Text style={paragraph}>
              Hi {userName}, we're excited to have you join our community.
              Tracked is here to help you achieve your training goals with
              powerful tracking tools.
            </Text>

            <Section style={featureBox}>
              <Text style={featureHeading}>What you can do with Tracked:</Text>
              <ul style={featureList}>
                <li style={featureItem}>
                  <strong>Track Workouts:</strong> Log your exercises, sets, and
                  reps with the best tracking tools on the market.
                </li>
                <li style={featureItem}>
                  <strong>Monitor Progress:</strong> Visualize your strength
                  gains and workout history
                </li>
                <li style={featureItem}>
                  <strong>Stay Accountable:</strong> Share your journey with the
                  community
                </li>
              </ul>
            </Section>

            <div
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left" as const,
              }}
            >
              <a
                href={appUrl}
                style={{
                  backgroundColor: "#0f172a",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "12px 32px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: "#ffffff", textDecoration: "none" }}>
                  Open the App
                </span>
              </a>
            </div>

            <Section style={tipBox}>
              <Text style={tipHeading}>Tip:</Text>
              <Text style={tipText}>
                Consistency is key to seeing results, and we make it easy to
                track your progress every step of the way. Try your best to STAY
                IN THE GREEN!
              </Text>
            </Section>

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
                href={`${websiteUrl}/terms`}
                style={{ ...footer, paddingRight: 10 }}
              >
                Terms
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href={`${websiteUrl}/privacy`}
                style={{ ...footer, paddingRight: 10 }}
              >
                Privacy
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href={`${websiteUrl}/support`}
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

const main = {
  backgroundColor: "#020617", // slate-950
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#020617", // slate-950
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const box = {
  padding: "0 24px",
};

const hr = {
  borderColor: "#4ade80", // green-400
  margin: "24px 0",
  borderWidth: "1px",
};

const paragraph = {
  color: "#ffffff", // white
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const heading = {
  color: "#ffffff", // white
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const featureBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const featureHeading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const featureList = {
  margin: "0",
  paddingLeft: "20px",
};

const featureItem = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "8px",
};

const tipBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
};

const tipHeading = {
  color: "#4ade80",
  fontSize: "14px",
  fontWeight: "bold",
};

const tipText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "20px",
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
  borderRadius: "8px",
  color: "#ffffff", // white
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  maxWidth: "150px",
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default WelcomeEmail;
