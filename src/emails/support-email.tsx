import * as React from "react";
import {
  EmailLayout,
  EmailHeader,
  EmailFooter,
  Heading,
  FeatureBox,
  SmallText,
  DiscordButton,
} from "../components/index.js";

interface SupportEmailProps {
  email: string;
  message: string;
  category: string;
}

export const SupportEmail = ({
  email = "user@example.com",
  message = "I'm having trouble syncing my workouts between devices. The app shows different workout history on my phone versus my tablet. Can you help me resolve this issue?",
  category = "Technical Issue",
}: SupportEmailProps) => (
  <EmailLayout preview={`Support request from ${email}`}>
    <EmailHeader />

    <Heading>Support Request</Heading>

    <FeatureBox>
      <SmallText style={{ marginBottom: "8px" }}>
        <strong>Email:</strong> {email}
      </SmallText>
      <SmallText style={{ marginBottom: "8px" }}>
        <strong>Category:</strong> {category}
      </SmallText>
      <SmallText>
        <strong>Message:</strong> {message}
      </SmallText>
    </FeatureBox>

    <DiscordButton />

    <EmailFooter />
  </EmailLayout>
);

export default SupportEmail;
