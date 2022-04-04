
export const ProfileCard = () => {
    return (
        <article className='profile'>
            <header>
                <img src='./assets/avatar-default.png' alt='User' />
                <h2>The Octocat</h2>
                <p>Joined 25 Jan 2011</p>
                <p>@octocat</p>
            </header>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
            
            <section className='profile__details'>
                <div>
                    <p>Repos</p>
                    <p>8</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>3938</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>9</p>
                </div>
            </section>

            <footer>
                <div>
                    <img src='./assets/icon-location.svg' alt='Location' />
                    <span>San Francisco</span>
                </div>
                <div>
                    <img src='./assets/icon-website.svg' alt='Website' />
                    <a href='https://github.blog'>https://github.blog</a>
                </div>
                <div className='disabled'>
                    <img src='./assets/icon-twitter.svg' alt='Twitter' />
                    <span>Not Available</span>
                </div>
                <div>
                    <img src='./assets/icon-company.svg' alt='Company' />
                    <span>@github</span>
                </div>
            </footer>
        </article>
    );
};
