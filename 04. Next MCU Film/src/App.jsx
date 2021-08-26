import { useEffect, useRef, useState } from 'react';
import Movie from './Movie';
import axios from 'axios';

const App = () => {
  const [movie, setMovie] = useState({});
  const [date, setDate] = useState('');

  const getMovie = async (date) => {
    const url = `https://whenisthenextmcufilm.com/api?date=${date}`;
    const { data } = await axios.get(url);
    setMovie(data);
    setDate(data.following_production.release_date);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='App'>
      <div className='title'>
        <h1>What is the next MCU Film ? </h1>
      </div>
      <Movie
        movie={movie}
        setMovie={setMovie}
        date={date}
        getMovie={getMovie}
      />
    </div>
  );
};

export default App;
