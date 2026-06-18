import * as React from 'react';
import { Section, Text, Row, Column } from '@react-email/components';
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
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatNumber } from '../i18n/format.js';
import { weeklyProgressDigestMessages } from './weekly-progress-digest.messages.js';

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
  locale?: Locale;
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
      padding: '16px',
      borderRadius: borderRadius.md,
      textAlign: 'center' as const,
      border: `1px solid ${colors.border}`,
    }}
  >
    <Text
      style={{
        color: colors.textMuted,
        fontSize: '12px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px',
        margin: '0 0 4px 0',
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        color: colors.textPrimary,
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '0',
      }}
    >
      {value}
    </Text>
    {subtext && (
      <Text
        style={{
          color: colors.accent,
          fontSize: '12px',
          margin: '4px 0 0 0',
        }}
      >
        {subtext}
      </Text>
    )}
  </Column>
);

export const WeeklyProgressDigestEmail = ({
  userName = 'Alex',
  // NOTE: caller-formatted (en-US)
  weekStartDate = 'Dec 9',
  // NOTE: caller-formatted (en-US)
  weekEndDate = 'Dec 15',
  workoutsCompleted = 5,
  workoutsPlanned = 6,
  // NOTE: caller-formatted (en-US)
  totalVolume = '125,000 lbs',
  volumeChange = 8,
  personalRecords = 2,
  streakDays = 12,
  topExercises = [
    // NOTE: caller-formatted (en-US) volume strings
    { name: 'Bench Press', volume: '15,200 lbs' },
    { name: 'Squat', volume: '22,500 lbs' },
    { name: 'Deadlift', volume: '18,000 lbs' },
  ],
  appUrl = 'tracked://bodyweight',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: WeeklyProgressDigestEmailProps) => {
  const t = weeklyProgressDigestMessages[locale];

  const completionRate = workoutsPlanned
    ? Math.round((workoutsCompleted / workoutsPlanned) * 100)
    : null;

  const volumeChangeText =
    volumeChange !== undefined
      ? volumeChange > 0
        ? t.volumeChangeUp(formatNumber(Math.abs(volumeChange), locale))
        : volumeChange < 0
          ? t.volumeChangeDown(formatNumber(Math.abs(volumeChange), locale))
          : t.volumeChangeSame
      : undefined;

  return (
    <EmailLayout preview={t.preview(weekStartDate, weekEndDate)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, weekStartDate, weekEndDate)}</Paragraph>

      {/* Stats Row */}
      <Section style={{ margin: `${spacing.lg} 0` }}>
        <Row>
          <StatCard
            label={t.labelWorkouts}
            value={formatNumber(workoutsCompleted, locale)}
            subtext={
              completionRate
                ? t.completionRate(formatNumber(completionRate, locale))
                : undefined
            }
          />
          <Column style={{ width: '12px' }} />
          <StatCard
            label={t.labelVolume}
            value={totalVolume || '-'}
            subtext={volumeChangeText}
          />
          {personalRecords !== undefined && personalRecords > 0 && (
            <>
              <Column style={{ width: '12px' }} />
              <StatCard
                label={t.labelNewPRs}
                value={formatNumber(personalRecords, locale)}
              />
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
            textAlign: 'center' as const,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            {t.streakBadge(formatNumber(streakDays, locale), streakDays)}
          </Text>
          <Text
            style={{
              color: colors.textSecondary,
              fontSize: '13px',
              margin: '4px 0 0 0',
            }}
          >
            {t.streakSubtext}
          </Text>
        </Section>
      )}

      {/* Top Exercises */}
      {topExercises && topExercises.length > 0 && (
        <Section style={{ margin: `${spacing.lg} 0` }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: spacing.sm,
            }}
          >
            {t.topExercisesTitle}
          </Text>
          {topExercises.map((exercise, index) => (
            <Row
              key={index}
              style={{
                padding: '8px 0',
                borderBottom:
                  index < topExercises.length - 1
                    ? `1px solid ${colors.border}`
                    : 'none',
              }}
            >
              <Column>
                <Text
                  style={{
                    color: colors.textPrimary,
                    fontSize: '14px',
                    margin: '0',
                  }}
                >
                  {exercise.name}
                </Text>
              </Column>
              <Column style={{ textAlign: 'right' as const }}>
                <Text
                  style={{
                    color: colors.textSecondary,
                    fontSize: '14px',
                    margin: '0',
                  }}
                >
                  {exercise.volume}
                </Text>
              </Column>
            </Row>
          ))}
        </Section>
      )}

      <PrimaryButton href={appUrl}>{t.cta}</PrimaryButton>

      <Paragraph muted style={{ textAlign: 'center' as const }}>
        {t.closing}
      </Paragraph>

      <DiscordButton />

      <EmailFooter
        websiteUrl={websiteUrl}
        marketing
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

export default WeeklyProgressDigestEmail;
