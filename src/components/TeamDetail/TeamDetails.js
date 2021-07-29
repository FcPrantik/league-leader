import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]));
    }, [idTeam])
    return (
        <div className = "card mb-3">
            <img src={team.strTeamBanner} alt="" />
            <div className = "details-info">
            <h3>{team.strTeam}</h3>
            <p>Founded:{team.intFormedYear}</p>
            <p>Country: {team.strCountry} </p>
            <p>Sport Type: {team.strSport} </p>
            <p>Gender: {team.strGender} </p>
                <div className = "inside">
                    <img src={team.strTeamFanart3} alt="" /> 
                </div> 
            </div>
            <div className = "description">
                    <p>{team.strDescriptionEN}</p>
            </div>
            <div className = "social text-center">
                <a href="www.facebook.com"><ion-icon name="logo-facebook" ></ion-icon></a>
                <a href="www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>
            </div> 
        </div>
    );
};

export default TeamDetails;