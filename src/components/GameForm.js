import React, { useState } from 'react';

function GameForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState('');
  const [completed, setCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'El título es obligatorio';
    if (!genre) newErrors.genre = 'El género es obligatorio';
    if (!releaseDate) newErrors.releaseDate = 'La fecha de lanzamiento es obligatoria';
    if (!platform) newErrors.platform = 'La plataforma es obligatoria';
    if (!rating) newErrors.rating = 'La calificación es obligatoria';
    if (!completed) newErrors.completed = 'Debe marcarse como completado';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newGame = {
        title,
        genre,
        releaseDate,
        platform,
        rating,
        completed,
      };
      onSubmit(newGame);
      setTitle('');
      setGenre('');
      setReleaseDate('');
      setPlatform('');
      setRating('');
      setCompleted(false);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4 mx-auto w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700">Título</label>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Género</label>
        <input
          type="text"
          placeholder="Género"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.genre && <p className="text-red-500">{errors.genre}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha de Lanzamiento</label>
        <input
          type="date"
          placeholder="Fecha de Lanzamiento"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.releaseDate && <p className="text-red-500">{errors.releaseDate}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Plataforma</label>
        <input
          type="text"
          placeholder="Plataforma"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.platform && <p className="text-red-500">{errors.platform}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Calificación</label>
        <input
          type="text"
          placeholder="Calificación"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.rating && <p className="text-red-500">{errors.rating}</p>}
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2">Completado</span>
        </label>
        {errors.completed && <p className="text-red-500">{errors.completed}</p>}
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Agregar Juego
      </button>
    </form>
  );
}

export default GameForm;
