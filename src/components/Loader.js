import React from 'react'
import '../styles/Loader.css'

const Loader = () => {
    return (
        <>

            <div className="loader">
                <div className="loader-container">
                    <i className="fa-regular fa-circle fa-bounce" style={{
                        color: "white"
                    }}></i>
                </div>
            </div>
        </>
    )
}

export default Loader