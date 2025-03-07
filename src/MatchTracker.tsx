import { Match } from './types';
import { useMatches } from './useMatches';
import { useState } from 'react';
import ErrorIcon from './icons/error-vector.svg'
import { MatchSummary } from './MatchSummary';
import { MatchDetails } from './MatchDetails';

const MatchTracker = () => {
    const { 
      data, 
      isError, 
      refetch, 
      isFetching 
    } = useMatches();
    
    const [statusFilter, setStatusFilter] = useState<'all' | Match['status']>('all');
  
    const translateStatus = (status: Match['status']): string => {
      const statusMap = {
        Ongoing: 'Live',
        Finished: 'Finished',
        Scheduled: 'Match preparing'
      };
      return statusMap[status] || status;
    };
  
    const filteredMatches = data?.filter(match => 
      statusFilter === 'all' || match.status === statusFilter
    ) || [];

    const getStatusColor = (status: Match['status']) => {
      switch(status) {
          case 'Ongoing': return 'rgba(67, 173, 40, 1)';
          case 'Finished': return 'rgba(235, 2, 55, 1)';
          case 'Scheduled': return 'rgba(235, 100, 2, 1)';
          default: return '#ffffff';
      }
  };
  
    return (
      <div className="tracker-container">
        <div className="header-container"> 
          <div className="header-filters"> 
            <h1>Match Tracker</h1>        
            <div className="filters">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
                className="filter-select"
              >
                <option value="all">Все статусы</option>
                <option value="Ongoing">Live</option>
                <option value="Finished">Завершённые</option>
                <option value="Scheduled">Предстоящие</option>
              </select>
          </div>
        </div>
        <div className="refresh-container">
          <button 
            className="refresh-button"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? (
              <div className="button-content">
                <span>Обновление</span>
                <div className="loader-spinner"></div>
              </div>
            ) : 'Обновить'}
          </button>
        </div>
   
          {isError && (
            <div className="error-message">
                <ErrorIcon/>
                Ошибка: не удалось загрузить информацию
            </div>
          )}
      </div>
      <div className="matches-list">
                {filteredMatches.map((match) => (
                    <div key={match.title} className="match-card">
                        <details className="match-details">
                          <MatchSummary 
                            match={match}
                            translateStatus={translateStatus}
                            getStatusColor={getStatusColor}
                          />
                          <MatchDetails match={match} />
                      </details>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchTracker;