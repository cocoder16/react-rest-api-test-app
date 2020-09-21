import React, { Fragment } from 'react';
import axios from 'axios';
import {Movies, CreateMovieForm} from '../components';
import {useAsync, useForm} from '../hooks';

const makeRequest = async (method, url, data) => {
    switch (method) {
        case 'get' :
            return axios({
                method, url
            }).then(res => {
                return res.data;
            }).catch(err => {
                throw new Error('request failed.');
            });
        case 'post' :
            return axios({
                method, url, data
            }).then(res => {
                console.log(res.data);
                return res.data;
            }).catch(err => {
                throw new Error('request failed.');
            });
    };
};

const postMovies = async (data) => {
    return await makeRequest('post', 'http://localhost:3000/api/movies', data);
};

const getMovies = async () => {
    return await makeRequest('get', 'http://localhost:3000/api/movies');
};

const MoviesContainer = () => {
    const [inputs, handleSubmit, handleInputChange] = useForm(postMovies, {name: '', rating: 0});
    const [state, refetch] = useAsync(getMovies);
    
    const handleGetMoviesBtnClick = e => {
        refetch();
    };

    return (
        <Fragment>
            <h1>Movies</h1>
            <CreateMovieForm
                inputs={inputs}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
            <Movies
                loading={state.loading}
                data={state.data}
                handleGetMoviesBtnClick={handleGetMoviesBtnClick}
            />
        </Fragment>
    )
};

export default MoviesContainer;