import * as React from "react";
import { Section, Text, Row, Column, Hr } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  MetricCard,
  ChangeIndicator,
  ListBox,
  DataRow,
  SectionHeading,
  HighlightBanner,
  SmallText,
  colors,
} from "../components";

interface MuscleGroup {
  muscleGroupId: string;
  name: string;
  sets: number;
}

interface MonthlyMetrics {
  accountId: number;
  email: string;
  reportMonth: string;
  avgStepCount: number | null;
  avgBodyweight: number | null;
  bodyweightChange: number | null;
  avgSessionsPerWeek: number | null;
  totalSetsTracked: number | null;
  totalSessionsTracked: number | null;
  topMuscleGroups: Array<MuscleGroup> | null;
  avgReadinessEnergy: number | null;
  avgReadinessMood: number | null;
  avgReadinessStress: number | null;
  avgReadinessSoreness: number | null;
  avgReadinessSleep: number | null;
  avgSessionSatisfaction: number | null;
  avgSessionProgress: number | null;
  avgSessionMotivation: number | null;
  avgSessionEnjoyment: number | null;
}

interface PreviousMetrics {
  avgStepCount: number | null;
  avgBodyweight: number | null;
  bodyweightChange: number | null;
  avgSessionsPerWeek: number | null;
  totalSetsTracked: number | null;
  totalSessionsTracked: number | null;
}

interface MonthlyReportEmailProps {
  metrics?: MonthlyMetrics;
  previousMetrics?: PreviousMetrics | null;
  websiteUrl?: string;
  unsubscribeUrl?: string;
}

function formatNumber(num: number | null): string {
  if (num === null) return "N/A";
  return num.toLocaleString();
}

function formatDecimal(num: number | null, decimals: number = 1): string {
  if (num === null) return "N/A";
  return num.toFixed(decimals);
}

function getMonthName(reportMonth: string): string {
  const date = new Date(reportMonth);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const defaultMetrics: MonthlyMetrics = {
  accountId: 1,
  email: "user@example.com",
  reportMonth: "2025-11-01",
  avgStepCount: 8547,
  avgBodyweight: 175.3,
  bodyweightChange: -2.1,
  avgSessionsPerWeek: 4.2,
  totalSetsTracked: 432,
  totalSessionsTracked: 18,
  topMuscleGroups: [
    { muscleGroupId: "1", name: "Chest", sets: 89 },
    { muscleGroupId: "2", name: "Back", sets: 76 },
    { muscleGroupId: "3", name: "Legs", sets: 65 },
    { muscleGroupId: "4", name: "Shoulders", sets: 54 },
    { muscleGroupId: "5", name: "Arms", sets: 43 },
  ],
  avgReadinessEnergy: 7.8,
  avgReadinessMood: 8.2,
  avgReadinessStress: 4.3,
  avgReadinessSoreness: 5.6,
  avgReadinessSleep: 7.1,
  avgSessionSatisfaction: 8.4,
  avgSessionProgress: 7.9,
  avgSessionMotivation: 8.1,
  avgSessionEnjoyment: 8.7,
};

const defaultPreviousMetrics: PreviousMetrics = {
  avgStepCount: 7892,
  avgBodyweight: 177.4,
  bodyweightChange: 0.5,
  avgSessionsPerWeek: 3.8,
  totalSetsTracked: 389,
  totalSessionsTracked: 16,
};

export const MonthlyReportEmail = ({
  metrics = defaultMetrics,
  previousMetrics = defaultPreviousMetrics,
  websiteUrl = "https://tracked.gg",
  unsubscribeUrl,
}: MonthlyReportEmailProps) => {
  const monthName = getMonthName(metrics.reportMonth);

  const hasBodyweightData = metrics.avgBodyweight || metrics.bodyweightChange;
  const hasSessionInsights =
    metrics.avgReadinessEnergy ||
    metrics.avgReadinessMood ||
    metrics.avgSessionSatisfaction ||
    metrics.avgSessionProgress;

  return (
    <EmailLayout
      preview={`Your ${monthName} Training Report - Your monthly fitness journey at a glance`}
    >
      <EmailHeader />

      <HighlightBanner>
        <Text
          style={{
            color: "#ffffff",
            margin: "0",
            fontSize: "20px",
            fontWeight: "700" as const,
          }}
        >
          Your {monthName} Training Report
        </Text>
      </HighlightBanner>

      {/* Activity Overview */}
      <Section style={{ marginBottom: "24px" }}>
        <SectionHeading>Activity Overview</SectionHeading>
        <MetricCard
          label="Average Daily Steps"
          value={formatNumber(metrics.avgStepCount)}
          change={
            <ChangeIndicator
              value={metrics.avgStepCount}
              previousValue={previousMetrics?.avgStepCount || null}
            />
          }
        />
      </Section>

      {/* Bodyweight Progress */}
      {hasBodyweightData && (
        <>
          <Hr style={{ borderColor: colors.border, margin: "24px 0" }} />
          <Section style={{ marginBottom: "24px" }}>
            <SectionHeading>Bodyweight Trends</SectionHeading>
            <Row>
              <Column style={{ width: "48%" }}>
                <MetricCard
                  label="Average Bodyweight"
                  value={`${formatDecimal(metrics.avgBodyweight, 1)} lbs`}
                  size="small"
                  change={
                    <ChangeIndicator
                      value={metrics.avgBodyweight}
                      previousValue={previousMetrics?.avgBodyweight || null}
                    />
                  }
                />
              </Column>
              <Column style={{ width: "4%" }} />
              <Column style={{ width: "48%" }}>
                <MetricCard
                  label="Monthly Change"
                  value={
                    metrics.bodyweightChange !== null
                      ? (metrics.bodyweightChange >= 0 ? "+" : "") +
                        formatDecimal(metrics.bodyweightChange, 1) +
                        " lbs"
                      : "N/A"
                  }
                  size="small"
                />
              </Column>
            </Row>
          </Section>
        </>
      )}

      {/* Training Summary */}
      <Hr style={{ borderColor: colors.border, margin: "24px 0" }} />
      <Section style={{ marginBottom: "24px" }}>
        <SectionHeading>Training Summary</SectionHeading>
        <Row>
          <Column style={{ width: "48%" }}>
            <MetricCard
              label="Sessions Per Week"
              value={formatDecimal(metrics.avgSessionsPerWeek, 1)}
              size="small"
              change={
                <ChangeIndicator
                  value={metrics.avgSessionsPerWeek}
                  previousValue={previousMetrics?.avgSessionsPerWeek || null}
                />
              }
            />
          </Column>
          <Column style={{ width: "4%" }} />
          <Column style={{ width: "48%" }}>
            <MetricCard
              label="Total Sessions"
              value={formatNumber(metrics.totalSessionsTracked)}
              size="small"
              change={
                <ChangeIndicator
                  value={metrics.totalSessionsTracked}
                  previousValue={previousMetrics?.totalSessionsTracked || null}
                />
              }
            />
          </Column>
        </Row>
        <Section style={{ marginTop: "10px" }}>
          <MetricCard
            label="Total Sets Tracked"
            value={formatNumber(metrics.totalSetsTracked)}
            change={
              <ChangeIndicator
                value={metrics.totalSetsTracked}
                previousValue={previousMetrics?.totalSetsTracked || null}
              />
            }
          />
        </Section>
      </Section>

      {/* Top Muscle Groups */}
      {metrics.topMuscleGroups && metrics.topMuscleGroups.length > 0 && (
        <>
          <Hr style={{ borderColor: colors.border, margin: "24px 0" }} />
          <Section style={{ marginBottom: "24px" }}>
            <SectionHeading>Top 5 Prioritized Muscle Groups</SectionHeading>
            <ListBox>
              {metrics.topMuscleGroups.map((mg, idx) => (
                <DataRow
                  key={mg.muscleGroupId}
                  label={`${idx + 1}. ${mg.name}`}
                  value={`${formatNumber(mg.sets)} sets`}
                  isLast={idx === metrics.topMuscleGroups!.length - 1}
                />
              ))}
            </ListBox>
          </Section>
        </>
      )}

      {/* Session Insights */}
      {hasSessionInsights && (
        <>
          <Hr style={{ borderColor: colors.border, margin: "24px 0" }} />
          <Section style={{ marginBottom: "24px" }}>
            <SectionHeading>Session Insights</SectionHeading>
            <ListBox>
              {metrics.avgReadinessEnergy && (
                <DataRow
                  label="Avg Readiness Energy"
                  value={`${formatDecimal(metrics.avgReadinessEnergy)}/10`}
                />
              )}
              {metrics.avgReadinessMood && (
                <DataRow
                  label="Avg Readiness Mood"
                  value={`${formatDecimal(metrics.avgReadinessMood)}/10`}
                />
              )}
              {metrics.avgSessionSatisfaction && (
                <DataRow
                  label="Avg Session Satisfaction"
                  value={`${formatDecimal(metrics.avgSessionSatisfaction)}/10`}
                />
              )}
              {metrics.avgSessionProgress && (
                <DataRow
                  label="Avg Session Progress"
                  value={`${formatDecimal(metrics.avgSessionProgress)}/10`}
                  isLast
                />
              )}
            </ListBox>
          </Section>
        </>
      )}

      <Hr style={{ borderColor: colors.border, margin: "24px 0" }} />
      <SmallText muted>
        You can manage your email preferences in the Tracked app settings.
      </SmallText>

      <EmailFooter websiteUrl={websiteUrl} marketing unsubscribeUrl={unsubscribeUrl} />
    </EmailLayout>
  );
};

export default MonthlyReportEmail;
