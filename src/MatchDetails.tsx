import { Match } from './types';
import AvatarIcon from './icons/avatar_global.svg';

interface MatchDetailsProps {
  match: Match;
}

export const MatchDetails = ({ match }: MatchDetailsProps) => (
  <div className="details-content">
    <div className="hometeam-container">
      <div className="players-section">
        {match.homeTeam.players.map((player) => (
          <div key={player.username} className="player-row">
            <div className="player-info">
                <AvatarIcon/>
                <span>{player.username}</span>
            </div>
            <div className="player-kils">
                Убийств: <span>{player.kills}</span>
            </div>
        </div>
        ))}
      </div>
      <div className="stats-block">
        <span>
            Points: 
            <b>{match.homeTeam.points}</b>
        </span>
        <span>
            Место: 
            <b>{match.homeTeam.place}</b>
        </span>
        <span>
            Убийств: 
            <b>{match.homeTeam.total_kills}</b>
        </span>
        </div>
    </div>
    <div className="vs-divider">
      <span className="vs-text">VS</span>
    </div>
    <div className="awayteam-container">
      <div className="players-section">
          {match.homeTeam.players.map((player) => (
            <div key={player.username} className="player-row">
              <div className="player-info">
                  <AvatarIcon/>
                  <span>{player.username}</span>
              </div>
              <div className="player-kils">
                  Убийств: <span>{player.kills}</span>
              </div>
          </div>
          ))}
        </div>
        <div className="stats-block">
          <span>
              Points: 
              <b>{match.awayTeam.points}</b>
          </span>
          <span>
              Место: 
              <b>{match.awayTeam.place}</b>
          </span>
          <span>
              Убийств: 
              <b>{match.awayTeam.total_kills}</b>
          </span>
        </div>
      </div>
  </div>
);