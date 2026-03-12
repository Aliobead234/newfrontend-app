import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

interface SBPPaymentScreenProps {
  planId: string;
  planName: string;
  onBack: () => void;
  onSuccess: () => void;
}

export function SBPPaymentScreen({ planName, onBack, onSuccess }: SBPPaymentScreenProps) {
  const { colors, isDark } = useTheme();
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
      setTimeout(onSuccess, 1500);
    }, 2000);
  };

  if (done) {
    return (
      <div className="flex flex-col h-full items-center justify-center px-8 text-center">
        <CheckCircle2 size={64} className="text-[#7ec8a9] mb-4" />
        <h2 className={`${colors.text} text-xl mb-2`}>Payment successful!</h2>
        <p className={`${colors.textMuted} text-sm`}>Enjoy your {planName} plan</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-5 pt-12 pb-6">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={onBack} className={colors.textMuted}>
          <ArrowLeft size={22} />
        </button>
        <h2 className={`${colors.text} text-lg`}>СБП Payment</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div
          className="w-48 h-48 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: isDark ? "#2a2a2a" : "#f0f0f0" }}
        >
          <div className="text-center">
            <p className={`${colors.textDimmed} text-sm mb-2`}>QR Code</p>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#333] text-xs">Demo QR</span>
            </div>
          </div>
        </div>
        <p className={`${colors.text} text-lg mb-1`}>{planName} Plan</p>
        <p className={`${colors.textDimmed} text-sm mb-8`}>Scan with your banking app</p>
      </div>

      <button
        onClick={handlePay}
        disabled={processing}
        className="w-full py-4 rounded-2xl text-white text-sm flex items-center justify-center gap-2 disabled:opacity-60"
        style={{ backgroundColor: "#7ec8a9" }}
      >
        {processing ? "Processing..." : "Simulate Payment"}
      </button>
    </div>
  );
}
