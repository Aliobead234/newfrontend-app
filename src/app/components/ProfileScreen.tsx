import { categories } from "../data/flashcardData";
import { useTheme } from "./ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { usePurchase } from "../contexts/PurchaseContext";
import {
  IosBookOpen, IosStar, IosTarget, IosFlame,
  IosCrown, IosSignIn, IosGear,
} from "./IosIcons";

interface ProfileScreenProps {
  onOpenSettings?: () => void;
  onOpenPayments?: () => void;
}

export function ProfileScreen({ onOpenSettings, onOpenPayments }: ProfileScreenProps) {
  const topCategories = categories.slice(0, 4);
  const { colors, isDark, themeConfig } = useTheme();
  const { user, signInWithGoogle } = useAuth();
  const { hasPurchased, subscription } = usePurchase();

  const accentColor = isDark ? themeConfig.accent : "#5aab8b";
  const cardImgBg = isDark ? "bg-[#333]" : "bg-[#f0ebe3]";

  const displayName = user?.user_metadata?.name ?? user?.email ?? "Vocabulary app";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col h-full px-5 pt-12 pb-4 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-6" />
        <h2 className={`${colors.text} text-lg`}>Profile</h2>
        <button onClick={onOpenSettings} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <IosGear size={22} color="rgba(255,255,255,0.85)" />
        </button>
      </div>

      {/* Profile Card */}
      <div
        className={`rounded-3xl p-6 mb-6 border ${
          isDark
            ? "bg-gradient-to-br from-[#2a2418] to-[#1f1a14] border-[#3d3425]"
            : "bg-gradient-to-br from-[#fdf6e9] to-[#f5ead4] border-[#e8d9b8] shadow-md shadow-black/5"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          {user?.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt=""
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#c9a84c]/40"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8943f] flex items-center justify-center ring-2 ring-[#c9a84c]/30">
              <span className="text-white text-xl">{avatarLetter}</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className={`${isDark ? "text-[#f0e6d0]" : "text-[#2a2010]"} text-lg`}>{displayName}</h3>
            {user?.email && (
              <p className={`${isDark ? "text-[#8a7d6b]" : "text-[#8a7a5a]"} text-sm truncate`}>{user.email}</p>
            )}
            {!user && (
              <p className={`${isDark ? "text-[#8a7d6b]" : "text-[#8a7a5a]"} text-sm`}>Free plan</p>
            )}
          </div>
        </div>

        {!user ? (
          <button
            onClick={signInWithGoogle}
            className="w-full text-white py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            <IosSignIn size={16} color="white" />
            <span className="text-sm">Sign in with Google</span>
          </button>
        ) : hasPurchased && subscription ? (
          <div className={`rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 ${isDark ? "bg-[#352d1a]" : "bg-[#f0e4c4]"}`}>
            <IosCrown size={16} color="#c9a84c" />
            <span className={`${isDark ? "text-[#e8d9a8]" : "text-[#6b5a2e]"} text-sm`}>
              {subscription.planName} Plan
            </span>
            {subscription.expiresAt ? (
              <span className={`${isDark ? "text-[#8a7d6b]" : "text-[#8a7a5a]"} text-sm ml-1`}>
                · Renews {new Date(subscription.expiresAt).toLocaleDateString("ru-RU")}
              </span>
            ) : (
              <span className={`${isDark ? "text-[#8a7d6b]" : "text-[#8a7a5a]"} text-sm ml-1`}>· Lifetime</span>
            )}
          </div>
        ) : (
          <button
            onClick={onOpenPayments}
            className="w-full py-3 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-white cursor-pointer"
          >
            <IosCrown size={16} color="white" />
            <span className="text-sm">Go Premium</span>
          </button>
        )}
      </div>

      {/* Stats */}
      <h3 className={`${colors.text} mb-3`}>Your stats</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className={`${colors.card} rounded-2xl p-4 flex items-center gap-3 ${!isDark ? "shadow-sm" : ""}`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-[#1a3a2a]" : "bg-[#e6f5ee]"}`}>
            <IosBookOpen size={18} color={accentColor} />
          </div>
          <div>
            <p className={colors.text}>142</p>
            <p className={`${colors.textDimmed} text-xs`}>Words learned</p>
          </div>
        </div>
        <div className={`${colors.card} rounded-2xl p-4 flex items-center gap-3 ${!isDark ? "shadow-sm" : ""}`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-[#3a2a1a]" : "bg-[#fdf4e6]"}`}>
            <IosStar size={18} color="#e8b84a" />
          </div>
          <div>
            <p className={colors.text}>28</p>
            <p className={`${colors.textDimmed} text-xs`}>Favorites</p>
          </div>
        </div>
        <div className={`${colors.card} rounded-2xl p-4 flex items-center gap-3 ${!isDark ? "shadow-sm" : ""}`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-[#2a1a3a]" : "bg-[#f3e8f9]"}`}>
            <IosTarget size={18} color="#a87ec8" />
          </div>
          <div>
            <p className={colors.text}>87%</p>
            <p className={`${colors.textDimmed} text-xs`}>Quiz accuracy</p>
          </div>
        </div>
        <div className={`${colors.card} rounded-2xl p-4 flex items-center gap-3 ${!isDark ? "shadow-sm" : ""}`}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-[#1a2a3a]" : "bg-[#e6f0f8]"}`}>
            <IosFlame size={18} color="#7eb4c8" />
          </div>
          <div>
            <p className={colors.text}>12</p>
            <p className={`${colors.textDimmed} text-xs`}>Day streak</p>
          </div>
        </div>
      </div>

      {/* Your Vocabulary */}
      <h3 className={`${colors.text} mb-3`}>Your vocabulary</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {topCategories.map((cat) => (
          <div key={cat.id} className={`${colors.card} rounded-2xl p-3 flex flex-col items-center ${!isDark ? "shadow-sm" : ""}`}>
            <div className={`w-full aspect-square rounded-xl overflow-hidden mb-2 ${cardImgBg}`}>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className={`${colors.text} text-sm`}>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
