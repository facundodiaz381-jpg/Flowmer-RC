
import React from 'react';
import { GameCard } from '../../components/GameCard';
import useWishlist from '../../hooks/useWishlist';

import  {seedData } from '../../data/seedData'; 
import { products } from '../../interfaces/products.ts'; 
const WishlistPage: React.FC = () => {
  const { wishlistIds } = useWishlist();

  const wishlistGames = seedData.filter((game: Game) => 
    wishlistIds.includes(game.id)
  );

  return (
    <div className="wishlist-page">
      <h1>Mi Wishlist de FLOWMER</h1>
      <p className="count-info">Mostrando {wishlistGames.length} juegos guardados</p>
      
      { }
      {wishlistGames.length === 0 ? (
        <div className="empty-message">
          <p>Tu wishlist está vacía. ¡Añade algunos juegos desde la tienda! 🤍</p>
        </div>
      ) : (
        <div className="games-grid"> { }
          {wishlistGames.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;