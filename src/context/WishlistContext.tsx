import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Estado simple: solo guardamos los IDs de los juegos "likeados".
type WishlistState = string[];

interface WishlistContextType {
  wishlistIds: WishlistState;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'flowmer_wishlist_ids';

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Carga el estado inicial desde LocalStorage en el inicio
  const [wishlistIds, setWishlistIds] = useState<WishlistState>(() => {
    const storedIds = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedIds ? JSON.parse(storedIds) : [];
  });

  // Guarda el estado en LocalStorage automáticamente cuando cambia
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const toggleWishlist = (id: string) => {
    setWishlistIds((prevIds) => {
      if (prevIds.includes(id)) {
        // Si ya existe, lo eliminamos (dislike)
        return prevIds.filter((existingId) => existingId !== id);
      } else {
        // Si no existe, lo añadimos (like)
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