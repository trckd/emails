import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  TipBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
  TextLink,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { weekOneCheckinMessages } from './week-one-checkin.messages.js';

interface WeekOneCheckinEmailProps {
  userName: string;
  workoutsCompleted: number;
  appUrl: string;
  supportUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const WeekOneCheckinEmail = ({
  userName = 'Alex',
  workoutsCompleted = 4,
  appUrl = 'tracked://app',
  supportUrl = 'https://tracked.gg/support',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: WeekOneCheckinEmailProps) => {
  const t = weekOneCheckinMessages[locale];
  const isActive = workoutsCompleted > 0;

  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>

      {isActive ? (
        <>
          <Paragraph>{t.activeIntro(userName)}</Paragraph>

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
                color: colors.accent,
                fontSize: '16px',
                fontWeight: 'bold' as const,
                marginBottom: '12px',
              }}
            >
              {t.firstWeekTitle}
            </Text>
            <SmallText>
              <strong>{t.workoutsLogged(workoutsCompleted)}</strong>{' '}
              {workoutsCompleted}
            </SmallText>
            <SmallText style={{ marginTop: '8px' }}>
              {workoutsCompleted >= 3
                ? t.encouragementGreat
                : t.encouragementGood}
            </SmallText>
          </Section>

          <Paragraph>{t.activeClosing}</Paragraph>
        </>
      ) : (
        <>
          <Paragraph>{t.inactiveIntro(userName)}</Paragraph>

          <FeatureBox title={t.gettingStartedTitle}>
            <FeatureList items={t.gettingStartedSteps} />
          </FeatureBox>

          <Paragraph>{t.inactiveClosing}</Paragraph>
        </>
      )}

      <PrimaryButton href={appUrl}>
        {isActive ? t.ctaActive : t.ctaInactive}
      </PrimaryButton>

      <TipBox title={t.helpTitle} locale={locale}>
        {t.helpBody}
        {supportUrl && (
          <>
            {' '}
            <TextLink href={supportUrl}>{t.helpContact}</TextLink>
            {t.helpContactSuffix}
          </>
        )}
      </TipBox>

      <DiscordButton />

      <EmailFooter
        websiteUrl={websiteUrl}
        marketing
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

export default WeekOneCheckinEmail;
