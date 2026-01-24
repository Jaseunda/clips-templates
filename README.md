# Relay App Template

A modern React application template for building Relay apps with TypeScript, Tailwind CSS, and the Relay SDK.

## Features

- **React 19** with modern hooks and patterns
- **TypeScript** for type safety and better development experience
- **Tailwind CSS 4** for styling with automatic theme support
- **Relay SDK** with 40+ pre-built components and device hooks
- **Vite** for fast development and optimized builds
- **Mobile-first responsive design**
- **Light/Dark theme support**
- **Security wrapper** with proper app lifecycle management

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx              # Main application component
├── config.ts            # App configuration and theming
├── locked/
│   └── index.tsx        # Security wrapper (MANDATORY)
├── lib.tsx              # SDK configuration
├── main.tsx             # Application entry point
└── components/          # Custom components (add your own)

docs/                    # Documentation
├── CLI.md               # Command line interface
├── COMPONENTS.md        # SDK components reference
├── LOCKED.md            # Security wrapper guide
└── README.md            # This file

public/
├── assets/
│   └── icon.png         # App icon (512x512 PNG required)
└── ...
```

## Configuration

### App Metadata (`product.json`)

```json
{
  "name": "My App",
  "slug": "my-app",
  "version": "1.0.0",
  "bundleId": "com.example.myapp",
  "description": "My awesome Relay app",
  "author": "Your Name",
  "icon": "assets/icon.png",
  "categories": ["Utilities"],
  "permissions": []
}
```

### Theme Configuration (`src/config.ts`)

```typescript
export const userConfig = {
  theme: {
    accentColor: '#007AFF',
    mode: 'system'
  },
  window: {
    showCloseButton: true
  }
};
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### SDK Components

The template includes the full Relay SDK with 40+ components:

```tsx
import {
  Button,
  Card,
  Input,
  Dialog,
  // ... and 35+ more components
} from '@notapublicfigureanymore/relay-sdk';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Type something..." />
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Device Hooks

Access device capabilities with built-in hooks:

```tsx
import { useNotifications, useGeolocation, useCamera } from '@notapublicfigureanymore/relay-sdk';

function DeviceFeatures() {
  const { sendNotification } = useNotifications();
  const { latitude, longitude, getLocation } = useGeolocation();

  return (
    <div>
      <Button onClick={() => sendNotification('Hello!', { body: 'From Relay!' })}>
        Send Notification
      </Button>
      <Button onClick={getLocation}>
        Get Location: {latitude}, {longitude}
      </Button>
    </div>
  );
}
```

## Building & Distribution

```bash
# Build the app
npm run build

# Install with Relay CLI
relay install dist/app.rly
```

## Security

The template includes mandatory security components:

- **Locked wrapper** - Ensures proper app lifecycle and user safety
- **Build validation** - Prevents deployment of insecure apps
- **Sandboxed execution** - Controlled environment for user safety

## Documentation

- [Components Guide](./docs/COMPONENTS.md) - Complete SDK reference
- [CLI Commands](./docs/CLI.md) - Development and build commands
- [Security](./docs/LOCKED.md) - App security and lifecycle
- [Configuration](./docs/README.md) - Detailed setup guide

## Requirements

- Node.js 18+
- Relay CLI installed
- Relay Helper service running

## License

This template is part of the Relay platform.