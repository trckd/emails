import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  TextLink,
} from "../components";

interface Props {
  activateButtonLink: string;
  websiteUrl?: string;
}

export const TrackedMagicLinkActivate = ({
  activateButtonLink = "https://tracked.gg/auth/activate?token=abc123",
  websiteUrl = "https://tracked.gg",
}: Props) => (
  <EmailLayout preview="New activation requested for Tracked - The gym tracking platform">
    <EmailHeader />

    <Paragraph>Welcome to Tracked!</Paragraph>
    <Paragraph>
      Press the button below to confirm your Tracked account email. You will be
      redirected to the app.
    </Paragraph>

    <PrimaryButton href={activateButtonLink}>Confirm Email</PrimaryButton>

    <Paragraph>
      If this email was not expected, please ignore it. You can learn more about
      the Tracked Training Platform by visiting our{" "}
      <TextLink href={websiteUrl}>website</TextLink>.
    </Paragraph>

    <DiscordButton />

    <EmailFooter websiteUrl={websiteUrl} />
  </EmailLayout>
);

export default TrackedMagicLinkActivate;
