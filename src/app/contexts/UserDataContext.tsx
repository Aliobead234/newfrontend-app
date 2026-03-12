import { createContext, useContext, useState, type ReactNode } from "react";

interface UserDataContextValue {
  favorites: Set<string>;
  loved: Set<string>;
  toggleFavorite: (id: string) => void;
  toggleLoved: (id: string) => void;
}

const UserDataContext = createContext<UserDataContextValue>({
  favorites: new Set(),
  loved: new Set(),
  toggleFavorite: () => {},
  toggleLoved: () => {},
});

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loved, setLoved] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleLoved = (id: string) => {
    setLoved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <UserDataContext.Provider value={{ favorites, loved, toggleFavorite, toggleLoved }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
