import { useState } from "react";
import { betCategories } from "../data/players";

function PlayerCard({ player, onAddBet }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="player-card">
      <div className="player-header">
        <div className="player-number">#{player.number}</div>
        <div className="player-info">
          <h3 className="player-name">{player.name}</h3>
          <span className="player-role">{player.role}</span>
        </div>
      </div>

      <div className="bet-categories">
        {Object.entries(betCategories).map(([key, { label, icon }]) => (
          <div key={key} className="bet-category">
            <button
              className={`category-toggle ${expandedCategory === key ? "active" : ""}`}
              onClick={() => toggleCategory(key)}
            >
              <span>{icon} {label}</span>
              <span className="toggle-icon">{expandedCategory === key ? "−" : "+"}</span>
            </button>

            {expandedCategory === key && player.bets[key] && (
              <div className="bet-options">
                {player.bets[key].map((bet, index) => (
                  <button
                    key={index}
                    className="bet-option"
                    onClick={() =>
                      onAddBet({
                        id: `${player.id}-${key}-${index}`,
                        playerName: player.name,
                        category: label,
                        line: bet.line,
                        odds: bet.odds,
                      })
                    }
                  >
                    <span className="bet-line">{bet.line}</span>
                    <span className="bet-odds">{bet.odds.toFixed(2)}</span>
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

export default PlayerCard;
