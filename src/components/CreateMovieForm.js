import React from 'react';

const CreateMovieForm = ({
    inputs, handleSubmit, handleInputChange
}) => (
        <form onSubmit={handleSubmit}>
            name: <input type='text' onChange={(e) => handleInputChange(e)} name='name' value={inputs.name}/><br/>
            rating: <input type='number' onChange={handleInputChange} name='rating' max='5' value={inputs.rating}/>
            <button type='submit'>add</button>
        </form>
);

export default CreateMovieForm;