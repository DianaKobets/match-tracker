import { Match } from './types';
import TeamIcon from './icons/icon.svg';

interface MatchSummaryProps {
  match: Match;
  translateStatus: (status: Match['status']) => string;
  getStatusColor: (status: Match['status']) => string;
}

export const MatchSummary = ({ match, translateStatus, getStatusColor }: MatchSummaryProps) => (
  <summary className="details-summary">
    <div className="match-header">
      <div className="teams-container">
        <div className="team-left">
          <div className="team-icon">
            <TeamIcon />
          </div>
          <h3 className="team-name">{match.homeTeam.name}</h3>
        </div>

        <div className="match-center">
          <div className="score">{match.homeScore} : {match.awayScore}</div>
          <div 
            className="match-status"
            style={{ background: getStatusColor(match.status) }}
          >
            {translateStatus(match.status)}
          </div>
        </div>

        <div className="team-right">
          <h3 className="team-name">{match.awayTeam.name}</h3>
          <div className="team-icon">
            <TeamIcon />
          </div>
        </div>
      </div>
    </div>
  </summary>
);