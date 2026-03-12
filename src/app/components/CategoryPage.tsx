import { motion, AnimatePresence } from "motion/react";
import { useRef } from "react";
import svgPaths from "../../imports/svg-zuj5h9cz3n";

interface CategoryPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  { id: "emotions", label: "Эмоции" },
  { id: "greetings", label: "Приветствия" },
  { id: "food", label: "Еда" },
  { id: "travel", label: "Путешествия" },
];

function CloseIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 48.4 48.4">
      <rect fill="#2F2F2F" fillOpacity="0.2" height="48.2" rx="24.1" style={{ mixBlendMode: "plus-lighter" }} width="48.2" x="0.1" y="0.1" />
      <rect height="48.2" rx="24.1" stroke="#C5C5C5" strokeWidth="0.2" width="48.2" x="0.1" y="0.1" />
      <path d={svgPaths.p19f7eb00} fill="white" />
    </svg>
  );
}

export function CategoryPage({ isOpen, onClose }: CategoryPageProps) {
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
          <div className="flex items-center justify-between px-[21px] pb-[21px] pt-[16px] shrink-0">
            {/* Close (×) button */}
            <button onClick={onClose} className="relative shrink-0 size-[48px] cursor-pointer">
              <div className="absolute inset-[-0.42%]">
                <CloseIcon />
              </div>
            </button>

            {/* Edit button */}
            <div className="h-[32px] relative rounded-[64px] shrink-0 w-[62px]">
              <div aria-hidden="true" className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]" />
              <div className="flex items-center justify-center size-full relative">
                <span className="text-white text-[20px] tracking-[1px]" style={{ fontFamily: "Georgia, serif" }}>Edit</span>
              </div>
              <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px]" />
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-[21px]">
            {/* Filter chips row */}
            <div className="flex gap-[10px] mb-[20px]">
              {/* Избранное */}
              <div className="h-[59px] relative rounded-[14px] flex-1 cursor-pointer active:opacity-80">
                <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
                <div className="flex gap-[14px] items-center px-[12px] py-[6px] relative size-full">
                  <svg width="30" height="26.667" viewBox="0 0 30 26.6667" fill="none" className="shrink-0">
                    <path d={svgPaths.p1acfdf80} fill="white" />
                  </svg>
                  <span className="text-white text-[16px] tracking-[0.5px]" style={{ fontFamily: "sans-serif" }}>Избранное</span>
                </div>
                <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
              </div>

              {/* Коллекция */}
              <div className="h-[59px] relative rounded-[14px] flex-1 cursor-pointer active:opacity-80">
                <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
                <div className="flex gap-[14px] items-center px-[12px] py-[6px] relative size-full">
                  <svg width="20" height="25.908" viewBox="0 0 20 25.9083" fill="none" className="shrink-0">
                    <path d={svgPaths.p196826f0} fill="white" />
                  </svg>
                  <span className="text-white text-[16px] tracking-[0.5px]" style={{ fontFamily: "sans-serif" }}>Коллекция</span>
                </div>
                <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
              </div>
            </div>

            {/* Материалы section header */}
            <p className="text-white text-[20px] tracking-[6px] mb-[14px]" style={{ fontFamily: "sans-serif" }}>
              М а т е р и а л ы
            </p>

            {/* Category grid — 2 columns */}
            <div className="grid grid-cols-2 gap-[10px] mb-[24px]">
              {CATEGORIES.map((cat) => (
                <motion.div
                  key={cat.id}
                  className="relative rounded-[14px] cursor-pointer"
                  style={{ height: 159 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div aria-hidden="true" className="absolute bg-[#0b0808] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[14px]" />
                  <div className="flex flex-col gap-[12px] items-center justify-center pb-[6px] pt-[14px] relative size-full">
                    <svg width="115" height="102" viewBox="0 0 115 102" fill="none">
                      <path d={svgPaths.p337032f0} fill="white" />
                    </svg>
                    <span className="text-white text-[16px] text-center tracking-[1px]" style={{ fontFamily: "sans-serif" }}>
                      {cat.label}
                    </span>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[14.2px]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Search bar — pinned to bottom */}
          <div className="px-[21px] py-[18px] shrink-0">
            <div className="h-[48px] relative rounded-[64px] w-full">
              <div aria-hidden="true" className="absolute bg-[rgba(47,47,47,0.2)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[64px]" />
              <div className="flex gap-[7px] items-center px-[9px] py-[6px] relative size-full">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" className="shrink-0">
                  <mask id="cat-search-mask" height="33" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="33" x="0" y="0">
                    <rect fill="#D9D9D9" height="33" width="33" rx="2" />
                  </mask>
                  <g mask="url(#cat-search-mask)">
                    <path d={svgPaths.p3bbf00} fill="#C5C5C5" />
                  </g>
                </svg>
                <span className="text-[#767676] text-[15px] tracking-[1px]" style={{ fontFamily: "sans-serif" }}>Искать</span>
              </div>
              <div aria-hidden="true" className="absolute border-[#c5c5c5] border-[0.2px] border-solid inset-[-0.2px] pointer-events-none rounded-[64.2px]" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}