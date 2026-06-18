import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { coachRemovedClientMessages } from './coach-removed-client.messages.js';

interface CoachRemovedClientEmailProps {
  clientName: string;
  coachName: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const CoachRemovedClientEmail = ({
  clientName = 'Alex',
  coachName = 'Sarah Johnson',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: CoachRemovedClientEmailProps) => {
  const t = coachRemovedClientMessages[locale];
  return (
    <EmailLayout preview={t.preview(coachName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(clientName, coachName)}</Paragraph>

      <FeatureBox>
        <SmallText>{t.dataNotice}</SmallText>
      </FeatureBox>

      <Paragraph>{t.closing}</Paragraph>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default CoachRemovedClientEmail;
