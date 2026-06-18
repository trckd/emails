/**
 * Public i18n surface for `@tracked/emails`.
 *
 * Consumers (e.g. the Tracked backend) import {@link normalizeLocale} and the
 * {@link Locale} type to resolve a recipient's language before rendering a
 * template, then pass `locale` as a prop.
 */
export {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  isSupportedLocale,
  normalizeLocale,
  type Locale,
} from './locales.js';

export {
  intlLocale,
  formatNumber,
  formatDecimal,
  formatMonthYear,
  plural,
} from './format.js';
