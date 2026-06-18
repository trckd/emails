import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  FeatureBox,
  SmallText,
  DiscordButton,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { supportEmailMessages } from './support-email.messages.js';

interface SupportEmailProps {
  email: string;
  message: string;
  category: string;
  locale?: Locale;
}

export const SupportEmail = ({
  email = 'user@example.com',
  message = "I'm having trouble syncing my workouts between devices. The app shows different workout history on my phone versus my tablet. Can you help me resolve this issue?",
  category = 'Technical Issue',
  locale = 'en',
}: SupportEmailProps) => {
  const t = supportEmailMessages[locale];
  return (
    <EmailLayout preview={t.preview(email)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>

      <FeatureBox>
        <SmallText style={{ marginBottom: '8px' }}>
          <strong>{t.emailLabel}</strong> {email}
        </SmallText>
        <SmallText style={{ marginBottom: '8px' }}>
          <strong>{t.categoryLabel}</strong> {category}
        </SmallText>
        <SmallText>
          <strong>{t.messageLabel}</strong> {message}
        </SmallText>
      </FeatureBox>

      <DiscordButton />

      <EmailFooter locale={locale} />
    </EmailLayout>
  );
};

export default SupportEmail;
