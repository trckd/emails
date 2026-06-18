import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { directMessageMessages } from './direct-message.messages.js';

interface DirectMessageEmailProps {
  recipientName: string;
  senderName: string;
  senderUsername?: string;
  messagePreview: string;
  messageUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const DirectMessageEmail = ({
  recipientName = 'Alex',
  senderName = 'Jordan Smith',
  senderUsername = 'jordanfitness',
  messagePreview = "Hey! Great workout today. I noticed you hit a new PR on bench press - that's awesome! Want to share your training program?",
  messageUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: DirectMessageEmailProps) => {
  const t = directMessageMessages[locale];
  const displayName = senderUsername
    ? `${senderName} (@${senderUsername})`
    : senderName;

  return (
    <EmailLayout preview={t.preview(senderName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(recipientName, displayName)}</Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: '16px 24px',
          borderRadius: '8px',
          margin: '24px 0',
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.textMuted,
            fontSize: '12px',
            fontWeight: 'bold' as const,
            textTransform: 'uppercase' as const,
            marginBottom: '8px',
          }}
        >
          {t.messagePreviewLabel}
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: '15px',
            lineHeight: '22px',
            fontStyle: 'italic' as const,
            margin: '0',
          }}
        >
          {messagePreview}
        </Text>
      </Section>

      <PrimaryButton href={messageUrl}>{t.cta}</PrimaryButton>

      <SmallText muted>{t.openAppHint}</SmallText>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default DirectMessageEmail;
