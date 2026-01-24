# Locked Component & Application Security

Relay apps run in a controlled environment that ensures user safety and security. To guarantee users can always close an app, the **Locked** component wrapper is **MANDATORY** for all Relay applications.

## Security Model

### User Safety
- **Mandatory close button** ensures users can always exit apps
- Apps cannot trap users or prevent closing
- Security validation during build process prevents deployment of unsafe apps
- Controlled communication with host system for safe operation

## Component Architecture

The `Locked` component (`src/locked/index.tsx`) wraps your entire application and provides:

- **Close Button**: Always-visible exit control
- **Security Boundary**: Controlled communication with host system
- **Layout Management**: Consistent header and content areas
- **Theme Integration**: Automatic light/dark mode support

### Usage

```tsx
import { Locked } from './locked';

export default function App() {
  return (
    <Locked>
      {/* Your app content */}
      <YourAppContent />
    </Locked>
  );
}
```

## Configuration

Customize the Locked component behavior in `src/config.ts`:

```typescript
export const userConfig = {
  window: {
    showCloseButton: true,      // MUST remain true for release builds
    closeButtonVariant: 'x',    // 'x' or 'minus' (close or minimize icon)
    showTitle: true,            // Show app title in header
    title: 'My App',            // Custom title text
    colors: {
      light: {
        bg: 'bg-zinc-100',      // Close button background (light mode)
        icon: 'text-zinc-500',   // Close button icon color (light mode)
        border: 'border-transparent' // Close button border (light mode)
      },
      dark: {
        bg: 'dark:bg-zinc-900', // Close button background (dark mode)
        icon: 'dark:text-zinc-400', // Close button icon color (dark mode)
        border: 'dark:border-transparent' // Close button border (dark mode)
      }
    }
  }
};
```

### Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showCloseButton` | boolean | `true` | **Must be `true` for production** |
| `closeButtonVariant` | `'x' \| 'minus'` | `'x'` | Close button icon style |
| `showTitle` | boolean | `true` | Display app title in header |
| `title` | string | `'My App'` | Header title text |
| `colors.light` | object | See defaults | Light mode button styling |
| `colors.dark` | object | See defaults | Dark mode button styling |

## Build Validation

### Security Checks
During the build process (`relay build`), the following validations occur:

1. **Locked Component Presence**: Verifies `<Locked>` wrapper exists
2. **Close Button Configuration**: Ensures `showCloseButton: true`
3. **Security Imports**: Validates proper component imports
4. **Sandbox Compliance**: Checks for prohibited patterns

### Build Failure Examples
```bash
ERROR: Locked component not found in App.tsx
ERROR: showCloseButton must be true for production builds
ERROR: Invalid Locked component configuration
```

### Development Mode
In development (`npm run dev`), some validations are relaxed to allow:
- Testing without close button (`showCloseButton: false`)
- Experimental configurations
- Development-specific features

## Communication API

### Closing the App
The Locked component automatically handles the close button, but you can also trigger closing programmatically:

```typescript
// Close the app (same as clicking the X button)
window.parent.postMessage('relay:close', '*');
```

### Custom Messages
Send custom messages to the host system:

```typescript
// Send custom event
window.parent.postMessage({
  type: 'custom-event',
  data: { action: 'share', content: 'Hello World' }
}, '*');

// Request host action
window.parent.postMessage({
  type: 'host-action',
  action: 'open-url',
  url: 'https://example.com'
}, '*');
```

**Note**: Custom messages are filtered and validated by the host system for security.

## Layout Considerations

### Header Space
The Locked component reserves header space:
- **Height**: `72px` (3rem padding-top + content)
- **Content Area**: Adjusts automatically for remaining space

### Responsive Design
```tsx
function MyApp() {
  return (
    <Locked>
      <div className="min-h-screen">
        {/* Your app content - header space already accounted for */}
        <MainContent />
      </div>
    </Locked>
  );
}
```

### Custom Styling
Override default header styling:

```tsx
<Locked className="custom-locked-wrapper">
  {/* Custom styling applied to wrapper */}
</Locked>
```

## Best Practices

### Security
- **Always keep `showCloseButton: true`** in production
- **Never remove the Locked wrapper** from App.tsx
- **Test close functionality** before deployment
- **Validate host communication** for custom features

### User Experience
- **Keep close button visible** and accessible
- **Test on different screen sizes** (mobile, tablet, desktop)
- **Ensure proper contrast** for close button in both themes
- **Test keyboard navigation** (Tab, Enter, Escape)

### Development
- **Use development mode** for testing without close button
- **Test build validation** before release
- **Document custom configurations** for team members
- **Keep security configurations** in version control

## Troubleshooting

### Common Issues

**"Locked component not found" error during build:**
- Ensure `src/locked/index.tsx` exists and exports `Locked`
- Verify import in `src/App.tsx`
- Check for syntax errors in the Locked component

**Close button not showing:**
- Check `showCloseButton: true` in config
- Verify `src/config.ts` is properly imported
- Clear build cache and rebuild

**Custom colors not applying:**
- Ensure color classes are valid Tailwind classes
- Check both light and dark mode configurations
- Test in both theme modes

**App not closing:**
- Verify `window.parent.postMessage('relay:close', '*')` is being called
- Check browser console for errors
- Test in production build (not dev server)

## Migration Guide

### From Basic Apps
If migrating an existing app:

1. **Add Locked wrapper** to `src/App.tsx`:
   ```tsx
   import { Locked } from './locked';

   export default function App() {
     return (
       <Locked>
         <YourExistingApp />
       </Locked>
     );
   }
   ```

2. **Update config.ts** with window settings
3. **Test close functionality**
4. **Run build validation**

### From Custom Headers
If you had custom headers, integrate them into the Locked component configuration instead of removing the wrapper.

## Related Documentation

- [SDK Components](./COMPONENTS.md) - UI component library
- [CLI Commands](./CLI.md) - Command line interface
- [App Configuration](./README.md#configuration) - Complete config options