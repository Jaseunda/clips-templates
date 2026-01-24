// Application Configuration
export const userConfig = {
  // Window Management
  window: {
    // Show the "Close" button overlaid on the app
    showCloseButton: true,

    // Appearance of the close button: 'x' or 'minus'
    closeButtonVariant: 'x' as 'x' | 'minus',

    // Corner radius of the close button
    closeButtonRadius: 'full' as 'full' | 'lg' | 'md' | 'sm',

    // Title Configuration
    showTitle: true,
    title: 'App Name',

    // Dynamic Colors
    colors: {
      light: {
        bg: 'bg-zinc-100',
        icon: 'text-zinc-500',
        border: 'border-transparent',
        hoverBg: 'hover:text-black', // using hover:text-... for icon as per original, but user asked for "bg, icon". 
        // Let's stick closer to the requested "all the colors" by providing specific classes or values
      },
      dark: {
        bg: 'dark:bg-zinc-900',
        icon: 'dark:text-zinc-400',
        border: 'dark:border-transparent',
      }
    }
  }
};