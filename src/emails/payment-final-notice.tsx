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
import { paymentFinalNoticeMessages } from './payment-final-notice.messages.js';

interface PaymentFinalNoticeEmailProps {
  userName?: string;
  amountDue?: string;
  updatePaymentUrl?: string;
  accessEndsDate?: string;
  websiteUrl?: string;
  locale?: Locale;
}

/**
 * Final dunning email: retries are exhausted and the subscription is about to
 * be canceled. Last chance to update the card before access ends.
 */
export const PaymentFinalNoticeEmail = ({
  userName = 'Alex',
  amountDue = '$49.00', // NOTE: caller-formatted (en-US)
  updatePaymentUrl = 'https://dashboard.tracked.gg/subscription',
  accessEndsDate = 'January 22, 2025', // NOTE: caller-formatted (en-US)
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: PaymentFinalNoticeEmailProps) => {
  const t = paymentFinalNoticeMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, amountDue)}</Paragraph>

      <FeatureBox title={t.todoTitle}>
        <SmallText style={{ marginBottom: '4px' }}>
          {t.todoAccessEnds(accessEndsDate)}
        </SmallText>
        <SmallText>{t.todoUpdate}</SmallText>
      </FeatureBox>

      <PrimaryButton href={updatePaymentUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.reassurance}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default PaymentFinalNoticeEmail;
