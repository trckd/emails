import * as React from "react";
import { Section, Img } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  FeatureList,
  PrimaryButton,
  TextLink,
  colors,
} from "../components/index.js";

interface CoachInviteEmailProps {
  coachName: string;
  coachEmail: string;
  websiteUrl?: string;
  invitationLink: string;
  coachAvatarUrl?: string;
}

export const CoachInviteEmail = ({
  coachName = "Sarah Johnson",
  coachEmail = "sarah@example.com",
  websiteUrl = "https://tracked.gg",
  invitationLink = "https://tracked.gg/invite/abc123",
  coachAvatarUrl = "https://cdn.trckd.ca/avatars/default.png",
}: CoachInviteEmailProps) => {
  const displayName = coachName || coachEmail;

  return (
    <EmailLayout preview={`Join ${displayName}'s coaching program on Tracked`}>
      <EmailHeader />

      {/* Coach Info Section */}
      <Section style={{ textAlign: "center" as const, marginBottom: "24px" }}>
        {coachAvatarUrl && (
          <Img
            src={coachAvatarUrl}
            width="64"
            height="64"
            alt={displayName}
            style={{
              borderRadius: "50%",
              margin: "0 auto 16px",
              border: `2px solid ${colors.accent}`,
            }}
          />
        )}
        <Heading style={{ textAlign: "center" as const }}>
          Join {displayName}'s Coaching Program
        </Heading>
      </Section>

      <Paragraph>
        Hi there! {displayName} wants to coach you on Tracked - a platform for
        personalized fitness coaching and progress tracking.
      </Paragraph>

      <FeatureBox title="What you'll get:">
        <FeatureList
          items={[
            { title: "Personalized workout programs" },
            { title: "Direct communication with your coach" },
            { title: "Progress tracking & analytics" },
            { title: "Nutrition guidance" },
          ]}
        />
      </FeatureBox>

      <PrimaryButton href={invitationLink} fullWidth>
        Accept Coaching Invitation
      </PrimaryButton>

      <Paragraph muted style={{ textAlign: "center" as const }}>
        If this email was not expected, please ignore it. Learn more about
        Tracked at <TextLink href={websiteUrl}>tracked.gg</TextLink>
      </Paragraph>

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default CoachInviteEmail;
