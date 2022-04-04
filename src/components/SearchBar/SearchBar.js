

export const SearchBar = () => {

    return (
        <form className='search-bar'>
            <img src='./assets/icon-search.svg' alt='' />
            <input 
                type='text'
                name='username'
                value=''
                placeholder='Search GitHub username…'
            />
            <p className='search-bar__error'>No results</p>
            <button type='submit'>Search</button>
        </form>
    );
};
