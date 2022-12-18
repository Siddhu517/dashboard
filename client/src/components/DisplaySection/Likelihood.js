import React from 'react'

const Likelihood = ({viewData}) => {
  return (
    <div className="mt-3 d-flex justify-content-center align-items-center">
    <div className="circle bg-primary text-light d-flex flex-column align-items-center justify-content-center" style={{height:"8rem",width:"8rem" ,border:"15px solid red",borderRadius:"50%", }}>
    <span>Likelihood</span>
    <span>{viewData ? <span> {viewData.likelihood} </span> : ""}</span>
    </div>
</div>
  )
}

export default Likelihood