import React, { useEffect, useState } from 'react'

const BadgeInformation = ({ badgeInfo, setFinalPosition, finalPosition }) => {
    const [badgeImg, setBadgeImg] = useState('');
    const [badgeDesc, setBadgeDesc] = useState('');

    const badgeDetailFinal = {
        top: "-500px",
        width: "100%",
        height: "100%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
        overflow: "hidden",
        transition: 'background-color 03s ease-in-out'
    }
    const badgeDetailInitial = {

        height: "100%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "-50%",
        overflow: "hidden"
    }

    useEffect(() => {
        setBadgeImg(badgeInfo.imageUrl);
        setBadgeDesc(badgeInfo.description);
    })
    return (
        <>
            <div className='badge-information' style={finalPosition ? badgeDetailFinal : badgeDetailInitial}>

                <div class="bg-image"></div>

                <div className='img-desc' style={{}}>
                    <button onClick={() => {
                        setFinalPosition(false);
                    }}>X</button>
                    <img src={badgeImg} />
                    <p className='first'>Badge Unlocked 🌟</p>
                    <p className='badge-desc'>🎉{badgeDesc}🥇✨</p>
                </div>
            </div>
        </>
    )
}

export default BadgeInformation