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
import { trialConvertedMessages } from './trial-converted.messages.js';

interface TrialConvertedEmailProps {
  userName: string;
  dashboardUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrialConvertedEmail = ({
  userName = 'Coach',
  dashboardUrl = 'https://dashboard.tracked.gg',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialConvertedEmailProps) => {
  const t = trialConvertedMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <FeatureBox title={t.whatsNextTitle}>
        {t.whatsNext.map((item, index) => (
          <SmallText
            key={index}
            style={
              index < t.whatsNext.length - 1
                ? { marginBottom: '4px' }
                : undefined
            }
          >
            • {item}
          </SmallText>
        ))}
      </FeatureBox>

      <Paragraph>{t.community}</Paragraph>

      <PrimaryButton href={dashboardUrl}>{t.cta}</PrimaryButton>

      <Paragraph style={{ marginTop: '24px' }}>{t.discordInvite}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialConvertedEmail;
