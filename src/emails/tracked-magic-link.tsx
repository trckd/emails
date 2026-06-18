import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  TextLink,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { trackedMagicLinkMessages } from './tracked-magic-link.messages.js';

interface Props {
  loginButtonLink: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrackedMagicLink = ({
  loginButtonLink = 'https://tracked.gg/auth/login?token=abc123',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: Props) => {
  const t = trackedMagicLinkMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Paragraph>{t.welcome}</Paragraph>
      <Paragraph>{t.instructions}</Paragraph>

      <PrimaryButton href={loginButtonLink}>{t.cta}</PrimaryButton>

      <Paragraph>
        {t.ignoreBefore}
        <TextLink href={websiteUrl}>{t.websiteLinkText}</TextLink>
        {t.ignoreAfter}
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TrackedMagicLink;
