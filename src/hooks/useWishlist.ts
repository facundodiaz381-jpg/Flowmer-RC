import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist debe usarse dentro de un WishlistProvider');
  }
  return context;
};

export default useWishlist;