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

interface FirstWorkoutCompletedEmailProps {
  userName: string;
  workoutName: string;
  totalSets?: number;
  totalReps?: number;
  workoutHistoryUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const FirstWorkoutCompletedEmail = ({
  userName,
  workoutName,
  totalSets,
  totalReps,
  workoutHistoryUrl,
  websiteUrl = "https://tracked.gg",
}: FirstWorkoutCompletedEmailProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Congratulations on completing your first workout on Tracked!</Preview>
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

            <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
              <Text style={{ fontSize: "48px", margin: "0" }}>🎉</Text>
            </Section>

            <Text style={heading}>First Workout Complete!</Text>
            <Text style={paragraph}>
              Congratulations, {userName}! You've just completed your first workout
              on Tracked. This is the beginning of an amazing journey.
            </Text>

            <Section style={statsBox}>
              <Text style={statsHeading}>Your First Workout:</Text>
              <Text style={statsText}>
                <strong>Workout:</strong> {workoutName}
              </Text>
              {totalSets !== undefined && (
                <Text style={statsText}>
                  <strong>Sets Completed:</strong> {totalSets}
                </Text>
              )}
              {totalReps !== undefined && (
                <Text style={statsText}>
                  <strong>Total Reps:</strong> {totalReps}
                </Text>
              )}
            </Section>

            <Section style={motivationBox}>
              <Text style={motivationText}>
                "The secret of getting ahead is getting started." - Mark Twain
              </Text>
            </Section>

            <Text style={paragraph}>
              You've taken the first step towards your fitness goals. Keep showing
              up, stay consistent, and watch yourself grow stronger every day.
            </Text>

            <div
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left" as const,
              }}
            >
              <a
                href={workoutHistoryUrl}
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
                  View Your Progress
                </span>
              </a>
            </div>

            <Section style={tipBox}>
              <Text style={tipHeading}>Pro Tip:</Text>
              <Text style={tipText}>
                Track every workout to see your progress over time. The data you
                collect now will help you understand how far you've come in the
                weeks and months ahead.
              </Text>
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
  textAlign: "center" as const,
};

const statsBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const statsHeading = {
  color: "#4ade80",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const statsText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "4px",
};

const motivationBox = {
  backgroundColor: "transparent",
  padding: "16px 0",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
  paddingLeft: "20px",
};

const motivationText = {
  color: "#94a3b8",
  fontSize: "15px",
  lineHeight: "22px",
  fontStyle: "italic" as const,
};

const tipBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const tipHeading = {
  color: "#4ade80",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const tipText = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "20px",
};

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default FirstWorkoutCompletedEmail;
