import * as React from 'react';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  TipBox,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { checkInAvailableMessages } from './check-in-available.messages.js';

interface CheckInAvailableEmailProps {
  /** Client's first name (or a safe display name). */
  userName: string;
  /** Coach's display name. */
  coachName: string;
  /** Name of the check-in (template name), e.g. "Weekly Check-in". */
  checkInName: string;
  /** Pre-formatted, localized due date, e.g. "Monday, June 30". */
  dueDate: string;
  /** Deep link that opens the check-in in the app. */
  appUrl: string;
  supportUrl?: string;
  websiteUrl?: string;
  unsubscribeUrl?: string;
  locale?: Locale;
}

export const CheckInAvailableEmail = ({
  userName = 'Alex',
  coachName = 'your coach',
  checkInName = 'Weekly Check-in',
  dueDate = 'Monday, June 30',
  appUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  unsubscribeUrl = 'https://tracked.gg/unsubscribe',
  locale = 'en',
}: CheckInAvailableEmailProps) => {
  const t = checkInAvailableMessages[locale];

  return (
    <EmailLayout preview={t.preview(coachName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(userName, coachName)}</Paragraph>

      <FeatureBox title={checkInName}>
        <SmallText>
          <strong>{t.dueLabel}:</strong> {dueDate}
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={appUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.closing(coachName)}</Paragraph>

      <TipBox title={t.appTipTitle} locale={locale}>
        {t.appTip}
      </TipBox>

      <EmailFooter
        websiteUrl={websiteUrl}
        unsubscribeUrl={unsubscribeUrl}
        locale={locale}
      />
    </EmailLayout>
  );
};

export default CheckInAvailableEmail;
