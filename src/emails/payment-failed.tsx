import * as React from 'react';
import {
  DiscordButton,
  EmailFooter,
  EmailHeader,
  EmailLayout,
  FeatureBox,
  Heading,
  Paragraph,
  PrimaryButton,
  SmallText,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { paymentFailedMessages } from './payment-failed.messages.js';

interface PaymentFailedEmailProps {
  userName?: string;
  amountDue?: string;
  updatePaymentUrl?: string;
  graceEndsDate?: string;
  websiteUrl?: string;
  locale?: Locale;
}

/**
 * First-attempt dunning email: a renewal charge failed. The coach keeps access
 * through the grace window — nudge them to update their card before it ends.
 */
export const PaymentFailedEmail = ({
  userName = 'Alex',
  amountDue = '$49.00', // NOTE: caller-formatted (en-US)
  updatePaymentUrl = 'https://dashboard.tracked.gg/subscription',
  graceEndsDate = 'January 22, 2025', // NOTE: caller-formatted (en-US)
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: PaymentFailedEmailProps) => {
  const t = paymentFailedMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, amountDue)}</Paragraph>

      <FeatureBox title={t.todoTitle}>
        <SmallText style={{ marginBottom: '4px' }}>{t.todoUpdate}</SmallText>
        <SmallText style={{ marginBottom: '4px' }}>
          {t.todoGrace(graceEndsDate)}
        </SmallText>
        <SmallText>{t.todoRetry}</SmallText>
      </FeatureBox>

      <PrimaryButton href={updatePaymentUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.alreadyUpdated}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default PaymentFailedEmail;
