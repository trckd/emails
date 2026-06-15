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

interface PaymentActionRequiredEmailProps {
  userName?: string;
  amountDue?: string;
  confirmUrl?: string;
  websiteUrl?: string;
}

/**
 * 3D Secure / bank-authentication dunning email: the renewal needs the coach to
 * confirm the payment with their bank. `confirmUrl` is Stripe's hosted-invoice
 * link where they complete authentication.
 */
export const PaymentActionRequiredEmail = ({
  userName = "Alex",
  amountDue = "$49.00",
  confirmUrl = "https://invoice.stripe.com/i/example",
  websiteUrl = "https://tracked.gg",
}: PaymentActionRequiredEmailProps) => {
  return (
    <EmailLayout preview="Your bank needs you to confirm your Tracked payment">
      <EmailHeader />

      <Heading>Confirm your payment</Heading>
      <Paragraph>
        Hi {userName}, your bank needs you to verify your recent Tracked payment
        of {amountDue} before it can go through (this is 3D Secure, a standard
        security check).
      </Paragraph>

      <FeatureBox title="One quick step:">
        <SmallText>
          • Tap the button below and follow your bank's prompt to authenticate
          the payment
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={confirmUrl}>Confirm payment</PrimaryButton>

      <Paragraph>
        Until this is confirmed, your renewal stays pending — it only takes a
        moment, and your dashboard access continues in the meantime.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default PaymentActionRequiredEmail;
