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
} from "../components/index.js";

interface TrialStartedEmailProps {
  userName: string;
  trialEndDate: string;
  daysRemaining: number;
  upgradeUrl: string;
  websiteUrl?: string;
}

export const TrialStartedEmail = ({
  userName = "Coach",
  trialEndDate = "January 29, 2025",
  daysRemaining = 14,
  upgradeUrl = "https://dashboard.tracked.gg/billing",
  websiteUrl = "https://tracked.gg",
}: TrialStartedEmailProps) => {
  return (
    <EmailLayout preview="Welcome to your Tracked coaching trial">
      <EmailHeader />

      <Heading>Welcome to Your Free Trial</Heading>
      <Paragraph>
        Hi {userName}, your {daysRemaining}-day free trial of Tracked has
        started. You have until {trialEndDate} to explore everything the
        platform has to offer.
      </Paragraph>

      <FeatureBox title="What's included in your trial:">
        <SmallText style={{ marginBottom: "4px" }}>
          • Unlimited client management (up to 500 clients)
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Custom workout programming and templates
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Client progress tracking and analytics
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • In-app messaging with clients
        </SmallText>
        <SmallText>• Full access to the coaching dashboard</SmallText>
      </FeatureBox>

      <Paragraph>
        Ready to get started? Head to your dashboard to add your first clients
        and start building your coaching business.
      </Paragraph>

      <PrimaryButton href={upgradeUrl}>Go to Dashboard</PrimaryButton>

      <Paragraph style={{ marginTop: "24px" }}>
        If you have any questions or need help getting set up, our team is here
        for you. Join our Discord community to connect with other coaches.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TrialStartedEmail;
