import * as React from 'react';
import { Section, Row, Column } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  SectionHeading,
  ListBox,
  DataRow,
  MetricCard,
  SmallText,
  TipBox,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatNumber } from '../i18n/format.js';
import { clientProgressReportMessages } from './client-progress-report.messages.js';

export interface ClientProgressReportInsight {
  /** Caller-localized metric label, e.g. "Average daily steps". */
  label: string;
  /** Caller-formatted value, e.g. "8,420" or "7h 35m". */
  value: string | number;
  /** Optional caller-localized supporting context. */
  detail?: string;
}

export interface ClientProgressReportEmailProps {
  /** Client's first name (or safe display name). */
  clientName: string;
  /** Coach's display or business name. */
  coachName: string;
  /**
   * Caller-formatted, localized period label,
   * e.g. "Jun 22 – Jun 28" or "June 2026".
   */
  periodLabel: string;
  /** Caller-formatted goal or focus shown above the report highlights. */
  goalTitle?: string;
  /** Ordered, caller-localized metrics relevant to the client's goal. */
  insights?: ClientProgressReportInsight[];
  /** Training summary — omit all three to hide the section. */
  workoutsCompleted?: number;
  totalSets?: number;
  prCount?: number;
  /** Caller-formatted lift lines, e.g. "Bench Press — 225 lbs × 5". */
  prHighlights?: string[];
  /**
   * Caller-formatted bodyweight strings in the CLIENT's display unit,
   * e.g. "-2.2 lbs" / "179.8 lbs". Omit both to hide the section.
   */
  bodyweightChange?: string;
  bodyweightCurrent?: string;
  /** Nutrition summary — omit to hide the section. */
  nutritionAdherencePct?: number;
  nutritionDaysLogged?: number;
  nutritionDaysInPeriod?: number;
  /** Check-in summary — omit to hide the section. */
  checkInsCompleted?: number;
  checkInsAssigned?: number;
  /** Tokenized public web view of the full report. */
  reportUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const ClientProgressReportEmail = ({
  clientName,
  coachName,
  periodLabel,
  goalTitle,
  insights,
  workoutsCompleted,
  totalSets,
  prCount,
  prHighlights,
  bodyweightChange,
  bodyweightCurrent,
  nutritionAdherencePct,
  nutritionDaysLogged,
  nutritionDaysInPeriod,
  checkInsCompleted,
  checkInsAssigned,
  reportUrl,
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: ClientProgressReportEmailProps) => {
  const t = clientProgressReportMessages[locale];

  const hasTraining = workoutsCompleted !== undefined && workoutsCompleted > 0;
  const hasBodyweight =
    bodyweightChange !== undefined || bodyweightCurrent !== undefined;
  const hasNutrition = nutritionDaysLogged !== undefined;
  const hasCheckIns = checkInsAssigned !== undefined && checkInsAssigned > 0;

  return (
    <EmailLayout preview={t.preview(coachName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(clientName, coachName, periodLabel)}</Paragraph>

      {goalTitle && (
        <TipBox title={t.goalFocusTitle} locale={locale}>
          {goalTitle}
        </TipBox>
      )}

      {insights && insights.length > 0 && (
        <Section style={{ margin: '24px 0' }}>
          <SectionHeading>{t.insightsTitle}</SectionHeading>
          {insights.map((insight, index) => {
            if (index % 2 !== 0) return null;

            const nextInsight = insights[index + 1];
            return (
              <Row
                key={`${insight.label}-${index}`}
                style={{ marginBottom: '12px' }}
              >
                <Column
                  style={{
                    width: nextInsight ? '50%' : '100%',
                    paddingRight: nextInsight ? '6px' : '0',
                    verticalAlign: 'top',
                  }}
                >
                  <MetricCard
                    label={insight.label}
                    value={insight.value}
                    detail={insight.detail}
                  />
                </Column>
                {nextInsight && (
                  <Column
                    style={{
                      width: '50%',
                      paddingLeft: '6px',
                      verticalAlign: 'top',
                    }}
                  >
                    <MetricCard
                      label={nextInsight.label}
                      value={nextInsight.value}
                      detail={nextInsight.detail}
                    />
                  </Column>
                )}
              </Row>
            );
          })}
        </Section>
      )}

      {hasTraining && (
        <Section style={{ margin: '24px 0' }}>
          <Row>
            <Column style={{ width: '33%' }}>
              <MetricCard
                label={t.labelWorkouts}
                value={formatNumber(workoutsCompleted, locale)}
              />
            </Column>
            <Column style={{ width: '33%' }}>
              <MetricCard
                label={t.labelSets}
                value={
                  totalSets !== undefined
                    ? formatNumber(totalSets, locale)
                    : '-'
                }
              />
            </Column>
            <Column style={{ width: '33%' }}>
              <MetricCard
                label={t.labelNewPRs}
                value={
                  prCount !== undefined ? formatNumber(prCount, locale) : '-'
                }
              />
            </Column>
          </Row>
        </Section>
      )}

      {prHighlights && prHighlights.length > 0 && (
        <Section style={{ margin: '24px 0' }}>
          <SectionHeading>{t.prHighlightsTitle}</SectionHeading>
          <ListBox>
            {prHighlights.map((highlight, index) => (
              <DataRow
                key={highlight}
                label={highlight}
                value=""
                isLast={index === prHighlights.length - 1}
              />
            ))}
          </ListBox>
        </Section>
      )}

      {hasBodyweight && (
        <Section style={{ margin: '24px 0' }}>
          <SectionHeading>{t.bodyweightTitle}</SectionHeading>
          <ListBox>
            {bodyweightChange !== undefined && (
              <DataRow
                label={t.bodyweightChangeLabel}
                value={bodyweightChange}
                isLast={bodyweightCurrent === undefined}
              />
            )}
            {bodyweightCurrent !== undefined && (
              <DataRow
                label={t.bodyweightCurrentLabel}
                value={bodyweightCurrent}
                isLast
              />
            )}
          </ListBox>
        </Section>
      )}

      {hasNutrition && (
        <Section style={{ margin: '24px 0' }}>
          <SectionHeading>{t.nutritionTitle}</SectionHeading>
          <ListBox>
            <DataRow
              label={t.nutritionDaysLoggedLabel}
              value={
                nutritionDaysInPeriod !== undefined
                  ? `${formatNumber(nutritionDaysLogged, locale)} / ${formatNumber(nutritionDaysInPeriod, locale)}`
                  : formatNumber(nutritionDaysLogged, locale)
              }
              isLast={nutritionAdherencePct === undefined}
            />
            {nutritionAdherencePct !== undefined && (
              <DataRow
                label={t.nutritionAdherenceLabel}
                value={`${formatNumber(nutritionAdherencePct, locale)}%`}
                isLast
              />
            )}
          </ListBox>
        </Section>
      )}

      {hasCheckIns && (
        <Section style={{ margin: '24px 0' }}>
          <SectionHeading>{t.checkInsTitle}</SectionHeading>
          <ListBox>
            <DataRow
              label={t.checkInsCompletedLabel}
              value={`${formatNumber(checkInsCompleted ?? 0, locale)} / ${formatNumber(checkInsAssigned, locale)}`}
              isLast
            />
          </ListBox>
        </Section>
      )}

      <PrimaryButton href={reportUrl}>{t.cta}</PrimaryButton>

      <SmallText style={{ textAlign: 'center' as const }}>
        {t.closing(coachName)}
      </SmallText>

      <EmailFooter
        websiteUrl={websiteUrl}
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

// Sample data for the `email dev` preview server only. This intentionally lives
// here rather than in the destructuring defaults above: parameter defaults are
// applied whenever a prop is omitted, which would make `workoutsCompleted`,
// `bodyweightChange`, `nutritionDaysLogged`, `checkInsAssigned`, etc. never be
// `undefined` and thus render every section permanently — breaking the
// documented "omit … to hide the section" behavior. `PreviewProps` is read by
// the preview server but is not part of a real send.
ClientProgressReportEmail.PreviewProps = {
  clientName: 'Alex',
  coachName: 'Coach Sam',
  periodLabel: 'Jun 22 – Jun 28',
  goalTitle: 'Build endurance for a half marathon',
  insights: [
    { label: 'Cardio minutes', value: '135', detail: '3 sessions' },
    { label: 'Average sleep', value: '7h 35m', detail: '6 nights tracked' },
  ],
  workoutsCompleted: 4,
  totalSets: 62,
  prCount: 2,
  prHighlights: ['Bench Press — 225 lbs × 5', 'Squat — 315 lbs × 3'],
  bodyweightChange: '-2.2 lbs',
  bodyweightCurrent: '179.8 lbs',
  nutritionAdherencePct: 75,
  nutritionDaysLogged: 5,
  nutritionDaysInPeriod: 7,
  checkInsCompleted: 1,
  checkInsAssigned: 1,
  reportUrl: 'https://app.tracked.gg/v/report/example-token',
} satisfies ClientProgressReportEmailProps;

export default ClientProgressReportEmail;
