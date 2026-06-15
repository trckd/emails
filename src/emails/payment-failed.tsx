import * as React from "react";
import {
  DiscordButton,
  EmailFooter,
  EmailHeader,
  EmailLayout,
  FeatureBox,
  Heading,
  Paragraph,
  PrimaryButton,
  SmallText,
} from "../components/index.js";

interface PaymentFailedEmailProps {
  userName?: string;
  amountDue?: string;
  updatePaymentUrl?: string;
  graceEndsDate?: string;
  websiteUrl?: string;
}

/**
 * First-attempt dunning email: a renewal charge failed. The coach keeps access
 * through the grace window — nudge them to update their card before it ends.
 */
export const PaymentFailedEmail = ({
  userName = "Alex",
  amountDue = "$49.00",
  updatePaymentUrl = "https://dashboard.tracked.gg/subscription",
  graceEndsDate = "January 22, 2025",
  websiteUrl = "https://tracked.gg",
}: PaymentFailedEmailProps) => {
  return (
    <EmailLayout preview="We couldn't process your Tracked payment — update your card to keep access">
      <EmailHeader />

      <Heading>We couldn't process your payment</Heading>
      <Paragraph>
        Hi {userName}, your recent Tracked subscription payment of {amountDue}{" "}
        didn't go through. This is usually an expired card or insufficient funds.
      </Paragraph>

      <FeatureBox title="What you need to do:">
        <SmallText style={{ marginBottom: "4px" }}>
          • Update your payment method to keep your coaching dashboard
        </SmallText>
        <SmallText style={{ marginBottom: "4px" }}>
          • You'll keep full access until {graceEndsDate}
        </SmallText>
        <SmallText>
          • We'll retry the charge automatically once your card is updated
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={updatePaymentUrl}>
        Update payment method
      </PrimaryButton>

      <Paragraph>
        Already updated your card? You can ignore this — the next retry will go
        through.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default PaymentFailedEmail;
