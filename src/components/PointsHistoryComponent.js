import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../App';
import '../styles/PointsHistory.css'

const PointsHistoryComponent = () => {
    const [xp, setXp] = useState([]);
    const pointsHistoryOptions = {
        method: 'GET',
        url: `${server}/entities/${process.env.REACT_APP_ENTITY}/users/${process.env.REACT_APP_USER_ID}/xp-history`,
        headers: {
            accept: 'application/json',
            apikey: `${process.env.REACT_APP_API_KEY}`,
            userid: `${process.env.REACT_APP_USER_ID}`,
            token: `${process.env.REACT_APP_TOKEN}`
        }
    };
    useEffect(() => {
        const fetchBadges = async () => {
            const badges = await axios.request(pointsHistoryOptions);
            setXp(badges.data.data);
        }
        fetchBadges();

    }, []);

    return (
        <>
            <div className='points-container'>
                {
                    xp.map((value, index) => {
                        return (
                            <div className='xp-value' key={index}>
                                <div className=''>
                                    <p>XP</p>
                                    <p>{value.xp}</p>

                                </div>
                                <div className=''>
                                    <p>{(value.createdAt).split('T')[0]}</p>
                                    <p>
                                        {
                                            ((value.createdAt).split('T')[1]).split('Z')[0]
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PointsHistoryComponent