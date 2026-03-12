import { createContext, useContext, type ReactNode } from "react";

interface Subscription {
  planName: string;
  expiresAt: string | null;
}

interface PurchaseContextValue {
  hasPurchased: boolean;
  subscription: Subscription | null;
}

const PurchaseContext = createContext<PurchaseContextValue>({
  hasPurchased: false,
  subscription: null,
});

export function PurchaseProvider({ children }: { children: ReactNode }) {
  return (
    <PurchaseContext.Provider value={{ hasPurchased: false, subscription: null }}>
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  return useContext(PurchaseContext);
}
