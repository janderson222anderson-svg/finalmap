import { ZoomIn, ZoomOut, Maximize2, Compass } from "lucide-react";

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFullscreen: () => void;
  onResetNorth: () => void;
}

const MapControls = ({ onZoomIn, onZoomOut, onFullscreen, onResetNorth }: MapControlsProps) => {
  return (
    <div className="absolute right-2 sm:right-4 top-16 sm:top-20 flex flex-col gap-1.5 sm:gap-2 z-10">
      <button
        onClick={onZoomIn}
        className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation"
        title="Zoom In"
      >
        <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation"
        title="Zoom Out"
      >
        <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={onFullscreen}
        className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation"
        title="Fullscreen"
      >
        <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={onResetNorth}
        className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation"
        title="Reset North"
      >
        <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default MapControls;
