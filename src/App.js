import React, { useState, useEffect } from 'react';
import GameForm from './components/GameForm';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('games')) || [];
    setGames(savedGames);
  }, []);

  const addGame = (game) => {
    const newGames = [...games, game];
    setGames(newGames);
    localStorage.setItem('games', JSON.stringify(newGames));
    setShowForm(false);
  };

  const deleteGame = (index) => {
    const newGames = games.filter((_, i) => i !== index);
    setGames(newGames);
    localStorage.setItem('games', JSON.stringify(newGames));
  };

  const editGame = (index, updatedGame) => {
    const newGames = games.map((game, i) => (i === index ? updatedGame : game));
    setGames(newGames);
    localStorage.setItem('games', JSON.stringify(newGames));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Colección de Videojuegos</h1>
      </header>
      <main className="flex-grow p-4">
        <div className="text-center mb-4">
          <p className="mb-2">Presiona el botón para desplegar el formulario</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Ocultar Formulario' : 'Agregar Juego'}
          </button>
        </div>
        {showForm && <GameForm onSubmit={addGame} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              onDelete={() => deleteGame(index)}
              onEdit={(updatedGame) => editGame(index, updatedGame)}
            />
          ))}
        </div>
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy; 2024 Mi Colección de Videojuegos</p>
      </footer>
    </div>
  );
}

export default App;
