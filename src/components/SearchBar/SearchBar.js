import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../actions/user";
import { getUser } from "../../helpers/getUser";


export const SearchBar = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [errorState, setErrorState] = useState('');

    const errorRef = useRef(null);

    useEffect(() => {
        if (errorRef && errorRef.current) {
            if (errorState === 'active') {
                errorRef.current.focus();
            }

            if (errorState === 'closing') {
                errorRef.current.addEventListener('animationend', () => {
                    setErrorState('');
                }, { once: true });
            }
        }
    }, [errorRef, errorState]);
    
    const handleInputChange = ({target}) => {
        setUsername(target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = await getUser( username.trim() );

        if ( !userData ) {
            setErrorState('active');
            return;
        }

        dispatch( setUserData( userData ) );
        setErrorState('closing');
    };

    return (
        <form 
            className='[ search-bar ] [ flex-flow ] [ bg-secondary card-border mb-16 ]'
            onSubmit={ handleSubmit }
        >
            <img 
                className='icon'
                src={`${ process.env.PUBLIC_URL }/assets/icon-search.svg`}
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
                className='[ search-bar__error ] [ text-error-color fs-small fw-700 ml-auto ]'
                datatype={ errorState ? errorState : undefined }
                ref={ errorRef }
                tabIndex='0'
            >No results</p>
            <button 
                type='submit'
                className='[ btn ] [ text-color-white fw-700 br-10 ml-auto ]'
                datatype='blue'
            >Search</button>
        </form>
    );
};
