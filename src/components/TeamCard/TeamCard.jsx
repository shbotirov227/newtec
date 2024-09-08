import React from 'react'

const TeamCard = ({ id, img, name, position }) => {
    return (
        <div className="TeamCard">
            <img src={img} alt={`teamImg${id}`} />
            <h4 className="text-center my-4 text-red">{name}</h4>
            <span className="block text-center">{position}</span>
        </div>
    )
}

export default TeamCard;
