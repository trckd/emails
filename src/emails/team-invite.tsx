import * as React from 'react';
import { Img } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  TextLink,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { teamInviteMessages } from './team-invite.messages.js';

interface TeamInviteEmailProps {
  teamName?: string;
  teamRole?: string;
  invitedByUsername?: string;
  websiteUrl?: string;
  teamImage?: string;
  invitationLink?: string;
  locale?: Locale;
}

export const TeamInviteEmail = ({
  teamName = 'Team Tracked Training',
  teamRole = 'Athlete',
  websiteUrl = 'https://tracked.gg',
  teamImage = 'https://cdn.trckd.ca/teams/default.png',
  invitationLink = 'https://tracked.gg/team/invite/abc123',
  locale = 'en',
}: TeamInviteEmailProps) => {
  const t = teamInviteMessages[locale];
  return (
    <EmailLayout preview={t.preview(teamName)}>
      <EmailHeader />

      {teamImage && (
        <Img
          src={teamImage}
          height="70"
          alt={teamName}
          style={{
            margin: '0 auto 24px',
            display: 'block',
          }}
        />
      )}

      <Heading>{t.heading(teamName)}</Heading>
      <Paragraph>
        {t.joinAsPrefix}
        <strong>{teamRole}</strong>
        {t.joinAsSuffix}
      </Paragraph>

      <PrimaryButton href={invitationLink || '#'} fullWidth>
        {t.cta}
      </PrimaryButton>

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

export default TeamInviteEmail;
