import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
} from "../components/index.js";

interface ProspectConvertedClientEmailProps {
  clientName: string;
  coachName: string;
  appUrl?: string;
  websiteUrl?: string;
}

export const ProspectConvertedClientEmail = ({
  clientName = "there",
  coachName = "your coach",
  appUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
}: ProspectConvertedClientEmailProps) => {
  return (
    <EmailLayout preview={`You've been accepted by ${coachName} on Tracked!`}>
      <EmailHeader />

      <Heading>Welcome to the Team!</Heading>
      <Paragraph>
        Hi {clientName}, great news — {coachName} has accepted you as a client
        on Tracked. You're all set to start your coaching journey.
      </Paragraph>

      <FeatureBox title="What happens next:">
        <FeatureList
          items={[
            {
              title: "Open the app",
              description:
                "Your coach is now connected to your account and ready to go.",
            },
            {
              title: "Check your workouts",
              description:
                "Your coach can assign personalized programs directly to you.",
            },
            {
              title: "Stay in touch",
              description:
                "Message your coach anytime through the app for guidance and support.",
            },
          ]}
        />
      </FeatureBox>

      <PrimaryButton href={appUrl} fullWidth>
        Open Tracked
      </PrimaryButton>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default ProspectConvertedClientEmail;
