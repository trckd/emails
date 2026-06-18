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
import { trialEndingSoonMessages } from './trial-ending-soon.messages.js';

interface TrialEndingSoonEmailProps {
  userName: string;
  daysRemaining: number;
  trialEndDate: string;
  upgradeUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrialEndingSoonEmail = ({
  userName = 'Coach',
  daysRemaining = 3,
  // NOTE: caller-formatted (en-US)
  trialEndDate = 'January 29, 2025',
  upgradeUrl = 'https://dashboard.tracked.gg/billing',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialEndingSoonEmailProps) => {
  const t = trialEndingSoonMessages[locale];

  return (
    <EmailLayout preview={t.preview(daysRemaining)}>
      <EmailHeader />

      <Section
        style={{
          backgroundColor: '#FEF3C7',
          padding: '16px 20px',
          borderRadius: '8px',
          marginBottom: '24px',
          borderLeft: '4px solid #F59E0B',
        }}
      >
        <Text
          style={{
            color: '#92400E',
            fontSize: '14px',
            fontWeight: '600',
            margin: '0',
          }}
        >
          {t.banner(daysRemaining)}
        </Text>
      </Section>

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, trialEndDate)}</Paragraph>

      <FeatureBox title={t.whatHappensTitle}>
        {t.whatHappens.map((item, index) => (
          <SmallText
            key={index}
            style={
              index < t.whatHappens.length - 1
                ? { marginBottom: '4px' }
                : undefined
            }
          >
            • {item}
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
            fontSize: '18px',
            fontWeight: 'bold' as const,
            marginBottom: '8px',
          }}
        >
          {t.ctaBoxTitle}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            lineHeight: '20px',
            margin: '0 0 16px 0',
          }}
        >
          {t.ctaBoxBody}
        </Text>
        <PrimaryButton href={upgradeUrl}>{t.cta}</PrimaryButton>
      </Section>

      <Paragraph>{t.questions}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialEndingSoonEmail;
