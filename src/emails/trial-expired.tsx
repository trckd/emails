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
import { trialExpiredMessages } from './trial-expired.messages.js';

interface TrialExpiredEmailProps {
  userName: string;
  reactivateUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrialExpiredEmail = ({
  userName = 'Coach',
  reactivateUrl = 'https://dashboard.tracked.gg/billing',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialExpiredEmailProps) => {
  const t = trialExpiredMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <FeatureBox title={t.dataPreservedTitle}>
        {t.dataPreserved.map((item, index) => (
          <SmallText
            key={index}
            style={
              index < t.dataPreserved.length - 1
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
          {t.reactivateTitle}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            lineHeight: '20px',
            margin: '0 0 16px 0',
          }}
        >
          {t.reactivateBody}
        </Text>
        <PrimaryButton href={reactivateUrl}>{t.cta}</PrimaryButton>
      </Section>

      <Paragraph>{t.feedback}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialExpiredEmail;
