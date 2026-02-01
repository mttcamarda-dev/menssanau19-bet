import { useState } from "react";

function Betslip({ bets, onRemoveBet, onClearAll, onPlaceBet, balance }) {
  const [stake, setStake] = useState("");

  const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1);
  const potentialWin = stake ? (parseFloat(stake) * totalOdds).toFixed(2) : "0.00";

  const handlePlaceBet = () => {
    const stakeAmount = parseFloat(stake);
    if (stakeAmount > 0 && stakeAmount <= balance && bets.length > 0) {
      onPlaceBet(stakeAmount);
      setStake("");
    }
  };

  const quickStakes = [5, 10, 20, 50];

  return (
    <div className="betslip">
      <div className="betslip-header">
        <h3>🎫 Schedina</h3>
        {bets.length > 0 && (
          <button className="clear-btn" onClick={onClearAll}>
            Svuota
          </button>
        )}
      </div>

      {bets.length === 0 ? (
        <div className="betslip-empty">
          <p>La tua schedina è vuota</p>
          <span>Clicca sulle quote per aggiungere scommesse</span>
        </div>
      ) : (
        <>
          <div className="betslip-items">
            {bets.map((bet) => (
              <div key={bet.id} className="betslip-item">
                <button className="remove-bet" onClick={() => onRemoveBet(bet.id)}>
                  ×
                </button>
                <div className="bet-details">
                  <span className="bet-player">{bet.playerName}</span>
                  <span className="bet-selection">
                    {bet.category}: {bet.line}
                  </span>
                </div>
                <span className="bet-odds">{bet.odds.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="betslip-summary">
            <div className="total-odds">
              <span>Quota totale:</span>
              <span className="odds-value">{totalOdds.toFixed(2)}</span>
            </div>

            <div className="stake-section">
              <label>Importo scommessa:</label>
              <div className="stake-input-container">
                <span className="currency">€</span>
                <input
                  type="number"
                  value={stake}
                  onChange={(e) => setStake(e.target.value)}
                  placeholder="0.00"
                  min="0"
                  max={balance}
                  step="0.01"
                />
              </div>
              <div className="quick-stakes">
                {quickStakes.map((amount) => (
                  <button
                    key={amount}
                    className="quick-stake-btn"
                    onClick={() => setStake(amount.toString())}
                    disabled={amount > balance}
                  >
                    €{amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="potential-win">
              <span>Vincita potenziale:</span>
              <span className="win-value">€{potentialWin}</span>
            </div>

            <button
              className="place-bet-btn"
              onClick={handlePlaceBet}
              disabled={!stake || parseFloat(stake) <= 0 || parseFloat(stake) > balance}
            >
              Scommetti €{stake || "0.00"}
            </button>

            {parseFloat(stake) > balance && (
              <p className="error-msg">Saldo insufficiente</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Betslip;
