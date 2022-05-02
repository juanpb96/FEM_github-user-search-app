import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { store } from './store/store';
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
        <Provider store={ store }>
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
                            <img 
                                className='theme-toggle__img' 
                                src={ theme === 'light' ? './assets/icon-moon.svg' : './assets/icon-sun.svg' }
                                alt='' 
                            />
                        }
                    </button>
                </header>
                <main className='[ app-main ]'>
                    <SearchBar />
                    <ProfileCard />
                </main>
            </div>
        </Provider>
    );
};
