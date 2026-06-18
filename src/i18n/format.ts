/**
 * Locale-aware formatting helpers built on the platform `Intl` APIs.
 *
 * Templates receive a {@link Locale} and call these helpers so numbers, dates
 * and pluralized nouns render correctly per language. Rendering is synchronous,
 * and `Intl` is synchronous, so these are safe to call directly in components.
 */
import type { Locale } from './locales.js';

/** BCP-47 tags used for `Intl` lookups (note: `pt` -> Brazilian Portuguese). */
const INTL_LOCALE: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  pt: 'pt-BR',
};

/** Resolve a {@link Locale} to the BCP-47 tag used by the `Intl` APIs. */
export function intlLocale(locale: Locale): string {
  return INTL_LOCALE[locale] ?? INTL_LOCALE.en;
}

/** Format an integer with locale-aware grouping (e.g. `1,234` vs `1.234`). */
export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocale(locale)).format(value);
}

/** Format a number with a fixed number of fraction digits, locale-aware. */
export function formatDecimal(
  value: number,
  locale: Locale,
  fractionDigits = 1
): string {
  return new Intl.NumberFormat(intlLocale(locale), {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/**
 * Format a date (or date string) as a localized "month year", e.g.
 * `"January 2026"` / `"enero de 2026"` / `"janvier 2026"`.
 *
 * Falls back to the original string when it cannot be parsed, so a
 * pre-formatted value passed from a caller is never mangled.
 */
export function formatMonthYear(
  dateInput: string | Date,
  locale: Locale
): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  if (Number.isNaN(date.getTime())) {
    return typeof dateInput === 'string' ? dateInput : '';
  }
  return new Intl.DateTimeFormat(intlLocale(locale), {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

/**
 * Pick the correct plural form for `count` using the locale's CLDR rules.
 *
 * Catalogs supply the forms; this returns the matching noun/phrase. For the
 * six supported locales the relevant distinction is one-vs-other, but routing
 * through `Intl.PluralRules` keeps it correct if a locale needs more forms.
 *
 * @example
 * plural("en", n, { one: "day", other: "days" })
 */
export function plural(
  locale: Locale,
  count: number,
  forms: PluralForms
): string {
  const rule = new Intl.PluralRules(intlLocale(locale)).select(count);
  return forms[rule] ?? forms.other;
}
