import { useState, useRef } from "react";
import { X, Search, Lock, Heart, BookmarkCheck, PenLine, Clock, Library } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { categories } from "../data/flashcardData";
import { useTheme } from "./ThemeContext";
import { usePurchase } from "../contexts/PurchaseContext";
import { useUserData } from "../contexts/UserDataContext";

type FilterTab = "By topic" | "By root" | "By level";

interface SpecialFolder {
  id: string;
  name: string;
  icon: React.ElementType;
  badge?: number;
}

interface CategoriesScreenProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPayments?: () => void;
}

export function CategoriesScreen({ isOpen, onClose, onOpenPayments }: CategoriesScreenProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("By topic");
  const [searchQuery, setSearchQuery] = useState("");
  const { colors, isDark } = useTheme();
  const { hasPurchased } = usePurchase();
  const { favorites, loved } = useUserData();
  const swipeStartY = useRef(0);

  const tabs: FilterTab[] = ["By topic", "By root", "By level"];

  const specialFolders: SpecialFolder[] = [
    { id: "favorites", name: "Favorites", icon: Heart, badge: favorites.size },
    { id: "collections", name: "Collections", icon: BookmarkCheck, badge: loved.size },
    { id: "your-words", name: "Your own\nwords", icon: PenLine },
    { id: "materials", name: "Materials", icon: Library },
    { id: "history", name: "History", icon: Clock },
  ];

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === "By topic") return cat.type === "topic" && matchesSearch;
    if (activeTab === "By root") return cat.type === "root" && matchesSearch;
    if (activeTab === "By level") return matchesSearch;
    return matchesSearch;
  });

  const accentColor = isDark ? "#7ec8a9" : "#5aab8b";
  const searchBg = isDark ? "bg-[#2a2a2a]" : "bg-white shadow-sm";
  const folderBg = isDark ? "bg-[#2a2a2a]" : "bg-white shadow-sm";

  const handleFolderTap = (folder: SpecialFolder) => {
    if (!hasPurchased && onOpenPayments) {
      onOpenPayments();
    }
  };

  const handleCategoryTap = () => {
    if (!hasPurchased && onOpenPayments) {
      onOpenPayments();
    }
  };

  const handleSwipeTouchStart = (e: React.TouchEvent) => {
    swipeStartY.current = e.touches[0].clientY;
  };
  const handleSwipeTouchEnd = (e: React.TouchEvent) => {
    const dy = e.changedTouches[0].clientY - swipeStartY.current;
    if (dy > 80) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(153.901deg, rgb(93, 69, 52) 30.739%, rgb(14, 12, 11) 107.1%)",
            borderRadius: "40px 40px 0 0",
            zIndex: 50,
            touchAction: "pan-y",
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 34 }}
          onTouchStart={handleSwipeTouchStart}
          onTouchEnd={handleSwipeTouchEnd}
        >
          {/* Swipe indicator pill */}
          <div className="flex justify-center pt-[10px] shrink-0">
            <div className="w-[36px] h-[4px] rounded-full bg-white/30" />
          </div>

          <div className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
            {/* Top row: title + X close */}
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={onClose}
                className="relative shrink-0 size-[48px] cursor-pointer active:scale-90 transition-transform"
                aria-label="Close categories"
              >
                <div className="absolute inset-[-0.42%]">
                  <svg className="block size-full" fill="none" viewBox="0 0 48.4 48.4">
                    <rect fill="#2F2F2F" fillOpacity="0.2" height="48.2" rx="24.1" style={{ mixBlendMode: "plus-lighter" }} width="48.2" x="0.1" y="0.1" />
                    <rect height="48.2" rx="24.1" stroke="#C5C5C5" strokeWidth="0.2" width="48.2" x="0.1" y="0.1" />
                    <line x1="16" y1="16" x2="32" y2="32" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="32" y1="16" x2="16" y2="32" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              <span className="text-white text-[20px] tracking-[1px]" style={{ fontFamily: "Georgia, serif" }}>
                Categories
              </span>
              <div className="w-[48px]" />
            </div>

            {/* Search */}
            <div className={`flex items-center gap-2 ${searchBg} rounded-2xl px-4 py-3 mb-5`}>
              <Search size={16} className={colors.textDimmed} />
              <input
                type="text"
                placeholder="Search topics…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: isDark ? "#f5f0e8" : "#1a1a1a" }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="cursor-pointer">
                  <X size={14} className={colors.textDimmed} />
                </button>
              )}
            </div>

            {/* Upgrade banner */}
            {!hasPurchased && onOpenPayments && (
              <button
                onClick={onOpenPayments}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl mb-5 cursor-pointer"
                style={{ backgroundColor: isDark ? "#8ec5b5" : "#b8ddd0" }}
              >
                <div className="text-left">
                  <p className="text-[#1a1a1a] text-sm" style={{ fontWeight: 600 }}>Unlock all topics</p>
                  <p className="text-[#1a1a1a]/70 text-xs mt-0.5">Browse topics and follow them to customise your feed</p>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                  <Lock size={20} className="text-[#1a1a1a]/60" />
                </div>
              </button>
            )}

            {/* Special Folders Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {specialFolders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => handleFolderTap(folder)}
                  className={`${folderBg} rounded-2xl px-4 py-3.5 flex items-center gap-3 text-left transition-transform active:scale-[0.97] relative cursor-pointer`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}25` }}
                  >
                    <folder.icon size={18} style={{ color: accentColor }} />
                  </div>
                  <span className={`${colors.text} text-[13px] whitespace-pre-line leading-tight flex-1`}>
                    {folder.name}
                  </span>
                  {folder.badge !== undefined && folder.badge > 0 && (
                    <span
                      className="absolute top-2 right-2 min-w-[18px] h-[18px] rounded-full text-white text-[10px] flex items-center justify-center px-1"
                      style={{ backgroundColor: accentColor }}
                    >
                      {folder.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                      isActive
                        ? isDark ? "bg-[#f5f0e8] text-[#1a1a1a]" : "bg-[#1a1a1a] text-white"
                        : isDark ? "bg-[#2a2a2a] text-[#999]" : "bg-white text-[#888] shadow-sm"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Section header */}
            <p className={`${colors.textSecondary} text-sm mb-3`}>
              {activeTab === "By topic" ? "About ourselves" : activeTab === "By root" ? "Word Origins" : "All Levels"}
            </p>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 gap-3">
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryTap()}
                  className={`${colors.card} rounded-2xl p-3 flex flex-col items-center text-center transition-transform active:scale-95 relative cursor-pointer ${!isDark ? "shadow-sm" : ""}`}
                >
                  <div className={`w-full aspect-square rounded-xl overflow-hidden mb-2 ${isDark ? "bg-[#333]" : "bg-[#f0ebe3]"}`}>
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <span className={`${colors.text} text-sm`}>{category.name}</span>
                  <span className={`${colors.textDimmed} text-[11px]`}>{category.wordCount ?? 0} words</span>
                  {!hasPurchased && (
                    <div className="absolute top-2 right-2 bg-[#c9a96e]/90 rounded-full p-1">
                      <Lock size={10} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}