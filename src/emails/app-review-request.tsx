import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  DiscordButton,
  colors,
  spacing,
  borderRadius,
} from "../components";

interface AppReviewRequestEmailProps {
  userName: string;
  workoutsCompleted: number;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const AppReviewRequestEmail = ({
  userName = "Alex",
  workoutsCompleted = 50,
  appStoreUrl = "https://apps.apple.com/app/tracked-training/id6450913418",
  playStoreUrl = "https://play.google.com/store/apps/details?id=com.tracked.mobile",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: AppReviewRequestEmailProps) => {
  return (
    <EmailLayout preview={`You've completed ${workoutsCompleted} workouts! Share your experience`}>
      <EmailHeader />

      <Heading>You're Crushing It!</Heading>
      <Paragraph>
        Hi {userName}, you've completed <strong>{workoutsCompleted} workouts</strong> on
        Tracked. That's an amazing achievement!
      </Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
          textAlign: "center" as const,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: "48px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          {workoutsCompleted}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            margin: "8px 0 0 0",
          }}
        >
          workouts and counting
        </Text>
      </Section>

      <Paragraph>
        We'd love to hear what you think! A quick review helps other athletes
        discover Tracked and helps us continue improving the app.
      </Paragraph>

      <Paragraph style={{ fontWeight: "600" }}>
        Would you take 30 seconds to leave a review?
      </Paragraph>

      <PrimaryButton href={appStoreUrl}>Review on App Store</PrimaryButton>

      <SecondaryButton href={playStoreUrl}>Review on Google Play</SecondaryButton>

      <Paragraph muted style={{ textAlign: "center" as const }}>
        Thank you for being part of the Tracked community. Your support means
        everything to us!
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default AppReviewRequestEmail;
