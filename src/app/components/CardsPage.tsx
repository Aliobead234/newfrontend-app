import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-60ebvzkp17";
import svgPathsFilled from "../../imports/svg-up32iqf5rj";
import { ExploreScreen } from "./ExploreScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CategoryPage } from "./CategoryPage";
import { WordStatsScreen } from "./WordStatsScreen";
import { CategoriesScreen } from "./CategoriesScreen";
import { PracticeScreen } from "./PracticeScreen";
import { PaymentsPage } from "./PaymentsPage";
import { SettingsScreen } from "./SettingsScreen";

// ── SVG Icon Components ────────────────────────────────────────────────────

function ProfileIcon() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="absolute inset-[-0.42%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48.4 48.4"
        >
          <rect
            fill="#2F2F2F"
            fillOpacity="0.2"
            height="48.2"
            rx="24.1"
            style={{ mixBlendMode: "plus-lighter" }}
            width="48.2"
            x="0.1"
            y="0.1"
          />
          <rect
            height="48.2"
            rx="24.1"
            stroke="#C5C5C5"
            strokeWidth="0.2"
            width="48.2"
            x="0.1"
            y="0.1"
          />
          <path d={svgPaths.p368a1500} fill="#D9D9D9" />
        </svg>
      </div>
    </div>
  );
}

function CrownIcon() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="absolute inset-[-0.42%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48.4 48.4"
        >
          <rect
            fill="#2F2F2F"
            fillOpacity="0.2"
            height="48.2"
            rx="24.1"
            style={{ mixBlendMode: "plus-lighter" }}
            width="48.2"
            x="0.1"
            y="0.1"
          />
          <rect
            height="48.2"
            rx="24.1"
            stroke="#C5C5C5"
            strokeWidth="0.2"
            width="48.2"
            x="0.1"
            y="0.1"
          />
          <path
            d={svgPaths.p173ade00}
            stroke="#D9D9D9"
            strokeWidth="1.92"
          />
        </svg>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="info-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#info-mask)">
        <path d={svgPaths.p32306a80} fill="white" />
      </g>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="share-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#share-mask)">
        <path d={svgPaths.p12a25f80} fill="white" />
      </g>
    </svg>
  );
}

function HeartOutlineIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="heart-outline-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#heart-outline-mask)">
        <path d={svgPaths.p2c4e4900} fill="white" />
      </g>
    </svg>
  );
}

function HeartFilledIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="heart-filled-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#heart-filled-mask)">
        <path d={svgPathsFilled.p16175fe0} fill="white" />
      </g>
    </svg>
  );
}

function BookmarkOutlineIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="bookmark-outline-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#bookmark-outline-mask)">
        <path d={svgPaths.p16771380} fill="white" />
      </g>
    </svg>
  );
}

function BookmarkFilledIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="bookmark-filled-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#bookmark-filled-mask)">
        <path
          d="M10 32.5V9.02792C10 8.35625 10.2353 7.78236 10.7058 7.30625C11.1764 6.82986 11.7531 6.59167 12.4358 6.59167H27.5642C28.2469 6.59167 28.8236 6.82986 29.2942 7.30625C29.7647 7.78236 30 8.35625 30 9.02792V32.5L20 28.205L10 32.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
    >
      <mask
        id="finance-mask"
        height="40"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="40"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="40" width="40" />
      </mask>
      <g mask="url(#finance-mask)">
        <path d={svgPaths.p3d95af00} fill="white" />
      </g>
    </svg>
  );
}

function PracticeIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 33 33"
    >
      <mask
        id="practice-mask"
        height="33"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="33"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="33" width="33" />
      </mask>
      <g mask="url(#practice-mask)">
        <path d={svgPaths.pfc4b6b0} fill="white" />
      </g>
    </svg>
  );
}

function GridViewIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 32 32"
    >
      <mask
        id="grid-mask"
        height="32"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="32"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="32" width="32" />
      </mask>
      <g mask="url(#grid-mask)">
        <path d={svgPaths.p386150c0} fill="white" />
      </g>
    </svg>
  );
}

function CardsStarIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 20 20"
    >
      <mask
        id="cards-star-mask"
        height="20"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#cards-star-mask)">
        <path d={svgPaths.p3fecb380} fill="white" />
      </g>
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 20 20"
    >
      <mask
        id="explore-mask"
        height="20"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="20"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g mask="url(#explore-mask)">
        <path d={svgPaths.p25b03080} fill="white" />
      </g>
    </svg>
  );
}

function PersonSmallIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 12.7934 12"
    >
      <path d={svgPaths.p24a15c00} fill="white" />
    </svg>
  );
}

function ExclamationIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
    >
      <mask
        id="excl-mask"
        height="17"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="17"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="17" width="17" />
      </mask>
      <g mask="url(#excl-mask)">
        <path d={svgPaths.p15390280} fill="white" />
      </g>
    </svg>
  );
}

// ── Card Data ──────────────────────────────────────────────────────────────

const CARDS = [
  { wordType: "Глагол", word: "Привет", translation: "مرحبا" },
  { wordType: "Глагол", word: "he", translation: "هو" },
  {
    wordType: "Существительное",
    word: "Спасибо",
    translation: "شكرًا",
  },
];

// ── Swipe push variants ────────────────────────────────────────────────────

const EASE_OUT_BACK: [number, number, number, number] = [
  0.34, 1.56, 0.64, 1,
];

const cardVariants = {
  enter: (dir: "up" | "down") => ({
    y: dir === "up" ? "100%" : "-100%",
  }),
  center: { y: "0%" },
  exit: (dir: "up" | "down") => ({
    y: dir === "up" ? "-100%" : "100%",
  }),
};

// ── Tab slide variants ─────────────────────────────────────────────────────

const TAB_ORDER = ["cards", "explore", "profile"] as const;
type Tab = (typeof TAB_ORDER)[number];

const tabVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

// ── CardsPage Component ────────────────────────────────────────────────────

export function CardsPage() {
  const [isLoved, setIsLoved] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("cards");
  const [prevTab, setPrevTab] = useState<Tab>("cards");
  const [heartBurst, setHeartBurst] = useState(false);
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const heartAnimTimer = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">(
    "up",
  );
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Touch tracking for both vertical (card swipe) and horizontal (tab swipe)
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleLove = () => {
    if (!isLoved) {
      setHeartBurst(true);
      setTimeout(() => setHeartBurst(false), 800);
      // Show the big heart overlay, then auto-hide after 2s
      setShowHeartAnim(true);
      if (heartAnimTimer.current)
        clearTimeout(heartAnimTimer.current);
      heartAnimTimer.current = setTimeout(
        () => setShowHeartAnim(false),
        1000,
      );
    } else {
      setShowHeartAnim(false);
      if (heartAnimTimer.current)
        clearTimeout(heartAnimTimer.current);
    }
    setIsLoved((prev) => !prev);
  };

  const handleSave = () => {
    setIsSaved((prev) => !prev);
  };

  const navigateTo = (newIndex: number, dir: "up" | "down") => {
    setDirection(dir);
    setIsLoved(false);
    setIsSaved(false);
    setCurrentIndex(newIndex);
  };

  // Vertical card swipe (on card area only)
  const handleCardTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleCardTouchEnd = (e: React.TouchEvent) => {
    const delta =
      touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) < 50) return;
    if (delta > 0 && currentIndex < CARDS.length - 1) {
      navigateTo(currentIndex + 1, "up");
    } else if (delta < 0 && currentIndex > 0) {
      navigateTo(currentIndex - 1, "down");
    }
  };

  // Horizontal tab swipe (on the whole phone frame)
  const handleFrameTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleFrameTouchEnd = (e: React.TouchEvent) => {
    const dx =
      touchStartX.current - e.changedTouches[0].clientX;
    const dy =
      touchStartY.current - e.changedTouches[0].clientY;
    // Only treat as horizontal if dx dominates
    if (Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx) * 0.7)
      return;
    const curIdx = TAB_ORDER.indexOf(activeTab);
    if (dx > 0 && curIdx < TAB_ORDER.length - 1) {
      switchTab(TAB_ORDER[curIdx + 1]);
    } else if (dx < 0 && curIdx > 0) {
      switchTab(TAB_ORDER[curIdx - 1]);
    }
  };

  const switchTab = (tab: Tab) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
  };

  const tabDirection =
    TAB_ORDER.indexOf(activeTab) - TAB_ORDER.indexOf(prevTab);
  const card = CARDS[currentIndex];

  return (
    <div
      className="size-full flex items-center justify-center"
      style={{ background: "#1a1208" }}
    >
      {/* Phone frame */}
      <div
        className="relative flex flex-col items-center overflow-hidden"
        style={{
          width: "402px",
          height: "100%",
          maxHeight: "874px",
          backgroundImage:
            "linear-gradient(149.747deg, rgb(70, 52, 38) 10.644%, rgb(172, 127, 94) 106.27%)",
          maxWidth: "100vw",
          touchAction: "none",
          overscrollBehavior: "none",
        }}
        onTouchStart={handleFrameTouchStart}
        onTouchEnd={handleFrameTouchEnd}
      >
        {/* Main content area — fills everything above tabbar */}
        <div className="flex flex-col flex-1 w-full overflow-hidden min-h-0">
          <AnimatePresence
            custom={tabDirection}
            mode="popLayout"
            initial={false}
          >
            <motion.div
              key={activeTab}
              custom={tabDirection}
              variants={tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.32,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex flex-col w-full h-full"
            >
              {activeTab === "cards" && (
                <>
                  {/* Header */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-between px-[21px] pb-[12px] pt-[24px] w-full">
                      <ProfileIcon />
                      <button className="cursor-pointer active:scale-95 transition-transform" onClick={() => setPaymentsOpen(true)}>
                        <CrownIcon />
                      </button>
                    </div>
                  </div>

                  {/* Card Area — flex-1 to fill remaining space */}
                  <div className="flex flex-col flex-1 items-center w-full px-[38px] min-h-0">
                    {/* Swipeable card frame — fills available space */}
                    <div
                      className="relative overflow-hidden w-full flex-1 min-h-0"
                      onTouchStart={handleCardTouchStart}
                      onTouchEnd={handleCardTouchEnd}
                    >
                      <AnimatePresence
                        custom={direction}
                        mode="popLayout"
                      >
                        <motion.div
                          key={currentIndex}
                          custom={direction}
                          variants={cardVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            duration: 0.4,
                            ease: EASE_OUT_BACK,
                          }}
                          className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                          {/* Word type badge */}
                          <div className="h-[19px] relative rounded-[64px] shrink-0 w-[72px] mb-[10px]">
                            <div
                              aria-hidden="true"
                              className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]"
                            />
                            <div className="flex items-center justify-center overflow-clip pl-[6px] pr-[14px] py-px relative rounded-[inherit] size-full gap-[2px]">
                              <div className="mr-[-1px] shrink-0 size-[17px]">
                                <ExclamationIcon />
                              </div>
                              <span
                                className="text-white text-[12px] tracking-[1px]"
                                style={{
                                  fontFamily: "sans-serif",
                                }}
                              >
                                {card.wordType}
                              </span>
                            </div>
                            <div
                              aria-hidden="true"
                              className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px] mx-[-3px] my-[0px]"
                            />
                          </div>

                          {/* Main word */}
                          <div
                            className="text-white text-[32px] text-center tracking-[1px] mb-[10px] mt-[20px]"
                            style={{
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {card.word}
                          </div>

                          {/* Translation */}
                          <div
                            className="text-white text-[36px] text-center tracking-[1px] m-[0px]"
                            style={{
                              fontFamily: "Georgia, serif",
                            }}
                            dir="auto"
                          >
                            {card.translation}
                          </div>

                          {/* Large heart animation overlay */}
                          <AnimatePresence>
                            {showHeartAnim && (
                              <motion.div
                                key="big-heart"
                                className="absolute pointer-events-none"
                                style={{
                                  top: "54%",
                                  left: "50%",
                                  x: "-50%",
                                  y: "-50%",
                                }}
                                initial={{
                                  scale: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  scale: heartBurst
                                    ? [0, 1.3, 1.1, 1.0]
                                    : 1.0,
                                  opacity: 1,
                                }}
                                exit={{
                                  scale: 0.6,
                                  opacity: 0,
                                  transition: {
                                    duration: 0.4,
                                    ease: "easeIn",
                                  },
                                }}
                                transition={{
                                  duration: 0.45,
                                  ease: "easeOut",
                                }}
                              >
                                <svg
                                  width="85"
                                  height="85"
                                  viewBox="0 0 85 85"
                                  fill="none"
                                >
                                  <mask
                                    id="big-heart-mask"
                                    height="85"
                                    maskUnits="userSpaceOnUse"
                                    style={{
                                      maskType: "alpha",
                                    }}
                                    width="85"
                                    x="0"
                                    y="0"
                                  >
                                    <rect
                                      fill="#D9D9D9"
                                      height="84"
                                      stroke="#D55D5D"
                                      width="84"
                                      x="0.5"
                                      y="0.5"
                                    />
                                  </mask>
                                  <g mask="url(#big-heart-mask)">
                                    <path
                                      d={
                                        svgPathsFilled.p1758ef00
                                      }
                                      fill="#D55D5D"
                                      stroke="#D55D5D"
                                    />
                                  </g>
                                </svg>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Burst particles */}
                          <AnimatePresence>
                            {heartBurst && (
                              <>
                                {[...Array(6)].map((_, i) => (
                                  <motion.div
                                    key={`particle-${i}`}
                                    className="absolute pointer-events-none rounded-full"
                                    style={{
                                      width: 8,
                                      height: 8,
                                      backgroundColor:
                                        i % 2 === 0
                                          ? "#D55D5D"
                                          : "#e8897a",
                                      top: "54%",
                                      left: "50%",
                                    }}
                                    initial={{
                                      x: "-50%",
                                      y: "-50%",
                                      scale: 0,
                                      opacity: 1,
                                    }}
                                    animate={{
                                      x: `calc(-50% + ${Math.cos((i * 60 * Math.PI) / 180) * 55}px)`,
                                      y: `calc(-50% + ${Math.sin((i * 60 * Math.PI) / 180) * 55}px)`,
                                      scale: [0, 1, 0],
                                      opacity: [0, 1, 0],
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                      duration: 0.6,
                                      ease: "easeOut",
                                    }}
                                  />
                                ))}
                              </>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Action Bar */}
                    <div className="flex gap-[21px] items-center px-[21px] py-[7px] shrink-0 mx-[0px] mt-[-120px] mb-[80px]">
                      <button className="relative size-[40px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <InfoIcon />
                      </button>
                      <button className="relative size-[40px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                        <ShareIcon />
                      </button>

                      <motion.button
                        className="relative size-[40px] cursor-pointer"
                        onClick={handleLove}
                        whileTap={{ scale: 0.85 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {isLoved ? (
                            <motion.div
                              key="heart-filled"
                              className="absolute inset-0"
                              initial={{
                                scale: 0.5,
                                opacity: 0,
                              }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <HeartFilledIcon />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="heart-outline"
                              className="absolute inset-0 opacity-80"
                              initial={{
                                scale: 0.5,
                                opacity: 0,
                              }}
                              animate={{
                                scale: 1,
                                opacity: 0.8,
                              }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <HeartOutlineIcon />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>

                      <motion.button
                        className="relative size-[40px] cursor-pointer"
                        onClick={handleSave}
                        whileTap={{ scale: 0.85 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {isSaved ? (
                            <motion.div
                              key="bookmark-filled"
                              className="absolute inset-0"
                              initial={{
                                scale: 0.5,
                                opacity: 0,
                              }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <BookmarkFilledIcon />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="bookmark-outline"
                              className="absolute inset-0 opacity-80"
                              initial={{
                                scale: 0.5,
                                opacity: 0,
                              }}
                              animate={{
                                scale: 1,
                                opacity: 0.8,
                              }}
                              exit={{ scale: 0.5, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <BookmarkOutlineIcon />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom Toolbar (cards only) */}
                  <div className="flex items-center justify-center gap-[55px] w-full px-[21px] py-[8px] shrink-0 mx-[0px] mt-[0px] mb-[42px]">
                    {/* Grid button — opens CategoryPage */}
                    <button
                      className="flex items-center justify-center p-[6.4px] relative rounded-[64px] size-[48px] cursor-pointer active:scale-95 transition-transform"
                      onClick={() => setCategoriesOpen(true)}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px]"
                      />
                      <div className="relative size-[32px]">
                        <GridViewIcon />
                      </div>
                    </button>

                    <button
                      className="h-[48px] relative rounded-[64px] w-[135px] cursor-pointer"
                      onClick={() => setPracticeOpen(true)}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]"
                      />
                      <div className="flex gap-[7px] items-center overflow-clip pl-[9px] pr-[21px] py-[6px] relative rounded-[inherit] size-full">
                        <div className="relative shrink-0 size-[33px]">
                          <PracticeIcon />
                        </div>
                        <span
                          className="text-white text-[15px] tracking-[1px]"
                          style={{ fontFamily: "sans-serif" }}
                        >
                          Практика
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px]"
                      />
                    </button>

                    <button
                      className="flex items-center justify-center p-[6.4px] relative rounded-[64px] size-[48px] cursor-pointer"
                      onClick={() => setStatsOpen(true)}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px]"
                      />
                      <div className="relative size-[40px]">
                        <FinanceIcon />
                      </div>
                    </button>
                  </div>
                </>
              )}

              {activeTab === "explore" && (
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <ExploreScreen />
                </div>
              )}

              {activeTab === "profile" && (
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <ProfileScreen
                    onOpenSettings={() => setSettingsOpen(true)}
                    onOpenPayments={() => setPaymentsOpen(true)}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab Bar — unified with spring glass indicator */}
        <div
          className="relative w-full shrink-0"
          style={{ height: 68 }}
        >
          {/* Bar glass background */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(18, 11, 4, 0.52)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              borderTop:
                "0.5px solid rgba(210, 180, 140, 0.14)",
            }}
          />

          {/* Sliding square glass indicator */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: 8,
              width: 56,
              height: 52,
              borderRadius: 14,
              background: "rgba(255, 255, 255, 0.09)",
              border: "0.5px solid rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            animate={{
              x: TAB_ORDER.indexOf(activeTab) * 134 + 39,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
            }}
          />

          {/* Tab buttons */}
          <div className="relative flex items-center h-full">
            {/* Cards */}
            <button
              className="flex flex-col gap-[4px] items-center justify-center shrink-0 cursor-pointer"
              style={{
                width: 134,
                height: "100%",
                opacity: activeTab === "cards" ? 1 : 0.42,
                transition: "opacity 0.22s ease",
              }}
              onClick={() => switchTab("cards")}
            >
              <div className="shrink-0 size-[20px]">
                <CardsStarIcon />
              </div>
              <span
                className="text-white text-[11px] tracking-[0.6px]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                Cards
              </span>
            </button>

            {/* Explore */}
            <button
              className="flex flex-col gap-[4px] items-center justify-center shrink-0 cursor-pointer"
              style={{
                width: 134,
                height: "100%",
                opacity: activeTab === "explore" ? 1 : 0.42,
                transition: "opacity 0.22s ease",
              }}
              onClick={() => switchTab("explore")}
            >
              <div className="shrink-0 size-[20px]">
                <ExploreIcon />
              </div>
              <span
                className="text-white text-[11px] tracking-[0.6px]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                Explore
              </span>
            </button>

            {/* Profile */}
            <button
              className="flex flex-col gap-[4px] items-center justify-center shrink-0 cursor-pointer"
              style={{
                width: 134,
                height: "100%",
                opacity: activeTab === "profile" ? 1 : 0.42,
                transition: "opacity 0.22s ease",
              }}
              onClick={() => switchTab("profile")}
            >
              <div className="h-[14px] shrink-0 w-[14px] flex items-center justify-center">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 12.7934 12"
                  fill="none"
                >
                  <path
                    d="M6.39671 6C7.08641 6 7.67337 5.75781 8.15759 5.27344C8.64181 4.78906 8.88392 4.20312 8.88392 3.51562C8.88392 2.82812 8.64181 2.24219 8.15759 1.75781C7.67337 1.27344 7.08641 1.03125 6.39671 1.03125C5.70701 1.03125 5.12005 1.27344 4.63583 1.75781C4.15161 2.24219 3.9095 2.82812 3.9095 3.51562C3.9095 4.20312 4.15161 4.78906 4.63583 5.27344C5.12005 5.75781 5.70701 6 6.39671 6ZM6.39671 7.03125C5.27687 7.03125 4.19952 7.3125 3.16466 7.875C2.12981 8.4375 1.28882 9.21094 0.641699 10.1953C0.641699 10.2266 0.631394 10.2578 0.610783 10.2891C0.590172 10.3203 0.579866 10.3516 0.579866 10.3828C0.579866 10.6172 0.672912 10.8047 0.859005 10.9453C1.0451 11.0859 1.25152 11.1562 1.47828 11.1562H11.3151C11.5419 11.1562 11.7483 11.0859 11.9344 10.9453C12.1205 10.8047 12.2135 10.6172 12.2135 10.3828C12.2135 10.3516 12.2032 10.3203 12.1826 10.2891C12.162 10.2578 12.1517 10.2266 12.1517 10.1953C11.5046 9.21094 10.6636 8.4375 9.62872 7.875C8.59387 7.3125 7.51652 7.03125 6.39671 7.03125Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className="text-white text-[11px] tracking-[0.6px]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                Profile
              </span>
            </button>
          </div>
        </div>

        {/* Category Page overlay — slides up from bottom */}
        <CategoryPage
          isOpen={categoryOpen}
          onClose={() => setCategoryOpen(false)}
        />
        {/* Word Stats Page overlay — slides up from bottom */}
        <WordStatsScreen
          isOpen={statsOpen}
          onClose={() => setStatsOpen(false)}
        />
        {/* Categories Page overlay — slides up from bottom */}
        <CategoriesScreen
          isOpen={categoriesOpen}
          onClose={() => setCategoriesOpen(false)}
          onOpenPayments={() => setPaymentsOpen(true)}
        />
        {/* Practice Page overlay — slides up from bottom */}
        <PracticeScreen
          isOpen={practiceOpen}
          onClose={() => setPracticeOpen(false)}
        />
        {/* Payments Page overlay — slides up from bottom */}
        <PaymentsPage
          isOpen={paymentsOpen}
          onClose={() => setPaymentsOpen(false)}
        />
        {/* Settings Page overlay — slides up from bottom */}
        <SettingsScreen
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        />
      </div>
    </div>
  );
}