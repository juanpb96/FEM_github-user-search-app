import { useState } from "react";


export const SearchBar = () => {

    const [username, setUsername] = useState('');

    const handleInputChange = ({target}) => {
        setUsername(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form 
            className='[ search-bar ] [ flex-flow ] [ bg-secondary card-border mb-16 ]'
            onSubmit={ handleSubmit }
        >
            <img 
                className='icon'
                src='./assets/icon-search.svg' 
                alt='' 
            />
            <input 
                type='text'
                name='username'
                value={ username }
                onChange={ handleInputChange }
                placeholder='Search GitHub username…'
                className='[ search-bar__input ] [ text-color-secondary fw-400 ]'
            />
            <p 
                className='[ search-bar__error ] [ text-error-color fw-700 ]'
            >No results</p>
            <button 
                type='submit'
                className='[ btn ] [ text-color-white fw-700 br-10 ml-auto ]'
                datatype='blue'
            >Search</button>
        </form>
    );
};
