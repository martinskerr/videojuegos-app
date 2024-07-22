import React, { useState } from 'react';

function GameCard({ game, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedGame, setEditedGame] = useState(game);

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedGame({
      ...editedGame,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('¿Está seguro de que desea guardar los cambios?')) {
      onEdit(editedGame);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm('¿Está seguro de que desea eliminar este juego?')) {
      onDelete();
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Título</label>
            <input
              type="text"
              name="title"
              value={editedGame.title}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Género</label>
            <input
              type="text"
              name="genre"
              value={editedGame.genre}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha de Lanzamiento</label>
            <input
              type="date"
              name="releaseDate"
              value={editedGame.releaseDate}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Plataforma</label>
            <input
              type="text"
              name="platform"
              value={editedGame.platform}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Calificación</label>
            <input
              type="text"
              name="rating"
              value={editedGame.rating}
              onChange={handleEditChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="completed"
                checked={editedGame.completed}
                onChange={handleEditChange}
                className="form-checkbox"
              />
              <span className="ml-2">Completado</span>
            </label>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{game.title}</h2>
          <p>Género: {game.genre}</p>
          <p>Fecha de Lanzamiento: {game.releaseDate}</p>
          <p>Plataforma: {game.platform}</p>
          <p>Calificación: {game.rating}</p>
          <p>Completado: {game.completed ? 'Sí' : 'No'}</p>
          <div className="flex justify-between mt-4">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameCard;
