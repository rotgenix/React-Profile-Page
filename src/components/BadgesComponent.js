import React, { useEffect, useState } from 'react';
import { server } from '../App';
import axios from 'axios';
import BadgeImageComponent from './BadgeImageComponent';
import '../styles/BadgeComponent.css'
import BadgeInformation from './BadgeInformation';
import Loader from './Loader';

const BadgesComponent = ({ loading }) => {
    const [loader, setLoader] = useState(true);
    const [badges, setBadges] = useState([]);
    const [badgeInfo, setBadgeInfo] = useState({});
   
    const [finalPosition, setFinalPosition] = useState(false);

    const badgesOptions = {
        method: 'GET',
        url: `${server}/entities/${process.env.REACT_APP_ENTITY}/users/${process.env.REACT_APP_USER_ID}/badges`,
        headers: {
            accept: 'application/json',
            apikey: `${process.env.REACT_APP_API_KEY}`,
            userid: `${process.env.REACT_APP_USER_ID}`,
            token: `${process.env.REACT_APP_TOKEN}`
        }
    }

    useEffect(() => {
        const fetchBadges = async () => {
            // Badges
            const badges = await axios.request(badgesOptions);
            setBadges(badges.data.data);
            setLoader(false);
        }
        fetchBadges();
    }, []);

    return (
        <>
            {
                loader ? <Loader /> : <div className='badgesContainer'>
                    {
                        badges.map((value, index) => {
                            return (
                                <button onClick={() => {
                                    setBadgeInfo(value);
                                    setFinalPosition((prev) => !prev);
                                }} key={index} className='badge-card'>
                                    <BadgeImageComponent imgUrl={value.imageUrl} />
                                </button>
                            )
                        })
                    }

                    {
                        finalPosition ? <BadgeInformation badgeInfo={badgeInfo} finalPosition={finalPosition} setFinalPosition={setFinalPosition} /> : ""
                    }
                </div>
            }
        </>
    )
}

export default BadgesComponent