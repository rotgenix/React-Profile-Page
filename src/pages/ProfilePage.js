import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/ProfilePage.css'
import BadgesComponent from '../components/BadgesComponent';
import MembershipComponent from '../components/MembershipComponent';
import PointsHistoryComponent from '../components/PointsHistoryComponent';

import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Loader from '../components/Loader';

const ProfilePage = () => {
    const [loader, setLoader] = useState(true);
    const [profileImg, setProfileImg] = useState('');
    const [name, setName] = useState('');
    const [points, setPoints] = useState(0);
    const [rank, setRank] = useState(0);
    const [level, setLevel] = useState(0);
    const [number, setNumber] = useState(0);

    const memBadgeStyle = {
        borderBottom: "2px solid #7052ff",
        color: "#7052ff",
        paddingBottom: "8px"
    }

    const profileOptions = {
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_LINK}/users/${process.env.REACT_APP_USER_ID}`,
        headers: {
            accept: 'application/json',
            apikey: `${process.env.REACT_APP_API_KEY}`,
            userid: `${process.env.REACT_APP_USER_ID}`,
            token: `${process.env.REACT_APP_TOKEN}`
        }
    };

    const pointsAndLevelOptions = {
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_LINK}/entities/${process.env.REACT_APP_ENTITY}/users/${process.env.REACT_APP_USER_ID}/xp`,
        headers: {
            accept: 'application/json',
            apikey: `${process.env.REACT_APP_API_KEY}`,
            userid: `${process.env.REACT_APP_USER_ID}`,
            token: `${process.env.REACT_APP_TOKEN}`
        }
    };

    const rankOptions = {
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_LINK}/entities/${process.env.REACT_APP_ENTITY}/users/${process.env.REACT_APP_USER_ID}/xp-leaderboard-rank`,
        headers: {
            accept: 'application/json',
            apikey: `${process.env.REACT_APP_API_KEY}`,
            userid: `${process.env.REACT_APP_USER_ID}`,
            token: `${process.env.REACT_APP_TOKEN}`
        }
    };

    useEffect(() => {
        const fetchProfileData = async () => {

            // Profile
            const { data } = await axios.request(profileOptions);
            setProfileImg(data.data.imageUrl);
            setName(data.data.name);

            const pointsAndLevel = await axios.request(pointsAndLevelOptions);
            setPoints(pointsAndLevel.data.data);
            setLevel(pointsAndLevel.data.tier);

            const rank = await axios.request(rankOptions);
            setRank(rank.data.data.position);
            setLoader(false);
        }
        fetchProfileData();
    }, []);

    return (
        <>
            {
                loader ? <Loader /> : <div className='profile-page-container'>
                    {<div className='profile-page'>

                        <div className='profile-page-heading'>
                            <h3>
                                Profile
                            </h3>
                        </div>

                        <div className='profile'>

                            <div className='profile-img-name'>
                                <img src={profileImg} />
                                <h3>{name}</h3>
                            </div>

                            {/* point rank level  */}
                            <div className='points-rank-level'>
                                <div>
                                    <h3>
                                        {points}
                                    </h3>
                                    <p>
                                        Points
                                    </p>
                                </div>
                                <div>
                                    <h3>
                                        #{rank}
                                    </h3>
                                    <p>Rank</p>
                                </div>
                                <div>
                                    <h3>
                                        {level}
                                    </h3>
                                    <p>
                                        Level
                                    </p>
                                </div>
                            </div >

                            {/* mem badge points  */}
                            <div className='mem-badge-point' >
                                <ul className=''>
                                    <li style={(number === 0) ? memBadgeStyle : null}>
                                        <button onClick={() => setNumber(0)}>Membership</button>
                                    </li>
                                    <li style={(number === 1) ? memBadgeStyle : null}>
                                        <button onClick={() => setNumber(1)}>Badges</button>
                                    </li>
                                    <li style={(number === 2) ? memBadgeStyle : null}>
                                        <button onClick={() => setNumber(2)}>Point History</button>
                                    </li>
                                </ul>
                            </div>

                            <div className='badges-component-container'>
                                {
                                    number === 1 ? <BadgesComponent loading={true} /> : number === 2 ? <PointsHistoryComponent /> : <MembershipComponent />
                                }
                            </div>
                        </div >

                    </div >}
                    <div className='footer'>
                        <RiHomeFill />
                        <FiSearch />
                        <FaShoppingBag />
                        <CgProfile />
                    </div>
                </div>
            }

        </>
    )
}

export default ProfilePage