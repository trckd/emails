import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
} from "../components/index.js";

interface ProspectConvertedCoachEmailProps {
  coachName: string;
  clientName: string;
  clientEmail?: string;
  clientProfileUrl: string;
  websiteUrl?: string;
}

export const ProspectConvertedCoachEmail = ({
  coachName = "Coach",
  clientName = "New Client",
  clientEmail,
  clientProfileUrl = "https://dashboard.tracked.training/clients",
  websiteUrl = "https://tracked.gg",
}: ProspectConvertedCoachEmailProps) => {
  return (
    <EmailLayout
      preview={`${clientName} has been added as your client on Tracked`}
    >
      <EmailHeader />

      <Heading>Client Accepted</Heading>
      <Paragraph>
        Hi {coachName}, this is a confirmation that you've accepted{" "}
        {clientName}
        {clientEmail ? ` (${clientEmail})` : ""} as a client. They've been
        notified and can now see you as their coach in the app.
      </Paragraph>

      <PrimaryButton href={clientProfileUrl} fullWidth>
        View Client Profile
      </PrimaryButton>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default ProspectConvertedCoachEmail;
