// Email templates
import { AnniversaryEmail } from "./emails/anniversary.js";
import { AppReviewRequestEmail } from "./emails/app-review-request.js";
import { BodyweightGoalReachedEmail } from "./emails/bodyweight-goal-reached.js";
import { ClientInactiveAlertEmail } from "./emails/client-inactive-alert.js";
import { ClientOnboardedEmail } from "./emails/client-onboarded.js";
import { CoachInviteEmail } from "./emails/coach-invite.js";
import { CoachRemovedClientEmail } from "./emails/coach-removed-client.js";
import { DirectMessageEmail } from "./emails/direct-message.js";
import { FeatureDiscoveryEmail } from "./emails/feature-discovery.js";
import { FirstWorkoutAssignedEmail } from "./emails/first-workout-assigned.js";
import { FirstWorkoutCompletedEmail } from "./emails/first-workout-completed.js";
import { InactiveReengagementEmail } from "./emails/inactive-reengagement.js";
import { MonthlyReportEmail } from "./emails/monthly-report.js";
import { NewFollowerEmail } from "./emails/new-follower.js";
import { NpsSurveyEmail } from "./emails/nps-survey.js";
import { SubscriptionCanceledEmail } from "./emails/subscription-canceled.js";
import { SupportEmail } from "./emails/support-email.js";
import { TeamInviteEmail } from "./emails/team-invite.js";
import { TeamMemberRemovedEmail } from "./emails/team-member-removed-email.js";
import { TrackedMagicLink } from "./emails/tracked-magic-link.js";
import { TrackedMagicLinkActivate } from "./emails/tracked-magic-link-activate.js";
import { WeeklyProgressDigestEmail } from "./emails/weekly-progress-digest.js";
import { WeekOneCheckinEmail } from "./emails/week-one-checkin.js";
import { WelcomeEmail } from "./emails/welcome.js";

// Import validation utilities
import {
  isPrivateRelayEmail,
  isValidEmailFormat,
  shouldSendEmailTo,
} from "./utils/email-validation.js";
import {
  isAnonymousUsername,
  getSafeDisplayName,
} from "./utils/username-validation.js";

// Export email templates
export {
  AnniversaryEmail,
  AppReviewRequestEmail,
  BodyweightGoalReachedEmail,
  ClientInactiveAlertEmail,
  ClientOnboardedEmail,
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
  SubscriptionCanceledEmail,
  SupportEmail,
  TeamInviteEmail,
  TeamMemberRemovedEmail,
  TrackedMagicLink,
  TrackedMagicLinkActivate,
  WeeklyProgressDigestEmail,
  WeekOneCheckinEmail,
  WelcomeEmail,
};

// Export validation utilities
export {
  isPrivateRelayEmail,
  isValidEmailFormat,
  shouldSendEmailTo,
  isAnonymousUsername,
  getSafeDisplayName,
};

// Export shared components
export * from "./components/index.js";
