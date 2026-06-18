import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  SecondaryButton,
  DiscordButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { subscriptionCanceledMessages } from './subscription-canceled.messages.js';

interface SubscriptionCanceledEmailProps {
  userName: string;
  cancellationDate: string;
  feedbackUrl?: string;
  reactivateUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const SubscriptionCanceledEmail = ({
  userName = 'Alex',
  cancellationDate = 'January 15, 2025', // NOTE: caller-formatted (en-US)
  feedbackUrl = 'https://tracked.gg/feedback',
  reactivateUrl = 'https://tracked.gg/reactivate',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: SubscriptionCanceledEmailProps) => {
  const t = subscriptionCanceledMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <FeatureBox title={t.nextTitle}>
        <SmallText style={{ marginBottom: '4px' }}>
          {t.nextActiveUntil(cancellationDate)}
        </SmallText>
        <SmallText style={{ marginBottom: '4px' }}>
          {t.nextFullAccess}
        </SmallText>
        <SmallText>{t.nextDataStored}</SmallText>
      </FeatureBox>

      <Paragraph>{t.sorry}</Paragraph>

      {feedbackUrl && (
        <SecondaryButton href={feedbackUrl}>{t.feedbackCta}</SecondaryButton>
      )}

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: '20px 24px',
          borderRadius: '8px',
          margin: '24px 0',
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.accent,
            fontSize: '18px',
            fontWeight: 'bold' as const,
            marginBottom: '8px',
          }}
        >
          {t.changedMindTitle}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            lineHeight: '20px',
            margin: '0',
          }}
        >
          {t.changedMindBody(cancellationDate)}
        </Text>
        <PrimaryButton href={reactivateUrl}>{t.reactivateCta}</PrimaryButton>
      </Section>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default SubscriptionCanceledEmail;
