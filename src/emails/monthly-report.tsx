import React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface MuscleGroup {
  muscleGroupId: string;
  name: string;
  sets: number;
}

interface MonthlyMetrics {
  accountId: number;
  email: string;
  reportMonth: string; // YYYY-MM-01

  // Metrics
  avgStepCount: number | null;
  avgBodyweight: number | null;
  bodyweightChange: number | null;
  avgSessionsPerWeek: number | null;
  totalSetsTracked: number | null;
  totalSessionsTracked: number | null;
  topMuscleGroups: Array<MuscleGroup> | null;

  // Survey metrics (optional)
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
}

const baseUrl = "https://tracked.gg/android-chrome-192x192.png";

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
}: MonthlyReportEmailProps) => {
  const monthName = getMonthName(metrics.reportMonth);

  const getChangeIndicator = (
    current: number | null,
    previous: number | null,
  ): React.ReactNode => {
    if (current === null || previous === null || !previousMetrics) return null;
    const diff = current - previous;
    if (diff > 0) {
      return (
        <Text style={changeIndicatorPositive}>
          ▲ {formatDecimal(Math.abs(diff))}
        </Text>
      );
    }
    if (diff < 0) {
      return (
        <Text style={changeIndicatorNegative}>
          ▼ {formatDecimal(Math.abs(diff))}
        </Text>
      );
    }
    return <Text style={changeIndicatorNeutral}>—</Text>;
  };

  const hasBodyweightData = metrics.avgBodyweight || metrics.bodyweightChange;
  const hasSessionInsights =
    metrics.avgReadinessEnergy ||
    metrics.avgReadinessMood ||
    metrics.avgSessionSatisfaction ||
    metrics.avgSessionProgress;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light only" />
      </Head>
      <Preview>Your {monthName} Training Report - Your monthly fitness journey at a glance</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            {/* Header */}
            <table style={{ marginBottom: "8px" }}>
              <tr>
                <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
                  <Img src={`${baseUrl}`} width="28" height="28" alt="Tracked" />
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <Text style={logo}>TRACKED</Text>
                </td>
              </tr>
            </table>

            {/* Green Section */}
            <Section style={headerSection}>
              <Text style={headerTitle}>Your {monthName} Training Report</Text>
            </Section>

            <Hr style={hr} />

            {/* Activity Overview */}
            <Section style={sectionContainer}>
              <Text style={sectionHeading}>Activity Overview</Text>
              <Section style={metricBox}>
                <Text style={metricLabel}>Average Daily Steps</Text>
                <table>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <Text style={metricValue}>
                        {formatNumber(metrics.avgStepCount)}
                      </Text>
                    </td>
                    <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
                      {getChangeIndicator(
                        metrics.avgStepCount,
                        previousMetrics?.avgStepCount || null,
                      )}
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            {/* Bodyweight Progress */}
            {hasBodyweightData && (
              <>
                <Hr style={hr} />
                <Section style={sectionContainer}>
                  <Text style={sectionHeading}>Bodyweight Trends</Text>
                  <Row>
                    <Column style={{ width: "48%" }}>
                      <Section style={metricBox}>
                        <Text style={metricLabel}>Average Bodyweight</Text>
                        <table>
                          <tr>
                            <td style={{ verticalAlign: "middle" }}>
                              <Text style={metricValueSmall}>
                                {formatDecimal(metrics.avgBodyweight, 1)} lbs
                              </Text>
                            </td>
                            <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
                              {getChangeIndicator(
                                metrics.avgBodyweight,
                                previousMetrics?.avgBodyweight || null,
                              )}
                            </td>
                          </tr>
                        </table>
                      </Section>
                    </Column>
                    <Column style={{ width: "4%" }} />
                    <Column style={{ width: "48%" }}>
                      <Section style={metricBox}>
                        <Text style={metricLabel}>Monthly Change</Text>
                        <Text style={metricValueSmall}>
                          {metrics.bodyweightChange !== null
                            ? (metrics.bodyweightChange >= 0 ? "+" : "") +
                              formatDecimal(metrics.bodyweightChange, 1) +
                              " lbs"
                            : "N/A"}
                        </Text>
                      </Section>
                    </Column>
                  </Row>
                </Section>
              </>
            )}

            {/* Training Summary */}
            <Hr style={hr} />
            <Section style={sectionContainer}>
              <Text style={sectionHeading}>Training Summary</Text>
              <Row>
                <Column style={{ width: "48%" }}>
                  <Section style={metricBox}>
                    <Text style={metricLabel}>Sessions Per Week</Text>
                    <table>
                      <tr>
                        <td style={{ verticalAlign: "middle" }}>
                          <Text style={metricValueSmall}>
                            {formatDecimal(metrics.avgSessionsPerWeek, 1)}
                          </Text>
                        </td>
                        <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
                          {getChangeIndicator(
                            metrics.avgSessionsPerWeek,
                            previousMetrics?.avgSessionsPerWeek || null,
                          )}
                        </td>
                      </tr>
                    </table>
                  </Section>
                </Column>
                <Column style={{ width: "4%" }} />
                <Column style={{ width: "48%" }}>
                  <Section style={metricBox}>
                    <Text style={metricLabel}>Total Sessions</Text>
                    <table>
                      <tr>
                        <td style={{ verticalAlign: "middle" }}>
                          <Text style={metricValueSmall}>
                            {formatNumber(metrics.totalSessionsTracked)}
                          </Text>
                        </td>
                        <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
                          {getChangeIndicator(
                            metrics.totalSessionsTracked,
                            previousMetrics?.totalSessionsTracked || null,
                          )}
                        </td>
                      </tr>
                    </table>
                  </Section>
                </Column>
              </Row>
              <Section style={{ ...metricBox, marginTop: "10px" }}>
                <Text style={metricLabel}>Total Sets Tracked</Text>
                <table>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <Text style={metricValue}>
                        {formatNumber(metrics.totalSetsTracked)}
                      </Text>
                    </td>
                    <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
                      {getChangeIndicator(
                        metrics.totalSetsTracked,
                        previousMetrics?.totalSetsTracked || null,
                      )}
                    </td>
                  </tr>
                </table>
              </Section>
            </Section>

            {/* Top Muscle Groups */}
            {metrics.topMuscleGroups && metrics.topMuscleGroups.length > 0 && (
              <>
                <Hr style={hr} />
                <Section style={sectionContainer}>
                  <Text style={sectionHeading}>
                    Top 5 Prioritized Muscle Groups
                  </Text>
                  <Section style={listBox}>
                    {metrics.topMuscleGroups.map((mg, idx) => (
                      <Row
                        key={mg.muscleGroupId}
                        style={{
                          ...listItem,
                          borderBottom:
                            idx < metrics.topMuscleGroups!.length - 1
                              ? "1px solid #0f172a"
                              : "none",
                        }}
                      >
                        <Column>
                          <Text style={listItemName}>
                            {idx + 1}. {mg.name}
                          </Text>
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <Text style={listItemValue}>
                            {formatNumber(mg.sets)} sets
                          </Text>
                        </Column>
                      </Row>
                    ))}
                  </Section>
                </Section>
              </>
            )}

            {/* Session Insights */}
            {hasSessionInsights && (
              <>
                <Hr style={hr} />
                <Section style={sectionContainer}>
                  <Text style={sectionHeading}>Session Insights</Text>
                  <Section style={listBox}>
                    {metrics.avgReadinessEnergy && (
                      <Row style={insightRow}>
                        <Column>
                          <Text style={insightLabel}>
                            Avg Readiness Energy
                          </Text>
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <Text style={insightValue}>
                            {formatDecimal(metrics.avgReadinessEnergy)}/10
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {metrics.avgReadinessMood && (
                      <Row style={insightRow}>
                        <Column>
                          <Text style={insightLabel}>Avg Readiness Mood</Text>
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <Text style={insightValue}>
                            {formatDecimal(metrics.avgReadinessMood)}/10
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {metrics.avgSessionSatisfaction && (
                      <Row style={insightRow}>
                        <Column>
                          <Text style={insightLabel}>
                            Avg Session Satisfaction
                          </Text>
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <Text style={insightValue}>
                            {formatDecimal(metrics.avgSessionSatisfaction)}/10
                          </Text>
                        </Column>
                      </Row>
                    )}
                    {metrics.avgSessionProgress && (
                      <Row style={insightRow}>
                        <Column>
                          <Text style={insightLabel}>
                            Avg Session Progress
                          </Text>
                        </Column>
                        <Column style={{ textAlign: "right" }}>
                          <Text style={insightValue}>
                            {formatDecimal(metrics.avgSessionProgress)}/10
                          </Text>
                        </Column>
                      </Row>
                    )}
                  </Section>
                </Section>
              </>
            )}

            {/* Footer Message */}
            <Hr style={hr} />
            <Text style={footerMessageSmall}>
              You can manage your email preferences in the Tracked app
              settings.
            </Text>

            <Hr style={hr} />

            {/* Footer Links */}
            <Text style={footer}>
              Copyright © {new Date().getFullYear()} Tracked Training Platform Inc. <br /> 9101 Horne
              Street, Vancouver, BC
            </Text>

            <Section style={{ textAlign: "center" }}>
              <Link
                href={`${websiteUrl}/terms`}
                style={{ ...footer, paddingRight: 10 }}
              >
                Terms
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href={`${websiteUrl}/privacy`}
                style={{ ...footer, paddingRight: 10 }}
              >
                Privacy
              </Link>
              <Link style={{ ...footer, paddingRight: 10 }}> | </Link>
              <Link
                href={`${websiteUrl}/support`}
                style={footer}
              >
                Support
              </Link>
            </Section>

            <Text style={footer}>
              This is a service notification by the Tracked Training Platform.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#020617", // slate-950
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
};

const container = {
  backgroundColor: "#020617", // slate-950
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const box = {
  padding: "0 12px 24px 12px",
};

const logo = {
  fontSize: "28px",
  fontWeight: "900",
  fontFamily:
    "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  color: "#ffffff",
  margin: "0",
  lineHeight: "32px",
  letterSpacing: "0.5px",
};

const headerSection = {
  backgroundColor: "#4ade80", // green-400
  padding: "10px 20px",
  textAlign: "center" as const,
  borderRadius: "8px",
  margin: "20px 0",
};

const headerTitle = {
  color: "#020617", // slate-950
  margin: "0",
  fontSize: "20px",
  fontWeight: "700",
};

const hr = {
  borderColor: "#0f172a", // slate-900
  margin: "24px 0",
  borderWidth: "1px",
};

const sectionContainer = {
  marginBottom: "20px",
};

const sectionHeading = {
  color: "#ffffff", // white
  fontSize: "20px",
  margin: "0 0 10px 0",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const metricBox = {
  backgroundColor: "rgba(15, 23, 42, 0.5)", // slate-900/50
  padding: "5px 15px 15px 15px",
  borderRadius: "8px",
  border: "1px solid #1e293b", // slate-800
};

const metricLabel = {
  color: "#94a3b8", // slate-400
  fontSize: "14px",
  marginBottom: "2px",
};

const metricValue = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
};

const metricValueSmall = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0",
};

const changeIndicatorPositive = {
  color: "#4ade80", // green-400
  fontSize: "14px",
  margin: "0",
  verticalAlign: "middle" as const,
};

const changeIndicatorNegative = {
  color: "#f87171", // red-400
  fontSize: "14px",
  margin: "0",
  verticalAlign: "middle" as const,
};

const changeIndicatorNeutral = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0",
  verticalAlign: "middle" as const,
};

const listBox = {
  backgroundColor: "rgba(15, 23, 42, 0.5)", // slate-900/50
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #1e293b", // slate-800
};

const listItem = {
  padding: "12px",
};

const listItemName = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const listItemValue = {
  color: "#4ade80", // green-400
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const insightRow = {
  padding: "10px",
};

const insightLabel = {
  color: "#94a3b8", // slate-400
  fontSize: "14px",
  margin: "0",
};

const insightValue = {
  color: "#4ade80", // green-400
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const footerMessageSmall = {
  color: "#94a3b8", // slate-400
  fontSize: "12px",
  margin: "15px 0 0 0",
};

const footer = {
  color: "#94a3b8", // slate-400
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};

export default MonthlyReportEmail;
