import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { firstWorkoutAssignedMessages } from './first-workout-assigned.messages.js';

interface FirstWorkoutAssignedEmailProps {
  clientName: string;
  coachName: string;
  programName: string;
  workoutUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const FirstWorkoutAssignedEmail = ({
  clientName = 'Alex',
  coachName = 'Sarah Johnson',
  programName = '8-Week Strength Builder',
  workoutUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: FirstWorkoutAssignedEmailProps) => {
  const t = firstWorkoutAssignedMessages[locale];
  return (
    <EmailLayout preview={t.preview(coachName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(clientName, coachName)}</Paragraph>

      <FeatureBox title={t.detailsTitle}>
        <SmallText>
          <strong>{t.programLabel}</strong> {programName}
        </SmallText>
        <SmallText style={{ marginTop: '4px' }}>
          <strong>{t.coachLabel}</strong> {coachName}
        </SmallText>
      </FeatureBox>

      <Paragraph>{t.designedNote}</Paragraph>

      <PrimaryButton href={workoutUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.trackReminder}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default FirstWorkoutAssignedEmail;
