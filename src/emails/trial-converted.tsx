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

interface TrialConvertedEmailProps {
  userName: string;
  dashboardUrl: string;
  websiteUrl?: string;
}

export const TrialConvertedEmail = ({
  userName = "Coach",
  dashboardUrl = "https://dashboard.tracked.gg",
  websiteUrl = "https://tracked.gg",
}: TrialConvertedEmailProps) => {
  return (
    <EmailLayout preview="Welcome to Tracked - You're now a subscriber">
      <EmailHeader />

      <Heading>Welcome to Tracked</Heading>
      <Paragraph>
        Hi {userName}, thank you for subscribing to Tracked. You now have full
        access to all coaching features with no time limits.
      </Paragraph>

      <FeatureBox title="What's next:">
        <SmallText style={{ marginBottom: "4px" }}>
          • Continue managing your clients from the dashboard
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Your billing is based on your active client count
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Manage your subscription anytime from billing settings
        </SmallText>
        <SmallText>• Reach out if you need any help getting started</SmallText>
      </FeatureBox>

      <Paragraph>
        We're excited to have you as part of the Tracked community. If you have
        any questions about your subscription or the platform, we're here to
        help.
      </Paragraph>

      <PrimaryButton href={dashboardUrl}>Go to Dashboard</PrimaryButton>

      <Paragraph style={{ marginTop: "24px" }}>
        Join our Discord community to connect with other coaches, share tips,
        and get the latest updates.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TrialConvertedEmail;
