import * as React from "react";
import { Section, Text } from "@react-email/components";
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
  colors,
} from "../components/index.js";

interface TrialEndingSoonEmailProps {
  userName: string;
  daysRemaining: number;
  trialEndDate: string;
  upgradeUrl: string;
  websiteUrl?: string;
}

export const TrialEndingSoonEmail = ({
  userName = "Coach",
  daysRemaining = 3,
  trialEndDate = "January 29, 2025",
  upgradeUrl = "https://dashboard.tracked.gg/billing",
  websiteUrl = "https://tracked.gg",
}: TrialEndingSoonEmailProps) => {
  const dayText = daysRemaining === 1 ? "day" : "days";

  return (
    <EmailLayout
      preview={`Only ${daysRemaining} ${dayText} left in your Tracked trial`}
    >
      <EmailHeader />

      <Section
        style={{
          backgroundColor: "#FEF3C7",
          padding: "16px 20px",
          borderRadius: "8px",
          marginBottom: "24px",
          borderLeft: "4px solid #F59E0B",
        }}
      >
        <Text
          style={{
            color: "#92400E",
            fontSize: "14px",
            fontWeight: "600",
            margin: "0",
          }}
        >
          Your trial ends in {daysRemaining} {dayText}
        </Text>
      </Section>

      <Heading>Your Trial is Almost Over</Heading>
      <Paragraph>
        Hi {userName}, your free trial of Tracked ends on {trialEndDate}. To
        keep your client data and continue using the coaching dashboard,
        subscribe before your trial expires.
      </Paragraph>

      <FeatureBox title="What happens when your trial ends:">
        <SmallText style={{ marginBottom: "4px" }}>
          • You'll lose access to the coaching dashboard
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Your client data will be safely preserved
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Clients will still have access to their workouts
        </SmallText>
        <SmallText>• You can reactivate at any time to regain access</SmallText>
      </FeatureBox>

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
            fontSize: "18px",
            fontWeight: "bold" as const,
            marginBottom: "8px",
          }}
        >
          Don't lose access
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            lineHeight: "20px",
            margin: "0 0 16px 0",
          }}
        >
          Subscribe now to keep managing your clients without interruption.
          Pricing starts at just a few dollars per month based on your client
          count.
        </Text>
        <PrimaryButton href={upgradeUrl}>Subscribe Now</PrimaryButton>
      </Section>

      <Paragraph>
        Have questions about pricing or need more time? Reply to this email or
        reach out on Discord. We're happy to help.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TrialEndingSoonEmail;
