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

interface TrialExpiredEmailProps {
  userName: string;
  reactivateUrl: string;
  websiteUrl?: string;
}

export const TrialExpiredEmail = ({
  userName = "Coach",
  reactivateUrl = "https://dashboard.tracked.gg/billing",
  websiteUrl = "https://tracked.gg",
}: TrialExpiredEmailProps) => {
  return (
    <EmailLayout preview="Your Tracked trial has ended">
      <EmailHeader />

      <Heading>Your Trial Has Ended</Heading>
      <Paragraph>
        Hi {userName}, your free trial of Tracked has expired. Your access to
        the coaching dashboard has been paused, but don't worry — your data is
        safe.
      </Paragraph>

      <FeatureBox title="Your data is preserved:">
        <SmallText style={{ marginBottom: "4px" }}>
          • All client profiles and workout history are saved
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Your workout templates and programs are intact
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • Client progress data remains accessible when you return
        </SmallText>
        <SmallText>• Subscribe anytime to regain full access</SmallText>
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
          Ready to continue?
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            lineHeight: "20px",
            margin: "0 0 16px 0",
          }}
        >
          Reactivate your account to pick up right where you left off. Your
          clients are waiting.
        </Text>
        <PrimaryButton href={reactivateUrl}>Reactivate Now</PrimaryButton>
      </Section>

      <Paragraph>
        If you decided Tracked isn't for you right now, we'd love to hear why.
        Your feedback helps us build a better product for coaches like you.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TrialExpiredEmail;
