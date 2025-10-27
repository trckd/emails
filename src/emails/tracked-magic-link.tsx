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

interface Props {
  loginButtonLink: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const TrackedMagicLink = ({ loginButtonLink, websiteUrl }: Props) => (
  <Html>
    <Head>
      <meta name="color-scheme" content="light only" />
      <meta name="supported-color-schemes" content="light only" />
    </Head>
    <Preview>
      New login requested for Tracked - The gym tracking platform
    </Preview>
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
          <Text style={paragraph}>Welcome to Tracked!</Text>
          <Text style={paragraph}>
            To get started, press the button below to log in to your Tracked
            account. You will be redirected to the app.
          </Text>
          <div
            style={{
              marginTop: "24px",
              marginBottom: "24px",
              textAlign: "left" as const,
            }}
          >
            <a
              href={loginButtonLink}
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
                Login to Tracked
              </span>
            </a>
          </div>

          <Text style={{ ...paragraph }}>
            If this email was not expected, please ignore it. You can learn more
            about the Tracked Training Platform by visiting our{" "}
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

const anchor = {
  color: "#4ade80", // green-400
  textDecoration: "underline",
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};
