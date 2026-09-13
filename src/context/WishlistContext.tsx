import { createContext, useState, useEffect, type ReactNode } from 'react';
import { getWishlist, saveWishlist } from '../services/storageService';

interface WishlistContextType {
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    // Carga los favoritos guardados previamente
    const saved = getWishlist();
    return saved ? saved.map((item) => String(item.gameId ?? item)) : [];
  });

  useEffect(() => {
    // Sincroniza con localStorage cada vez que cambia la lista
    const itemsToSave = wishlistIds.map((id) => ({ gameId: id }));
    saveWishlist(itemsToSave as any);
  }, [wishlistIds]);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prevIds) => {
      const exists = prevIds.includes(id);
      if (exists) {
        return prevIds.filter((item) => item !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const isInWishlist = (id: string) => wishlistIds.includes(id);

  return (
    <WishlistContext.Provider value={{ wishlistIds, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;