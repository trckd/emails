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

interface WeekOneCheckinEmailProps {
  userName: string;
  workoutsCompleted: number;
  appUrl: string;
  supportUrl?: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const WeekOneCheckinEmail = ({
  userName,
  workoutsCompleted,
  appUrl,
  supportUrl,
  websiteUrl = "https://tracked.gg",
}: WeekOneCheckinEmailProps) => {
  const isActive = workoutsCompleted > 0;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>How's your first week on Tracked going?</Preview>
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

            <Text style={heading}>Week One Check-In</Text>

            {isActive ? (
              <>
                <Text style={paragraph}>
                  Hi {userName}, you've been on Tracked for a week now and we
                  wanted to check in!
                </Text>

                <Section style={statsBox}>
                  <Text style={statsHeading}>Your First Week:</Text>
                  <Text style={statsText}>
                    <strong>Workouts Logged:</strong> {workoutsCompleted}
                  </Text>
                  <Text style={{ ...statsText, marginTop: "8px" }}>
                    {workoutsCompleted >= 3
                      ? "🔥 Great start! You're building strong habits."
                      : "💪 Good progress! Try to aim for 3-4 workouts per week."}
                  </Text>
                </Section>

                <Text style={paragraph}>
                  Consistency is the key to reaching your fitness goals. Keep up
                  the momentum and remember - every workout counts!
                </Text>
              </>
            ) : (
              <>
                <Text style={paragraph}>
                  Hi {userName}, you joined Tracked a week ago, and we noticed you
                  haven't logged your first workout yet.
                </Text>

                <Section style={encouragementBox}>
                  <Text style={encouragementHeading}>Getting Started is Easy:</Text>
                  <ul style={featureList}>
                    <li style={featureItem}>
                      Open the app and tap the "+" button
                    </li>
                    <li style={featureItem}>
                      Select your exercises or create a custom workout
                    </li>
                    <li style={featureItem}>
                      Track your sets, reps, and weight as you go
                    </li>
                    <li style={featureItem}>
                      Complete your workout and see your progress!
                    </li>
                  </ul>
                </Section>

                <Text style={paragraph}>
                  The hardest part is getting started. Once you log that first
                  workout, you'll be on your way to building lasting fitness habits.
                </Text>
              </>
            )}

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
                  {isActive ? "Continue Your Journey" : "Log Your First Workout"}
                </span>
              </a>
            </div>

            <Section style={tipBox}>
              <Text style={tipHeading}>Need Help?</Text>
              <Text style={tipText}>
                Our support team is here to help you get the most out of Tracked.
                {supportUrl && (
                  <>
                    {" "}
                    <Link
                      href={supportUrl}
                      style={{ color: "#4ade80", textDecoration: "underline" }}
                    >
                      Contact us
                    </Link>{" "}
                    anytime with questions.
                  </>
                )}
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
};

const statsBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
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

const encouragementBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const encouragementHeading = {
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

export default WeekOneCheckinEmail;
