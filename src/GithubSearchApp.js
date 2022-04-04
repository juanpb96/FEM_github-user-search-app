import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './styles/main.scss';

export const GithubSearchApp = () => {
    return (
        <>
            <header>
                <h1>devfinder</h1>
                <div className='theme-toggle'>
                    <span>Dark</span>
                    <img src='./assets/icon-moon.svg' alt='' />
                </div>
            </header>
            <main>
                <SearchBar />
                <ProfileCard />
            </main>
        </>
    );
};
