import React from 'react'
import '../styles/Loader.css'
import { FaCircleNotch } from "react-icons/fa6";

const Loader = () => {
    const loaderStyle = {

    }
return (
    <>
        <div className="loader">
            <div className="loader-container">
                <FaCircleNotch className='rotate-infinite' />
            </div>
        </div>
    </>
)
}

export default Loader