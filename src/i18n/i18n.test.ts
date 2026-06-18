import { describe, it, expect } from 'vitest';
import {
  normalizeLocale,
  isSupportedLocale,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
} from './locales';
import { formatNumber, formatDecimal, formatMonthYear, plural } from './format';

describe('normalizeLocale', () => {
  it('maps BCP-47 / region tags onto the base locale', () => {
    expect(normalizeLocale('en-CA')).toBe('en');
    expect(normalizeLocale('pt-BR')).toBe('pt');
    expect(normalizeLocale('de_DE')).toBe('de');
    expect(normalizeLocale('ES')).toBe('es');
    expect(normalizeLocale('fr-FR')).toBe('fr');
  });

  it('falls back to the default for unsupported or empty input', () => {
    expect(normalizeLocale('zh')).toBe(DEFAULT_LOCALE);
    expect(normalizeLocale('xx-YY')).toBe(DEFAULT_LOCALE);
    expect(normalizeLocale(undefined)).toBe('en');
    expect(normalizeLocale(null)).toBe('en');
    expect(normalizeLocale('')).toBe('en');
  });

  it('accepts every supported locale unchanged', () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(normalizeLocale(locale)).toBe(locale);
    }
  });
});

describe('isSupportedLocale', () => {
  it('recognizes supported locales', () => {
    expect(isSupportedLocale('pt')).toBe(true);
    expect(isSupportedLocale('it')).toBe(true);
  });

  it('rejects unsupported values', () => {
    expect(isSupportedLocale('xx')).toBe(false);
    expect(isSupportedLocale('EN')).toBe(false);
    expect(isSupportedLocale('')).toBe(false);
  });
});

describe('format helpers', () => {
  it('groups integers per locale', () => {
    expect(formatNumber(1234, 'en')).toBe('1,234');
    expect(formatNumber(1234, 'de')).toBe('1.234');
  });

  it('formats fixed-precision decimals', () => {
    expect(formatDecimal(170.5, 'en', 1)).toBe('170.5');
    expect(formatDecimal(170, 'en', 1)).toBe('170.0');
  });

  it('formats a localized month and year', () => {
    const en = formatMonthYear('2026-01-15', 'en');
    expect(en).toMatch(/January/);
    expect(en).toMatch(/2026/);
    expect(formatMonthYear('2026-01-15', 'es')).toMatch(/enero/i);
  });

  it('returns the original string when the date cannot be parsed', () => {
    expect(formatMonthYear('not-a-date', 'en')).toBe('not-a-date');
  });

  it('selects the correct plural form', () => {
    expect(plural('en', 1, { one: 'day', other: 'days' })).toBe('day');
    expect(plural('en', 2, { one: 'day', other: 'days' })).toBe('days');
    // French treats 0 as singular
    expect(plural('fr', 0, { one: 'jour', other: 'jours' })).toBe('jour');
    expect(plural('fr', 2, { one: 'jour', other: 'jours' })).toBe('jours');
  });
});
