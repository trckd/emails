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

interface DirectMessageEmailProps {
  recipientName: string;
  senderName: string;
  senderUsername?: string;
  messagePreview: string;
  messageUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const DirectMessageEmail = ({
  recipientName,
  senderName,
  senderUsername,
  messagePreview,
  messageUrl,
  websiteUrl = "https://tracked.gg",
}: DirectMessageEmailProps) => {
  const displayName = senderUsername
    ? `${senderName} (@${senderUsername})`
    : senderName;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>New message from {senderName} on Tracked</Preview>
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

            <Text style={heading}>You Have a New Message</Text>
            <Text style={paragraph}>
              Hi {recipientName}, {displayName} sent you a message on Tracked.
            </Text>

            <Section style={messageBox}>
              <Text style={messageLabel}>Message Preview:</Text>
              <Text style={messageText}>{messagePreview}</Text>
            </Section>

            <div
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left" as const,
              }}
            >
              <a
                href={messageUrl}
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
                  View Message
                </span>
              </a>
            </div>

            <Text style={{ ...paragraph, fontSize: "14px", color: "#94a3b8" }}>
              Open the Tracked app to read the full message and reply.
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
};

const messageBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
};

const messageLabel = {
  color: "#94a3b8",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginBottom: "8px",
};

const messageText = {
  color: "#ffffff",
  fontSize: "15px",
  lineHeight: "22px",
  fontStyle: "italic" as const,
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default DirectMessageEmail;
