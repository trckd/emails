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

interface TrialMidpointEmailProps {
  userName: string;
  daysRemaining: number;
  trialEndDate: string;
  clientsAdded: number;
  upgradeUrl: string;
  websiteUrl?: string;
}

export const TrialMidpointEmail = ({
  userName = "Coach",
  daysRemaining = 7,
  trialEndDate = "January 29, 2025",
  clientsAdded = 0,
  upgradeUrl = "https://dashboard.tracked.gg/billing",
  websiteUrl = "https://tracked.gg",
}: TrialMidpointEmailProps) => {
  const hasClients = clientsAdded > 0;

  return (
    <EmailLayout preview={`${daysRemaining} days left in your Tracked trial`}>
      <EmailHeader />

      <Heading>You're Halfway Through Your Trial</Heading>

      {hasClients ? (
        <Paragraph>
          Hi {userName}, you've added {clientsAdded}{" "}
          {clientsAdded === 1 ? "client" : "clients"} to Tracked so far. You
          have {daysRemaining} days left to explore everything the platform has
          to offer before your trial ends on {trialEndDate}.
        </Paragraph>
      ) : (
        <Paragraph>
          Hi {userName}, you have {daysRemaining} days left in your free trial.
          We noticed you haven't added any clients yet. Let us help you get
          started.
        </Paragraph>
      )}

      {!hasClients && (
        <Section
          style={{
            backgroundColor: colors.surface,
            padding: "16px 24px",
            borderRadius: "8px",
            margin: "24px 0",
            borderLeft: `4px solid ${colors.accent}`,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: "14px",
              fontWeight: "bold" as const,
              marginBottom: "4px",
              marginTop: "0",
            }}
          >
            Quick Start Guide
          </Text>
          <SmallText style={{ marginBottom: "4px" }}>
            1. Add your first client from the dashboard
          </SmallText>
          <SmallText style={{ marginBottom: "4px" }}>
            2. Create a workout program or use a template
          </SmallText>
          <SmallText>3. Assign workouts and start tracking progress</SmallText>
        </Section>
      )}

      <FeatureBox title="Features you might have missed:">
        <SmallText style={{ marginBottom: "4px" }}>
          • <strong>Workout Templates</strong> — Save time with reusable
          programs
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • <strong>Progress Photos</strong> — Track visual client
          transformations
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • <strong>Check-ins</strong> — Weekly accountability with your clients
        </SmallText>
        <SmallText>
          • <strong>Analytics</strong> — See training trends and client
          performance
        </SmallText>
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
            fontSize: "16px",
            fontWeight: "bold" as const,
            marginBottom: "8px",
          }}
        >
          Ready to upgrade?
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          Lock in your subscription now and never lose access to your client
          data. Pricing is based on the number of active clients you manage.
        </Text>
        <PrimaryButton href={upgradeUrl}>View Pricing</PrimaryButton>
      </Section>

      <Paragraph>
        Questions? Join our Discord community to connect with other coaches and
        get tips on growing your coaching business.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TrialMidpointEmail;
