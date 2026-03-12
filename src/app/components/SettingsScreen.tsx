import { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, type CardVariant } from "./ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import {
  IosBell, IosPalette, IosGlobe, IosMoon, IosSpeaker,
  IosShield, IosDoc, IosChevronRight, IosChevronLeft,
  IosSignOut, IosTrash, IosExternalLink,
} from "./IosIcons";

interface SettingItem {
  Icon: React.ElementType;
  label: string;
  value?: string;
  danger?: boolean;
  action?: () => void;
}

interface SettingsScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsScreen({ isOpen, onClose }: SettingsScreenProps) {
  const { colors, isDark, toggleTheme, cardVariant, setCardVariant, appTheme } = useTheme();
  const { user, signOut } = useAuth();
  const swipeStartY = useRef(0);

  const accentColor = isDark ? "#7ec8a9" : "#5aab8b";
  const themeActive = appTheme !== "default";
  const iconColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)";

  const generalSettings: SettingItem[] = [
    { Icon: IosBell,    label: "Notifications",  value: "On" },
    { Icon: IosPalette, label: "Appearance",      value: isDark ? "Dark" : "Light" },
    { Icon: IosGlobe,   label: "Language",        value: "English" },
    { Icon: IosSpeaker, label: "Sound effects",   value: "On" },
  ];

  const accountSettings: SettingItem[] = [
    { Icon: IosPalette,      label: "Themes" },
    { Icon: IosShield,       label: "Privacy" },
    { Icon: IosDoc,          label: "Terms and Conditions" },
    { Icon: IosExternalLink, label: "Rate the app" },
  ];

  const dangerSettings: SettingItem[] = [
    { Icon: IosSignOut, label: "Sign out",       action: signOut },
    { Icon: IosTrash,   label: "Delete account", danger: true },
  ];

  const renderSettingGroup = (title: string, items: SettingItem[]) => (
    <div className="mb-5">
      <h4 className={`${colors.textDimmed} text-xs uppercase tracking-wider mb-2 px-1`}>{title}</h4>
      <div className={`${colors.card} rounded-2xl overflow-hidden divide-y ${isDark ? "divide-[#333]" : "divide-[#f0ebe3]"} ${!isDark ? "shadow-sm" : ""}`}>
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className={`w-full flex items-center justify-between px-4 py-3.5 transition-colors ${colors.cardHover} cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <item.Icon
                size={18}
                color={item.danger ? "#f87171" : iconColor}
              />
              <span className={`text-sm ${item.danger ? "text-red-400" : colors.textSecondary}`}>
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {item.value && <span className={`${colors.textDimmed} text-sm`}>{item.value}</span>}
              <IosChevronRight size={16} color={isDark ? "#444" : "#ccc"} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

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
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={onClose}
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <IosChevronLeft size={22} color="rgba(255,255,255,0.85)" />
              </button>
              <h2 className={`${colors.text} text-lg`}>Settings</h2>
              <div className="w-6" />
            </div>

            {/* Dark Mode Toggle */}
            <div className={`${colors.card} rounded-2xl p-4 flex items-center justify-between mb-5 ${!isDark ? "shadow-sm" : ""}`}>
              <div className="flex items-center gap-3">
                <IosMoon size={18} color={iconColor} />
                <span className={`${colors.textSecondary} text-sm`}>Dark mode</span>
              </div>
              <button
                onClick={toggleTheme}
                className="w-12 h-7 rounded-full transition-colors flex items-center px-1 cursor-pointer"
                style={{ backgroundColor: isDark ? accentColor : "#d1d5db" }}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform shadow-sm ${isDark ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            </div>

            {/* Card appearance */}
            <div className="mb-5">
              <h4 className={`${colors.textDimmed} text-xs uppercase tracking-wider mb-2 px-1`}>Card appearance</h4>
              <div className={`${colors.card} rounded-2xl p-4 ${!isDark ? "shadow-sm" : ""}`}>
                <p className={`${colors.textMuted} text-xs mb-3`}>
                  {themeActive ? "Locked to Default while a theme is active" : "Choose how flashcards look"}
                </p>
                <div className={`flex gap-3 ${themeActive ? "opacity-50 pointer-events-none" : ""}`}>
                  {(["default", "notion", "classic"] as CardVariant[]).map((v) => {
                    const isActive = cardVariant === v;
                    return (
                      <button
                        key={v}
                        onClick={() => setCardVariant(v)}
                        className="flex-1 rounded-xl overflow-hidden transition-all active:scale-95 cursor-pointer"
                        style={{ border: `2px solid ${isActive ? accentColor : isDark ? "#333" : "#e0dbd3"}` }}
                      >
                        {v === "default" ? (
                          <div className="h-16 flex flex-col items-center justify-center gap-1.5" style={{ background: isDark ? "#1a1a1a" : "#faf7f2" }}>
                            <div className="w-8 h-2 rounded-sm" style={{ background: isDark ? "#f0f0f022" : "#1a1a1a22" }} />
                            <div className="w-12 h-3 rounded-sm" style={{ background: isDark ? "#f0f0f040" : "#1a1a1a40" }} />
                            <div className="w-6 h-1.5 rounded-sm" style={{ background: isDark ? "#f0f0f015" : "#1a1a1a15" }} />
                          </div>
                        ) : v === "notion" ? (
                          <div className="relative h-16 flex flex-col justify-center px-3" style={{ background: "#111" }}>
                            <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: "#7ec8a9" }} />
                            <div className="flex items-center gap-1.5 mb-1.5 ml-1">
                              <div className="w-6 h-2.5 rounded-sm" style={{ background: "#7ec8a920" }} />
                            </div>
                            <div className="ml-1 w-14 h-2.5 rounded-sm" style={{ background: "#f0f0f018" }} />
                          </div>
                        ) : (
                          <div className={`h-16 flex flex-col items-center justify-center gap-1 ${isDark ? "bg-[#f5f0e8]" : "bg-[#f0ebe3]"}`}>
                            <div className="w-10 h-2.5 rounded-sm bg-[#1a1a1a]/20" />
                            <div className="w-6 h-2 rounded-sm bg-[#1a1a1a]/10" />
                          </div>
                        )}
                        <div
                          className="py-1.5 text-center"
                          style={{ background: isActive ? `${accentColor}18` : isDark ? "#222" : "#faf8f5" }}
                        >
                          <span
                            className="text-[11px] capitalize"
                            style={{ color: isActive ? accentColor : isDark ? "#555" : "#aaa" }}
                          >
                            {v}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {renderSettingGroup("General", generalSettings)}
            {renderSettingGroup("Account", accountSettings)}
            {user && renderSettingGroup("Danger zone", dangerSettings)}

            <div className="text-center mt-2 mb-8">
              <p className={`${isDark ? "text-[#444]" : "text-[#ccc]"} text-xs`}>Version 1.0.0</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
