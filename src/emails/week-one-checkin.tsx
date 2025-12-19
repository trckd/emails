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
  TipBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
  TextLink,
  colors,
} from "../components/index.js";

interface WeekOneCheckinEmailProps {
  userName: string;
  workoutsCompleted: number;
  appUrl: string;
  supportUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const WeekOneCheckinEmail = ({
  userName = "Alex",
  workoutsCompleted = 4,
  appUrl = "tracked://app",
  supportUrl = "https://tracked.gg/support",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: WeekOneCheckinEmailProps) => {
  const isActive = workoutsCompleted > 0;

  return (
    <EmailLayout preview="How's your first week on Tracked going?">
      <EmailHeader />

      <Heading>Week One Check-In</Heading>

      {isActive ? (
        <>
          <Paragraph>
            Hi {userName}, you've been on Tracked for a week now and we wanted
            to check in!
          </Paragraph>

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
                fontSize: "16px",
                fontWeight: "bold" as const,
                marginBottom: "12px",
              }}
            >
              Your First Week:
            </Text>
            <SmallText>
              <strong>Workouts Logged:</strong> {workoutsCompleted}
            </SmallText>
            <SmallText style={{ marginTop: "8px" }}>
              {workoutsCompleted >= 3
                ? "Great start! You're building strong habits."
                : "Good progress! Try to aim for 3-4 workouts per week."}
            </SmallText>
          </Section>

          <Paragraph>
            Consistency is the key to reaching your fitness goals. Keep up the
            momentum and remember - every workout counts!
          </Paragraph>
        </>
      ) : (
        <>
          <Paragraph>
            Hi {userName}, you joined Tracked a week ago, and we noticed you
            haven't logged your first workout yet.
          </Paragraph>

          <FeatureBox title="Getting Started is Easy:">
            <FeatureList
              items={[
                { title: 'Open the app and tap the "+" button' },
                { title: "Select your exercises or create a custom workout" },
                { title: "Track your sets, reps, and weight as you go" },
                { title: "Complete your workout and see your progress!" },
              ]}
            />
          </FeatureBox>

          <Paragraph>
            The hardest part is getting started. Once you log that first
            workout, you'll be on your way to building lasting fitness habits.
          </Paragraph>
        </>
      )}

      <PrimaryButton href={appUrl}>
        {isActive ? "Continue Tracking" : "Log Your First Workout"}
      </PrimaryButton>

      <TipBox title="Need Help?">
        Our team is here to help you get the most out of Tracked.
        {supportUrl && (
          <>
            {" "}
            <TextLink href={supportUrl}>Contact us</TextLink> anytime with
            questions.
          </>
        )}
      </TipBox>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default WeekOneCheckinEmail;
