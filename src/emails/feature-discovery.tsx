import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from "../components";

interface FeatureDiscoveryEmailProps {
  userName?: string;
  featureName?: string;
  featureDescription?: string;
  featureBenefits?: string[];
  featureUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const FeatureDiscoveryEmail = ({
  userName = "Alex",
  featureName = "Progress Photos",
  featureDescription = "Track your transformation visually with our new Progress Photos feature. Take photos, compare side-by-side, and see your hard work paying off over time.",
  featureBenefits = [
    "Compare photos side-by-side to see your progress",
    "Automatic privacy controls - your photos are only visible to you",
    "Set reminders to take consistent progress photos",
    "Track multiple angles and body positions",
  ],
  featureUrl = "tracked://physique-photos",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl,
}: FeatureDiscoveryEmailProps) => {
  return (
    <EmailLayout preview={`Discover ${featureName} on Tracked`}>
      <EmailHeader />

      <Section style={{ textAlign: "center" as const, margin: "16px 0" }}>
        <Text style={{ fontSize: "36px", margin: "0" }}>💡</Text>
      </Section>

      <Heading style={{ textAlign: "center" as const }}>
        Unlock More with Tracked
      </Heading>
      <Paragraph>
        Hi {userName}, we noticed you haven't tried {featureName} yet - a
        powerful feature that could take your training to the next level.
      </Paragraph>

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
          {featureName}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "15px",
            lineHeight: "22px",
            margin: "0",
          }}
        >
          {featureDescription}
        </Text>
      </Section>

      {featureBenefits.length > 0 && (
        <FeatureBox title="Why you'll love it:">
          <FeatureList
            items={featureBenefits.map((benefit) => ({ title: benefit }))}
          />
        </FeatureBox>
      )}

      <PrimaryButton href={featureUrl}>Try {featureName}</PrimaryButton>

      <SmallText muted>
        We're constantly adding new features to help you reach your fitness
        goals. Stay tuned for more updates!
      </SmallText>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default FeatureDiscoveryEmail;
