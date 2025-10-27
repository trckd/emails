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

interface BodyweightGoalReachedEmailProps {
  userName: string;
  goalType: "gain" | "loss" | "maintain";
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  weightUnit: "kg" | "lbs";
  timeToGoal?: string;
  progressUrl: string;
  websiteUrl: string;
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

export const BodyweightGoalReachedEmail = ({
  userName,
  goalType,
  startWeight,
  currentWeight,
  goalWeight,
  weightUnit,
  timeToGoal,
  progressUrl,
  websiteUrl = "https://tracked.gg",
}: BodyweightGoalReachedEmailProps) => {
  const weightChange = Math.abs(currentWeight - startWeight);
  const changeDirection = currentWeight > startWeight ? "gained" : "lost";

  const getGoalMessage = () => {
    switch (goalType) {
      case "gain":
        return "You've reached your weight gain goal!";
      case "loss":
        return "You've reached your weight loss goal!";
      case "maintain":
        return "You've successfully maintained your goal weight!";
      default:
        return "You've reached your goal!";
    }
  };

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Congratulations! You've reached your bodyweight goal on Tracked</Preview>
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
              <Text style={{ fontSize: "64px", margin: "0" }}>🎉</Text>
            </Section>

            <Text style={heading}>Goal Achieved!</Text>
            <Text style={celebrationText}>{getGoalMessage()}</Text>

            <Section style={statsBox}>
              <Text style={statsHeading}>Your Achievement:</Text>
              <Row>
                <Column>
                  <Text style={statsLabel}>Starting Weight</Text>
                  <Text style={statsValue}>
                    {startWeight} {weightUnit}
                  </Text>
                </Column>
                <Column>
                  <Text style={statsLabel}>Current Weight</Text>
                  <Text style={statsValue}>
                    {currentWeight} {weightUnit}
                  </Text>
                </Column>
                <Column>
                  <Text style={statsLabel}>Goal Weight</Text>
                  <Text style={statsValue}>
                    {goalWeight} {weightUnit}
                  </Text>
                </Column>
              </Row>
              <Section style={changeBox}>
                <Text style={changeText}>
                  You've {changeDirection} {weightChange.toFixed(1)} {weightUnit}
                  {timeToGoal && ` in ${timeToGoal}`}!
                </Text>
              </Section>
            </Section>

            <Text style={paragraph}>
              Congratulations, {userName}! This is a huge accomplishment that took
              dedication, consistency, and hard work. You set a goal and achieved
              it - that's something to be proud of!
            </Text>

            <div
              style={{
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left" as const,
              }}
            >
              <a
                href={progressUrl}
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

            <Section style={nextStepsBox}>
              <Text style={nextStepsHeading}>What's Next?</Text>
              <ul style={nextStepsList}>
                <li style={nextStepItem}>
                  Maintain your progress with consistent training
                </li>
                <li style={nextStepItem}>
                  Set a new goal to continue your journey
                </li>
                <li style={nextStepItem}>
                  Share your success with the Tracked community
                </li>
                <li style={nextStepItem}>
                  Reflect on what worked and keep building on it
                </li>
              </ul>
            </Section>

            <Section style={motivationBox}>
              <Text style={motivationText}>
                "Success is the sum of small efforts repeated day in and day out."
              </Text>
              <Text style={{ ...motivationText, marginTop: "8px", fontStyle: "normal" as const }}>
                You proved it - congratulations! 💪
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
  fontSize: "32px",
  lineHeight: "40px",
  fontWeight: "bold",
  marginBottom: "8px",
  textAlign: "center" as const,
};

const celebrationText = {
  color: "#4ade80",
  fontSize: "18px",
  lineHeight: "26px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const statsBox = {
  backgroundColor: "#1e293b",
  padding: "20px 24px",
  borderRadius: "8px",
  margin: "24px 0",
  borderLeft: "4px solid #4ade80",
};

const statsHeading = {
  color: "#4ade80",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "16px",
  textAlign: "center" as const,
};

const statsLabel = {
  color: "#94a3b8",
  fontSize: "12px",
  textAlign: "center" as const,
  marginBottom: "4px",
  textTransform: "uppercase" as const,
};

const statsValue = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const changeBox = {
  backgroundColor: "#0f172a",
  padding: "12px 16px",
  borderRadius: "6px",
  marginTop: "16px",
};

const changeText = {
  color: "#4ade80",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0",
};

const nextStepsBox = {
  backgroundColor: "#1e293b",
  padding: "16px 24px",
  borderRadius: "8px",
  margin: "24px 0",
};

const nextStepsHeading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "12px",
};

const nextStepsList = {
  margin: "0",
  paddingLeft: "20px",
};

const nextStepItem = {
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "8px",
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

const footer = {
  color: "#94a3b8", // slate-400 for subtle footer text
  fontSize: "12px",
  lineHeight: "16px",
};

export default BodyweightGoalReachedEmail;
