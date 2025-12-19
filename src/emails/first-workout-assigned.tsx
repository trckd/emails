import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
} from "../components";

interface FirstWorkoutAssignedEmailProps {
  clientName: string;
  coachName: string;
  programName: string;
  workoutUrl: string;
  websiteUrl?: string;
}

export const FirstWorkoutAssignedEmail = ({
  clientName = "Alex",
  coachName = "Sarah Johnson",
  programName = "8-Week Strength Builder",
  workoutUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
}: FirstWorkoutAssignedEmailProps) => {
  return (
    <EmailLayout
      preview={`${coachName} has assigned your first workout program on Tracked`}
    >
      <EmailHeader />

      <Heading>Your Training Journey Begins!</Heading>
      <Paragraph>
        Hi {clientName}, {coachName} has created your personalized workout
        program and it's ready for you to start.
      </Paragraph>

      <FeatureBox title="Program Details:">
        <SmallText>
          <strong>Program:</strong> {programName}
        </SmallText>
        <SmallText style={{ marginTop: "4px" }}>
          <strong>Coach:</strong> {coachName}
        </SmallText>
      </FeatureBox>

      <Paragraph>
        Your coach has designed this program specifically for your goals. Open
        the app to view your workouts and get started!
      </Paragraph>

      <PrimaryButton href={workoutUrl}>View Your Program</PrimaryButton>

      <Paragraph>
        Remember to track each workout and communicate with your coach if you
        have any questions or concerns.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default FirstWorkoutAssignedEmail;
