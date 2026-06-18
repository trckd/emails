import * as React from 'react';
import { Section, Text, Row, Column } from '@react-email/components';
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  TipBox,
  PrimaryButton,
  colors,
} from '../components/index.js';
import type { Locale } from '../i18n/locales.js';
import { clientOnboardedMessages } from './client-onboarded.messages.js';

interface ClientOnboardedEmailProps {
  coachName: string;
  clientName: string;
  clientEmail: string;
  clientProfileUrl: string;
  websiteUrl?: string;
  dateOfBirth?: string;
  height?: string;
  weight?: string;
  timezone?: string;
  unitPreference?: 'metric' | 'imperial';
  currentGoal?: string;
  currentWorkouts?: string[];
  currentTrainingSplit?: string;
  exerciseSelection?: string[];
  equipmentListGym?: string[];
  injuries?: string[];
  avgCardioPerWeek?: string;
  avgStepsPerDay?: string;
  foodPreferences?: string[];
  allergies?: string[];
  dailyCalories?: string;
  dailyMacros?: {
    protein: string;
    carbs: string;
    fat: string;
  };
  avgNumberMealsPerDay?: string;
  mealsYouUsuallyEat?: string[];
  numMealsBeforeGym?: string;
  hasProgressPhotos?: boolean;
  locale?: Locale;
}

const formatArray = (arr?: string[]): string => {
  if (!arr || arr.length === 0) return '';
  return arr.join(', ');
};

const DataRow = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) => {
  if (!value) return null;

  return (
    <Row style={{ marginBottom: '8px' }}>
      <Column style={{ width: '140px', verticalAlign: 'top' }}>
        <Text
          style={{
            color: colors.textMuted,
            fontSize: '13px',
            lineHeight: '20px',
            margin: '0',
            fontWeight: '500' as const,
          }}
        >
          {label}
        </Text>
      </Column>
      <Column style={{ verticalAlign: 'top' }}>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: '14px',
            lineHeight: '20px',
            margin: '0',
          }}
        >
          {value}
        </Text>
      </Column>
    </Row>
  );
};

export const ClientOnboardedEmail = ({
  coachName = 'Sarah Johnson',
  clientName = 'Alex Thompson',
  clientEmail = 'alex@example.com',
  clientProfileUrl = 'tracked://app',
  websiteUrl = 'https://tracked.gg',
  dateOfBirth = 'March 15, 1992',
  height = '5\'10" (178 cm)',
  weight = '175 lbs (79 kg)',
  timezone = 'America/New_York',
  unitPreference = 'imperial',
  currentGoal = 'Build muscle and improve strength',
  currentWorkouts = ['Push/Pull/Legs', 'Compound movements'],
  currentTrainingSplit = '6 days per week',
  exerciseSelection = ['Barbell lifts', 'Dumbbell work', 'Cable exercises'],
  equipmentListGym = [
    'Full gym access',
    'Barbells',
    'Dumbbells',
    'Cable machines',
  ],
  injuries = ['Previous lower back strain (recovered)'],
  avgCardioPerWeek = '2-3 sessions, 20-30 minutes each',
  avgStepsPerDay = '8,000-10,000',
  foodPreferences = ['High protein', 'Whole foods'],
  allergies = ['None'],
  dailyCalories = '2,800',
  dailyMacros = { protein: '180', carbs: '300', fat: '85' },
  avgNumberMealsPerDay = '4-5',
  mealsYouUsuallyEat = [
    'Eggs and oatmeal',
    'Chicken and rice',
    'Protein shakes',
  ],
  numMealsBeforeGym = '2',
  hasProgressPhotos = true,
  locale = 'en',
}: ClientOnboardedEmailProps) => {
  const t = clientOnboardedMessages[locale];
  const displayName = clientName || clientEmail;

  const hasPersonalData = dateOfBirth || height || weight || timezone;
  const hasTrainingData =
    currentGoal ||
    (currentWorkouts && currentWorkouts.length > 0) ||
    currentTrainingSplit ||
    (exerciseSelection && exerciseSelection.length > 0) ||
    (equipmentListGym && equipmentListGym.length > 0) ||
    (injuries && injuries.length > 0) ||
    avgCardioPerWeek ||
    avgStepsPerDay;
  const hasNutritionData =
    (foodPreferences && foodPreferences.length > 0) ||
    (allergies && allergies.length > 0) ||
    dailyCalories ||
    dailyMacros ||
    avgNumberMealsPerDay ||
    (mealsYouUsuallyEat && mealsYouUsuallyEat.length > 0) ||
    numMealsBeforeGym;

  const infoBoxStyle = {
    backgroundColor: colors.surface,
    padding: '20px 24px',
    borderRadius: '8px',
    margin: '24px 0',
    border: `1px solid ${colors.border}`,
  };

  const sectionHeadingStyle = {
    color: colors.accent,
    fontSize: '14px',
    fontWeight: 'bold' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '16px',
    marginTop: '0',
  };

  return (
    <EmailLayout preview={t.preview(displayName)}>
      <EmailHeader />

      <Heading>{t.heading}</Heading>
      <Paragraph>{t.intro(coachName, displayName)}</Paragraph>

      {/* Client Basic Info */}
      <Section style={infoBoxStyle}>
        <Text style={sectionHeadingStyle}>{t.clientDetailsTitle}</Text>
        <DataRow label={t.nameLabel} value={displayName} />
        <DataRow label={t.emailLabel} value={clientEmail} />
        {hasPersonalData && (
          <>
            <DataRow label={t.dateOfBirthLabel} value={dateOfBirth} />
            <DataRow label={t.heightLabel} value={height} />
            <DataRow label={t.weightLabel} value={weight} />
            <DataRow label={t.timezoneLabel} value={timezone} />
            <DataRow
              label={t.unitsLabel}
              value={
                unitPreference === 'metric'
                  ? t.unitsMetric
                  : unitPreference === 'imperial'
                    ? t.unitsImperial
                    : undefined
              }
            />
          </>
        )}
      </Section>

      {/* Training Info */}
      {hasTrainingData && (
        <Section style={infoBoxStyle}>
          <Text style={sectionHeadingStyle}>{t.trainingInfoTitle}</Text>
          <DataRow label={t.currentGoalLabel} value={currentGoal} />
          <DataRow
            label={t.currentWorkoutsLabel}
            value={formatArray(currentWorkouts)}
          />
          <DataRow label={t.trainingSplitLabel} value={currentTrainingSplit} />
          <DataRow
            label={t.exercisePreferencesLabel}
            value={formatArray(exerciseSelection)}
          />
          <DataRow
            label={t.availableEquipmentLabel}
            value={formatArray(equipmentListGym)}
          />
          <DataRow label={t.injuriesLabel} value={formatArray(injuries)} />
          <DataRow label={t.cardioPerWeekLabel} value={avgCardioPerWeek} />
          <DataRow label={t.dailyStepsLabel} value={avgStepsPerDay} />
        </Section>
      )}

      {/* Nutrition Info */}
      {hasNutritionData && (
        <Section style={infoBoxStyle}>
          <Text style={sectionHeadingStyle}>{t.nutritionInfoTitle}</Text>
          <DataRow
            label={t.foodPreferencesLabel}
            value={formatArray(foodPreferences)}
          />
          <DataRow label={t.allergiesLabel} value={formatArray(allergies)} />
          <DataRow label={t.dailyCaloriesLabel} value={dailyCalories} />
          {dailyMacros && (
            <DataRow
              label={t.dailyMacrosLabel}
              value={t.macrosValue(
                dailyMacros.protein,
                dailyMacros.carbs,
                dailyMacros.fat
              )}
            />
          )}
          <DataRow label={t.mealsPerDayLabel} value={avgNumberMealsPerDay} />
          <DataRow
            label={t.usualMealsLabel}
            value={formatArray(mealsYouUsuallyEat)}
          />
          <DataRow label={t.preWorkoutMealsLabel} value={numMealsBeforeGym} />
        </Section>
      )}

      {/* Progress Photos Notice */}
      {hasProgressPhotos && (
        <TipBox title={t.progressPhotosTitle} locale={locale}>
          {t.progressPhotosBody}
        </TipBox>
      )}

      <Paragraph>{t.reviewProfile}</Paragraph>

      <PrimaryButton href={clientProfileUrl}>{t.cta}</PrimaryButton>

      <Paragraph>{t.assignFirstWorkout}</Paragraph>

      <EmailFooter websiteUrl={websiteUrl} locale={locale} />
    </EmailLayout>
  );
};

export default ClientOnboardedEmail;
