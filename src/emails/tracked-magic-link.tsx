import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  TextLink,
} from "../components/index.js";

interface Props {
  loginButtonLink: string;
  websiteUrl?: string;
}

export const TrackedMagicLink = ({
  loginButtonLink = "https://tracked.gg/auth/login?token=abc123",
  websiteUrl = "https://tracked.gg",
}: Props) => (
  <EmailLayout preview="New login requested for Tracked - The gym tracking platform">
    <EmailHeader />

    <Paragraph>Welcome to Tracked!</Paragraph>
    <Paragraph>
      To get started, press the button below to log in to your Tracked account.
      You will be redirected to the app.
    </Paragraph>

    <PrimaryButton href={loginButtonLink}>Login to Tracked</PrimaryButton>

    <Paragraph>
      If this email was not expected, please ignore it. You can learn more about
      the Tracked Training Platform by visiting our{" "}
      <TextLink href={websiteUrl}>website</TextLink>.
    </Paragraph>

    <DiscordButton />

    <EmailFooter websiteUrl={websiteUrl} />
  </EmailLayout>
);

export default TrackedMagicLink;
