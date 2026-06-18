/**
 * Supported locales for email templates.
 *
 * These codes mirror the Tracked mobile app's `SUPPORTED_LANGUAGES`
 * (`en`, `de`, `es`, `fr`, `it`, `pt`) so a user's stored
 * `languagePreference` maps directly onto an email locale.
 *
 * Brazilian Portuguese is authored under the `pt` code (the app stores `pt`),
 * and the `Intl`-based formatters in `./format.ts` resolve `pt` to `pt-BR`.
 *
 * Translation register: all locales address the reader informally to match the
 * brand's encouraging voice — `tú` (es), `tu` (fr), `du` (de), `tu` (it),
 * `você` (pt). The brand name "Tracked" is never translated.
 */
export const SUPPORTED_LOCALES = ['en', 'es', 'fr', 'de', 'it', 'pt'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Human-readable native label for each locale (handy for selectors/docs). */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
};

export function isSupportedLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/**
 * Normalize an arbitrary locale/language tag onto a supported {@link Locale}.
 *
 * Accepts BCP-47 tags and region/script variants (e.g. `"en-CA"`, `"pt-BR"`,
 * `"de_DE"`, `"ES"`), lower-cases and strips everything after the primary
 * subtag, and falls back to {@link DEFAULT_LOCALE} for anything unsupported
 * or empty.
 *
 * @example
 * normalizeLocale("pt-BR") // "pt"
 * normalizeLocale("en-CA") // "en"
 * normalizeLocale("zh")    // "en" (unsupported -> default)
 * normalizeLocale(null)    // "en"
 */
export function normalizeLocale(input?: string | null): Locale {
  if (!input) return DEFAULT_LOCALE;
  const primary = input.trim().toLowerCase().split(/[-_]/)[0];
  return isSupportedLocale(primary) ? primary : DEFAULT_LOCALE;
}
