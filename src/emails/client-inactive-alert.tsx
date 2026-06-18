import * as React from 'react';
import { Section, Img, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  colors,
  spacing,
  borderRadius,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { clientInactiveAlertMessages } from './client-inactive-alert.messages.js';

interface ClientInactiveAlertEmailProps {
  coachName: string;
  clientName: string;
  clientEmail: string;
  clientAvatarUrl?: string;
  daysInactive: number;
  lastWorkoutDate?: string;
  clientProfileUrl: string;
  messageUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const ClientInactiveAlertEmail = ({
  coachName = 'Sarah Johnson',
  clientName = 'Alex Thompson',
  clientEmail = 'alex@example.com',
  clientAvatarUrl = 'https://cdn.trckd.ca/avatars/default.png',
  daysInactive = 10,
  // NOTE: caller-formatted (en-US)
  lastWorkoutDate = 'December 9, 2024',
  clientProfileUrl = 'tracked://app',
  messageUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: ClientInactiveAlertEmailProps) => {
  const t = clientInactiveAlertMessages[locale];
  const displayName = clientName || clientEmail;

  const urgencyLevel =
    daysInactive >= 14 ? 'high' : daysInactive >= 7 ? 'medium' : 'low';
  const urgencyColor =
    urgencyLevel === 'high'
      ? colors.error
      : urgencyLevel === 'medium'
        ? colors.warning
        : colors.textSecondary;

  return (
    <EmailLayout preview={t.preview(displayName, daysInactive)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(coachName)}</Paragraph>

      {/* Client Card */}
      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
        }}
      >
        <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
          <tr>
            {clientAvatarUrl && (
              <td style={{ width: '48px', verticalAlign: 'top' }}>
                <Img
                  src={clientAvatarUrl}
                  width="48"
                  height="48"
                  alt={displayName}
                  style={{
                    borderRadius: '50%',
                    border: `2px solid ${colors.border}`,
                  }}
                />
              </td>
            )}
            <td
              style={{
                paddingLeft: clientAvatarUrl ? '16px' : '0',
                verticalAlign: 'top',
              }}
            >
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  margin: '0 0 4px 0',
                }}
              >
                {displayName}
              </Text>
              <Text
                style={{
                  color: urgencyColor,
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0 0 4px 0',
                }}
              >
                {t.daysInactive(daysInactive)}
              </Text>
              {lastWorkoutDate && (
                <Text
                  style={{
                    color: colors.textMuted,
                    fontSize: '13px',
                    margin: '0',
                  }}
                >
                  {t.lastWorkout(lastWorkoutDate)}
                </Text>
              )}
            </td>
          </tr>
        </table>
      </Section>

      <Paragraph>{t.urgencyMessage[urgencyLevel]}</Paragraph>

      <PrimaryButton href={messageUrl}>{t.sendMessage}</PrimaryButton>

      <SecondaryButton href={clientProfileUrl}>{t.viewProfile}</SecondaryButton>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default ClientInactiveAlertEmail;
