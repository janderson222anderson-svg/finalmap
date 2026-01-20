import { ZoomIn, ZoomOut, Maximize2, Compass } from "lucide-react";

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFullscreen: () => void;
  onResetNorth: () => void;
}

const MapControls = ({ onZoomIn, onZoomOut, onFullscreen, onResetNorth }: MapControlsProps) => {
  return (
    <div className="absolute right-3 sm:right-4 top-20 sm:top-20 flex flex-col gap-2 z-10">
      <button
        onClick={onZoomIn}
        className="p-3 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation min-h-[48px] min-w-[48px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-3 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation min-h-[48px] min-w-[48px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5" />
      </button>
      <button
        onClick={onFullscreen}
        className="p-3 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation min-h-[48px] min-w-[48px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center"
        title="Fullscreen"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
      <button
        onClick={onResetNorth}
        className="p-3 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation min-h-[48px] min-w-[48px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center"
        title="Reset North"
      >
        <Compass className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MapControls;
