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
import { paymentActionRequiredMessages } from './payment-action-required.messages.js';

interface PaymentActionRequiredEmailProps {
  userName?: string;
  amountDue?: string;
  confirmUrl?: string;
  websiteUrl?: string;
  locale?: Locale;
}

/**
 * 3D Secure / bank-authentication dunning email: the renewal needs the coach to
 * confirm the payment with their bank. `confirmUrl` is Stripe's hosted-invoice
 * link where they complete authentication.
 */
export const PaymentActionRequiredEmail = ({
  userName = 'Alex',
  amountDue = '$49.00', // NOTE: caller-formatted (en-US)
  confirmUrl = 'https://invoice.stripe.com/i/example',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: PaymentActionRequiredEmailProps) => {
  const t = paymentActionRequiredMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, amountDue)}</Paragraph>

      <FeatureBox title={t.stepTitle}>
        <SmallText>{t.stepDetail}</SmallText>
      </FeatureBox>

      <PrimaryButton href={confirmUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.pending}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default PaymentActionRequiredEmail;
