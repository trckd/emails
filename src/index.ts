import { BodyweightGoalReachedEmail } from "./emails/bodyweight-goal-reached.js";
import { ClientAcceptedInvitationEmail } from "./emails/client-accepted-invitation.js";
import { CoachInviteEmail } from "./emails/coach-invite.js";
import { CoachRemovedClientEmail } from "./emails/coach-removed-client.js";
import { DirectMessageEmail } from "./emails/direct-message.js";
import { FeatureDiscoveryEmail } from "./emails/feature-discovery.js";
import { FirstWorkoutAssignedEmail } from "./emails/first-workout-assigned.js";
import { FirstWorkoutCompletedEmail } from "./emails/first-workout-completed.js";
import { NewFollowerEmail } from "./emails/new-follower.js";
import { SubscriptionCanceledEmail } from "./emails/subscription-canceled.js";
import { SupportEmail } from "./emails/support-email.js";
import { TeamInviteEmail } from "./emails/team-invite.js";
import { TeamMemberRemovedEmail } from "./emails/team-member-removed-email.js";
import { TrackedMagicLink } from "./emails/tracked-magic-link.js";
import { TrackedMagicLinkActivate } from "./emails/tracked-magic-link-activate.js";
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

export {
  BodyweightGoalReachedEmail,
  ClientAcceptedInvitationEmail,
  CoachInviteEmail,
  CoachRemovedClientEmail,
  DirectMessageEmail,
  FeatureDiscoveryEmail,
  FirstWorkoutAssignedEmail,
  FirstWorkoutCompletedEmail,
  NewFollowerEmail,
  SubscriptionCanceledEmail,
  SupportEmail,
  TeamInviteEmail,
  TeamMemberRemovedEmail,
  TrackedMagicLink,
  TrackedMagicLinkActivate,
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
