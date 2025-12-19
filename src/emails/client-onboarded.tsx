import * as React from "react";
import { Section, Text, Row, Column } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  TipBox,
  PrimaryButton,
  colors,
} from "../components/index.js";

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
  unitPreference?: "metric" | "imperial";
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
}

const formatArray = (arr?: string[]): string => {
  if (!arr || arr.length === 0) return "";
  return arr.join(", ");
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
    <Row style={{ marginBottom: "8px" }}>
      <Column style={{ width: "140px", verticalAlign: "top" }}>
        <Text
          style={{
            color: colors.textMuted,
            fontSize: "13px",
            lineHeight: "20px",
            margin: "0",
            fontWeight: "500" as const,
          }}
        >
          {label}
        </Text>
      </Column>
      <Column style={{ verticalAlign: "top" }}>
        <Text
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          {value}
        </Text>
      </Column>
    </Row>
  );
};

export const ClientOnboardedEmail = ({
  coachName = "Sarah Johnson",
  clientName = "Alex Thompson",
  clientEmail = "alex@example.com",
  clientProfileUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
  dateOfBirth = "March 15, 1992",
  height = "5'10\" (178 cm)",
  weight = "175 lbs (79 kg)",
  timezone = "America/New_York",
  unitPreference = "imperial",
  currentGoal = "Build muscle and improve strength",
  currentWorkouts = ["Push/Pull/Legs", "Compound movements"],
  currentTrainingSplit = "6 days per week",
  exerciseSelection = ["Barbell lifts", "Dumbbell work", "Cable exercises"],
  equipmentListGym = ["Full gym access", "Barbells", "Dumbbells", "Cable machines"],
  injuries = ["Previous lower back strain (recovered)"],
  avgCardioPerWeek = "2-3 sessions, 20-30 minutes each",
  avgStepsPerDay = "8,000-10,000",
  foodPreferences = ["High protein", "Whole foods"],
  allergies = ["None"],
  dailyCalories = "2,800",
  dailyMacros = { protein: "180", carbs: "300", fat: "85" },
  avgNumberMealsPerDay = "4-5",
  mealsYouUsuallyEat = ["Eggs and oatmeal", "Chicken and rice", "Protein shakes"],
  numMealsBeforeGym = "2",
  hasProgressPhotos = true,
}: ClientOnboardedEmailProps) => {
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
    padding: "20px 24px",
    borderRadius: "8px",
    margin: "24px 0",
    border: `1px solid ${colors.border}`,
  };

  const sectionHeadingStyle = {
    color: colors.accent,
    fontSize: "14px",
    fontWeight: "bold" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    marginBottom: "16px",
    marginTop: "0",
  };

  return (
    <EmailLayout
      preview={`${displayName} has completed onboarding and is ready to start training`}
    >
      <EmailHeader />

      <Heading>New Client Onboarded!</Heading>
      <Paragraph>
        Hi {coachName}, {displayName} has completed their onboarding
        questionnaire and is ready to start their training journey with you.
      </Paragraph>

      {/* Client Basic Info */}
      <Section style={infoBoxStyle}>
        <Text style={sectionHeadingStyle}>Client Details</Text>
        <DataRow label="Name" value={displayName} />
        <DataRow label="Email" value={clientEmail} />
        {hasPersonalData && (
          <>
            <DataRow label="Date of Birth" value={dateOfBirth} />
            <DataRow label="Height" value={height} />
            <DataRow label="Weight" value={weight} />
            <DataRow label="Timezone" value={timezone} />
            <DataRow
              label="Units"
              value={
                unitPreference === "metric"
                  ? "Metric (kg/cm)"
                  : unitPreference === "imperial"
                    ? "Imperial (lbs/ft)"
                    : undefined
              }
            />
          </>
        )}
      </Section>

      {/* Training Info */}
      {hasTrainingData && (
        <Section style={infoBoxStyle}>
          <Text style={sectionHeadingStyle}>Training Information</Text>
          <DataRow label="Current Goal" value={currentGoal} />
          <DataRow
            label="Current Workouts"
            value={formatArray(currentWorkouts)}
          />
          <DataRow label="Training Split" value={currentTrainingSplit} />
          <DataRow
            label="Exercise Preferences"
            value={formatArray(exerciseSelection)}
          />
          <DataRow
            label="Available Equipment"
            value={formatArray(equipmentListGym)}
          />
          <DataRow
            label="Injuries/Limitations"
            value={formatArray(injuries)}
          />
          <DataRow label="Cardio per Week" value={avgCardioPerWeek} />
          <DataRow label="Daily Steps" value={avgStepsPerDay} />
        </Section>
      )}

      {/* Nutrition Info */}
      {hasNutritionData && (
        <Section style={infoBoxStyle}>
          <Text style={sectionHeadingStyle}>Nutrition Information</Text>
          <DataRow
            label="Food Preferences"
            value={formatArray(foodPreferences)}
          />
          <DataRow label="Allergies" value={formatArray(allergies)} />
          <DataRow label="Daily Calories" value={dailyCalories} />
          {dailyMacros && (
            <DataRow
              label="Daily Macros"
              value={`P: ${dailyMacros.protein}g | C: ${dailyMacros.carbs}g | F: ${dailyMacros.fat}g`}
            />
          )}
          <DataRow label="Meals per Day" value={avgNumberMealsPerDay} />
          <DataRow
            label="Usual Meals"
            value={formatArray(mealsYouUsuallyEat)}
          />
          <DataRow label="Pre-workout Meals" value={numMealsBeforeGym} />
        </Section>
      )}

      {/* Progress Photos Notice */}
      {hasProgressPhotos && (
        <TipBox title="Progress Photos">
          This client has uploaded progress photos. View them in their profile.
        </TipBox>
      )}

      <Paragraph>
        Review their profile and start building their personalized training
        program.
      </Paragraph>

      <PrimaryButton href={clientProfileUrl}>View Client Profile</PrimaryButton>

      <Paragraph>
        Assign their first workout or check in to welcome them to your coaching
        roster.
      </Paragraph>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default ClientOnboardedEmail;
