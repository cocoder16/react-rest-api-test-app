import React from 'react';

const MovieItem = ({
    data
}) => {
    const time = data.updated_at.split('.')[0].replace('T', ' ');

    return (
        <ul>
            <li>id: <b>{data.id}</b></li>
            <li>name: <b>{data.name}</b></li>
            <li>rating: <b>{data.rating}</b></li>
            <li>updated at: <b>{time}</b></li>
        </ul>
    )
};

export default MovieItem;