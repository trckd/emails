import * as React from 'react';
import { Section, Img } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { newFollowerMessages } from './new-follower.messages.js';

interface NewFollowerEmailProps {
  userName: string;
  followerName: string;
  followerUsername?: string;
  followerAvatarUrl?: string;
  followerProfileUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const NewFollowerEmail = ({
  userName = 'Alex',
  followerName = 'Jordan Smith',
  followerUsername = 'jordanfitness',
  followerAvatarUrl = 'https://cdn.trckd.ca/avatars/default.png',
  followerProfileUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: NewFollowerEmailProps) => {
  const t = newFollowerMessages[locale];
  const displayName = followerUsername
    ? `${followerName} (@${followerUsername})`
    : followerName;

  return (
    <EmailLayout preview={t.preview(followerName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, displayName)}</Paragraph>

      {followerAvatarUrl && (
        <Section style={{ textAlign: 'center' as const, margin: '24px 0' }}>
          <Img
            src={followerAvatarUrl}
            width="80"
            height="80"
            alt={t.avatarAlt(followerName)}
            style={{
              borderRadius: '50%',
              border: `2px solid ${colors.accent}`,
            }}
          />
        </Section>
      )}

      <FeatureBox>
        <SmallText>
          <strong>{displayName}</strong>
          {t.featureBoxSuffix}
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={followerProfileUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.closing}</Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default NewFollowerEmail;
