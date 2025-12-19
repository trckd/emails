import * as React from "react";
import { Section, Text, Row, Column } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
  DiscordButton,
  colors,
} from "../components";

interface BodyweightGoalReachedEmailProps {
  userName: string;
  goalType: "gain" | "loss" | "maintain";
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  weightUnit: "kg" | "lbs";
  timeToGoal?: string;
  progressUrl: string;
  websiteUrl?: string;
}

export const BodyweightGoalReachedEmail = ({
  userName = "Alex",
  goalType = "loss",
  startWeight = 185,
  currentWeight = 170,
  goalWeight = 170,
  weightUnit = "lbs",
  timeToGoal = "12 weeks",
  progressUrl = "tracked://bodyweight",
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
    <EmailLayout preview="Congratulations! You've reached your bodyweight goal on Tracked">
      <EmailHeader />

      <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
        <Text style={{ fontSize: "64px", margin: "0" }}>🎉</Text>
      </Section>

      <Heading style={{ textAlign: "center" as const, fontSize: "32px" }}>
        Goal Achieved!
      </Heading>
      <Text
        style={{
          color: colors.accent,
          fontSize: "18px",
          lineHeight: "26px",
          textAlign: "center" as const,
          marginBottom: "24px",
        }}
      >
        {getGoalMessage()}
      </Text>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: "20px 24px",
          borderRadius: "8px",
          margin: "24px 0",
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.accent,
            fontSize: "16px",
            fontWeight: "bold" as const,
            marginBottom: "16px",
            textAlign: "center" as const,
          }}
        >
          Your Achievement:
        </Text>
        <Row>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: "12px",
                textAlign: "center" as const,
                marginBottom: "4px",
                textTransform: "uppercase" as const,
              }}
            >
              Starting Weight
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: "20px",
                fontWeight: "bold" as const,
                textAlign: "center" as const,
              }}
            >
              {startWeight} {weightUnit}
            </Text>
          </Column>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: "12px",
                textAlign: "center" as const,
                marginBottom: "4px",
                textTransform: "uppercase" as const,
              }}
            >
              Current Weight
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: "20px",
                fontWeight: "bold" as const,
                textAlign: "center" as const,
              }}
            >
              {currentWeight} {weightUnit}
            </Text>
          </Column>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: "12px",
                textAlign: "center" as const,
                marginBottom: "4px",
                textTransform: "uppercase" as const,
              }}
            >
              Goal Weight
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: "20px",
                fontWeight: "bold" as const,
                textAlign: "center" as const,
              }}
            >
              {goalWeight} {weightUnit}
            </Text>
          </Column>
        </Row>
        <Section
          style={{
            backgroundColor: colors.surfaceAlt,
            padding: "12px 16px",
            borderRadius: "6px",
            marginTop: "16px",
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: "16px",
              fontWeight: "bold" as const,
              textAlign: "center" as const,
              margin: "0",
            }}
          >
            You've {changeDirection} {weightChange.toFixed(1)} {weightUnit}
            {timeToGoal && ` in ${timeToGoal}`}!
          </Text>
        </Section>
      </Section>

      <Paragraph>
        Congratulations, {userName}! This is a huge accomplishment that took
        dedication, consistency, and hard work. You set a goal and achieved it -
        that's something to be proud of!
      </Paragraph>

      <PrimaryButton href={progressUrl}>View Your Progress</PrimaryButton>

      <FeatureBox title="What's Next?">
        <FeatureList
          items={[
            { title: "Maintain your progress with consistent training" },
            { title: "Set a new goal to continue your journey" },
            { title: "Share your success with the Tracked community" },
            { title: "Reflect on what worked and keep building on it" },
          ]}
        />
      </FeatureBox>

      <Section
        style={{
          padding: "16px 0 16px 20px",
          margin: "24px 0",
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.textMuted,
            fontSize: "15px",
            lineHeight: "22px",
            fontStyle: "italic" as const,
            margin: "0",
          }}
        >
          "Success is the sum of small efforts repeated day in and day out."
        </Text>
        <Text
          style={{
            color: colors.textMuted,
            fontSize: "15px",
            lineHeight: "22px",
            marginTop: "8px",
          }}
        >
          You proved it - congratulations! 💪
        </Text>
      </Section>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default BodyweightGoalReachedEmail;
