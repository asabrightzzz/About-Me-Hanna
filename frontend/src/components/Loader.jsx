import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center">
        {/* Container Spinner */}
        <div className="relative flex items-center justify-center">
          {/* outer ring (Static) */}
          <div className="w-16 h-16 border-4 border-blue-500/10 rounded-full"></div>
          
          {/* Spinner (move) */}
          <div className="absolute w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          
          {/* middle light dot */}
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
        </div>

        {/* percentage text */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-blue-500 font-black text-2xl tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
            {progress.toFixed(0)}<span className="text-sm ml-1">%</span>
          </span>
          
          {/* Label Loading */}
          <p className="text-blue-400/60 uppercase text-[10px] font-bold tracking-[0.2em] mt-1">
            System Loading
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden border border-white/5">
          <div 
            className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;