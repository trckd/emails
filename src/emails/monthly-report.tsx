import * as React from 'react';
import { Section, Text, Row, Column, Hr } from '@react-email/components';
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
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import {
  formatNumber,
  formatDecimal,
  formatMonthYear,
} from '../i18n/format.js';
import { monthlyReportMessages } from './monthly-report.messages.js';

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
  locale?: Locale;
}

const defaultMetrics: MonthlyMetrics = {
  accountId: 1,
  email: 'user@example.com',
  reportMonth: '2025-11-01',
  avgStepCount: 8547,
  avgBodyweight: 175.3,
  bodyweightChange: -2.1,
  avgSessionsPerWeek: 4.2,
  totalSetsTracked: 432,
  totalSessionsTracked: 18,
  topMuscleGroups: [
    { muscleGroupId: '1', name: 'Chest', sets: 89 },
    { muscleGroupId: '2', name: 'Back', sets: 76 },
    { muscleGroupId: '3', name: 'Legs', sets: 65 },
    { muscleGroupId: '4', name: 'Shoulders', sets: 54 },
    { muscleGroupId: '5', name: 'Arms', sets: 43 },
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
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl,
  locale = 'en',
}: MonthlyReportEmailProps) => {
  const t = monthlyReportMessages[locale];
  const monthName = formatMonthYear(metrics.reportMonth, locale);

  // Locale-aware formatters that fall back to the catalog's "N/A" for missing data.
  const fmtNumber = (num: number | null): string =>
    num === null ? t.notAvailable : formatNumber(num, locale);
  const fmtDecimal = (num: number | null, decimals = 1): string =>
    num === null ? t.notAvailable : formatDecimal(num, locale, decimals);

  // Use explicit null checks (not truthiness): 0 is a valid value for these
  // metrics (e.g. bodyweightChange === 0 means "no change"), and `{0 && <X/>}`
  // would both drop the row and render a stray "0".
  const hasBodyweightData =
    metrics.avgBodyweight !== null || metrics.bodyweightChange !== null;
  const hasSessionInsights =
    metrics.avgReadinessEnergy !== null ||
    metrics.avgReadinessMood !== null ||
    metrics.avgSessionSatisfaction !== null ||
    metrics.avgSessionProgress !== null;

  return (
    <EmailLayout preview={t.preview(monthName)}>
      <EmailHeader />

      <HighlightBanner>
        <Text
          style={{
            color: '#ffffff',
            margin: '0',
            fontSize: '20px',
            fontWeight: '700' as const,
          }}
        >
          {t.reportTitle(monthName)}
        </Text>
      </HighlightBanner>

      {/* Activity Overview */}
      <Section style={{ marginBottom: '24px' }}>
        <SectionHeading>{t.activityOverview}</SectionHeading>
        <MetricCard
          label={t.avgDailySteps}
          value={fmtNumber(metrics.avgStepCount)}
          change={
            <ChangeIndicator
              value={metrics.avgStepCount}
              previousValue={previousMetrics?.avgStepCount ?? null}
            />
          }
        />
      </Section>

      {/* Bodyweight Progress */}
      {hasBodyweightData && (
        <>
          <Hr style={{ borderColor: colors.border, margin: '24px 0' }} />
          <Section style={{ marginBottom: '24px' }}>
            <SectionHeading>{t.bodyweightTrends}</SectionHeading>
            <Row>
              <Column style={{ width: '48%' }}>
                <MetricCard
                  label={t.avgBodyweight}
                  value={
                    metrics.avgBodyweight !== null
                      ? t.weightWithUnit(fmtDecimal(metrics.avgBodyweight, 1))
                      : t.notAvailable
                  }
                  size="small"
                  change={
                    <ChangeIndicator
                      value={metrics.avgBodyweight}
                      previousValue={previousMetrics?.avgBodyweight ?? null}
                    />
                  }
                />
              </Column>
              <Column style={{ width: '4%' }} />
              <Column style={{ width: '48%' }}>
                <MetricCard
                  label={t.monthlyChange}
                  value={
                    metrics.bodyweightChange !== null
                      ? t.changeWithUnit(
                          (metrics.bodyweightChange >= 0 ? '+' : '') +
                            fmtDecimal(metrics.bodyweightChange, 1)
                        )
                      : t.notAvailable
                  }
                  size="small"
                />
              </Column>
            </Row>
          </Section>
        </>
      )}

      {/* Training Summary */}
      <Hr style={{ borderColor: colors.border, margin: '24px 0' }} />
      <Section style={{ marginBottom: '24px' }}>
        <SectionHeading>{t.trainingSummary}</SectionHeading>
        <Row>
          <Column style={{ width: '48%' }}>
            <MetricCard
              label={t.sessionsPerWeek}
              value={fmtDecimal(metrics.avgSessionsPerWeek, 1)}
              size="small"
              change={
                <ChangeIndicator
                  value={metrics.avgSessionsPerWeek}
                  previousValue={previousMetrics?.avgSessionsPerWeek ?? null}
                />
              }
            />
          </Column>
          <Column style={{ width: '4%' }} />
          <Column style={{ width: '48%' }}>
            <MetricCard
              label={t.totalSessions}
              value={fmtNumber(metrics.totalSessionsTracked)}
              size="small"
              change={
                <ChangeIndicator
                  value={metrics.totalSessionsTracked}
                  previousValue={previousMetrics?.totalSessionsTracked ?? null}
                />
              }
            />
          </Column>
        </Row>
        <Section style={{ marginTop: '10px' }}>
          <MetricCard
            label={t.totalSetsTracked}
            value={fmtNumber(metrics.totalSetsTracked)}
            change={
              <ChangeIndicator
                value={metrics.totalSetsTracked}
                previousValue={previousMetrics?.totalSetsTracked ?? null}
              />
            }
          />
        </Section>
      </Section>

      {/* Top Muscle Groups */}
      {metrics.topMuscleGroups && metrics.topMuscleGroups.length > 0 && (
        <>
          <Hr style={{ borderColor: colors.border, margin: '24px 0' }} />
          <Section style={{ marginBottom: '24px' }}>
            <SectionHeading>{t.topMuscleGroups}</SectionHeading>
            <ListBox>
              {metrics.topMuscleGroups.map((mg, idx) => (
                <DataRow
                  key={mg.muscleGroupId}
                  label={t.muscleGroupLabel(idx + 1, mg.name)}
                  value={t.setsValue(fmtNumber(mg.sets))}
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
          <Hr style={{ borderColor: colors.border, margin: '24px 0' }} />
          <Section style={{ marginBottom: '24px' }}>
            <SectionHeading>{t.sessionInsights}</SectionHeading>
            <ListBox>
              {metrics.avgReadinessEnergy !== null && (
                <DataRow
                  label={t.avgReadinessEnergy}
                  value={t.ratingValue(fmtDecimal(metrics.avgReadinessEnergy))}
                />
              )}
              {metrics.avgReadinessMood !== null && (
                <DataRow
                  label={t.avgReadinessMood}
                  value={t.ratingValue(fmtDecimal(metrics.avgReadinessMood))}
                />
              )}
              {metrics.avgSessionSatisfaction !== null && (
                <DataRow
                  label={t.avgSessionSatisfaction}
                  value={t.ratingValue(
                    fmtDecimal(metrics.avgSessionSatisfaction)
                  )}
                />
              )}
              {metrics.avgSessionProgress !== null && (
                <DataRow
                  label={t.avgSessionProgress}
                  value={t.ratingValue(fmtDecimal(metrics.avgSessionProgress))}
                  isLast
                />
              )}
            </ListBox>
          </Section>
        </>
      )}

      <Hr style={{ borderColor: colors.border, margin: '24px 0' }} />
      <SmallText muted>{t.managePreferences}</SmallText>

      <EmailFooter
        websiteUrl={websiteUrl}
        marketing
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

export default MonthlyReportEmail;
