import { useState, useEffect } from 'react';
import { Locked } from './locked';

    // --- Tips Icon Component (Inlined for template parity) ---
    function TipsIcon({ className, accessory = "none" }: any) {
      // ... (SVG content omitted for brevity, keeping existing logic)
      return (
        <svg viewBox= "0 0 100 120" fill = "none" xmlns = "http://www.w3.org/2000/svg" className = { className } >
          { accessory === "hat" && (
            <g transform="translate(25, 10)" >
              <rect x="10" y = "10" width = "30" height = "15" fill = "#8B4513" rx = "2" />
                <rect x="0" y = "25" width = "50" height = "5" fill = "#A0522D" rx = "2" />
                  </g>
      )
}
{ accessory === "crown" && <path d="M35 30 L40 20 L50 25 L60 20 L65 30 Z" fill = "#FFD700" stroke = "#DAA520" strokeWidth = "1" />}
{ accessory === "party" && <path d="M50 5 L35 35 L65 35 Z" fill = "#FF6347" stroke = "white" strokeWidth = "2" strokeDasharray = "4 2" />}
<path d="M30 60 C30 45 70 45 70 60 C70 75 55 75 55 75 L55 95 L45 95 L45 75 C45 75 30 75 30 60Z" fill = "black" />
  <path d="M38 58 C38 52 48 52 48 58 C48 64 38 64 38 58Z" fill = "white" />
    <path d="M52 58 C52 52 62 52 62 58 C62 64 52 64 52 58Z" fill = "white" />
      <circle cx="43" cy = "58" r = "2" fill = "black" />
        <circle cx="57" cy = "58" r = "2" fill = "black" />
          { accessory === "floatie" && <path d="M30 85 C30 75 70 75 70 85 C70 95 30 95 30 85Z" fill = "none" stroke = "#FFD700" strokeWidth = "8" strokeLinecap = "round" />}
</svg>
  );
}

// --- Main App Component ---
export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  // Theme Sync
  useEffect(() => {
    const updateTheme = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    };
    updateTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', updateTheme);
    return () => media.removeEventListener('change', updateTheme);
  }, []);

  const tips = [
    { title: "Welcome to Relay", description: "Build beautiful, offline-capable apps with our modern SDK.", color: "#FFE66D", accessory: "hat" },
    { title: "Real Components", description: "Use premium UI components like Button, Card, and more.", color: "#B4EBD0", accessory: "crown" },
    { title: "Local Power", description: "Your apps run locally on your system, near your data.", color: "#FFBDC7", accessory: "party" }
  ];

  const handleNext = () => {
    if (currentStep < tips.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      window.parent.postMessage('relay:close', '*');
    }
  };

  return (
    <Locked>
    <div 
        style={ { backgroundColor: tips[currentStep].color } }
  className = "fixed inset-0 z-40 flex flex-col items-center justify-between transition-colors duration-700 ease-in-out"
    >
    <div className="flex-1 flex items-center justify-center w-full relative" >
      <div key={ currentStep } className = "relative h-80 w-80 sm:h-96 sm:w-96 animate-in zoom-in-50 fade-in duration-500" >
        <TipsIcon
                expression={ currentStep === 0 ? "friendly" : currentStep === 1 ? "joy" : "happy" }
  accessory = { tips[currentStep].accessory }
  className = "h-full w-full drop-shadow-2xl"
    />
    <div className="absolute top-0 right-0 h-20 w-20 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-0 h-12 w-12 border-4 border-white/20 rounded-lg transform rotate-12" />
        </div>
        </div>

        < div className = "w-full flex flex-col items-center gap-8 pb-12 px-8 text-center animate-in slide-in-from-bottom-10 fade-in duration-500" >
          <div className="flex flex-col gap-4 max-w-md" >
            <h3 className="text-4xl font-black text-black leading-tight tracking-tight" >
              { tips[currentStep].title }
              </h3>
              < p className = "text-xl font-bold text-black/70 leading-relaxed" >
                { tips[currentStep].description }
                </p>
                </div>

                < div className = "flex gap-3" >
                {
                  tips.map((_, i) => (
                    <div key= { i } className = { `h-3 rounded-full transition-all duration-300 ${i === currentStep ? "w-10 bg-black" : "w-3 bg-black/20"}`} />
            ))}
            </div>

            <button
            onClick={handleNext}
            className="group flex items-center gap-2 rounded-full bg-black px-12 py-6 text-xl font-black text-white shadow-xl transition-all hover:scale-105 active:scale-95"
            >
            {currentStep < tips.length - 1 ? "Next" : "Got it!"}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </button>
        </div>
        </div>
    </Locked>
  );
}