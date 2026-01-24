# Relay SDK Components & Styling

The Relay SDK provides a comprehensive set of modern React components, hooks, and utilities for building beautiful, responsive apps with full TypeScript support.

## Installation

```bash
npm install @notapublicfigureanymore/relay-sdk
```

**Peer dependencies required:**
```bash
npm install react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=3
```

## Platform Components

Essential components for handling device-specific features and safe areas.

### SafeAreaProvider

Wrap your app in `SafeAreaProvider` to enable safe area support and keyboard handling.

```tsx
import { SafeAreaProvider } from '@notapublicfigureanymore/relay-sdk';

export default function App() {
  return (
    <SafeAreaProvider>
      <YourApp />
    </SafeAreaProvider>
  );
}
```

### SafeAreaView

Container that respects device safe area insets (notches, home indicators).

```tsx
import { SafeAreaView } from '@notapublicfigureanymore/relay-sdk';

<SafeAreaView edges={['top', 'bottom']}>
  <YourContent />
</SafeAreaView>
```

### KeyboardAvoidingView

Automatically adjusts content when the virtual keyboard appears.

```tsx
import { KeyboardAvoidingView } from '@notapublicfigureanymore/relay-sdk';

<KeyboardAvoidingView behavior="padding">
  <Input placeholder="Type here..." />
  <Button>Submit</Button>
</KeyboardAvoidingView>
```

### PlatformHeader

Pre-built header component with safe area support and back navigation.

```tsx
import { PlatformHeader } from '@notapublicfigureanymore/relay-sdk';

<PlatformHeader
  title="My App"
  showBack={true}
  onBack={() => navigate(-1)}
  rightElement={<Button>Action</Button>}
/>
```

## UI Components

Complete component library with 40+ modern components. All components support:
- Full TypeScript definitions
- Automatic light/dark theme support
- Responsive design
- Accessibility features
- Custom styling via className

### Core Components

#### Button
```tsx
import { Button } from '@notapublicfigureanymore/relay-sdk';

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button disabled>Disabled</Button>
```

#### Input
```tsx
import { Input } from '@notapublicfigureanymore/relay-sdk';

<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input disabled />
```

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@notapublicfigureanymore/relay-sdk';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here...
  </CardContent>
</Card>
```

#### Dialog
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@notapublicfigureanymore/relay-sdk';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content...</p>
  </DialogContent>
</Dialog>
```

### Form Components

#### Select
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@notapublicfigureanymore/relay-sdk';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

#### Checkbox
```tsx
import { Checkbox } from '@notapublicfigureanymore/relay-sdk';

<Checkbox id="terms" />
<label htmlFor="terms">Accept terms</label>
```

#### Radio Group
```tsx
import { RadioGroup, RadioGroupItem } from '@notapublicfigureanymore/relay-sdk';

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <label htmlFor="r1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="r2" />
    <label htmlFor="r2">Option 2</label>
  </div>
</RadioGroup>
```

#### Switch
```tsx
import { Switch } from '@notapublicfigureanymore/relay-sdk';

<Switch />
```

### Layout Components

#### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@notapublicfigureanymore/relay-sdk';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

#### Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@notapublicfigureanymore/relay-sdk';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Collapsible
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@notapublicfigureanymore/relay-sdk';

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>
```

### Data Display

#### Table
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@notapublicfigureanymore/relay-sdk';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Badge
```tsx
import { Badge } from '@notapublicfigureanymore/relay-sdk';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
```

#### Progress
```tsx
import { Progress } from '@notapublicfigureanymore/relay-sdk';

<Progress value={75} />
```

### Navigation

#### Navigation Menu
```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '@notapublicfigureanymore/relay-sdk';

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>Content</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### Breadcrumb
```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@notapublicfigureanymore/relay-sdk';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Overlays

#### Sheet (Slide-out panel)
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@notapublicfigureanymore/relay-sdk';

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    <p>Sheet content...</p>
  </SheetContent>
</Sheet>
```

#### Drawer (Mobile-friendly slide-out)
```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@notapublicfigureanymore/relay-sdk';

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </DrawerHeader>
    <p>Drawer content...</p>
  </DrawerContent>
</Drawer>
```

#### Popover
```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@notapublicfigureanymore/relay-sdk';

<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content...</p>
  </PopoverContent>
</Popover>
```

#### Tooltip
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@notapublicfigureanymore/relay-sdk';

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>
```

#### Alert Dialog
```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@notapublicfigureanymore/relay-sdk';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Delete Item</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Additional Components

#### Avatar
```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@notapublicfigureanymore/relay-sdk';

<Avatar>
  <AvatarImage src="user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

#### Skeleton
```tsx
import { Skeleton } from '@notapublicfigureanymore/relay-sdk';

<Skeleton className="w-32 h-4" />
<Skeleton className="w-full h-8" />
```

#### Separator
```tsx
import { Separator } from '@notapublicfigureanymore/relay-sdk';

<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>
```

#### Scroll Area
```tsx
import { ScrollArea } from '@notapublicfigureanymore/relay-sdk';

<ScrollArea className="h-32">
  <p>Long content that scrolls...</p>
</ScrollArea>
```

## Hooks

Powerful hooks for device capabilities and app functionality.

### usePlatform()

Get information about the current device environment.

```tsx
import { usePlatform } from '@notapublicfigureanymore/relay-sdk';

const { os, isMobile, isIOS, isAndroid, isWeb } = usePlatform();

if (isMobile) {
  // Mobile-specific code
}
```

### useNotifications()

Send system notifications and manage app badges.

```tsx
import { useNotifications } from '@notapublicfigureanymore/relay-sdk';

const { requestPermission, sendNotification, setBadge, permission } = useNotifications();

// Request permission first
if (permission !== 'granted') {
  await requestPermission();
}

// Send notification
sendNotification('Hello!', {
  body: 'This is a test notification',
  tag: 'test-notification'
});

// Set app badge
await setBadge(5);
```

### useClipboard()

Access the system clipboard with built-in history management.

```tsx
import { useClipboard } from '@notapublicfigureanymore/relay-sdk';

const { copyText, readText, history } = useClipboard();

// Copy text
await copyText('Hello, clipboard!');

// Read text
const clipboardContent = await readText();

// Access history
console.log(history); // [{ content: '...', timestamp: 123 }, ...]
```

### useGeolocation()

Access device location and calculate distances.

```tsx
import { useGeolocation } from '@notapublicfigureanymore/relay-sdk';

const { latitude, longitude, loading, error, getLocation } = useGeolocation();

// Get current location
useEffect(() => {
  getLocation();
}, []);

if (loading) return <div>Loading location...</div>;
if (error) return <div>Error: {error.message}</div>;

return <div>Lat: {latitude}, Lng: {longitude}</div>;
```

### useCamera()

Camera and media capture functionality.

```tsx
import { useCamera } from '@notapublicfigureanymore/relay-sdk';

const { devices, startCamera, stopCamera, capturePhoto } = useCamera();

// Start camera with specific device
await startCamera(deviceId);

// Capture photo
const photoData = await capturePhoto();

// Stop camera
await stopCamera();
```

### useKeyboard()

Track virtual keyboard state for mobile devices.

```tsx
import { useKeyboard } from '@notapublicfigureanymore/relay-sdk';

const keyboard = useKeyboard();

// Adjust layout based on keyboard
<div style={{ paddingBottom: keyboard.isOpen ? keyboard.height : 0 }}>
  <Input placeholder="Type here..." />
</div>
```

### useMobile()

Detect if the app is running on a mobile device.

```tsx
import { useMobile } from '@notapublicfigureanymore/relay-sdk';

const isMobile = useMobile();

if (isMobile) {
  // Mobile-specific UI
}
```

### useFocusTimer()

Focus timer functionality for productivity apps.

```tsx
import { useFocusTimer } from '@notapublicfigureanymore/relay-sdk';

const { start, pause, reset, timeLeft, isActive } = useFocusTimer();

// Start a 25-minute focus session
start(25 * 60); // 25 minutes in seconds
```

## Icons

The SDK uses [Lucide React](https://lucide.dev) for icons. All icons are tree-shakable and optimized.

```tsx
import { Home, Settings, User, Heart } from 'lucide-react';

// Basic usage
<Home className="w-6 h-6" />

// With custom styling
<Settings className="w-8 h-8 text-primary" />

// As button icons
<Button>
  <Heart className="w-4 h-4 mr-2" />
  Like
</Button>
```

## Styling & Theming

### Tailwind CSS Setup

Ensure your `tailwind.config.js` includes the SDK's content paths:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@notapublicfigureanymore/relay-sdk/dist/**/*.{js,ts,jsx,tsx}'
  ],
  // ... rest of your config
}
```

### Theme Support

All components automatically adapt to light/dark themes. Use Tailwind's `dark:` modifier for custom styling:

```tsx
<div className="bg-white dark:bg-black text-black dark:text-white">
  Automatic theme support
</div>

// Custom theme-aware components
<Button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700">
  Custom Button
</Button>
```

### Responsive Design

All components are mobile-first and responsive. Use Tailwind's responsive prefixes:

```tsx
<Card className="w-full md:w-96">
  <CardContent className="p-4 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold">
      Responsive Card
    </h3>
    <p className="text-sm md:text-base text-muted-foreground">
      Content adapts to screen size
    </p>
  </CardContent>
</Card>
```

### Custom Styling

Override component styles using the `className` prop:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
  Gradient Button
</Button>

<Card className="shadow-2xl border-2 border-primary/20">
  <CardContent className="p-8">
    Custom styled card
  </CardContent>
</Card>
```

## Complete Example

```tsx
import {
  SafeAreaProvider,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  useNotifications,
  usePlatform
} from '@notapublicfigureanymore/relay-sdk';
import { Bell } from 'lucide-react';

function App() {
  const { sendNotification } = useNotifications();
  const { isMobile } = usePlatform();

  return (
    <SafeAreaProvider>
      <div className="min-h-screen bg-background p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Relay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your name" />
            <Button
              className="w-full"
              onClick={() => sendNotification('Hello!', {
                body: 'Welcome to your Relay app!'
              })}
            >
              <Bell className="w-4 h-4 mr-2" />
              Send Notification
            </Button>
          </CardContent>
        </Card>
      </div>
    </SafeAreaProvider>
  );
}

export default App;
```

## Component Categories Summary

### Layout Components
- SafeAreaView, KeyboardAvoidingView, PlatformHeader
- Card, Separator, ScrollArea
- Tabs, Accordion, Collapsible

### Form Components
- Button, Input, Textarea, Label
- Select, Checkbox, RadioGroup, Switch
- Form fields with validation support

### Navigation Components
- NavigationMenu, Breadcrumb
- Sheet, Drawer, Dialog
- Popover, Tooltip, AlertDialog

### Data Display
- Table, Badge, Progress
- Avatar, Skeleton
- Empty states and loading indicators

### Utility Components
- AspectRatio, Resizable, HoverCard
- ContextMenu, DropdownMenu, Menubar
- Command palette, Carousel, Calendar

All components support TypeScript, responsive design, accessibility, and automatic light/dark theme adaptation.