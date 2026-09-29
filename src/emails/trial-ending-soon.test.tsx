import * as React from 'react';
import { render } from '@react-email/components';
import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from '../i18n/index';
import {
  TrialEndingSoonEmail,
  type TrialEndingSoonEmailProps,
  trialEndingSoonSubject,
} from './trial-ending-soon';

const props: TrialEndingSoonEmailProps = {
  userName: 'Jackson',
  trialEndDate: 'October 2, 2026',
  amountDue: '$49.00',
  paymentMethod: { kind: 'saved', cardLast4: '4242' },
  manageUrl: 'https://dashboard.tracked.gg/subscription',
  locale: 'en',
};

function text(overrides: Partial<TrialEndingSoonEmailProps> = {}) {
  return render(<TrialEndingSoonEmail {...props} {...overrides} />, {
    plainText: true,
  });
}

describe('TrialEndingSoonEmail', () => {
  it('tells a coach with a saved card what will be charged and how to cancel', async () => {
    const body = await text();

    expect(body).toContain('your subscription will start automatically');
    expect(body).toContain("We'll charge $49.00 to your card ending in 4242.");
    expect(body).toContain(
      "Cancel any time before October 2, 2026 and you won't be charged"
    );
    expect(body).toContain('Manage subscription');
    expect(body).toContain('https://dashboard.tracked.gg/subscription');
  });

  it('drops the details the caller could not read instead of guessing', async () => {
    const body = await text({
      amountDue: null,
      paymentMethod: { kind: 'saved', cardLast4: null },
    });

    expect(body).toContain(
      "We'll charge your first payment to your saved payment method."
    );
  });

  it('never promises a charge when no payment method is confirmed', async () => {
    const body = await text({ paymentMethod: { kind: 'unconfirmed' } });

    expect(body).not.toContain("We'll charge");
    expect(body).not.toContain('start automatically');
    expect(body).toContain('make sure a payment method is saved');
    expect(body).toContain('Check payment method');
  });

  it('does not tell an already-subscribed coach to subscribe or that they will lose access', async () => {
    for (const locale of SUPPORTED_LOCALES) {
      const body = await text({ locale });
      expect(body).not.toMatch(/subscribe now/i);
      expect(body).not.toMatch(/lose access/i);
    }
  });

  it.each(SUPPORTED_LOCALES.filter((l) => l !== 'en'))(
    'renders %s with its own copy',
    async (locale) => {
      const body = await text({ locale });

      expect(body).toContain('$49.00');
      expect(body).toContain('4242');
      expect(body).not.toContain('your subscription will start automatically');
    }
  );
});

describe('trialEndingSoonSubject', () => {
  it('names the start date when a payment method is saved', () => {
    expect(trialEndingSoonSubject(props as Required<typeof props>)).toBe(
      'Your Tracked subscription starts on October 2, 2026'
    );
  });

  it('asks the coach to check their payment method otherwise', () => {
    expect(
      trialEndingSoonSubject({
        trialEndDate: props.trialEndDate,
        paymentMethod: { kind: 'unconfirmed' },
      })
    ).toBe('Your Tracked trial ends soon: check your payment method');
  });
});
