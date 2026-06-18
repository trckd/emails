import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  DiscordButton,
  colors,
  spacing,
  borderRadius,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatNumber } from '../i18n/format.js';
import { appReviewRequestMessages } from './app-review-request.messages.js';

interface AppReviewRequestEmailProps {
  userName: string;
  workoutsCompleted: number;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const AppReviewRequestEmail = ({
  userName = 'Alex',
  workoutsCompleted = 50,
  appStoreUrl = 'https://apps.apple.com/app/tracked-training/id6450913418',
  playStoreUrl = 'https://play.google.com/store/apps/details?id=com.tracked.mobile',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: AppReviewRequestEmailProps) => {
  const t = appReviewRequestMessages[locale];
  const workoutsCount = formatNumber(workoutsCompleted, locale);

  return (
    <EmailLayout preview={t.preview(workoutsCount, workoutsCompleted)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>
        {t.introPre(userName)}
        <strong>{t.introBold(workoutsCount, workoutsCompleted)}</strong>
        {t.introPost}
      </Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
          textAlign: 'center' as const,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0',
          }}
        >
          {workoutsCount}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            margin: '8px 0 0 0',
          }}
        >
          {t.workoutsAndCounting(workoutsCompleted)}
        </Text>
      </Section>

      <Paragraph>{t.reviewPitch}</Paragraph>

      <Paragraph style={{ fontWeight: '600' }}>{t.reviewQuestion}</Paragraph>

      <PrimaryButton href={appStoreUrl}>{t.reviewOnAppStore}</PrimaryButton>

      <SecondaryButton href={playStoreUrl}>
        {t.reviewOnGooglePlay}
      </SecondaryButton>

      <Paragraph muted style={{ textAlign: 'center' as const }}>
        {t.thankYou}
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

export default AppReviewRequestEmail;
