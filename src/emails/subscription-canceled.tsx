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

interface SubscriptionCanceledEmailProps {
  userName: string;
  cancellationDate: string;
  feedbackUrl?: string;
  reactivateUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const SubscriptionCanceledEmail = ({
  userName,
  cancellationDate,
  feedbackUrl,
  reactivateUrl,
  websiteUrl = "https://tracked.gg",
}: SubscriptionCanceledEmailProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Your Tracked subscription has been canceled</Preview>
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

            <Text style={heading}>Subscription Canceled</Text>
            <Text style={paragraph}>
              Hi {userName}, we've confirmed that your Tracked subscription has
              been canceled.
            </Text>

            <Section style={infoBox}>
              <Text style={infoHeading}>What happens next:</Text>
              <Text style={infoText}>
                • Your subscription will remain active until {cancellationDate}
              </Text>
              <Text style={infoText}>
                • You'll continue to have full access until that date
              </Text>
              <Text style={infoText}>
                • Your data will be safely stored and available if you return
              </Text>
            </Section>

            <Text style={paragraph}>
              We're sorry to see you go! Your feedback helps us improve Tracked
              for everyone.
            </Text>

            {feedbackUrl && (
              <div
                style={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  textAlign: "left" as const,
                }}
              >
                <a
                  href={feedbackUrl}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #4ade80",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    padding: "10px 24px",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      color: "#4ade80",
                      textDecoration: "none",
                    }}
                  >
                    Share Feedback
                  </span>
                </a>
              </div>
            )}

            <Section style={winbackBox}>
              <Text style={winbackHeading}>Changed your mind?</Text>
              <Text style={winbackText}>
                You can reactivate your subscription at any time before{" "}
                {cancellationDate}.
              </Text>
              <div
                style={{
                  marginTop: "16px",
                  textAlign: "left" as const,
                }}
              >
                <a
                  href={reactivateUrl}
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
                    Reactivate Subscription
                  </span>
                </a>
              </div>
            </Section>

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

const infoBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const infoHeading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const infoText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "4px",
};

const winbackBox = {
  backgroundColor: "#1e293b",
  padding: "20px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
};

const winbackHeading = {
  color: "#4ade80",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const winbackText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "20px",
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default SubscriptionCanceledEmail;
