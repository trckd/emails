import React from "react";
import { Container, Hr, Text } from "@react-email/components";

interface SupportEmailProps {
  email: string;
  message: string;
  category: string;
}

export const SupportEmail = ({
  email,
  message,
  category,
}: SupportEmailProps) => (
  <Container style={styles.container}>
    <Hr style={styles.hr} />
    <Text style={styles.text}>
      <strong>Email:</strong> {email}
    </Text>
    <Text style={styles.text}>
      <strong>Message:</strong> {message}
    </Text>
    <Text style={styles.text}>
      <strong>Category:</strong> {category}
    </Text>

    <div
      style={{
        textAlign: "left" as const,
        margin: "24px 0",
      }}
    >
      <a
        href="https://www.discord.gg/trackedgg"
        style={{
          backgroundColor: "#5865F2",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "12px 32px",
          display: "inline-block",
        }}
      >
        <span style={{ color: "#ffffff", textDecoration: "none" }}>
          Join our Discord Community
        </span>
      </a>
    </div>

    <Hr style={styles.hr} />
    <Text style={styles.footer}>Tracked, 9101 Horne Street, Vancouver, BC</Text>
  </Container>
);

const styles = {
  container: {
    backgroundColor: "#1F2937",
    margin: "0 auto",
    padding: "16px",
    paddingBottom: "64px",
    borderRadius: "10px",
    fontFamily: "sans-serif",
  },
  img: {
    width: "40px",
    height: "40px",
  },
  hr: {
    borderColor: "#e6ebf1",
    margin: "16px 0",
  },
  text: {
    color: "#FFFFFF",
  },
  footer: {
    color: "#6B7280",
    fontSize: "12px",
  },
};
