import * as React from 'react';
import { Section, Text } from '@react-email/components';
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
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatNumber } from '../i18n/format.js';
import { anniversaryMessages } from './anniversary.messages.js';

interface AnniversaryEmailProps {
  userName: string;
  yearsOnPlatform: number;
  totalWorkouts?: number;
  totalVolume?: string;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const AnniversaryEmail = ({
  userName = 'Alex',
  yearsOnPlatform = 1,
  totalWorkouts = 156,
  // NOTE: caller-formatted (en-US)
  totalVolume = '1,250,000 lbs',
  appUrl = 'tracked://bodyweight',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: AnniversaryEmailProps) => {
  const t = anniversaryMessages[locale];
  const yearsLabel = t.yearsLabel(yearsOnPlatform);

  return (
    <EmailLayout preview={t.preview(yearsLabel)}>
      <EmailHeader />

      <Heading>{t.heading(yearsLabel)}</Heading>
      <Paragraph>{t.intro(userName, yearsOnPlatform)}</Paragraph>

      {(totalWorkouts || totalVolume) && (
        <Section
          style={{
            backgroundColor: colors.surface,
            padding: spacing.lg,
            borderRadius: '8px',
            margin: `${spacing.lg} 0`,
            border: `1px solid ${colors.border}`,
            textAlign: 'center' as const,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.5px',
              margin: '0 0 16px 0',
            }}
          >
            {t.journeyTitle}
          </Text>
          {totalWorkouts && (
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '0 0 4px 0',
              }}
            >
              {formatNumber(totalWorkouts, locale)}
            </Text>
          )}
          {totalWorkouts && (
            <Text
              style={{
                color: colors.textSecondary,
                fontSize: '14px',
                margin: '0 0 16px 0',
              }}
            >
              {t.workoutsLogged}
            </Text>
          )}
          {totalVolume && (
            <>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: '32px',
                  fontWeight: 'bold',
                  margin: '0 0 4px 0',
                }}
              >
                {totalVolume}
              </Text>
              <Text
                style={{
                  color: colors.textSecondary,
                  fontSize: '14px',
                  margin: '0',
                }}
              >
                {t.totalVolumeLifted}
              </Text>
            </>
          )}
        </Section>
      )}

      <Paragraph>{t.closing}</Paragraph>

      <PrimaryButton href={appUrl}>{t.cta}</PrimaryButton>

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

export default AnniversaryEmail;
