import { Provider } from 'react-redux';
import { ProfileCard } from './components/ProfileCard/ProfileCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ThemeButton } from './components/ThemeButton/ThemeButton';
import { store } from './store/store';
import './styles/main.scss';

export const GithubSearchApp = () => {
    return (
        <Provider store={ store }>
            <div className='app-container'>
                <header className='[ app-header ] [ flex-flow ]'>
                    <h1 className='[ title-color fw-700 ]'>devfinder</h1>
                    <ThemeButton />
                </header>
                <main className='[ app-main ]'>
                    <SearchBar />
                    <ProfileCard />
                </main>
            </div>
        </Provider>
    );
};
