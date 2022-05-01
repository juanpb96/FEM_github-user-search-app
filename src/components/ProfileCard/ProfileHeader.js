export const ProfileHeader = ({ atName, avatar, created_at, name }) => {

    const joinDate = new Date(created_at);
    const [ day, month, year ] = [
        joinDate.getDate(),
        joinDate.toLocaleString('en-US', { month: 'short' }),
        joinDate.getFullYear()
    ];

    return (
        <header className='[ profile__header ][ mb-34 ]'>
            <img 
                className='profile__photo' 
                src={ avatar ? avatar : './assets/avatar-default.png' } 
                alt='' 
            />

            <h2 
                className='[ title-color fs-medium fw-700 ]'
                datatype='username'
            >{ name }</h2>
            <p 
                className='[ text-color-primary fw-400 ]'
                datatype='join-date'
            >{ `Joined at ${ day } ${ month } ${ year }` }</p>
            <p 
                className='[ text-color-blue fw-400 ]'
                datatype='at'
            >@{ atName }</p>
        </header>
    );
}
