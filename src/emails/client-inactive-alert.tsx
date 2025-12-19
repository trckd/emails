import * as React from "react";
import { Section, Img, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  colors,
  spacing,
  borderRadius,
} from "../components/index.js";

interface ClientInactiveAlertEmailProps {
  coachName: string;
  clientName: string;
  clientEmail: string;
  clientAvatarUrl?: string;
  daysInactive: number;
  lastWorkoutDate?: string;
  clientProfileUrl: string;
  messageUrl: string;
  websiteUrl?: string;
}

export const ClientInactiveAlertEmail = ({
  coachName = "Sarah Johnson",
  clientName = "Alex Thompson",
  clientEmail = "alex@example.com",
  clientAvatarUrl = "https://cdn.trckd.ca/avatars/default.png",
  daysInactive = 10,
  lastWorkoutDate = "December 9, 2024",
  clientProfileUrl = "tracked://app",
  messageUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
}: ClientInactiveAlertEmailProps) => {
  const displayName = clientName || clientEmail;

  const urgencyLevel = daysInactive >= 14 ? "high" : daysInactive >= 7 ? "medium" : "low";
  const urgencyColor = urgencyLevel === "high" ? colors.error : urgencyLevel === "medium" ? colors.warning : colors.textSecondary;

  return (
    <EmailLayout preview={`${displayName} hasn't logged a workout in ${daysInactive} days`}>
      <EmailHeader />

      <Heading>Client Activity Alert</Heading>
      <Paragraph>
        Hi {coachName}, one of your clients needs a check-in.
      </Paragraph>

      {/* Client Card */}
      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
        }}
      >
        <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
          <tr>
            {clientAvatarUrl && (
              <td style={{ width: "48px", verticalAlign: "top" }}>
                <Img
                  src={clientAvatarUrl}
                  width="48"
                  height="48"
                  alt={displayName}
                  style={{
                    borderRadius: "50%",
                    border: `2px solid ${colors.border}`,
                  }}
                />
              </td>
            )}
            <td style={{ paddingLeft: clientAvatarUrl ? "16px" : "0", verticalAlign: "top" }}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "0 0 4px 0",
                }}
              >
                {displayName}
              </Text>
              <Text
                style={{
                  color: urgencyColor,
                  fontSize: "14px",
                  fontWeight: "600",
                  margin: "0 0 4px 0",
                }}
              >
                {daysInactive} days inactive
              </Text>
              {lastWorkoutDate && (
                <Text
                  style={{
                    color: colors.textMuted,
                    fontSize: "13px",
                    margin: "0",
                  }}
                >
                  Last workout: {lastWorkoutDate}
                </Text>
              )}
            </td>
          </tr>
        </table>
      </Section>

      <Paragraph>
        A quick message can make a big difference. Consider reaching out to see
        how they're doing and if there's anything blocking their progress.
      </Paragraph>

      <PrimaryButton href={messageUrl}>Send a Message</PrimaryButton>

      <SecondaryButton href={clientProfileUrl}>View Profile</SecondaryButton>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default ClientInactiveAlertEmail;
