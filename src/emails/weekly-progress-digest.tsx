import * as React from "react";
import { Section, Text, Row, Column } from "@react-email/components";
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
  borderRadius,
} from "../components/index.js";

interface WeeklyProgressDigestEmailProps {
  userName: string;
  weekStartDate: string;
  weekEndDate: string;
  workoutsCompleted: number;
  workoutsPlanned?: number;
  totalVolume?: string;
  volumeChange?: number;
  personalRecords?: number;
  streakDays?: number;
  topExercises?: Array<{ name: string; volume: string }>;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

const StatCard = ({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string | number;
  subtext?: string;
}) => (
  <Column
    style={{
      backgroundColor: colors.surface,
      padding: "16px",
      borderRadius: borderRadius.md,
      textAlign: "center" as const,
      border: `1px solid ${colors.border}`,
    }}
  >
    <Text
      style={{
        color: colors.textMuted,
        fontSize: "12px",
        textTransform: "uppercase" as const,
        letterSpacing: "0.5px",
        margin: "0 0 4px 0",
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        color: colors.textPrimary,
        fontSize: "24px",
        fontWeight: "bold",
        margin: "0",
      }}
    >
      {value}
    </Text>
    {subtext && (
      <Text
        style={{
          color: colors.accent,
          fontSize: "12px",
          margin: "4px 0 0 0",
        }}
      >
        {subtext}
      </Text>
    )}
  </Column>
);

export const WeeklyProgressDigestEmail = ({
  userName = "Alex",
  weekStartDate = "Dec 9",
  weekEndDate = "Dec 15",
  workoutsCompleted = 5,
  workoutsPlanned = 6,
  totalVolume = "125,000 lbs",
  volumeChange = 8,
  personalRecords = 2,
  streakDays = 12,
  topExercises = [
    { name: "Bench Press", volume: "15,200 lbs" },
    { name: "Squat", volume: "22,500 lbs" },
    { name: "Deadlift", volume: "18,000 lbs" },
  ],
  appUrl = "tracked://bodyweight",
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl = "https://tracked.gg/unsubscribe",
}: WeeklyProgressDigestEmailProps) => {
  const completionRate = workoutsPlanned
    ? Math.round((workoutsCompleted / workoutsPlanned) * 100)
    : null;

  const volumeChangeText =
    volumeChange !== undefined
      ? volumeChange > 0
        ? `+${volumeChange}% vs last week`
        : volumeChange < 0
          ? `${volumeChange}% vs last week`
          : "Same as last week"
      : undefined;

  return (
    <EmailLayout preview={`Your weekly training summary - ${weekStartDate} to ${weekEndDate}`}>
      <EmailHeader />

      <Heading>Your Week in Review</Heading>
      <Paragraph>
        Hi {userName}, here's your training summary for {weekStartDate} -{" "}
        {weekEndDate}.
      </Paragraph>

      {/* Stats Row */}
      <Section style={{ margin: `${spacing.lg} 0` }}>
        <Row>
          <StatCard
            label="Workouts"
            value={workoutsCompleted}
            subtext={completionRate ? `${completionRate}% complete` : undefined}
          />
          <Column style={{ width: "12px" }} />
          <StatCard
            label="Volume"
            value={totalVolume || "-"}
            subtext={volumeChangeText}
          />
          {personalRecords !== undefined && personalRecords > 0 && (
            <>
              <Column style={{ width: "12px" }} />
              <StatCard label="New PRs" value={personalRecords} />
            </>
          )}
        </Row>
      </Section>

      {/* Streak */}
      {streakDays !== undefined && streakDays > 0 && (
        <Section
          style={{
            backgroundColor: colors.surface,
            padding: spacing.md,
            borderRadius: borderRadius.md,
            margin: `${spacing.md} 0`,
            border: `1px solid ${colors.borderAccent}`,
            textAlign: "center" as const,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            {streakDays} Day Streak!
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              fontSize: "13px",
              margin: "4px 0 0 0",
            }}
          >
            Keep it going - consistency is key
          </Text>
        </Section>
      )}

      {/* Top Exercises */}
      {topExercises && topExercises.length > 0 && (
        <Section style={{ margin: `${spacing.lg} 0` }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: spacing.sm,
            }}
          >
            Top Exercises This Week
          </Text>
          {topExercises.map((exercise, index) => (
            <Row
              key={index}
              style={{
                padding: "8px 0",
                borderBottom:
                  index < topExercises.length - 1
                    ? `1px solid ${colors.border}`
                    : "none",
              }}
            >
              <Column>
                <Text
                  style={{
                    color: colors.textPrimary,
                    fontSize: "14px",
                    margin: "0",
                  }}
                >
                  {exercise.name}
                </Text>
              </Column>
              <Column style={{ textAlign: "right" as const }}>
                <Text
                  style={{
                    color: colors.textSecondary,
                    fontSize: "14px",
                    margin: "0",
                  }}
                >
                  {exercise.volume}
                </Text>
              </Column>
            </Row>
          ))}
        </Section>
      )}

      <PrimaryButton href={appUrl}>View Full Report</PrimaryButton>

      <Paragraph muted style={{ textAlign: "center" as const }}>
        Keep pushing - every workout brings you closer to your goals.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default WeeklyProgressDigestEmail;
