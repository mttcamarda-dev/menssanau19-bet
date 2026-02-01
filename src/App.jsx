import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import TeamBets from "./components/TeamBets";
import Betslip from "./components/Betslip";
import BetHistory from "./components/BetHistory";
import { players } from "./data/players";

const INITIAL_BALANCE = 1000;
const STORAGE_KEY = "menssana_bet_data";

function App() {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return data.balance ?? INITIAL_BALANCE;
    }
    return INITIAL_BALANCE;
  });

  const [betslip, setBetslip] = useState([]);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return data.history ?? [];
    }
    return [];
  });

  const [showHistory, setShowHistory] = useState(false);
  const [activeTab, setActiveTab] = useState("players");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ balance, history })
    );
  }, [balance, history]);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToBetslip = (bet) => {
    if (betslip.find((b) => b.id === bet.id)) {
      showNotification("Scommessa già in schedina", "warning");
      return;
    }
    setBetslip([...betslip, bet]);
    showNotification("Scommessa aggiunta!");
  };

  const removeFromBetslip = (betId) => {
    setBetslip(betslip.filter((b) => b.id !== betId));
  };

  const clearBetslip = () => {
    setBetslip([]);
  };

  const placeBet = (stake) => {
    const totalOdds = betslip.reduce((acc, bet) => acc * bet.odds, 1);
    const potentialWin = stake * totalOdds;

    const newEntry = {
      date: new Date().toISOString(),
      bets: [...betslip],
      stake,
      totalOdds,
      potentialWin,
      status: "pending",
    };

    setBalance((prev) => prev - stake);
    setHistory((prev) => [newEntry, ...prev]);
    setBetslip([]);
    showNotification(`Scommessa piazzata! Puntata: €${stake.toFixed(2)}`);
  };

  const resetBalance = () => {
    if (window.confirm("Sei sicuro di voler resettare il saldo a €1000?")) {
      setBalance(INITIAL_BALANCE);
      showNotification("Saldo resettato a €1000");
    }
  };

  return (
    <div className="app">
      <Header balance={balance} />

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="main-container">
        <div className="content-area">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "players" ? "active" : ""}`}
              onClick={() => setActiveTab("players")}
            >
              🏀 Giocatori
            </button>
            <button
              className={`tab ${activeTab === "team" ? "active" : ""}`}
              onClick={() => setActiveTab("team")}
            >
              👥 Squadra
            </button>
          </div>

          {activeTab === "players" && (
            <div className="players-grid">
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onAddBet={addToBetslip}
                />
              ))}
            </div>
          )}

          {activeTab === "team" && <TeamBets onAddBet={addToBetslip} />}
        </div>

        <div className="sidebar">
          <Betslip
            bets={betslip}
            onRemoveBet={removeFromBetslip}
            onClearAll={clearBetslip}
            onPlaceBet={placeBet}
            balance={balance}
          />

          <div className="sidebar-actions">
            <button className="history-btn" onClick={() => setShowHistory(true)}>
              📜 Storico Scommesse
            </button>
            <button className="reset-btn" onClick={resetBalance}>
              🔄 Reset Saldo
            </button>
          </div>
        </div>
      </div>

      {showHistory && (
        <BetHistory history={history} onClose={() => setShowHistory(false)} />
      )}
    </div>
  );
}

export default App;
