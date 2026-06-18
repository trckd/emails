import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { render } from '@react-email/components';
import { MonthlyReportEmail } from '../index';
import { monthlyReportMessages } from './monthly-report.messages';

const en = monthlyReportMessages.en;

// All metric values null = "no data"; individual tests flip specific ones to 0,
// which is valid data that must NOT be hidden by truthiness checks.
const nullMetrics = {
  accountId: 1,
  email: 'user@example.com',
  reportMonth: '2025-11-01',
  avgStepCount: null,
  avgBodyweight: null,
  bodyweightChange: null,
  avgSessionsPerWeek: null,
  totalSetsTracked: null,
  totalSessionsTracked: null,
  topMuscleGroups: null,
  avgReadinessEnergy: null,
  avgReadinessMood: null,
  avgReadinessStress: null,
  avgReadinessSoreness: null,
  avgReadinessSleep: null,
  avgSessionSatisfaction: null,
  avgSessionProgress: null,
  avgSessionMotivation: null,
  avgSessionEnjoyment: null,
};

const renderReport = (overrides: Record<string, number>) =>
  render(
    React.createElement(MonthlyReportEmail, {
      metrics: { ...nullMetrics, ...overrides },
      previousMetrics: null,
    })
  );

describe('MonthlyReportEmail treats 0 as valid data', () => {
  it('hides the bodyweight section when there is genuinely no data', async () => {
    const html = await renderReport({});
    expect(html).not.toContain(en.bodyweightTrends);
  });

  it('shows the bodyweight section when the monthly change is exactly 0', async () => {
    const html = await renderReport({ bodyweightChange: 0 });
    expect(html).toContain(en.bodyweightTrends);
  });

  it('renders a session-insight row whose value is exactly 0', async () => {
    const html = await renderReport({ avgSessionProgress: 0 });
    expect(html).toContain(en.sessionInsights);
    expect(html).toContain(en.avgSessionProgress);
  });
});
