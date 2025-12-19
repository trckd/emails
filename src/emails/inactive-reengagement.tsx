import * as React from "react";
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
} from "../components";

interface InactiveReengagementEmailProps {
  userName: string;
  daysInactive: number;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const InactiveReengagementEmail = ({
  userName = "Alex",
  daysInactive = 21,
  appUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: InactiveReengagementEmailProps) => {
  const getMessage = () => {
    if (daysInactive >= 30) {
      return "It's been a while! Your fitness journey is waiting for you.";
    } else if (daysInactive >= 14) {
      return "We noticed you've been away. Ready to get back on track?";
    } else {
      return "Hey, we miss you! Your workout streak is waiting to be continued.";
    }
  };

  return (
    <EmailLayout preview={`We miss you, ${userName}! Come back to Tracked`}>
      <EmailHeader />

      <Heading>We Miss You!</Heading>
      <Paragraph>
        Hi {userName}, it's been {daysInactive} days since your last workout.{" "}
        {getMessage()}
      </Paragraph>

      <FeatureBox title="Pick up where you left off:">
        <FeatureList
          items={[
            {
              title: "Your data is safe",
              description: "All your workout history and progress is still here",
            },
            {
              title: "Start fresh",
              description: "Every day is a new opportunity to build consistency",
            },
            {
              title: "Stay accountable",
              description: "Track even quick workouts to maintain momentum",
            },
          ]}
        />
      </FeatureBox>

      <PrimaryButton href={appUrl}>Log a Workout</PrimaryButton>

      <Paragraph muted>
        Remember: consistency beats perfection. Even a 10-minute session counts!
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default InactiveReengagementEmail;
