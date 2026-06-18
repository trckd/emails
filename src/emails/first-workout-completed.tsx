import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  TipBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatNumber } from '../i18n/format.js';
import { firstWorkoutCompletedMessages } from './first-workout-completed.messages.js';

interface FirstWorkoutCompletedEmailProps {
  userName: string;
  workoutName: string;
  totalSets?: number;
  totalReps?: number;
  workoutHistoryUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const FirstWorkoutCompletedEmail = ({
  userName = 'Alex',
  workoutName = 'Push Day A',
  totalSets = 18,
  totalReps = 156,
  workoutHistoryUrl = 'tracked://history',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: FirstWorkoutCompletedEmailProps) => {
  const t = firstWorkoutCompletedMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Section style={{ textAlign: 'center' as const, margin: '24px 0' }}>
        <Text style={{ fontSize: '48px', margin: '0' }}>🎉</Text>
      </Section>

      <Heading style={{ textAlign: 'center' as const }}>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <FeatureBox title={t.detailsTitle}>
        <SmallText>
          <strong>{t.workoutLabel}</strong> {workoutName}
        </SmallText>
        {totalSets !== undefined && (
          <SmallText style={{ marginTop: '4px' }}>
            <strong>{t.setsLabel}</strong> {formatNumber(totalSets, locale)}
          </SmallText>
        )}
        {totalReps !== undefined && (
          <SmallText style={{ marginTop: '4px' }}>
            <strong>{t.repsLabel}</strong> {formatNumber(totalReps, locale)}
          </SmallText>
        )}
      </FeatureBox>

      <Paragraph>{t.firstStep}</Paragraph>

      <PrimaryButton href={workoutHistoryUrl}>{t.cta}</PrimaryButton>

      <TipBox title={t.proTipTitle} locale={locale}>
        {t.proTip}
      </TipBox>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default FirstWorkoutCompletedEmail;
