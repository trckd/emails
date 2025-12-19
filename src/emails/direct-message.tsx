import * as React from "react";
import { Section, Text } from "@react-email/components";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  Paragraph,
  SmallText,
  PrimaryButton,
  DiscordButton,
  colors,
} from "../components/index.js";

interface DirectMessageEmailProps {
  recipientName: string;
  senderName: string;
  senderUsername?: string;
  messagePreview: string;
  messageUrl: string;
  websiteUrl?: string;
}

export const DirectMessageEmail = ({
  recipientName = "Alex",
  senderName = "Jordan Smith",
  senderUsername = "jordanfitness",
  messagePreview = "Hey! Great workout today. I noticed you hit a new PR on bench press - that's awesome! Want to share your training program?",
  messageUrl = "tracked://app",
  websiteUrl = "https://tracked.gg",
}: DirectMessageEmailProps) => {
  const displayName = senderUsername
    ? `${senderName} (@${senderUsername})`
    : senderName;

  return (
    <EmailLayout preview={`New message from ${senderName} on Tracked`}>
      <EmailHeader />

      <Heading>You Have a New Message</Heading>
      <Paragraph>
        Hi {recipientName}, {displayName} sent you a message on Tracked.
      </Paragraph>

      <Section
        style={{
          backgroundColor: colors.surface,
          padding: "16px 24px",
          borderRadius: "8px",
          margin: "24px 0",
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Text
          style={{
            color: colors.textMuted,
            fontSize: "12px",
            fontWeight: "bold" as const,
            textTransform: "uppercase" as const,
            marginBottom: "8px",
          }}
        >
          Message Preview:
        </Text>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: "15px",
            lineHeight: "22px",
            fontStyle: "italic" as const,
            margin: "0",
          }}
        >
          {messagePreview}
        </Text>
      </Section>

      <PrimaryButton href={messageUrl}>View Message</PrimaryButton>

      <SmallText muted>
        Open the Tracked app to read the full message and reply.
      </SmallText>

      <DiscordButton />

      <EmailFooter websiteUrl={websiteUrl} />
    </EmailLayout>
  );
};

export default DirectMessageEmail;
