import { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Calendar, BookOpen, Target } from "lucide-react";

interface WordStatsScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WordStatsScreen({ isOpen, onClose }: WordStatsScreenProps) {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekData = [5, 8, 3, 12, 7, 10, 6];
  const maxVal = Math.max(...weekData);
  const swipeStartY = useRef(0);

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
            touchAction: "none",
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

          {/* Header */}
          <div className="flex items-center justify-between px-[21px] pb-[14px] pt-[16px] shrink-0">
            <button onClick={onClose} className="relative shrink-0 size-[48px] cursor-pointer">
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
              Word Stats
            </span>
            <div className="w-[48px]" />
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-[21px] pb-[24px]">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-[10px] mb-[16px]">
              {[
                { icon: <BookOpen size={16} />, label: "Total words", value: "312", color: "#7ec8a9" },
                { icon: <Target size={16} />, label: "Mastered", value: "142", color: "#e8b84a" },
                { icon: <TrendingUp size={16} />, label: "This week", value: "51", color: "#a87ec8" },
                { icon: <Calendar size={16} />, label: "Streak", value: "12 days", color: "#7eb4c8" },
              ].map((stat) => (
                <div key={stat.label} className="relative rounded-[14px] p-[14px]">
                  <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
                  <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
                  <div className="relative">
                    <div className="flex items-center gap-[6px] mb-[8px]">
                      <div style={{ color: stat.color }}>{stat.icon}</div>
                      <span className="text-white/50 text-[11px] tracking-[0.5px]" style={{ fontFamily: "sans-serif" }}>
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-white text-[22px] tracking-[0.5px]" style={{ fontFamily: "Georgia, serif" }}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly chart */}
            <div className="relative rounded-[14px] p-[16px] mb-[16px]">
              <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
              <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
              <div className="relative">
                <span className="text-white text-[16px] tracking-[0.5px] mb-[12px] block" style={{ fontFamily: "Georgia, serif" }}>
                  This week
                </span>
                <div className="flex items-end justify-between gap-[6px]" style={{ height: 100 }}>
                  {weekDays.map((day, i) => (
                    <div key={day} className="flex flex-col items-center gap-[6px] flex-1">
                      <div className="w-full flex flex-col justify-end" style={{ height: 80 }}>
                        <div
                          className="w-full rounded-[4px]"
                          style={{
                            height: `${(weekData[i] / maxVal) * 100}%`,
                            minHeight: 4,
                            backgroundColor: "#7ec8a9",
                          }}
                        />
                      </div>
                      <span className="text-white/40 text-[10px]" style={{ fontFamily: "sans-serif" }}>
                        {day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Most used words */}
            <span className="text-white text-[16px] tracking-[0.5px] mb-[10px] block" style={{ fontFamily: "Georgia, serif" }}>
              Most used words
            </span>
            <div className="flex flex-col gap-[8px] mb-[16px]">
              {["ephemeral", "serendipity", "petrichor", "mellifluous", "quintessential"].map((word, i) => (
                <div key={word} className="relative rounded-[14px] p-[14px]">
                  <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
                  <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                      <span className="text-white/40 text-[12px] w-[16px]" style={{ fontFamily: "sans-serif" }}>{i + 1}</span>
                      <span className="text-white text-[14px] italic" style={{ fontFamily: "Georgia, serif" }}>
                        {word}
                      </span>
                    </div>
                    <span className="text-[#7ec8a9] text-[12px]" style={{ fontFamily: "sans-serif" }}>
                      {12 - i * 2} times
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="relative rounded-[14px] p-[20px] text-center">
              <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
              <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
              <div className="relative">
                <span className="text-white text-[16px] tracking-[0.5px] mb-[6px] block" style={{ fontFamily: "Georgia, serif" }}>
                  Get full access to stats
                </span>
                <p className="text-white/50 text-[13px] mb-[14px]" style={{ fontFamily: "sans-serif" }}>
                  See how you're doing and compare yourself to other users.
                </p>
                <button className="w-full py-[12px] rounded-[12px] text-white text-[14px] cursor-pointer" style={{ backgroundColor: "#7ec8a9", fontFamily: "sans-serif" }}>
                  See all stats
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
