import React from 'react'

const BadgeImageComponent = ({ imgUrl }) => {
    return (
        <>
            <div className='badge-image'>
                <img src={imgUrl} />
            </div>

        </>
    )
}

export default BadgeImageComponent