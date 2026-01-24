# Relay CLI Commands

The Relay CLI provides commands for managing the Relay Helper service, building apps, and managing installations.

## Server Management

```bash
# Start the Helper Server (runs in background by default)
relay start

# Start in foreground mode (for debugging)
relay start --foreground

# Stop the running Helper Server
relay stop

# Restart the Helper Server
relay restart

# Check if Helper Server is running
relay status
```

## App Development

```bash
# Create a new Relay app
relay create-app <name>

# Build the current app
relay build

# Install an app bundle (.rly file)
relay install [file]

# List installed apps
relay apps

# Uninstall an app
relay uninstall [name]
```

## Device Pairing

```bash
# Pair with a mobile device
relay pair
```

## SDK Configuration

```bash
# Configure SDK settings
relay sdk <subcommand>
```

## System Features

```bash
# Control system caffeinate (prevent sleep)
relay --caffinated --on
relay --caffinated --off
```

## Help

```bash
# Show help information
relay help
relay --help
relay -h
```

## Usage Examples

### Starting Development

```bash
# Start the Relay Helper service
relay start

# Create a new app
relay create-app my-app

# Navigate to the app directory and install dependencies
cd my-app
npm install

# Start development server
npm run dev
```

### Building and Installing

```bash
# Build the app
relay build

# Install the built app
relay install dist/my-app.rly
```

### Managing Apps

```bash
# List all installed apps
relay apps

# Uninstall an app
relay uninstall com.example.myapp
```

## Related Documentation

- [SDK Components](./COMPONENTS.md)
- [App Configuration](./README.md)
- [Security](./LOCKED.md)