import { useState } from "react";
import { teamBets, nextMatch, teamStats } from "../data/teamStats";

function TeamBets({ onAddBet }) {
  const [expandedBet, setExpandedBet] = useState(null);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="team-bets-section">
      <div className="next-match-card">
        <h3>Prossima Partita</h3>
        <div className="match-info">
          <div className="match-teams">
            <span className="home-team">Mens Sana Mesagne</span>
            <span className="vs">vs</span>
            <span className="away-team">{nextMatch.opponent}</span>
          </div>
          <div className="match-details">
            <span>📅 {formatDate(nextMatch.date)}</span>
            <span>⏰ {nextMatch.time}</span>
            <span>📍 {nextMatch.location}</span>
          </div>
        </div>
      </div>

      <div className="team-stats-card">
        <h3>Stagione {teamStats.season}</h3>
        <div className="stats-grid">
          <div className="team-stat">
            <span className="stat-value">{teamStats.wins}-{teamStats.losses}</span>
            <span className="stat-label">Record</span>
          </div>
          <div className="team-stat">
            <span className="stat-value">{teamStats.avgPointsScored}</span>
            <span className="stat-label">PPG</span>
          </div>
          <div className="team-stat">
            <span className="stat-value">{teamStats.avgAssists}</span>
            <span className="stat-label">APG</span>
          </div>
          <div className="team-stat">
            <span className="stat-value">{teamStats.avgRebounds}</span>
            <span className="stat-label">RPG</span>
          </div>
        </div>
      </div>

      <h3 className="section-title">Scommesse Squadra</h3>
      <div className="team-bets-list">
        {teamBets.map((betGroup) => (
          <div key={betGroup.id} className="team-bet-group">
            <button
              className={`team-bet-toggle ${expandedBet === betGroup.id ? "active" : ""}`}
              onClick={() => setExpandedBet(expandedBet === betGroup.id ? null : betGroup.id)}
            >
              <span>{betGroup.category}</span>
              <span className="toggle-icon">{expandedBet === betGroup.id ? "−" : "+"}</span>
            </button>

            {expandedBet === betGroup.id && (
              <div className="team-bet-options">
                {betGroup.options.map((option, index) => (
                  <button
                    key={index}
                    className="bet-option"
                    onClick={() =>
                      onAddBet({
                        id: `${betGroup.id}-${index}`,
                        playerName: "Squadra",
                        category: betGroup.category,
                        line: option.label,
                        odds: option.odds,
                      })
                    }
                  >
                    <span className="bet-line">{option.label}</span>
                    <span className="bet-odds">{option.odds.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamBets;
