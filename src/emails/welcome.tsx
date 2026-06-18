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
import { Img } from '@react-email/components';
import type { Locale } from '../i18n/locales.js';
import { welcomeMessages } from './welcome.messages.js';

interface WelcomeEmailProps {
  userName: string;
  appUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const WelcomeEmail = ({
  userName = 'Alex',
  appUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: WelcomeEmailProps) => {
  const t = welcomeMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <FeatureBox title={t.featuresTitle}>
        <FeatureList items={t.features} />
      </FeatureBox>

      <PrimaryButton href={appUrl}>{t.cta}</PrimaryButton>

      <Heading>{t.foundersHeading}</Heading>
      <Paragraph>{t.foundersMessage}</Paragraph>

      <Img
        src="https://cdn.trckd.ca/assets/348E45F2-A1E4-4B5B-9239-77CF9BF5B782.png"
        alt={t.foundersImageAlt}
        style={{ width: '100%', marginTop: '24px' }}
      />

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

export default WelcomeEmail;
