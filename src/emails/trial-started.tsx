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
import { trialStartedMessages } from './trial-started.messages.js';

interface TrialStartedEmailProps {
  userName: string;
  trialEndDate: string;
  daysRemaining: number;
  upgradeUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrialStartedEmail = ({
  userName = 'Coach',
  // NOTE: caller-formatted (en-US)
  trialEndDate = 'January 29, 2025',
  daysRemaining = 14,
  upgradeUrl = 'https://dashboard.tracked.gg/billing',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialStartedEmailProps) => {
  const t = trialStartedMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, daysRemaining, trialEndDate)}</Paragraph>

      <FeatureBox title={t.featuresTitle}>
        {t.features.map((feature, index) => (
          <SmallText
            key={index}
            style={
              index < t.features.length - 1
                ? { marginBottom: '4px' }
                : undefined
            }
          >
            • {feature}
          </SmallText>
        ))}
      </FeatureBox>

      <Paragraph>{t.getStarted}</Paragraph>

      <PrimaryButton href={upgradeUrl}>{t.cta}</PrimaryButton>

      <Paragraph style={{ marginTop: '24px' }}>{t.help}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialStartedEmail;
