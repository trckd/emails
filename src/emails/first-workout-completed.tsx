import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  TipBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from "../components";

interface FirstWorkoutCompletedEmailProps {
  userName: string;
  workoutName: string;
  totalSets?: number;
  totalReps?: number;
  workoutHistoryUrl: string;
  websiteUrl?: string;
}

export const FirstWorkoutCompletedEmail = ({
  userName = "Alex",
  workoutName = "Push Day A",
  totalSets = 18,
  totalReps = 156,
  workoutHistoryUrl = "tracked://history",
  websiteUrl = "https://tracked.gg",
}: FirstWorkoutCompletedEmailProps) => {
  return (
    <EmailLayout preview="Congratulations on completing your first workout on Tracked!">
      <EmailHeader />

      <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
        <Text style={{ fontSize: "48px", margin: "0" }}>🎉</Text>
      </Section>

      <Heading style={{ textAlign: "center" as const }}>
        First Workout Complete!
      </Heading>
      <Paragraph>
        Congratulations, {userName}! You've just completed your first workout on
        Tracked. This is the beginning of an amazing journey.
      </Paragraph>

      <FeatureBox title="Your First Workout:">
        <SmallText>
          <strong>Workout:</strong> {workoutName}
        </SmallText>
        {totalSets !== undefined && (
          <SmallText style={{ marginTop: "4px" }}>
            <strong>Sets Completed:</strong> {totalSets}
          </SmallText>
        )}
        {totalReps !== undefined && (
          <SmallText style={{ marginTop: "4px" }}>
            <strong>Total Reps:</strong> {totalReps}
          </SmallText>
        )}
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
          "The secret of getting ahead is getting started." - Mark Twain
        </Text>
      </Section>

      <Paragraph>
        You've taken the first step towards your fitness goals. Keep showing up,
        stay consistent, and watch yourself grow stronger every day.
      </Paragraph>

      <PrimaryButton href={workoutHistoryUrl}>View Your Progress</PrimaryButton>

      <TipBox title="Pro Tip">
        Track every workout to see your progress over time. The data you collect
        now will help you understand how far you've come in the weeks and months
        ahead.
      </TipBox>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default FirstWorkoutCompletedEmail;
