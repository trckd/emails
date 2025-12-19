import * as React from "react";
import { Section, Img } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  FeatureBox,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from "../components";

interface NewFollowerEmailProps {
  userName: string;
  followerName: string;
  followerUsername?: string;
  followerAvatarUrl?: string;
  followerProfileUrl: string;
  websiteUrl?: string;
}

export const NewFollowerEmail = ({
  userName = "Alex",
  followerName = "Jordan Smith",
  followerUsername = "jordanfitness",
  followerAvatarUrl = "https://cdn.trckd.ca/avatars/default.png",
  followerProfileUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
}: NewFollowerEmailProps) => {
  const displayName = followerUsername
    ? `${followerName} (@${followerUsername})`
    : followerName;

  return (
    <EmailLayout preview={`${followerName} started following you on Tracked`}>
      <EmailHeader />

      <Heading>You Have a New Follower!</Heading>
      <Paragraph>
        Hi {userName}, {displayName} started following you on Tracked.
      </Paragraph>

      {followerAvatarUrl && (
        <Section style={{ textAlign: "center" as const, margin: "24px 0" }}>
          <Img
            src={followerAvatarUrl}
            width="80"
            height="80"
            alt={followerName}
            style={{
              borderRadius: "50%",
              border: `2px solid ${colors.accent}`,
            }}
          />
        </Section>
      )}

      <FeatureBox>
        <SmallText>
          <strong>{displayName}</strong> is now following your fitness journey
          and will see your public workouts and achievements.
        </SmallText>
      </FeatureBox>

      <PrimaryButton href={followerProfileUrl}>View Profile</PrimaryButton>

      <Paragraph>
        Check out their profile to see their workouts and consider following
        them back!
      </Paragraph>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default NewFollowerEmail;
