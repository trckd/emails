/**
 * Email Validation Utilities
 *
 * Handles validation for email addresses to determine if we should send emails.
 * This includes filtering out private relay emails and validating email formats.
 */

/**
 * Check if email is from a private relay service
 *
 * Apple's "Hide My Email" feature creates forwarding addresses like:
 * - 6g65mj8rd5@privaterelay.appleid.com
 * - user@icloud.com (when using Hide My Email)
 *
 * Note: These emails ARE technically deliverable (Apple forwards them),
 * but we may want to skip them for privacy/marketing reasons.
 *
 * @param email - The email address to check
 * @returns true if the email is from a private relay service
 */
export function isPrivateRelayEmail(email: string): boolean {
  const privateRelayPatterns = [
    "@privaterelay.appleid.com",
    // Note: @icloud.com can be real emails, only filter if it's clearly a relay
  ];

  return privateRelayPatterns.some((pattern) =>
    email.toLowerCase().includes(pattern),
  );
}

/**
 * Validate basic email format
 *
 * @param email - The email address to validate
 * @returns true if the email has a valid format
 */
export function isValidEmailFormat(email: string): boolean {
  // Basic email regex: something@something.something
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Determine if we should send emails to this address
 *
 * This is the main function to use when deciding whether to send an email.
 * It checks for:
 * - Null/undefined emails
 * - Private relay emails (Apple Hide My Email)
 * - Invalid email formats
 *
 * @param email - The email address to check
 * @returns true if we should send emails to this address
 *
 * @example
 * ```typescript
 * if (shouldSendEmailTo(user.email)) {
 *   await sendWelcomeEmail(user.email);
 * }
 * ```
 */
export function shouldSendEmailTo(email: string | null | undefined): boolean {
  // No email provided
  if (!email) {
    return false;
  }

  // Skip private relay emails
  if (isPrivateRelayEmail(email)) {
    return false;
  }

  // Validate email format
  if (!isValidEmailFormat(email)) {
    return false;
  }

  return true;
}
