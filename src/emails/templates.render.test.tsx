import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { render } from '@react-email/components';
import { SUPPORTED_LOCALES } from '../i18n/locales';
import {
  AnniversaryEmail,
  AppReviewRequestEmail,
  BodyweightGoalReachedEmail,
  CheckInAvailableEmail,
  ClientInactiveAlertEmail,
  ClientOnboardedEmail,
  ClientProgressReportEmail,
  CoachInviteEmail,
  CoachRemovedClientEmail,
  DirectMessageEmail,
  FeatureDiscoveryEmail,
  FirstWorkoutAssignedEmail,
  FirstWorkoutCompletedEmail,
  InactiveReengagementEmail,
  MonthlyReportEmail,
  NewFollowerEmail,
  NpsSurveyEmail,
  ProspectConvertedClientEmail,
  ProspectConvertedCoachEmail,
  PaymentActionRequiredEmail,
  PaymentFailedEmail,
  PaymentFinalNoticeEmail,
  SubscriptionCanceledEmail,
  SupportEmail,
  TeamInviteEmail,
  TeamMemberRemovedEmail,
  TrackedMagicLink,
  TrackedMagicLinkActivate,
  TrialConvertedEmail,
  TrialEndingSoonEmail,
  TrialExpiredEmail,
  TrialMidpointEmail,
  TrialStartedEmail,
  WeeklyProgressDigestEmail,
  WeekOneCheckinEmail,
  WelcomeEmail,
} from '../index';

// Every exported template component. Each is rendered with default props plus a
// `locale`, so this also asserts that the templates keep sensible defaults
// (as required by the react-email preview server). The components have
// heterogeneous prop types, so the registry is intentionally loosely typed.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TEMPLATES: Record<string, React.ComponentType<any>> = {
  AnniversaryEmail,
  AppReviewRequestEmail,
  BodyweightGoalReachedEmail,
  CheckInAvailableEmail,
  ClientInactiveAlertEmail,
  ClientOnboardedEmail,
  ClientProgressReportEmail,
  CoachInviteEmail,
  CoachRemovedClientEmail,
  DirectMessageEmail,
  FeatureDiscoveryEmail,
  FirstWorkoutAssignedEmail,
  FirstWorkoutCompletedEmail,
  InactiveReengagementEmail,
  MonthlyReportEmail,
  NewFollowerEmail,
  NpsSurveyEmail,
  ProspectConvertedClientEmail,
  ProspectConvertedCoachEmail,
  PaymentActionRequiredEmail,
  PaymentFailedEmail,
  PaymentFinalNoticeEmail,
  SubscriptionCanceledEmail,
  SupportEmail,
  TeamInviteEmail,
  TeamMemberRemovedEmail,
  TrackedMagicLink,
  TrackedMagicLinkActivate,
  TrialConvertedEmail,
  TrialEndingSoonEmail,
  TrialExpiredEmail,
  TrialMidpointEmail,
  TrialStartedEmail,
  WeeklyProgressDigestEmail,
  WeekOneCheckinEmail,
  WelcomeEmail,
};

describe('template localization', () => {
  for (const [name, Template] of Object.entries(TEMPLATES)) {
    for (const locale of SUPPORTED_LOCALES) {
      it(`${name} renders non-empty HTML in "${locale}"`, async () => {
        const html = await render(React.createElement(Template, { locale }));
        expect(typeof html).toBe('string');
        expect(html.trim().length).toBeGreaterThan(0);
      });
    }
  }

  it('renders different copy per locale (welcome)', async () => {
    const en = await render(
      React.createElement(WelcomeEmail, { locale: 'en' })
    );
    const es = await render(
      React.createElement(WelcomeEmail, { locale: 'es' })
    );
    const de = await render(
      React.createElement(WelcomeEmail, { locale: 'de' })
    );

    expect(en).toContain('Welcome to Tracked');
    expect(es).toContain('Bienvenido');
    expect(de).toContain('Willkommen');
    expect(en).not.toEqual(es);
    expect(es).not.toEqual(de);
  });
});
