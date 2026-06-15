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

interface PaymentFinalNoticeEmailProps {
  userName?: string;
  amountDue?: string;
  updatePaymentUrl?: string;
  accessEndsDate?: string;
  websiteUrl?: string;
}

/**
 * Final dunning email: retries are exhausted and the subscription is about to
 * be canceled. Last chance to update the card before access ends.
 */
export const PaymentFinalNoticeEmail = ({
  userName = "Alex",
  amountDue = "$49.00",
  updatePaymentUrl = "https://dashboard.tracked.gg/subscription",
  accessEndsDate = "January 22, 2025",
  websiteUrl = "https://tracked.gg",
}: PaymentFinalNoticeEmailProps) => {
  return (
    <EmailLayout preview="Final notice: update your card to keep your Tracked subscription">
      <EmailHeader />

      <Heading>Final notice: your subscription is about to be canceled</Heading>
      <Paragraph>
        Hi {userName}, we've tried several times to charge {amountDue} for your
        Tracked subscription, but the payment keeps failing.
      </Paragraph>

      <FeatureBox title="Act now to keep your account:">
        <SmallText style={{ marginBottom: "4px" }}>
          • Without a successful payment, your coaching dashboard access ends on{" "}
          {accessEndsDate}
        </SmallText>
        <SmallText>
          • Update your payment method now to avoid losing access and your
          client setup
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={updatePaymentUrl}>
        Update payment method
      </PrimaryButton>

      <Paragraph>
        Your data stays safe and you can reactivate anytime — but updating now
        avoids any interruption to you and your clients.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default PaymentFinalNoticeEmail;
