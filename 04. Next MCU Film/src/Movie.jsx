const Movie = ({ movie, setMovie, date, getMovie }) => {
  const handleClick = () => {
    if (movie.following_production) {
      setMovie(movie.following_production);
    } else {
      getMovie(date);
    }
  };

  return (
    <div className='movie-details'>
      <div className='release'>
        <h2>
          {movie.title} releases in
          <div class='day'>{movie.days_until}</div>
          days
        </h2>
      </div>
      <div className='release-date'>
        Release Date: <strong>{movie.release_date}</strong>
      </div>
      <div className='cont'>
        <button onClick={handleClick}>What is next?</button>
      </div>
      <p>{movie.overview}</p>
      <div className='image'>
        <img src={movie.poster_url} alt='' />
      </div>
    </div>
  );
};

export default Movie;
