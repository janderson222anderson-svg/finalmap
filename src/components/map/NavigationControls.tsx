import { Route, LocateFixed, RadioTower, Navigation, Compass, Target, Activity, MapPin, Ruler, Square, Layers, Loader2 } from "lucide-react";

interface NavigationControlsProps {
  isRoutingMode: boolean;
  isTracking: boolean;
  isFollowMode: boolean;
  isLocating: boolean;
  showTrafficLayer: boolean;
  trafficLoading: boolean;
  showPOIPanel: boolean;
  isLoadingPOIs: boolean;
  measureMode: "none" | "distance" | "area";
  showLayerPanel: boolean;
  onToggleRouting: () => void;
  onToggleTracking: () => void;
  onToggleFollowMode: () => void;
  onLocateUser: () => void;
  onResetView: () => void;
  onToggleTraffic: () => void;
  onTogglePOI: () => void;
  onToggleMeasure: (mode: "distance" | "area") => void;
  onToggleLayerPanel: () => void;
}

const NavigationControls = ({
  isRoutingMode,
  isTracking,
  isFollowMode,
  isLocating,
  showTrafficLayer,
  trafficLoading,
  showPOIPanel,
  isLoadingPOIs,
  measureMode,
  showLayerPanel,
  onToggleRouting,
  onToggleTracking,
  onToggleFollowMode,
  onLocateUser,
  onResetView,
  onToggleTraffic,
  onTogglePOI,
  onToggleMeasure,
  onToggleLayerPanel,
}: NavigationControlsProps) => {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 sm:hidden">
        <div className="flex items-center gap-2 p-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
          <button
            onClick={onToggleRouting}
            className={`p-3 rounded-xl transition-all touch-manipulation min-h-[52px] min-w-[52px] flex items-center justify-center ${
              isRoutingMode 
                ? "bg-primary text-white" 
                : "hover:bg-gray-100"
            }`}
            title="Route"
          >
            <Route className="w-6 h-6" />
          </button>
          
          <button
            onClick={onLocateUser}
            disabled={isLocating || isTracking}
            className={`p-3 rounded-xl transition-all touch-manipulation min-h-[52px] min-w-[52px] flex items-center justify-center ${
              isLocating ? "bg-blue-50" : isTracking ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            title="My Location"
          >
            {isLocating ? (
              <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
            ) : (
              <Navigation className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={onToggleTraffic}
            disabled={trafficLoading}
            className={`p-3 rounded-xl transition-all touch-manipulation min-h-[52px] min-w-[52px] flex items-center justify-center ${
              showTrafficLayer 
                ? "bg-amber-500 text-white" 
                : "hover:bg-gray-100"
            }`}
            title="Traffic"
          >
            {trafficLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Activity className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={onTogglePOI}
            className={`p-3 rounded-xl transition-all touch-manipulation min-h-[52px] min-w-[52px] flex items-center justify-center ${
              showPOIPanel || isLoadingPOIs
                ? "bg-purple-500 text-white" 
                : "hover:bg-gray-100"
            }`}
            title="POI"
          >
            {isLoadingPOIs ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <MapPin className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={onToggleLayerPanel}
            className={`p-3 rounded-xl transition-all touch-manipulation min-h-[52px] min-w-[52px] flex items-center justify-center ${
              showLayerPanel 
                ? "bg-primary text-white" 
                : "hover:bg-gray-100"
            }`}
            title="Layers"
          >
            <Layers className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Left Side Controls */}
      <div className="absolute left-2 sm:left-4 bottom-16 sm:bottom-20 flex-col gap-1.5 sm:gap-2 z-10 hidden sm:flex">
        {/* Route Button */}
        <button
          onClick={onToggleRouting}
          className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
            isRoutingMode 
              ? "bg-primary text-white border-primary" 
              : "bg-white/95 border-gray-200 hover:bg-primary hover:text-white"
          }`}
          title="Route Planner"
        >
          <Route className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* GPS Tracking Toggle */}
        <button
          onClick={onToggleTracking}
          className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
            isTracking 
              ? "bg-blue-500 text-white border-blue-500" 
              : "bg-white/95 border-gray-200 hover:bg-blue-500 hover:text-white"
          }`}
          title={isTracking ? "Stop GPS Tracking" : "Start GPS Tracking"}
        >
          {isTracking ? (
            <RadioTower className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          ) : (
            <LocateFixed className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Follow Mode Toggle (only show when tracking) */}
        {isTracking && (
          <button
            onClick={onToggleFollowMode}
            className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
              isFollowMode 
                ? "bg-green-500 text-white border-green-500" 
                : "bg-white/95 border-gray-200 hover:bg-green-500 hover:text-white"
            }`}
            title={isFollowMode ? "Disable Auto-Follow" : "Enable Auto-Follow"}
          >
            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        <button
          onClick={onLocateUser}
          disabled={isLocating || isTracking}
          className={`p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg transition-all border border-gray-200 touch-manipulation ${
            isLocating ? "bg-blue-50" : isTracking ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white"
          }`}
          title="Center on My Location"
        >
          {isLocating ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-spin" />
          ) : (
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        
        <button
          onClick={onResetView}
          className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:bg-primary hover:text-white transition-all border border-gray-200 touch-manipulation"
          title="Reset to Islamabad"
        >
          <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Traffic Layer Toggle */}
        <button
          onClick={onToggleTraffic}
          disabled={trafficLoading}
          className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
            showTrafficLayer 
              ? "bg-amber-500 text-white border-amber-500" 
              : "bg-white/95 border-gray-200 hover:bg-amber-500 hover:text-white"
          }`}
          title={showTrafficLayer ? "Hide Traffic" : "Show Traffic"}
        >
          {trafficLoading ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* POI Layer Toggle */}
        <button
          onClick={onTogglePOI}
          className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
            showPOIPanel || isLoadingPOIs
              ? "bg-purple-500 text-white border-purple-500" 
              : "bg-white/95 border-gray-200 hover:bg-purple-500 hover:text-white"
          }`}
          title="Points of Interest"
        >
          {isLoadingPOIs ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Measurement Tools */}
        <div className="flex flex-col gap-1 p-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
          <button
            onClick={() => onToggleMeasure("distance")}
            className={`p-1.5 sm:p-2 rounded-md transition-all touch-manipulation ${
              measureMode === "distance" 
                ? "bg-indigo-500 text-white" 
                : "hover:bg-gray-100"
            }`}
            title="Measure Distance"
          >
            <Ruler className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => onToggleMeasure("area")}
            className={`p-1.5 sm:p-2 rounded-md transition-all touch-manipulation ${
              measureMode === "area" 
                ? "bg-indigo-500 text-white" 
                : "hover:bg-gray-100"
            }`}
            title="Measure Area"
          >
            <Square className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <button
          onClick={onToggleLayerPanel}
          className={`p-2 sm:p-2.5 backdrop-blur-sm rounded-lg shadow-lg transition-all border touch-manipulation ${
            showLayerPanel 
              ? "bg-primary text-white border-primary" 
              : "bg-white/95 border-gray-200 hover:bg-primary hover:text-white"
          }`}
          title="Layers"
        >
          <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </>
  );
};

export default NavigationControls;
