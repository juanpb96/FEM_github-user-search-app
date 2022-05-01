import { useSelector } from "react-redux";
import { DetailsCard } from "./DetailsCard";
import { ListIconItem } from "./ListIconItem";
import { ProfileHeader } from "./ProfileHeader";

export const ProfileCard = () => {
    const { 
        login: atName,
        avatar_url: avatar,
        bio,
        blog,
        company,
        followers,
        following,
        created_at,
        location,
        name,
        public_repos: repos,
        twitter_username: twitter
    } = useSelector( state => state.user );

    const icons = [
        { name: 'location', value: location },
        { name: 'webpage', value: blog },
        { name: 'twitter', value: twitter },
        { name: 'company', value: company }
    ];

    return (
        <article className='[ profile ] [ bg-secondary card-border ]'>
            
            <ProfileHeader 
                atName={ atName }
                avatar={ avatar }
                created_at={ created_at }
                name= { name }
            />

            <p 
                className='[ profile__description ][ mb-24 text-color-secondary fs-small fw-400 lh-large ]'
            >{ bio ? bio : 'This profile has no bio' }</p>
            
            <DetailsCard 
                repos={ repos }
                followers={ followers }
                following={ following }
            />

            <ul className='[ list ] [ grid-flow ] [ no-bullets ]'>
                {
                    icons.map( item => (
                        <ListIconItem
                            key={ item.name } 
                            name={ item.name }
                            value={ item.value }
                        />
                    ))
                }
            </ul>
        </article>
    );
};
