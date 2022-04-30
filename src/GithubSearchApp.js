import { useEffect, useRef, useState } from 'react';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './styles/main.scss';

const bodyTag = document.querySelector('body');

export const GithubSearchApp = () => {
 
    const [theme, setTheme] = useState('light');
    const refTheme = useRef(null);

    useEffect(() => {
        const lastTheme = refTheme.current.innerText.toLowerCase();
        bodyTag.classList.add(`theme-${theme}`);
        bodyTag.classList.remove(`theme-${lastTheme}`);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme( theme === 'light' ? 'dark' : 'light' );
    };

    return (
        <div className='app-container'>
            <header className='[ app-header ] [ flex-flow ]'>
                <h1 className='[ title-color fw-700 ]'>devfinder</h1>
                <button 
                    type='button' 
                    className='[ theme-toggle ] [ flex-flow ]'
                    onClick={ handleThemeToggle }
                >
                    <span 
                        className='[ theme-toggle__name ] [ text-color-secondary fs-small fw-700 uppercase ]'
                        ref={ refTheme }
                    >{ theme === 'light' ? 'dark' : 'light' }</span>
                    {
                        theme === 'light'
                        ? <img className='theme-toggle__img' src='./assets/icon-moon.svg' alt='' />
                        : <img className='theme-toggle__img' src='./assets/icon-sun.svg' alt='' />
                    }
                </button>
            </header>
            <main className='[ app-main ]'>
                <SearchBar />
                <ProfileCard />
            </main>
        </div>
    );
};
