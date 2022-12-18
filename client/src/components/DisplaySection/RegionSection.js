import React from 'react'

const RegionSection = ({viewData}) => {
    return (
        <div className=" me-2 mt-2" style={{border:"2px solid red",height:"8.4rem",width:"15rem"}}>
            <span className="mt-3 ms-2" style={{ fontSize: "20px", fontWeight: "700" }}>Region</span>
            <span className="d-flex justify-content-center align-items-center mt-4 h5">{viewData ? <span> {viewData.region} </span> : ""}</span>
        </div>
    )
}

export default RegionSection
