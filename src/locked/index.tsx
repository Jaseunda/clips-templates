import { X, Minus } from 'lucide-react';
import { userConfig } from '../config';

interface LockedProps {
  children: React.ReactNode;
  className?: string;
}

export function Locked({ children, className = '' }: LockedProps) {
  const { showCloseButton, closeButtonVariant, showTitle, title, colors } = userConfig.window;
  const close = () => window.parent.postMessage('relay:close', '*');

  if (!showCloseButton) return <>{children}</>;

  // We emulate the drawer header
  return (
    <div className={`relative w-full h-full flex flex-col ${className}`}>
      {/* Drawer Header */}
      <div className={`flex items-center ${showTitle ? 'justify-between' : 'justify-end'} px-8 py-6 z-50`}>
        {showTitle && (
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">{title}</h2>
        )}

        <button
          onClick={close}
          className={`w-12 h-12 rounded-[18px] flex items-center justify-center transition-all hover:rotate-90 shadow-sm
            ${colors?.light?.bg || 'bg-zinc-100'} ${colors?.dark?.bg || 'dark:bg-zinc-900'}
            ${colors?.light?.icon || 'text-zinc-500'} ${colors?.dark?.icon || 'dark:text-zinc-400'}
            ${colors?.light?.border || 'border-transparent'} ${colors?.dark?.border || 'dark:border-transparent'}
            // Hover effects: if custom hover provided, use it, otherwise default
             hover:text-black dark:hover:text-white
          `}
        >
          {closeButtonVariant === 'x' ? (
            <X className="w-6 h-6" />
          ) : (
            <Minus className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Content Area - adjust based on header visibility if needed, but for now we wrap children */}
      <div className="relative flex-1">
        {children}
      </div>
    </div>
  );
}