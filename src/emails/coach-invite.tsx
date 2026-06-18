import * as React from 'react';
import { Section, Img } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
  TextLink,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { coachInviteMessages } from './coach-invite.messages.js';

interface CoachInviteEmailProps {
  coachName: string;
  coachEmail: string;
  websiteUrl?: string;
  invitationLink: string;
  coachAvatarUrl?: string;
  locale?: Locale;
}

export const CoachInviteEmail = ({
  coachName = 'Sarah Johnson',
  coachEmail = 'sarah@example.com',
  websiteUrl = 'https://tracked.gg',
  invitationLink = 'https://tracked.gg/invite/abc123',
  coachAvatarUrl = 'https://cdn.trckd.ca/avatars/default.png',
  locale = 'en',
}: CoachInviteEmailProps) => {
  const t = coachInviteMessages[locale];
  const displayName = coachName || coachEmail;

  return (
    <EmailLayout preview={t.preview(displayName)}>
      <EmailHeader />

      {/* Coach Info Section */}
      <Section style={{ textAlign: 'center' as const, marginBottom: '24px' }}>
        {coachAvatarUrl && (
          <Img
            src={coachAvatarUrl}
            width="64"
            height="64"
            alt={displayName}
            style={{
              borderRadius: '50%',
              margin: '0 auto 16px',
              border: `2px solid ${colors.accent}`,
            }}
          />
        )}
        <Heading style={{ textAlign: 'center' as const }}>
          {t.heading(displayName)}
        </Heading>
      </Section>

      <Paragraph>{t.intro(displayName)}</Paragraph>

      <FeatureBox title={t.featuresTitle}>
        <FeatureList items={t.features} />
      </FeatureBox>

      <PrimaryButton href={invitationLink} fullWidth>
        {t.cta}
      </PrimaryButton>

      <Paragraph muted style={{ textAlign: 'center' as const }}>
        {t.ignoreNotice} <TextLink href={websiteUrl}>{t.learnMore}</TextLink>
      </Paragraph>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default CoachInviteEmail;
