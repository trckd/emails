import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
  DiscordButton,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { inactiveReengagementMessages } from './inactive-reengagement.messages.js';

interface InactiveReengagementEmailProps {
  userName: string;
  daysInactive: number;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const InactiveReengagementEmail = ({
  userName = 'Alex',
  daysInactive = 21,
  appUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: InactiveReengagementEmailProps) => {
  const t = inactiveReengagementMessages[locale];

  const message =
    daysInactive >= 30
      ? t.message30
      : daysInactive >= 14
        ? t.message14
        : t.messageDefault;

  return (
    <EmailLayout preview={t.preview(userName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>
        {t.intro(userName, daysInactive)}
        {message}
      </Paragraph>

      <FeatureBox title={t.featuresTitle}>
        <FeatureList items={t.features} />
      </FeatureBox>

      <PrimaryButton href={appUrl}>{t.cta}</PrimaryButton>

      <Paragraph muted>{t.reminder}</Paragraph>

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

export default InactiveReengagementEmail;
