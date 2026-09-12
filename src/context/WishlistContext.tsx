import React, { createContext, useState, useEffect, type ReactNode } from 'react';

type WishlistState = string[];

export interface WishlistContextType {
  wishlistIds: WishlistState;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'flowmer_wishlist_ids';

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<WishlistState>(() => {
    const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedIds ? JSON.parse(storedIds) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((existingId) => existingId !== id);
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