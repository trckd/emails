import * as React from 'react';
import { Section, Text } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  colors,
  spacing,
  borderRadius,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { npsSurveyMessages } from './nps-survey.messages.js';

interface NpsSurveyEmailProps {
  userName: string;
  surveyBaseUrl: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

const ScoreButton = ({
  score,
  baseUrl,
}: {
  score: number;
  baseUrl: string;
}) => {
  return (
    <td style={{ padding: '0 2px' }}>
      <a
        href={`${baseUrl}?score=${score}`}
        style={{
          display: 'inline-block',
          width: '36px',
          height: '36px',
          lineHeight: '36px',
          textAlign: 'center' as const,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: borderRadius.sm,
          color: colors.textPrimary,
          fontSize: '14px',
          fontWeight: '600',
          textDecoration: 'none',
        }}
      >
        {score}
      </a>
    </td>
  );
};

export const NpsSurveyEmail = ({
  userName = 'Alex',
  surveyBaseUrl = 'https://tracked.gg/survey/nps',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: NpsSurveyEmailProps) => {
  const t = npsSurveyMessages[locale];
  return (
    <EmailLayout preview={t.preview}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName)}</Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: spacing.lg,
          borderRadius: borderRadius.md,
          margin: `${spacing.lg} 0`,
          border: `1px solid ${colors.border}`,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center' as const,
            margin: '0 0 16px 0',
          }}
        >
          {t.question}
        </Text>

        <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
          <tr>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
              <ScoreButton key={score} score={score} baseUrl={surveyBaseUrl} />
            ))}
          </tr>
        </table>

        <table
          cellPadding="0"
          cellSpacing="0"
          style={{ width: '100%', marginTop: '12px' }}
        >
          <tr>
            <td style={{ textAlign: 'left' as const }}>
              <Text
                style={{
                  color: colors.textMuted,
                  fontSize: '12px',
                  margin: '0',
                }}
              >
                {t.notLikely}
              </Text>
            </td>
            <td style={{ textAlign: 'right' as const }}>
              <Text
                style={{
                  color: colors.textMuted,
                  fontSize: '12px',
                  margin: '0',
                }}
              >
                {t.veryLikely}
              </Text>
            </td>
          </tr>
        </table>
      </Section>

      <Paragraph muted style={{ textAlign: 'center' as const }}>
        {t.closing}
      </Paragraph>

      <EmailFooter
        websiteUrl={websiteUrl}
        marketing
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

export default NpsSurveyEmail;
