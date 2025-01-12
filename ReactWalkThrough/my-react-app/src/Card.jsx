import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img className='card-image' src="https://media.licdn.com/dms/image/v2/D5603AQGkRt_1d-qncg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713416312289?e=1741824000&v=beta&t=Cwf-CfzUtvpCtPCFd1gMcvQecaEh2sBqL_z7s_vwVuc"
         alt="profile picture" />
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-text'>{props.description}</p>
        <p>Subscribed: {props.isSbuscribed ? "No" : "Yes"}</p>
    </div>
  )
}

export default Card