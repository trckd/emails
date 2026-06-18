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
import { trackedMagicLinkActivateMessages } from './tracked-magic-link-activate.messages.js';

interface Props {
  activateButtonLink: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const TrackedMagicLinkActivate = ({
  activateButtonLink = 'https://tracked.gg/auth/activate?token=abc123',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: Props) => {
  const t = trackedMagicLinkActivateMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Paragraph>{t.welcome}</Paragraph>
      <Paragraph>{t.instructions}</Paragraph>

      <PrimaryButton href={activateButtonLink}>{t.cta}</PrimaryButton>

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

export default TrackedMagicLinkActivate;
