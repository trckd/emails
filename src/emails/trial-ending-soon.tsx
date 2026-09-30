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
import {
  type TrialEndingSoonMessages,
  trialEndingSoonMessages,
} from './trial-ending-soon.messages.js';

/**
 * Pre-charge reminder sent a few days before a Stripe trial converts.
 *
 * Stripe trials start from Checkout, which collects a payment method up
 * front and bills it automatically when the trial ends, so this email tells
 * the coach their subscription is about to start, what will be charged and
 * how to cancel. It must never tell them to "subscribe" or that they will
 * lose access: they already subscribed.
 */
export type TrialEndingSoonPaymentMethod =
  /** A payment method is saved; the trial will convert and bill it. */
  | { kind: 'saved'; cardLast4: string | null }
  /** None found, or it could not be read: never promise a charge. */
  | { kind: 'unconfirmed' };

export interface TrialEndingSoonEmailProps {
  userName: string;
  // NOTE: caller-formatted in the recipient's locale
  trialEndDate: string;
  /** Caller-formatted first charge, or null when it could not be read. */
  amountDue?: string | null;
  paymentMethod?: TrialEndingSoonPaymentMethod;
  manageUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

/** The sentence naming what will be charged, and to what. */
function chargeLine(
  t: TrialEndingSoonMessages,
  amountDue: string | null,
  cardLast4: string | null
): string {
  if (amountDue && cardLast4) return t.chargeAmountCard(amountDue, cardLast4);
  if (amountDue) return t.chargeAmount(amountDue);
  if (cardLast4) return t.chargeCard(cardLast4);
  return t.chargeGeneric;
}

/** Localized subject line matching the variant the template renders. */
export function trialEndingSoonSubject({
  trialEndDate,
  paymentMethod,
  locale = 'en',
}: {
  trialEndDate: string;
  paymentMethod: TrialEndingSoonPaymentMethod;
  locale?: Locale;
}): string {
  const t = trialEndingSoonMessages[locale];
  return paymentMethod.kind === 'saved'
    ? t.subjectSaved(trialEndDate)
    : t.subjectUnconfirmed;
}

export const TrialEndingSoonEmail = ({
  userName = 'Coach',
  trialEndDate = 'October 2, 2026',
  amountDue = '$49.00',
  paymentMethod = { kind: 'saved', cardLast4: '4242' },
  manageUrl = 'https://dashboard.tracked.gg/subscription',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TrialEndingSoonEmailProps) => {
  const t = trialEndingSoonMessages[locale];
  const saved = paymentMethod.kind === 'saved';
  const expectations = [
    t.expectContinuity,
    t.expectPricing,
    t.expectReceipt,
    t.expectCancel(trialEndDate),
  ];

  return (
    <EmailLayout preview={t.preview(trialEndDate)}>
      <EmailHeader />

      <Heading>{saved ? t.headingSaved : t.headingUnconfirmed}</Heading>
      <Paragraph>
        {saved
          ? t.introSaved(userName, trialEndDate)
          : t.introUnconfirmed(userName, trialEndDate)}
      </Paragraph>

      {paymentMethod.kind === 'saved' && (
        <>
          <Paragraph>
            {`${chargeLine(t, amountDue, paymentMethod.cardLast4)} ${t.nothingToDo}`}
          </Paragraph>

          <FeatureBox title={t.expectTitle}>
            {expectations.map((item, index) => (
              <SmallText
                key={item}
                style={
                  index < expectations.length - 1
                    ? { marginBottom: '4px' }
                    : undefined
                }
              >
                • {item}
              </SmallText>
            ))}
          </FeatureBox>
        </>
      )}

      <PrimaryButton href={manageUrl}>
        {saved ? t.ctaSaved : t.ctaUnconfirmed}
      </PrimaryButton>

      <Paragraph>{t.questions}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrialEndingSoonEmail;
