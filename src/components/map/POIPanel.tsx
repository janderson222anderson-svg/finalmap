import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Eye, EyeOff } from "lucide-react";
import type { POICategory } from "./types";
import { poiCategories } from "./constants";

interface POIPanelProps {
  show: boolean;
  activePOICategories: Set<POICategory>;
  poisCount: number;
  onClose: () => void;
  onToggleCategory: (category: POICategory) => void;
  onClearAll: () => void;
}

const POIPanel = ({
  show,
  activePOICategories,
  poisCount,
  onClose,
  onToggleCategory,
  onClearAll,
}: POIPanelProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="absolute left-12 sm:left-20 bottom-16 sm:bottom-20 z-10"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-2 sm:p-3 min-w-[180px] sm:min-w-[200px]">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Points of Interest</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-lg transition-colors group"
                title="Close"
                aria-label="Close POI panel"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 group-hover:scale-110 transition-all" />
              </button>
            </div>
            
            <div className="space-y-0.5 sm:space-y-1">
              {(Object.keys(poiCategories) as POICategory[]).map((category) => {
                const { name, icon: Icon, color } = poiCategories[category];
                const isActive = activePOICategories.has(category);
                
                return (
                  <button
                    key={category}
                    onClick={() => onToggleCategory(category)}
                    className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-left transition-all ${
                      isActive 
                        ? "bg-gray-100" 
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div 
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive ? "" : "bg-gray-100"
                      }`}
                      style={{ backgroundColor: isActive ? color : undefined }}
                    >
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                      {name}
                    </span>
                    <div className="ml-auto">
                      {isActive ? (
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                      ) : (
                        <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {activePOICategories.size > 0 && (
              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{poisCount} places visible</span>
                  <button
                    onClick={onClearAll}
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
              <span className="text-[10px] text-gray-400">Data from OpenStreetMap</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default POIPanel;
