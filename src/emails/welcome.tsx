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
import { Img } from "@react-email/components";

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

      <PrimaryButton href={appUrl}>Get Tracking</PrimaryButton>

      <Heading>A Message from the Founders</Heading>
      <Paragraph>
        We started Tracked because we believe everyone deserves access to
        world-class training tools. As athletes ourselves, we recognize the importance tracking has on your training. 
        We genuinely appreciate the support,
        and we're committed to building the best possible experience for you.
        With gratitude, Keenan & Jackson
      </Paragraph>

      <Img
        src="https://cdn.trckd.ca/assets/348E45F2-A1E4-4B5B-9239-77CF9BF5B782.png"
        alt="Founders of Tracked"
        style={{ width: "100%", marginTop: "24px" }}
      />

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default WelcomeEmail;
