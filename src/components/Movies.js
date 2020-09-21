import React from 'react';
import MovieItem from './MovieItem';

const Movies = ({
    loading, data, handleGetMoviesBtnClick
}) => {
    return (
        <div className='movies'>
            <button type='button' onClick={handleGetMoviesBtnClick}>get movie list</button>
            {   
                data && !loading ?
                    data.map((cur, i) => <MovieItem data={cur} key={i}/>)
                    :
                <p>Loading...</p>
            }
        </div>
    );
};

export default Movies;