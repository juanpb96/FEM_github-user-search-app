export const DetailsCard = ({ repos, followers, following }) => {
    return (
        <div className='[ details ] [ bg-primary br-10 mb-24 ]'>
            <div>
                <p className='[ mb-8 fs-xsmall ]'>Repos</p>
                <p className='[ title-color fs-medium fw-700 ]'>{ repos }</p>
            </div>
            <div>
                <p className='[ mb-8 fs-xsmall ]'>Followers</p>
                <p className='[ title-color fs-medium fw-700 ]'>{ followers }</p>
            </div>
            <div>
                <p className='[ mb-8 fs-xsmall ]'>Following</p>
                <p className='[ title-color fs-medium fw-700 ]'>{ following }</p>
            </div>
        </div>
    );
};
