import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { prospectConvertedCoachMessages } from './prospect-converted-coach.messages.js';

interface ProspectConvertedCoachEmailProps {
  coachName: string;
  clientName: string;
  clientEmail?: string;
  clientProfileUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const ProspectConvertedCoachEmail = ({
  coachName = 'Coach',
  clientName = 'New Client',
  clientEmail,
  clientProfileUrl = 'https://dashboard.tracked.training/clients',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: ProspectConvertedCoachEmailProps) => {
  const t = prospectConvertedCoachMessages[locale];
  const emailSuffix = clientEmail ? ` (${clientEmail})` : '';
  return (
    <EmailLayout preview={t.preview(clientName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(coachName, clientName, emailSuffix)}</Paragraph>

      <PrimaryButton href={clientProfileUrl} fullWidth>
        {t.cta}
      </PrimaryButton>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default ProspectConvertedCoachEmail;
