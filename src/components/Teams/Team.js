import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strSport, idTeam, strTeamBadge,} = props.team;
    
    return (
        <div className = "container">
            <div className = "badge">
            <img src= {strTeamBadge} alt="" />
            <h2>{strTeam}</h2>
            <p>Sports type: {strSport}</p>
            <Link to={`/${idTeam}`}><button className= "btn btn-primary">Explore</button></Link>
            </div>
        </div>
    );
};

export default Team;