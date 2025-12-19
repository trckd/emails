import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  colors,
  spacing,
} from "../components/index.js";

interface AnniversaryEmailProps {
  userName: string;
  yearsOnPlatform: number;
  totalWorkouts?: number;
  totalVolume?: string;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

export const AnniversaryEmail = ({
  userName = "Alex",
  yearsOnPlatform = 1,
  totalWorkouts = 156,
  totalVolume = "1,250,000 lbs",
  appUrl = "tracked://bodyweight",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: AnniversaryEmailProps) => {
  const yearText = yearsOnPlatform === 1 ? "1 Year" : `${yearsOnPlatform} Years`;

  return (
    <EmailLayout preview={`Happy ${yearText} Anniversary on Tracked!`}>
      <EmailHeader />

      <Heading>Happy {yearText} Anniversary!</Heading>
      <Paragraph>
        Congratulations {userName}! Today marks {yearsOnPlatform}{" "}
        {yearsOnPlatform === 1 ? "year" : "years"} since you joined Tracked.
        Thank you for being part of our community!
      </Paragraph>

      {(totalWorkouts || totalVolume) && (
        <Section
          style={{
            backgroundColor: colors.surface,
            padding: spacing.lg,
            borderRadius: "8px",
            margin: `${spacing.lg} 0`,
            border: `1px solid ${colors.border}`,
            textAlign: "center" as const,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase" as const,
              letterSpacing: "0.5px",
              margin: "0 0 16px 0",
            }}
          >
            Your Journey So Far
          </Text>
          {totalWorkouts && (
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: "32px",
                fontWeight: "bold",
                margin: "0 0 4px 0",
              }}
            >
              {totalWorkouts.toLocaleString()}
            </Text>
          )}
          {totalWorkouts && (
            <Text
              style={{
                color: colors.textSecondary,
                fontSize: "14px",
                margin: "0 0 16px 0",
              }}
            >
              workouts logged
            </Text>
          )}
          {totalVolume && (
            <>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: "32px",
                  fontWeight: "bold",
                  margin: "0 0 4px 0",
                }}
              >
                {totalVolume}
              </Text>
              <Text
                style={{
                  color: colors.textSecondary,
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                total volume lifted
              </Text>
            </>
          )}
        </Section>
      )}

      <Paragraph>
        Here's to another year of crushing goals and getting stronger. Keep up
        the amazing work!
      </Paragraph>

      <PrimaryButton href={appUrl}>View Your Progress</PrimaryButton>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default AnniversaryEmail;
