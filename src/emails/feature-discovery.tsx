import React from "react";
import {
  Body,
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

interface FeatureDiscoveryEmailProps {
  userName: string;
  featureName: string;
  featureDescription: string;
  featureBenefits: string[];
  featureUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const FeatureDiscoveryEmail = ({
  userName,
  featureName,
  featureDescription,
  featureBenefits,
  featureUrl,
  websiteUrl = "https://tracked.gg",
}: FeatureDiscoveryEmailProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Discover {featureName} on Tracked</Preview>
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

            <Section style={{ textAlign: "center" as const, margin: "16px 0" }}>
              <Text style={{ fontSize: "36px", margin: "0" }}>💡</Text>
            </Section>

            <Text style={heading}>Unlock More with Tracked</Text>
            <Text style={paragraph}>
              Hi {userName}, we noticed you haven't tried {featureName} yet - a
              powerful feature that could take your training to the next level.
            </Text>

            <Section style={featureBox}>
              <Text style={featureHeading}>{featureName}</Text>
              <Text style={featureDescriptionStyle}>{featureDescription}</Text>
            </Section>

            {featureBenefits.length > 0 && (
              <Section style={benefitsBox}>
                <Text style={benefitsHeading}>Why you'll love it:</Text>
                <ul style={benefitsList}>
                  {featureBenefits.map((benefit, index) => (
                    <li key={index} style={benefitItem}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <div
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left" as const,
              }}
            >
              <a
                href={featureUrl}
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
                  Try {featureName}
                </span>
              </a>
            </div>

            <Text style={{ ...paragraph, fontSize: "14px", color: "#94a3b8" }}>
              We're constantly adding new features to help you reach your fitness
              goals. Stay tuned for more updates!
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
  textAlign: "center" as const,
};

const featureBox = {
  backgroundColor: "#1e293b",
  padding: "20px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
};

const featureHeading = {
  color: "#4ade80",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const featureDescriptionStyle = {
  color: "#e2e8f0",
  fontSize: "15px",
  lineHeight: "22px",
};

const benefitsBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const benefitsHeading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const benefitsList = {
  margin: "0",
  paddingLeft: "20px",
};

const benefitItem = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "8px",
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default FeatureDiscoveryEmail;
