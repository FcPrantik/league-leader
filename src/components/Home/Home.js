import { useEffect, useState } from 'react';
import Team from '../Teams/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => setTeams(data.teams.slice(0, 9)))
  }, [])

    return (
      <div className = "banner">
        <h3>League Leader</h3>
        <img className = "banner-picture" src="https://www.the-afc.com/img/image/upload/t_l2/ggroeybvwhmxzx6hykqt.jpg" alt="banner" />
      {
        teams.map(team =><Team team={team}></Team>)
      }
        </div>
    );
};

export default Home;