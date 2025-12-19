import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  DiscordButton,
  TextLink,
} from "../components";

interface TeamMemberRemovedEmailProps {
  teamName?: string;
  websiteUrl?: string;
  teamImage?: string;
}

export const TeamMemberRemovedEmail = ({
  teamName = "Team Tracked Training",
  websiteUrl = "https://tracked.gg",
}: TeamMemberRemovedEmailProps) => {
  return (
    <EmailLayout preview="Removed from the team">
      <EmailHeader />

      <Heading>Team membership revoked</Heading>
      <Paragraph>
        The team owner has removed you from the team. If you believe this was a
        mistake, please contact the team owner.
      </Paragraph>

      <Paragraph>
        If this email was not expected, please ignore it. You can learn more
        about the Tracked Training Platform by visiting our{" "}
        <TextLink href={websiteUrl}>website</TextLink>.
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default TeamMemberRemovedEmail;
