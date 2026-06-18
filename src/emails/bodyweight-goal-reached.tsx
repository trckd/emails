import * as React from 'react';
import { Section, Text, Row, Column } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
  DiscordButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { formatDecimal } from '../i18n/format.js';
import { bodyweightGoalReachedMessages } from './bodyweight-goal-reached.messages.js';

interface BodyweightGoalReachedEmailProps {
  userName: string;
  goalType: 'gain' | 'loss' | 'maintain';
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  weightUnit: 'kg' | 'lbs';
  timeToGoal?: string;
  progressUrl: string;
  websiteUrl?: string;
  locale?: Locale;
}

export const BodyweightGoalReachedEmail = ({
  userName = 'Alex',
  goalType = 'loss',
  startWeight = 185,
  currentWeight = 170,
  goalWeight = 170,
  weightUnit = 'lbs',
  // NOTE: caller-formatted (en-US)
  timeToGoal = '12 weeks',
  progressUrl = 'tracked://bodyweight',
  websiteUrl = 'https://tracked.gg',
  locale = 'en',
}: BodyweightGoalReachedEmailProps) => {
  const t = bodyweightGoalReachedMessages[locale];

  const weightChange = Math.abs(currentWeight - startWeight);
  const gained = currentWeight > startWeight;

  const goalMessage =
    goalType === 'gain'
      ? t.goalMessageGain
      : goalType === 'loss'
        ? t.goalMessageLoss
        : goalType === 'maintain'
          ? t.goalMessageMaintain
          : t.goalMessageDefault;

  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Section style={{ textAlign: 'center' as const, margin: '24px 0' }}>
        <Text style={{ fontSize: '64px', margin: '0' }}>🎉</Text>
      </Section>

      <Heading style={{ textAlign: 'center' as const, fontSize: '32px' }}>
        {t.heading}
      </Heading>
      <Text
        style={{
          color: colors.accent,
          fontSize: '18px',
          lineHeight: '26px',
          textAlign: 'center' as const,
          marginBottom: '24px',
        }}
      >
        {goalMessage}
      </Text>

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
            fontSize: '16px',
            fontWeight: 'bold' as const,
            marginBottom: '16px',
            textAlign: 'center' as const,
          }}
        >
          {t.achievementTitle}
        </Text>
        <Row>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: '12px',
                textAlign: 'center' as const,
                marginBottom: '4px',
                textTransform: 'uppercase' as const,
              }}
            >
              {t.labelStartingWeight}
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: '20px',
                fontWeight: 'bold' as const,
                textAlign: 'center' as const,
              }}
            >
              {formatDecimal(startWeight, locale, 1)} {weightUnit}
            </Text>
          </Column>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: '12px',
                textAlign: 'center' as const,
                marginBottom: '4px',
                textTransform: 'uppercase' as const,
              }}
            >
              {t.labelCurrentWeight}
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: '20px',
                fontWeight: 'bold' as const,
                textAlign: 'center' as const,
              }}
            >
              {formatDecimal(currentWeight, locale, 1)} {weightUnit}
            </Text>
          </Column>
          <Column>
            <Text
              style={{
                color: colors.textMuted,
                fontSize: '12px',
                textAlign: 'center' as const,
                marginBottom: '4px',
                textTransform: 'uppercase' as const,
              }}
            >
              {t.labelGoalWeight}
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: '20px',
                fontWeight: 'bold' as const,
                textAlign: 'center' as const,
              }}
            >
              {formatDecimal(goalWeight, locale, 1)} {weightUnit}
            </Text>
          </Column>
        </Row>
        <Section
          style={{
            backgroundColor: colors.surfaceAlt,
            padding: '12px 16px',
            borderRadius: '6px',
            marginTop: '16px',
          }}
        >
          <Text
            style={{
              color: colors.accent,
              fontSize: '16px',
              fontWeight: 'bold' as const,
              textAlign: 'center' as const,
              margin: '0',
            }}
          >
            {t.changeLine(
              gained,
              formatDecimal(weightChange, locale, 1),
              weightUnit,
              timeToGoal
            )}
          </Text>
        </Section>
      </Section>

      <Paragraph>{t.congrats(userName)}</Paragraph>

      <PrimaryButton href={progressUrl}>{t.cta}</PrimaryButton>

      <FeatureBox title={t.whatsNextTitle}>
        <FeatureList items={t.whatsNextItems} />
      </FeatureBox>

      <Section
        style={{
          padding: '16px 0 16px 20px',
          margin: '24px 0',
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.textMuted,
            fontSize: '15px',
            lineHeight: '22px',
            fontStyle: 'italic' as const,
            margin: '0',
          }}
        >
          {t.quote}
        </Text>
        <Text
          style={{
            color: colors.textMuted,
            fontSize: '15px',
            lineHeight: '22px',
            marginTop: '8px',
          }}
        >
          {t.quoteClosing}
        </Text>
      </Section>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default BodyweightGoalReachedEmail;
