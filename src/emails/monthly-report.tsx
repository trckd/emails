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
            <Row style={{ marginBottom: "8px" }}>
              <Column style={{ width: "auto", verticalAlign: "middle" }}>
                <Img src={`${baseUrl}`} width="28" height="28" alt="Tracked" />
              </Column>
              <Column
                style={{
                  width: "auto",
                  verticalAlign: "middle",
                  paddingLeft: "4px",
                }}
              >
                <Text style={logo}>TRACKED</Text>
              </Column>
            </Row>

            {/* Purple Gradient Section */}
            <Section style={headerSection}>
              <Text style={headerTitle}>Your {monthName} Training Report</Text>
              <Text style={headerSubtitle}>
                Your monthly fitness journey at a glance
              </Text>
            </Section>

            <Hr style={hr} />

            {/* Activity Overview */}
            <Section style={sectionContainer}>
              <Text style={sectionHeading}>📊 Activity Overview</Text>
              <Section style={metricBox}>
                <Text style={metricLabel}>Average Daily Steps</Text>
                <Row>
                  <Column>
                    <Text style={metricValue}>
                      {formatNumber(metrics.avgStepCount)}
                    </Text>
                  </Column>
                  {getChangeIndicator(
                    metrics.avgStepCount,
                    previousMetrics?.avgStepCount || null,
                  )}
                </Row>
              </Section>
            </Section>

            {/* Bodyweight Progress */}
            {hasBodyweightData && (
              <>
                <Hr style={hr} />
                <Section style={sectionContainer}>
                  <Text style={sectionHeading}>⚖️ Bodyweight Trends</Text>
                  <Row>
                    <Column style={{ width: "48%" }}>
                      <Section style={metricBox}>
                        <Text style={metricLabel}>Average Bodyweight</Text>
                        <Row>
                          <Column>
                            <Text style={metricValueSmall}>
                              {formatDecimal(metrics.avgBodyweight, 1)} lbs
                            </Text>
                          </Column>
                          {getChangeIndicator(
                            metrics.avgBodyweight,
                            previousMetrics?.avgBodyweight || null,
                          )}
                        </Row>
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
              <Text style={sectionHeading}>💪 Training Summary</Text>
              <Row>
                <Column style={{ width: "48%" }}>
                  <Section style={metricBox}>
                    <Text style={metricLabel}>Sessions Per Week</Text>
                    <Row>
                      <Column>
                        <Text style={metricValueSmall}>
                          {formatDecimal(metrics.avgSessionsPerWeek, 1)}
                        </Text>
                      </Column>
                      {getChangeIndicator(
                        metrics.avgSessionsPerWeek,
                        previousMetrics?.avgSessionsPerWeek || null,
                      )}
                    </Row>
                  </Section>
                </Column>
                <Column style={{ width: "4%" }} />
                <Column style={{ width: "48%" }}>
                  <Section style={metricBox}>
                    <Text style={metricLabel}>Total Sessions</Text>
                    <Row>
                      <Column>
                        <Text style={metricValueSmall}>
                          {formatNumber(metrics.totalSessionsTracked)}
                        </Text>
                      </Column>
                      {getChangeIndicator(
                        metrics.totalSessionsTracked,
                        previousMetrics?.totalSessionsTracked || null,
                      )}
                    </Row>
                  </Section>
                </Column>
              </Row>
              <Section style={{ ...metricBox, marginTop: "10px" }}>
                <Text style={metricLabel}>Total Sets Tracked</Text>
                <Row>
                  <Column>
                    <Text style={metricValue}>
                      {formatNumber(metrics.totalSetsTracked)}
                    </Text>
                  </Column>
                  {getChangeIndicator(
                    metrics.totalSetsTracked,
                    previousMetrics?.totalSetsTracked || null,
                  )}
                </Row>
              </Section>
            </Section>

            {/* Top Muscle Groups */}
            {metrics.topMuscleGroups && metrics.topMuscleGroups.length > 0 && (
              <>
                <Hr style={hr} />
                <Section style={sectionContainer}>
                  <Text style={sectionHeading}>
                    🎯 Top 5 Prioritized Muscle Groups
                  </Text>
                  <Section style={listBox}>
                    {metrics.topMuscleGroups.map((mg, idx) => (
                      <Row
                        key={mg.muscleGroupId}
                        style={{
                          ...listItem,
                          borderBottom:
                            idx < metrics.topMuscleGroups!.length - 1
                              ? "1px solid #334155"
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
                  <Text style={sectionHeading}>📈 Session Insights</Text>
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
            <Section style={footerMessageBox}>
              <Text style={footerMessage}>
                Keep up the great work! Every rep, every session, every step
                counts towards your goals.
              </Text>
              <Text style={footerMessageSmall}>
                You can manage your email preferences in the Tracked app
                settings.
              </Text>
            </Section>

            <Hr style={hr} />

            {/* Footer Links */}
            <Text style={footer}>
              Copyright © {new Date().getFullYear()} Tracked Training Platform Inc. <br /> 9101 Horne
              Street, Vancouver, BC
            </Text>

            <Container>
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
                style={{ ...footer, paddingRight: 10 }}
              >
                Support
              </Link>
            </Container>

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
  padding: "0 24px 24px 24px",
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
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "40px 20px",
  textAlign: "center" as const,
  borderRadius: "8px",
  margin: "20px 0",
};

const headerTitle = {
  color: "#ffffff",
  margin: "0",
  fontSize: "28px",
  fontWeight: "700",
};

const headerSubtitle = {
  color: "#e9d5ff",
  margin: "10px 0 0 0",
  fontSize: "16px",
};

const hr = {
  borderColor: "#4ade80", // green-400
  margin: "24px 0",
  borderWidth: "1px",
};

const sectionContainer = {
  marginBottom: "20px",
};

const sectionHeading = {
  color: "#ffffff",
  fontSize: "20px",
  margin: "0 0 20px 0",
  fontWeight: "600",
};

const metricBox = {
  backgroundColor: "#1e293b", // slate-800
  padding: "15px",
  borderRadius: "8px",
};

const metricLabel = {
  color: "#94a3b8", // slate-400
  fontSize: "14px",
  marginBottom: "5px",
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
  color: "#10b981",
  fontSize: "14px",
  marginLeft: "8px",
  display: "inline",
};

const changeIndicatorNegative = {
  color: "#ef4444",
  fontSize: "14px",
  marginLeft: "8px",
  display: "inline",
};

const changeIndicatorNeutral = {
  color: "#6b7280",
  fontSize: "14px",
  marginLeft: "8px",
  display: "inline",
};

const listBox = {
  backgroundColor: "#1e293b", // slate-800
  borderRadius: "8px",
  overflow: "hidden",
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
  color: "#e2e8f0", // slate-200
  fontSize: "16px",
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
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
};

const footerMessageBox = {
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#1e293b", // slate-800
  borderRadius: "8px",
  textAlign: "center" as const,
};

const footerMessage = {
  color: "#e2e8f0", // slate-200
  fontSize: "14px",
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
