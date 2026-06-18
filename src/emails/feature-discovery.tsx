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
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { featureDiscoveryMessages } from './feature-discovery.messages.js';

interface FeatureDiscoveryEmailProps {
  userName?: string;
  featureName?: string;
  featureDescription?: string;
  featureBenefits?: string[];
  featureUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const FeatureDiscoveryEmail = ({
  userName = 'Alex',
  featureName = 'Progress Photos',
  featureDescription = 'Track your transformation visually with our new Progress Photos feature. Take photos, compare side-by-side, and see your hard work paying off over time.',
  featureBenefits = [
    'Compare photos side-by-side to see your progress',
    'Automatic privacy controls - your photos are only visible to you',
    'Set reminders to take consistent progress photos',
    'Track multiple angles and body positions',
  ],
  featureUrl = 'tracked://physique-photos',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl,
  locale = 'en',
}: FeatureDiscoveryEmailProps) => {
  const t = featureDiscoveryMessages[locale];
  return (
    <EmailLayout preview={t.preview(featureName)}>
      <EmailHeader />

      <Section style={{ textAlign: 'center' as const, margin: '16px 0' }}>
        <Text style={{ fontSize: '36px', margin: '0' }}>💡</Text>
      </Section>

      <Heading style={{ textAlign: 'center' as const }}>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, featureName)}</Paragraph>

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
            fontSize: '18px',
            fontWeight: 'bold' as const,
            marginBottom: '8px',
          }}
        >
          {featureName}
        </Text>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '15px',
            lineHeight: '22px',
            margin: '0',
          }}
        >
          {featureDescription}
        </Text>
      </Section>

      {featureBenefits.length > 0 && (
        <FeatureBox title={t.benefitsTitle}>
          <FeatureList
            items={featureBenefits.map((benefit) => ({ title: benefit }))}
          />
        </FeatureBox>
      )}

      <PrimaryButton href={featureUrl}>{t.cta(featureName)}</PrimaryButton>

      <SmallText muted>{t.closing}</SmallText>

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

export default FeatureDiscoveryEmail;
