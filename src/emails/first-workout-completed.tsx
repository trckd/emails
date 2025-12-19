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
        Tracked. 
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

      <Paragraph>
        You've taken the first step towards standardizing how you train. 
        The next workout you track will help you see if you are progressing or regressing.
      </Paragraph>

      <PrimaryButton href={workoutHistoryUrl}>View Your Progress</PrimaryButton>

      <TipBox title="Pro Tip">
        Want to track warm ups and intensity measures? Check out settings in the app
        to enable these advanced tracking features.
      </TipBox>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default FirstWorkoutCompletedEmail;
