import React from 'react';
import { Minus } from 'lucide-react';
import { useColorScheme } from '@dotrly/sdk';
import icon from '../assets/icon.png';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const postRelayMessage = (message: string) => {
    const targets = [window, window.parent, window.top, window.opener].filter(Boolean) as Window[];
    const sent = new Set<Window>();
    targets.forEach(target => {
      if (!sent.has(target)) {
        sent.add(target);
        target.postMessage(message, '*');
        target.postMessage({ type: message }, '*');
      }
    });
    try {
      window.dispatchEvent(new MessageEvent('message', { data: message }));
    } catch {
      window.dispatchEvent(new MessageEvent('message', { data: { type: message } }));
    }
  };

  const handleMinimize = () => {
    const shell = (window as any).RelayShell;
    if (shell?.minimize) {
      shell.minimize();
      return;
    }
    postRelayMessage('relay:minimize');
  };

  return (
    <div className={`h-full w-full ${isDark ? 'dark' : ''}`}>
      <div className="flex flex-col h-full bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-100 dark:selection:bg-zinc-800 transition-colors duration-300 overflow-hidden">

        {/* Header with Safe Area */}
        <header className="flex-none flex items-center justify-between px-4 pt-[env(safe-area-inset-top)] h-[calc(3.5rem+env(safe-area-inset-top))] bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-transparent">

          <div className="flex items-center gap-3">
            <img src={icon} alt="Relay" className="w-8 h-8 rounded-[10px] shadow-sm" />
            <span className="font-bold text-lg tracking-tight">Relay</span>
          </div>

          <button
            onClick={handleMinimize}
            className="w-12 h-12 rounded-[18px] flex items-center justify-center transition-all hover:rotate-90 shadow-sm bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-transparent dark:border-transparent hover:text-black dark:hover:text-white"
            aria-label="Minimize"
          >
            <Minus className="w-6 h-6" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-0 relative">
          <div className="max-w-md space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-center">
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Relay Template
            </h1>

            <p className="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed">
              Edit <code className="px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-zinc-900 font-mono text-sm text-gray-900 dark:text-gray-100">src/App.tsx</code> to start building your app.
            </p>
          </div>
        </main>

      </div>
    </div>
  );
};

export default App;
