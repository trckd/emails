import * as React from 'react';
import { render } from '@react-email/components';
import { describe, expect, it } from 'vitest';
import { ClientProgressReportEmail } from './client-progress-report';

const requiredProps = {
  clientName: 'Alex',
  coachName: 'Coach Sam',
  periodLabel: 'Jun 22 – Jun 28',
  reportUrl: 'https://app.tracked.gg/v/report/example-token',
};

describe('ClientProgressReportEmail', () => {
  it('renders a goal focus and ordered progress insights', async () => {
    const html = await render(
      <ClientProgressReportEmail
        {...requiredProps}
        goalTitle="Build endurance for a half marathon"
        insights={[
          {
            label: 'Cardio minutes',
            value: '135',
            detail: '3 sessions',
          },
          {
            label: 'Average sleep',
            value: '7h 35m',
            detail: '6 nights tracked',
          },
          { label: 'Step adherence', value: '86%' },
        ]}
      />
    );

    expect(html).toContain('Your focus');
    expect(html).toContain('Build endurance for a half marathon');
    expect(html).toContain('Progress highlights');
    expect(html).toContain('Cardio minutes');
    expect(html).toContain('135');
    expect(html).toContain('3 sessions');
    expect(html).toContain('Average sleep');
    expect(html).toContain('7h 35m');
    expect(html).toContain('Step adherence');
    expect(html).toContain('86%');
    expect(html.indexOf('Cardio minutes')).toBeLessThan(
      html.indexOf('Average sleep')
    );
    expect(html.indexOf('Average sleep')).toBeLessThan(
      html.indexOf('Step adherence')
    );
  });

  it('keeps the goal-specific sections optional for existing callers', async () => {
    const html = await render(
      <ClientProgressReportEmail {...requiredProps} workoutsCompleted={4} />
    );

    expect(html).toContain('Workouts');
    expect(html).not.toContain('Your focus');
    expect(html).not.toContain('Progress highlights');
  });

  it('localizes the new section headings', async () => {
    const html = await render(
      <ClientProgressReportEmail
        {...requiredProps}
        locale="es"
        goalTitle="Mejorar la resistencia"
        insights={[{ label: 'Minutos de cardio', value: '135' }]}
      />
    );

    expect(html).toContain('Tu enfoque');
    expect(html).toContain('Aspectos destacados');
  });
});
