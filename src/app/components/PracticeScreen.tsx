import { useState, useRef } from "react";
import { X, Zap, CheckCircle2, XCircle, ArrowRight, Clock, Trophy, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { words as allWords } from "../data/flashcardData";
import { useTheme } from "./ThemeContext";
import { usePurchase } from "../contexts/PurchaseContext";

type PracticeState = "menu" | "quiz" | "result";
type DifficultyLevel = "easy" | "medium" | "hard";
type PracticeMode = "flashcards" | "quiz" | "timed" | "challenge";

interface QuizQuestion {
  word: string;
  correctAnswer: string;
  options: string[];
}

interface PracticeScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

const practiceModes: { id: PracticeMode; label: string; description: string; icon: React.ElementType }[] = [
  { id: "flashcards", label: "Flashcards", description: "Classic card flipping", icon: Zap },
  { id: "quiz", label: "Quiz", description: "Multiple choice questions", icon: HelpCircle },
  { id: "timed", label: "Timed", description: "Race against the clock", icon: Clock },
  { id: "challenge", label: "Challenge", description: "Test your mastery", icon: Trophy },
];

const topicsList = [
  { id: "vocabulary", name: "Vocabulary", image: "https://images.unsplash.com/photo-1706403573619-0efa006b058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "synonyms", name: "Synonyms", image: "https://images.unsplash.com/photo-1636892909247-8357a029ce91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "antonyms", name: "Antonyms", image: "https://images.unsplash.com/photo-1620279206195-1c13eb32d592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "definitions", name: "Definitions", image: "https://images.unsplash.com/photo-1617975609658-2de247badd36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "spelling", name: "Spelling", image: "https://images.unsplash.com/photo-1721021997361-adc820c0a6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "context", name: "Context", image: "https://images.unsplash.com/photo-1760452257740-b69c38b1896c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "word-roots", name: "Word Roots", image: "https://images.unsplash.com/photo-1583525957866-ea1cdcb4f46a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
  { id: "idioms", name: "Idioms", image: "https://images.unsplash.com/photo-1673515336677-ef1cf9e20ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400" },
];

function generateGlobalQuestions(): QuizQuestion[] {
  const shuffled = [...allWords].sort(() => Math.random() - 0.5).slice(0, 5);
  return shuffled.map((w) => {
    const wrongAnswers = allWords
      .filter((o) => o.id !== w.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((o) => o.definition);
    return {
      word: w.word,
      correctAnswer: w.definition,
      options: [...wrongAnswers, w.definition].sort(() => Math.random() - 0.5),
    };
  });
}

export function PracticeScreen({ isOpen, onClose }: PracticeScreenProps) {
  const [state, setState] = useState<PracticeState>("menu");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [level, setLevel] = useState<DifficultyLevel>("medium");
  const [activeMode, setActiveMode] = useState<PracticeMode>("flashcards");

  const { colors, isDark } = useTheme();
  const { hasPurchased } = usePurchase();
  const swipeStartY = useRef(0);

  const gold = "#c9a96e";
  const goldBg = isDark ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.15)";
  const goldBorder = isDark ? "rgba(201,169,110,0.3)" : "rgba(201,169,110,0.35)";
  const goldText = gold;
  const dimText = isDark ? "rgba(245,240,232,0.4)" : "rgba(100,90,75,0.6)";
  const subtleBg = isDark ? "rgba(245,240,232,0.06)" : "rgba(0,0,0,0.04)";
  const subtleBorder = isDark ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.06)";
  const iconBgInactive = isDark ? "rgba(245,240,232,0.08)" : "rgba(0,0,0,0.05)";
  const iconStrokeInactive = isDark ? "rgba(245,240,232,0.5)" : "rgba(100,90,75,0.5)";
  const progressBg = isDark ? "rgba(245,240,232,0.08)" : "rgba(0,0,0,0.06)";

  const handleSwipeTouchStart = (e: React.TouchEvent) => {
    swipeStartY.current = e.touches[0].clientY;
  };
  const handleSwipeTouchEnd = (e: React.TouchEvent) => {
    const dy = e.changedTouches[0].clientY - swipeStartY.current;
    if (dy > 80) {
      if (state !== "menu") {
        setState("menu");
      } else {
        onClose();
      }
    }
  };

  const handleClose = () => {
    setState("menu");
    setQuestions([]);
    setCurrentQ(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    onClose();
  };

  const startQuiz = () => {
    const qs = generateGlobalQuestions();
    setQuestions(qs);
    setCurrentQ(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setState("quiz");
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQ].correctAnswer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setState("result");
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const renderContent = () => {
    // Quiz view
    if (state === "quiz" && questions.length > 0) {
      const q = questions[currentQ];
      const progress = ((currentQ + 1) / questions.length) * 100;

      return (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
            <div className="flex items-center justify-between mb-5">
              <button onClick={() => setState("menu")} className={`${colors.textMuted} cursor-pointer`}><X size={20} /></button>
              <h2 className={colors.text} style={{ fontSize: 17 }}>Practice</h2>
              <span style={{ color: dimText, fontSize: 13 }}>{currentQ + 1}/{questions.length}</span>
            </div>

            <div className="h-1.5 rounded-full mb-8" style={{ backgroundColor: progressBg }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: gold }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <p style={{ color: dimText, fontSize: 13, marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  What does this mean?
                </p>
                <h3
                  className={colors.text}
                  style={{ fontSize: 30, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 32, lineHeight: 1.3 }}
                >
                  {q.word}
                </h3>

                <div className="flex flex-col gap-3">
                  {q.options.map((opt) => {
                    const isCorrect = opt === q.correctAnswer;
                    const isSelected = opt === selectedAnswer;
                    let bg = subtleBg;
                    let border = subtleBorder;
                    let textCol = isDark ? "rgba(245,240,232,0.85)" : "rgba(30,28,25,0.85)";

                    if (isAnswered) {
                      if (isCorrect) { bg = "rgba(94,200,140,0.15)"; border = "rgba(94,200,140,0.5)"; textCol = "#5ec88c"; }
                      else if (isSelected) { bg = "rgba(240,80,80,0.12)"; border = "rgba(240,80,80,0.4)"; textCol = "#f05050"; }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="flex items-center justify-between rounded-[14px] px-4 py-4 transition-all text-left cursor-pointer"
                        style={{ backgroundColor: bg, border: `1px solid ${border}`, color: textCol, fontSize: 15 }}
                      >
                        <span>{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 size={18} color="#5ec88c" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle size={18} color="#f05050" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {isAnswered && (
            <div className="px-5 pb-6">
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: gold, color: "#1e1c19" }}
              >
                <span>{currentQ + 1 >= questions.length ? "See results" : "Next"}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      );
    }

    // Result view
    if (state === "result") {
      const percentage = Math.round((score / questions.length) * 100);
      return (
        <div className="flex flex-col h-full items-center justify-center px-8 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: goldBg }}>
              <Trophy size={44} style={{ color: gold }} />
            </div>
            <h2 className={`${colors.text} text-2xl mb-2`}>
              {percentage === 100 ? "Perfect!" : percentage >= 80 ? "Excellent!" : percentage >= 50 ? "Good job!" : "Keep practicing!"}
            </h2>
            <p className={`${colors.textMuted} mb-8`}>You got {score} out of {questions.length} correct</p>
            <button
              onClick={startQuiz}
              className="text-[#1e1c19] px-8 py-4 rounded-2xl mb-4 w-full cursor-pointer"
              style={{ backgroundColor: gold }}
            >
              Try again
            </button>
            <button
              onClick={() => setState("menu")}
              className={`${colors.card} ${colors.textSecondary} px-8 py-4 rounded-2xl w-full cursor-pointer ${!isDark ? "shadow-sm" : ""}`}
            >
              Back to practice
            </button>
          </motion.div>
        </div>
      );
    }

    // Menu view
    return (
      <div className="flex flex-col h-full relative">
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-4">
          <div className="flex items-center justify-between mb-5">
            <button onClick={handleClose} className={`${colors.textMuted} cursor-pointer`}><X size={20} /></button>
            <h2 className={colors.text} style={{ fontSize: 17 }}>Practice</h2>
            <div className="w-8" />
          </div>

          <div className="rounded-2xl px-4 py-4 mb-5" style={{ backgroundColor: goldBg }}>
            <p style={{ color: goldText, fontSize: 14, lineHeight: "22px" }}>
              Practice makes perfect. Choose your preferred style and difficulty to start learning.
            </p>
          </div>

          <p className="mb-3 tracking-widest uppercase" style={{ color: dimText, fontSize: 13 }}>What's your level?</p>
          <div className="flex gap-2 mb-6">
            {(["easy", "medium", "hard"] as DifficultyLevel[]).map((lvl) => {
              const isActive = level === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className="flex-1 py-2.5 rounded-[14px] text-center transition-all cursor-pointer"
                  style={{
                    backgroundColor: isActive ? goldBg : subtleBg,
                    border: `1px solid ${isActive ? goldBorder : subtleBorder}`,
                    color: isActive ? goldText : isDark ? "rgba(245,240,232,0.5)" : "rgba(100,90,75,0.5)",
                    fontSize: 13,
                  }}
                >
                  {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                </button>
              );
            })}
          </div>

          <p className="mb-3 tracking-widest uppercase" style={{ color: dimText, fontSize: 13 }}>Practice mode</p>
          <div className="grid grid-cols-1 gap-2.5 mb-6">
            {practiceModes.map((mode) => {
              const isActive = activeMode === mode.id;
              const IconComp = mode.icon;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className="flex items-center gap-3.5 rounded-[14px] px-4 py-3.5 transition-all cursor-pointer"
                  style={{ backgroundColor: isActive ? goldBg : subtleBg, border: `1px solid ${isActive ? goldBorder : subtleBorder}` }}
                >
                  <div
                    className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: isActive ? "rgba(201,169,110,0.2)" : iconBgInactive }}
                  >
                    <IconComp size={20} strokeWidth={1.7} style={{ color: isActive ? goldText : iconStrokeInactive }} />
                  </div>
                  <div className="text-left">
                    <p style={{ color: isActive ? goldText : isDark ? "rgba(245,240,232,0.85)" : "rgba(30,28,25,0.85)", fontSize: 15 }}>
                      {mode.label}
                    </p>
                    <p style={{ color: dimText, fontSize: 12 }}>{mode.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mb-3 tracking-widest uppercase" style={{ color: dimText, fontSize: 13 }}>Choose a topic</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {topicsList.map((t) => (
              <button
                key={t.id}
                className="rounded-2xl overflow-hidden relative aspect-[4/3] cursor-pointer"
                style={{ backgroundColor: subtleBg }}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span style={{ color: "#f5f0e8", fontSize: 13, textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
                    {t.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 pb-6 flex-shrink-0">
          <button
            onClick={startQuiz}
            className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer"
            style={{ backgroundColor: gold, color: "#1e1c19", fontSize: 16 }}
          >
            Start Practice
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
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

          {renderContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
