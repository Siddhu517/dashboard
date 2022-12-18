import React from 'react'

const Intensity = ({viewData}) => {
    return (
        <div className='d-flex flex-column' style={{border:"2px solid red",height:"10rem",width:"15rem"}}>
            <span className="ms-2" style={{fontSize:"25px", fontWeight:"500"}}>Intensity</span>
            <span className="d-flex justify-content-center align-items-center mt-3 h1" >{viewData ? <span> {viewData.intensity} </span> : ""}</span>
        </div>
    )
}

export default Intensity
