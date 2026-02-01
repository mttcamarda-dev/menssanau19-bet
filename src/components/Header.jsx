import { teamInfo } from "../data/teamStats";

function Header({ balance }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">🏀</span>
          <div className="logo-text">
            <h1>{teamInfo.name}</h1>
            <span className="tagline">Scommesse Virtuali</span>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="balance-container">
          <span className="balance-label">Saldo</span>
          <span className="balance-amount">€{balance.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
