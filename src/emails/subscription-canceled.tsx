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
  SecondaryButton,
  DiscordButton,
  colors,
} from "../components/index.js";

interface SubscriptionCanceledEmailProps {
  userName: string;
  cancellationDate: string;
  feedbackUrl?: string;
  reactivateUrl: string;
  websiteUrl?: string;
}

export const SubscriptionCanceledEmail = ({
  userName = "Alex",
  cancellationDate = "January 15, 2025",
  feedbackUrl = "https://tracked.gg/feedback",
  reactivateUrl = "https://tracked.gg/reactivate",
  websiteUrl = "https://tracked.gg",
}: SubscriptionCanceledEmailProps) => {
  return (
    <EmailLayout preview="Your Tracked subscription has been canceled">
      <EmailHeader />

      <Heading>Subscription Canceled</Heading>
      <Paragraph>
        Hi {userName}, we've confirmed that your Tracked subscription has been
        canceled.
      </Paragraph>

      <FeatureBox title="What happens next:">
        <SmallText style={{ marginBottom: "4px" }}>
          • Your subscription will remain active until {cancellationDate}
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • You'll continue to have full access until that date
        </SmallText>
        <SmallText>
          • Your data will be safely stored and available if you return
        </SmallText>
      </FeatureBox>

      <Paragraph>
        We're sorry to see you go! Your feedback helps us improve Tracked for
        everyone.
      </Paragraph>

      {feedbackUrl && (
        <SecondaryButton href={feedbackUrl}>Share Feedback</SecondaryButton>
      )}

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
          Changed your mind?
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          You can reactivate your subscription at any time before{" "}
          {cancellationDate}.
        </Text>
        <PrimaryButton href={reactivateUrl}>
          Reactivate Subscription
        </PrimaryButton>
      </Section>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default SubscriptionCanceledEmail;
