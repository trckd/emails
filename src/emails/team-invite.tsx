import * as React from "react";
import { Img } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  PrimaryButton,
  DiscordButton,
  TextLink,
} from "../components";

interface TeamInviteEmailProps {
  teamName?: string;
  teamRole?: string;
  invitedByUsername?: string;
  websiteUrl?: string;
  teamImage?: string;
  invitationLink?: string;
}

export const TeamInviteEmail = ({
  teamName = "Team Tracked Training",
  teamRole = "Athlete",
  websiteUrl = "https://tracked.gg",
  teamImage = "https://cdn.trckd.ca/teams/default.png",
  invitationLink = "https://tracked.gg/team/invite/abc123",
}: TeamInviteEmailProps) => {
  return (
    <EmailLayout preview={`Team Invite for ${teamName}`}>
      <EmailHeader />

      {teamImage && (
        <Img
          src={teamImage}
          height="70"
          alt={teamName}
          style={{
            margin: "0 auto 24px",
            display: "block",
          }}
        />
      )}

      <Heading>Invitation to join {teamName}</Heading>
      <Paragraph>
        Join the team as a <strong>{teamRole}</strong> by pressing the button
        below.
      </Paragraph>

      <PrimaryButton href={invitationLink || "#"} fullWidth>
        Join Team
      </PrimaryButton>

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

export default TeamInviteEmail;
