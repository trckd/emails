import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  TipBox,
  PrimaryButton,
  DiscordButton,
} from "../components";

interface WelcomeEmailProps {
  userName: string;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const WelcomeEmail = ({
  userName = "Alex",
  appUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: WelcomeEmailProps) => {
  return (
    <EmailLayout preview="Welcome to Tracked - Let's start your fitness journey!">
      <EmailHeader />

      <Heading>Welcome to Tracked!</Heading>
      <Paragraph>
        Hi {userName}, we're excited to have you join our community. Tracked is
        here to help you achieve your training goals with powerful tracking
        tools.
      </Paragraph>

      <FeatureBox title="What you can do with Tracked:">
        <FeatureList
          items={[
            {
              title: "Track Workouts",
              description:
                "Log your exercises, sets, and reps with the best tracking tools on the market.",
            },
            {
              title: "Monitor Progress",
              description: "Visualize your strength gains and workout history",
            },
            {
              title: "Stay Accountable",
              description: "Share your journey with the community",
            },
          ]}
        />
      </FeatureBox>

      <PrimaryButton href={appUrl}>Open the App</PrimaryButton>

      <TipBox>
        Consistency is key to seeing results, and we make it easy to track your
        progress every step of the way. Try your best to STAY IN THE GREEN!
      </TipBox>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default WelcomeEmail;
