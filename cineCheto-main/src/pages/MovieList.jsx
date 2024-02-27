import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/moviesSlice';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '406f4125e93f8a3f17416d072909fb0f';
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setMovies(data.results));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Lista de Películas</h1>
      <div className="flex flex-wrap -mx-2 text-center">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="bg-gray-200 p-4 rounded transition-transform transform hover:scale-105">
              <Link to={`/Pelicula/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto rounded"
                />
              </Link>
              <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
              <p className="text-sm">Año: {movie.release_date && movie.release_date.substring(0, 4)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
