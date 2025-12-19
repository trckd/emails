import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  colors,
  spacing,
  borderRadius,
} from "../components";

interface NpsSurveyEmailProps {
  userName: string;
  surveyBaseUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

const ScoreButton = ({
  score,
  baseUrl,
}: {
  score: number;
  baseUrl: string;
}) => {
  const getColor = () => {
    if (score <= 6) return colors.error;
    if (score <= 8) return colors.warning;
    return colors.success;
  };

  return (
    <td style={{ padding: "0 2px" }}>
      <a
        href={`${baseUrl}?score=${score}`}
        style={{
          display: "inline-block",
          width: "36px",
          height: "36px",
          lineHeight: "36px",
          textAlign: "center" as const,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: borderRadius.sm,
          color: colors.textPrimary,
          fontSize: "14px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        {score}
      </a>
    </td>
  );
};

export const NpsSurveyEmail = ({
  userName = "Alex",
  surveyBaseUrl = "https://tracked.gg/survey/nps",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: NpsSurveyEmailProps) => {
  return (
    <EmailLayout preview="Quick question: How likely are you to recommend Tracked?">
      <EmailHeader />

      <Heading>Quick Feedback</Heading>
      <Paragraph>
        Hi {userName}, we'd love your honest feedback. It only takes 10 seconds!
      </Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center" as const,
            margin: "0 0 16px 0",
          }}
        >
          How likely are you to recommend Tracked to a friend?
        </Text>

        <table
          cellPadding="0"
          cellSpacing="0"
          style={{ margin: "0 auto" }}
        >
          <tr>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
              <ScoreButton key={score} score={score} baseUrl={surveyBaseUrl} />
            ))}
          </tr>
        </table>

        <table
          cellPadding="0"
          cellSpacing="0"
          style={{ width: "100%", marginTop: "12px" }}
        >
          <tr>
            <td style={{ textAlign: "left" as const }}>
              <Text
                style={{
                  color: colors.textMuted,
                  fontSize: "12px",
                  margin: "0",
                }}
              >
                Not likely
              </Text>
            </td>
            <td style={{ textAlign: "right" as const }}>
              <Text
                style={{
                  color: colors.textMuted,
                  fontSize: "12px",
                  margin: "0",
                }}
              >
                Very likely
              </Text>
            </td>
          </tr>
        </table>
      </Section>

      <Paragraph muted style={{ textAlign: "center" as const }}>
        Just click a number above - that's it! Your feedback helps us build a
        better app for everyone.
      </Paragraph>

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default NpsSurveyEmail;
