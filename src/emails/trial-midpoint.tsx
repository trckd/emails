import * as React from 'react';
import { Section, Text } from '@react-email/components';
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
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { trialMidpointMessages } from './trial-midpoint.messages.js';

interface TrialMidpointEmailProps {
  userName: string;
  daysRemaining: number;
  trialEndDate: string;
  clientsAdded: number;
  upgradeUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrialMidpointEmail = ({
  userName = 'Coach',
  daysRemaining = 7,
  // NOTE: caller-formatted (en-US)
  trialEndDate = 'January 29, 2025',
  clientsAdded = 0,
  upgradeUrl = 'https://dashboard.tracked.gg/billing',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialMidpointEmailProps) => {
  const t = trialMidpointMessages[locale];
  const hasClients = clientsAdded > 0;

  return (
    <EmailLayout preview={t.preview(daysRemaining)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>

      {hasClients ? (
        <Paragraph>
          {t.introWithClients(
            userName,
            clientsAdded,
            daysRemaining,
            trialEndDate
          )}
        </Paragraph>
      ) : (
        <Paragraph>{t.introNoClients(userName, daysRemaining)}</Paragraph>
      )}

      {!hasClients && (
        <Section
          style={{
            backgroundColor: colors.surface,
            padding: '16px 24px',
            borderRadius: '8px',
            margin: '24px 0',
            borderLeft: `4px solid ${colors.accent}`,
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: '14px',
              fontWeight: 'bold' as const,
              marginBottom: '4px',
              marginTop: '0',
            }}
          >
            {t.quickStartTitle}
          </Text>
          {t.quickStart.map((step, index) => (
            <SmallText
              key={index}
              style={
                index < t.quickStart.length - 1
                  ? { marginBottom: '4px' }
                  : undefined
              }
            >
              {step}
            </SmallText>
          ))}
        </Section>
      )}

      <FeatureBox title={t.missedTitle}>
        {t.missed.map((feature, index) => (
          <SmallText
            key={index}
            style={
              index < t.missed.length - 1 ? { marginBottom: '4px' } : undefined
            }
          >
            • <strong>{feature.label}</strong> — {feature.description}
          </SmallText>
        ))}
      </FeatureBox>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: '20px 24px',
          borderRadius: '8px',
          margin: '24px 0',
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.accent,
            fontSize: '16px',
            fontWeight: 'bold' as const,
            marginBottom: '8px',
          }}
        >
          {t.upgradeTitle}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            lineHeight: '20px',
            margin: '0',
          }}
        >
          {t.upgradeBody}
        </Text>
        <PrimaryButton href={upgradeUrl}>{t.cta}</PrimaryButton>
      </Section>

      <Paragraph>{t.questions}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialMidpointEmail;
