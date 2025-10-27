import { describe, it, expect } from 'vitest';
import {
  isPrivateRelayEmail,
  isValidEmailFormat,
  shouldSendEmailTo,
} from './email-validation';

describe('email-validation', () => {
  describe('isPrivateRelayEmail', () => {
    it('should detect Apple private relay emails', () => {
      expect(isPrivateRelayEmail('6g65mj8rd5@privaterelay.appleid.com')).toBe(
        true
      );
      expect(
        isPrivateRelayEmail('randomstring@privaterelay.appleid.com')
      ).toBe(true);
    });

    it('should allow normal emails', () => {
      expect(isPrivateRelayEmail('user@gmail.com')).toBe(false);
      expect(isPrivateRelayEmail('john@example.com')).toBe(false);
      expect(isPrivateRelayEmail('test@company.co.uk')).toBe(false);
    });

    it('should be case insensitive', () => {
      expect(isPrivateRelayEmail('TEST@PRIVATERELAY.APPLEID.COM')).toBe(true);
      expect(isPrivateRelayEmail('Test@PrivateRelay.AppleID.com')).toBe(true);
    });
  });

  describe('isValidEmailFormat', () => {
    it('should validate correct email formats', () => {
      expect(isValidEmailFormat('user@example.com')).toBe(true);
      expect(isValidEmailFormat('test.user@company.co.uk')).toBe(true);
      expect(isValidEmailFormat('name+tag@domain.com')).toBe(true);
      expect(isValidEmailFormat('123@numbers.net')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(isValidEmailFormat('notanemail')).toBe(false);
      expect(isValidEmailFormat('missing@domain')).toBe(false);
      expect(isValidEmailFormat('@nodomain.com')).toBe(false);
      expect(isValidEmailFormat('noat.com')).toBe(false);
      expect(isValidEmailFormat('spaces in@email.com')).toBe(false);
      expect(isValidEmailFormat('')).toBe(false);
    });
  });

  describe('shouldSendEmailTo', () => {
    it('should allow valid emails', () => {
      expect(shouldSendEmailTo('user@example.com')).toBe(true);
      expect(shouldSendEmailTo('valid.email@company.co.uk')).toBe(true);
    });

    it('should reject null/undefined emails', () => {
      expect(shouldSendEmailTo(null)).toBe(false);
      expect(shouldSendEmailTo(undefined)).toBe(false);
    });

    it('should reject private relay emails', () => {
      expect(
        shouldSendEmailTo('randomstring@privaterelay.appleid.com')
      ).toBe(false);
    });

    it('should reject invalid email formats', () => {
      expect(shouldSendEmailTo('notanemail')).toBe(false);
      expect(shouldSendEmailTo('missing@domain')).toBe(false);
      expect(shouldSendEmailTo('')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(shouldSendEmailTo('   ')).toBe(false);
      expect(shouldSendEmailTo('valid@email.com ')).toBe(false); // trailing space fails regex
      expect(shouldSendEmailTo('valid@email.com')).toBe(true); // properly formatted email works
    });
  });
});
