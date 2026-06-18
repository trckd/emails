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
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { prospectConvertedClientMessages } from './prospect-converted-client.messages.js';

interface ProspectConvertedClientEmailProps {
  clientName: string;
  coachName: string;
  appUrl?: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const ProspectConvertedClientEmail = ({
  clientName = 'there',
  coachName = 'your coach',
  appUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: ProspectConvertedClientEmailProps) => {
  const t = prospectConvertedClientMessages[locale];
  return (
    <EmailLayout preview={t.preview(coachName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(clientName, coachName)}</Paragraph>

      <FeatureBox title={t.featuresTitle}>
        <FeatureList items={t.features} />
      </FeatureBox>

      <PrimaryButton href={appUrl} fullWidth>
        {t.cta}
      </PrimaryButton>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default ProspectConvertedClientEmail;
