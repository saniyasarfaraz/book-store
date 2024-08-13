import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data } = await axios.get('/api/users/favorites');
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    if (user) fetchFavorites();
  }, [user]);

  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>
        {favorites.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
