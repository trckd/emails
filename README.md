# @tracked/emails

Email templates and utilities for Tracked Training Platform.

## Features

- 📧 Pre-built React Email templates for common use cases
- ✅ Email and username validation utilities
- 🎨 Consistent branding and styling
- 📦 TypeScript support with full type definitions
- 🧪 Comprehensive test coverage

## Installation

```bash
npm install @tracked/emails
# or
yarn add @tracked/emails
# or
pnpm add @tracked/emails
```

## Usage

### Email Templates

Import and use any of the pre-built email templates:

```typescript
import { TrackedMagicLink, WelcomeEmail } from '@tracked/emails';
import { render } from '@react-email/components';

// Magic link email
const magicLinkHtml = render(
  <TrackedMagicLink url="https://app.tracked.com/verify?token=..." />
);

// Welcome email
const welcomeHtml = render(
  <WelcomeEmail username="john_doe" />
);
```

### Available Templates

- `TrackedMagicLink` - Magic link authentication emails
- `TrackedMagicLinkActivate` - Account activation emails
- `WelcomeEmail` - Welcome new users
- `CoachInviteEmail` - Coach invitation emails
- `TeamInviteEmail` - Team invitation emails
- `FirstWorkoutAssignedEmail` - First workout assignment notification
- `FirstWorkoutCompletedEmail` - First workout completion celebration
- `NewFollowerEmail` - New follower notifications
- `DirectMessageEmail` - Direct message notifications
- `SupportEmail` - Support request confirmations
- `FeatureDiscoveryEmail` - Feature announcement emails
- `WeekOneCheckinEmail` - First week check-in
- `ClientAcceptedInvitationEmail` - Client acceptance notification
- `CoachRemovedClientEmail` - Client removal notification
- `TeamMemberRemovedEmail` - Team member removal notification
- `SubscriptionCanceledEmail` - Subscription cancellation confirmation
- `BodyweightGoalReachedEmail` - Goal achievement celebration

### Validation Utilities

#### Email Validation

```typescript
import {
  isValidEmailFormat,
  isPrivateRelayEmail,
  shouldSendEmailTo
} from '@tracked/emails';

// Check email format
isValidEmailFormat('user@example.com'); // true
isValidEmailFormat('invalid-email'); // false

// Detect Apple private relay emails
isPrivateRelayEmail('abc123@privaterelay.appleid.com'); // true
isPrivateRelayEmail('user@gmail.com'); // false

// Main validation function (recommended)
shouldSendEmailTo('user@example.com'); // true
shouldSendEmailTo('abc@privaterelay.appleid.com'); // false
shouldSendEmailTo(null); // false
```

#### Username Validation

```typescript
import {
  isAnonymousUsername,
  getSafeDisplayName
} from '@tracked/emails';

// Detect auto-generated UUIDs
isAnonymousUsername('01944f9e-8e64-7a78-9e1e-3daba7b13e9f'); // true
isAnonymousUsername('john_doe'); // false

// Get safe display name with intelligent fallback
getSafeDisplayName('john_doe', 'John', 'John Smith'); // 'john_doe'
getSafeDisplayName('01944f9e-...', 'John', 'John Smith'); // 'John'
getSafeDisplayName('01944f9e-...', null, 'John Smith'); // 'John Smith'
getSafeDisplayName('01944f9e-...', null, null); // 'there'
getSafeDisplayName('01944f9e-...', null, null, 'friend'); // 'friend'
```

## Development

### Setup

```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Build the package
yarn build

# Type check
yarn typecheck

# Lint
yarn lint

# Format code
yarn format:fix
```

### Preview Emails

This package uses [React Email](https://react.email/) for email development.

```bash
# Start the email preview server
yarn dev:email
```

Then open http://localhost:3000 to preview all email templates.

## Testing

The package includes comprehensive tests for all validation utilities:

```bash
# Run all tests
yarn test

# Run with coverage
yarn test:coverage

# Watch mode for development
yarn test:watch
```

## Building

```bash
yarn build
```

This will:
1. Clean the `dist/` directory
2. Compile TypeScript to ESM format
3. Generate type definitions and source maps

## Publishing

```bash
# Version bump (patch/minor/major)
npm version patch

# Publish to npm
npm publish --access public
```

## Package Structure

```
@tracked/emails/
├── src/
│   ├── emails/          # Email template components
│   ├── utils/           # Validation utilities
│   └── index.ts         # Main entry point
├── static/              # Static assets (logos, images)
├── dist/                # Build output
└── package.json
```

## TypeScript

This package is written in TypeScript and includes full type definitions. All exports are fully typed for the best developer experience.

## License

MIT © Tracked Training Platform Inc.

## Contributing

This package is part of the Tracked Training Platform ecosystem. For issues or feature requests, please contact the development team.

## Links

- [React Email Documentation](https://react.email/)
- [Tracked Training Platform](https://tracked.com/)
