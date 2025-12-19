import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
} from "../components";

interface CoachRemovedClientEmailProps {
  clientName: string;
  coachName: string;
  websiteUrl?: string;
}

export const CoachRemovedClientEmail = ({
  clientName = "Alex",
  coachName = "Sarah Johnson",
  websiteUrl = "https://tracked.gg",
}: CoachRemovedClientEmailProps) => {
  return (
    <EmailLayout preview={`Update to your coaching relationship with ${coachName}`}>
      <EmailHeader />

      <Heading>Coaching Relationship Update</Heading>
      <Paragraph>
        Hi {clientName}, {coachName} has ended your coaching relationship on
        Tracked.
      </Paragraph>

      <FeatureBox>
        <SmallText>
          Your workout history and progress data remain available in your
          account. You can continue using Tracked independently or connect with
          a new coach.
        </SmallText>
      </FeatureBox>

      <Paragraph>
        Thank you for using Tracked. If you have any questions or concerns,
        please don't hesitate to reach out to our support team.
      </Paragraph>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default CoachRemovedClientEmail;
