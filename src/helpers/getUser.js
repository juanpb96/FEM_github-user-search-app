export const getUser = async( username ) => {
    const apiUrl = `https://api.github.com/users/${ username }`;
    
    const response = await fetch( apiUrl );
    const data = await response.json();

    if ( data.message === 'Not Found' ) {
        return null;
    }

    return data;
};