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
} from "../components/index.js";

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
      return "It's been a while! We're here ready to help you standardize your training.";
    } else if (daysInactive >= 14) {
      return "We've been working on exciting new features while you've been away.";
    } else {
      return "Rest time is up, let's get back to it.";
    }
  };

  return (
    <EmailLayout preview={`We miss you, ${userName}! Come back to Tracked`}>
      <EmailHeader />

      <Heading>Come back to Tracked!</Heading>
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

      <PrimaryButton href={appUrl}>Get Tracking</PrimaryButton>

      <Paragraph muted>
        Remember: consistency beats perfection. Putting even just a little effort into tracking helps you stay accountable and see progress over time.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default InactiveReengagementEmail;
