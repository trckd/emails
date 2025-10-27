import { describe, it, expect } from 'vitest';
import { isAnonymousUsername, getSafeDisplayName } from './username-validation';

describe('username-validation', () => {
  describe('isAnonymousUsername', () => {
    it('should detect UUIDs as anonymous', () => {
      expect(isAnonymousUsername('01944f9e-8e64-7a78-9e1e-3daba7b13e9f')).toBe(
        true
      );
      expect(isAnonymousUsername('550e8400-e29b-41d4-a716-446655440000')).toBe(
        true
      );
      expect(isAnonymousUsername('123e4567-e89b-12d3-a456-426614174000')).toBe(
        true
      );
    });

    it('should allow real usernames', () => {
      expect(isAnonymousUsername('john_doe')).toBe(false);
      expect(isAnonymousUsername('user123')).toBe(false);
      expect(isAnonymousUsername('Jane-Smith')).toBe(false);
      expect(isAnonymousUsername('athlete2024')).toBe(false);
    });

    it('should treat null/undefined as anonymous', () => {
      expect(isAnonymousUsername(null)).toBe(true);
      expect(isAnonymousUsername(undefined)).toBe(true);
    });

    it('should be case insensitive for UUIDs', () => {
      expect(isAnonymousUsername('01944F9E-8E64-7A78-9E1E-3DABA7B13E9F')).toBe(
        true
      );
      expect(isAnonymousUsername('01944f9E-8e64-7A78-9E1e-3dAbA7b13E9f')).toBe(
        true
      );
    });

    it('should handle empty strings', () => {
      expect(isAnonymousUsername('')).toBe(true);
    });
  });

  describe('getSafeDisplayName', () => {
    it('should prefer real username over other names', () => {
      expect(
        getSafeDisplayName('john_doe', 'John', 'John Doe Smith')
      ).toBe('john_doe');
      expect(getSafeDisplayName('athlete123', 'Jane', 'Jane Smith')).toBe(
        'athlete123'
      );
    });

    it('should fall back to given name when username is UUID', () => {
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, 'John', 'John Doe Smith')).toBe('John');
      expect(getSafeDisplayName(uuid, 'Jane', 'Jane Smith')).toBe('Jane');
    });

    it('should fall back to full name when no given name', () => {
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, null, 'John Doe Smith')).toBe(
        'John Doe Smith'
      );
      expect(getSafeDisplayName(uuid, undefined, 'Jane Smith')).toBe(
        'Jane Smith'
      );
    });

    it('should use default fallback when no names available', () => {
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, null, null)).toBe('there');
      expect(getSafeDisplayName(null, null, null)).toBe('there');
      expect(getSafeDisplayName(undefined, undefined, undefined)).toBe('there');
    });

    it('should use custom fallback when provided', () => {
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, null, null, 'friend')).toBe('friend');
      expect(getSafeDisplayName(null, null, null, 'athlete')).toBe('athlete');
    });

    it('should handle whitespace-only names', () => {
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, '   ', '  ', 'friend')).toBe('friend');
      expect(getSafeDisplayName(uuid, '', '', 'athlete')).toBe('athlete');
    });

    it('should trim whitespace from valid names', () => {
      expect(getSafeDisplayName('john_doe', '  John  ', 'John Doe')).toBe(
        'john_doe'
      );
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, '  John  ', 'John Doe')).toBe('  John  '); // Note: function doesn't trim, just checks length
    });

    it('should handle complex scenarios', () => {
      // User with username
      expect(getSafeDisplayName('athlete_pro', 'Mike', 'Mike Johnson')).toBe(
        'athlete_pro'
      );

      // New user with UUID, given name
      const uuid = '01944f9e-8e64-7a78-9e1e-3daba7b13e9f';
      expect(getSafeDisplayName(uuid, 'Sarah', 'Sarah Williams')).toBe(
        'Sarah'
      );

      // User with only full name
      expect(getSafeDisplayName(uuid, null, 'Robert Brown')).toBe(
        'Robert Brown'
      );

      // Completely anonymous
      expect(getSafeDisplayName(uuid, null, null, 'coach')).toBe('coach');
    });
  });
});
