function BetHistory({ history, onClose }) {
  return (
    <div className="bet-history-modal">
      <div className="bet-history-content">
        <div className="bet-history-header">
          <h3>📜 Storico Scommesse</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {history.length === 0 ? (
          <div className="no-history">
            <p>Nessuna scommessa effettuata</p>
          </div>
        ) : (
          <div className="history-list">
            {history.map((entry, index) => (
              <div key={index} className={`history-item ${entry.status}`}>
                <div className="history-header">
                  <span className="history-date">
                    {new Date(entry.date).toLocaleString("it-IT")}
                  </span>
                  <span className={`history-status ${entry.status}`}>
                    {entry.status === "pending" && "⏳ In attesa"}
                    {entry.status === "won" && "✅ Vinta"}
                    {entry.status === "lost" && "❌ Persa"}
                  </span>
                </div>

                <div className="history-bets">
                  {entry.bets.map((bet, betIndex) => (
                    <div key={betIndex} className="history-bet">
                      <span className="bet-player">{bet.playerName}</span>
                      <span className="bet-selection">
                        {bet.category}: {bet.line}
                      </span>
                      <span className="bet-odds">@{bet.odds.toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="history-footer">
                  <span>Puntata: €{entry.stake.toFixed(2)}</span>
                  <span>Quota: {entry.totalOdds.toFixed(2)}</span>
                  <span className="potential">
                    {entry.status === "won"
                      ? `Vinto: €${entry.potentialWin.toFixed(2)}`
                      : `Pot. vincita: €${entry.potentialWin.toFixed(2)}`
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BetHistory;
