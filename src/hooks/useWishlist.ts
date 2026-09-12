import { useContext } from 'react';
import WishlistContext from '../context/WishlistContext';

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist debe ser utilizado dentro de un WishlistProvider');
  }
  return context;
};