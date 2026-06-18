import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  DiscordButton,
  TextLink,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { teamMemberRemovedMessages } from './team-member-removed-email.messages.js';

interface TeamMemberRemovedEmailProps {
  teamName?: string;
  websiteUrl?: string;
  teamImage?: string;
  locale?: Locale;
}

export const TeamMemberRemovedEmail = ({
  teamName = 'Team Tracked Training',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: TeamMemberRemovedEmailProps) => {
  const t = teamMemberRemovedMessages[locale];
  return (
    <EmailLayout preview={t.preview(teamName)}>
      <EmailHeader />

      <Heading>{t.heading(teamName)}</Heading>
      <Paragraph>{t.intro(teamName)}</Paragraph>

      <Paragraph>
        {t.ignoreNoticePrefix}
        <TextLink href={websiteUrl}>{t.websiteLink}</TextLink>
        {t.ignoreNoticeSuffix}
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default TeamMemberRemovedEmail;
