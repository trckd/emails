/**
 * Username Validation Utilities
 *
 * Handles validation for usernames to determine if they're user-chosen or
 * auto-generated UUIDs. Auto-generated usernames should not be displayed in emails.
 */

/**
 * Check if username is a generated UUID (not user-chosen)
 *
 * The database schema uses UUIDv7 as the default for usernames when users
 * don't provide one. Format: 01944f9e-8e64-7a78-9e1e-3daba7b13e9f
 *
 * UUIDv7/v4 pattern: 8-4-4-4-12 hex characters separated by hyphens
 *
 * @param username - The username to check
 * @returns true if the username is an auto-generated UUID
 *
 * @example
 * ```typescript
 * isAnonymousUsername("01944f9e-8e64-7a78-9e1e-3daba7b13e9f") // true
 * isAnonymousUsername("john_doe") // false
 * isAnonymousUsername(null) // true
 * ```
 */
export function isAnonymousUsername(
  username: string | null | undefined,
): boolean {
  if (!username) {
    return true;
  }

  // UUIDv7/v4 pattern: 8-4-4-4-12 hex characters
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(username);
}

/**
 * Get safe display name for emails with intelligent fallback
 *
 * Tries to find a user-friendly display name by checking multiple sources
 * in order of preference:
 * 1. Real username (non-UUID)
 * 2. Given name / First name
 * 3. Full name
 * 4. Generic fallback ("there")
 *
 * This ensures we never show auto-generated UUIDs in emails.
 *
 * @param username - The user's username (may be UUID)
 * @param givenName - The user's first/given name
 * @param name - The user's full name
 * @param fallback - Default fallback if no good name is found (default: "there")
 * @returns A safe, user-friendly display name
 *
 * @example
 * ```typescript
 * getSafeDisplayName("john_doe", "John", "John Doe") // "john_doe"
 * getSafeDisplayName("01944f9e...", "John", "John Doe") // "John"
 * getSafeDisplayName("01944f9e...", null, "John Doe") // "John Doe"
 * getSafeDisplayName("01944f9e...", null, null) // "there"
 * getSafeDisplayName(null, null, null, "friend") // "friend"
 * ```
 */
export function getSafeDisplayName(
  username: string | null | undefined,
  givenName: string | null | undefined,
  name: string | null | undefined,
  fallback: string = "there",
): string {
  // Try real username first (skip if it's a UUID)
  if (username && !isAnonymousUsername(username)) {
    return username;
  }

  // Try given name
  if (givenName && givenName.trim().length > 0) {
    return givenName;
  }

  // Try full name
  if (name && name.trim().length > 0) {
    return name;
  }

  // Use fallback
  return fallback;
}
