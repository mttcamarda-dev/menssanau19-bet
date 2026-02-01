import { useState } from "react";

function InstallTutorial({ onClose }) {
  const [step, setStep] = useState("choose"); // choose, iphone, android

  const handleSkip = () => {
    localStorage.setItem("tutorialSeen", "true");
    onClose();
  };

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        {step === "choose" && (
          <>
            <div className="tutorial-header">
              <span className="tutorial-icon">📲</span>
              <h2>Installa l'app!</h2>
            </div>
            <p className="tutorial-text">
              Aggiungi MSM Bet alla schermata home del tuo telefono per un accesso rapido!
            </p>
            <p className="tutorial-question">Che telefono hai?</p>
            <div className="tutorial-buttons">
              <button
                className="tutorial-btn iphone"
                onClick={() => setStep("iphone")}
              >
                🍎 iPhone
              </button>
              <button
                className="tutorial-btn android"
                onClick={() => setStep("android")}
              >
                🤖 Android
              </button>
            </div>
            <button className="tutorial-skip" onClick={handleSkip}>
              Salta, lo faccio dopo
            </button>
          </>
        )}

        {step === "iphone" && (
          <>
            <div className="tutorial-header">
              <span className="tutorial-icon">🍎</span>
              <h2>iPhone / iPad</h2>
            </div>
            <div className="tutorial-steps">
              <div className="tutorial-step">
                <span className="step-number">1</span>
                <p>Tocca l'icona <strong>Condividi</strong> in basso (quadrato con freccia verso l'alto)</p>
              </div>
              <div className="tutorial-step">
                <span className="step-number">2</span>
                <p>Scorri e tocca <strong>"Aggiungi alla schermata Home"</strong></p>
              </div>
              <div className="tutorial-step">
                <span className="step-number">3</span>
                <p>Tocca <strong>"Aggiungi"</strong> in alto a destra</p>
              </div>
            </div>
            <div className="tutorial-note">
              ⚠️ Devi usare <strong>Safari</strong>, non Chrome o altri browser!
            </div>
            <div className="tutorial-buttons">
              <button className="tutorial-btn back" onClick={() => setStep("choose")}>
                ← Indietro
              </button>
              <button className="tutorial-btn done" onClick={handleSkip}>
                Ho capito! ✓
              </button>
            </div>
          </>
        )}

        {step === "android" && (
          <>
            <div className="tutorial-header">
              <span className="tutorial-icon">🤖</span>
              <h2>Android</h2>
            </div>
            <div className="tutorial-steps">
              <div className="tutorial-step">
                <span className="step-number">1</span>
                <p>Tocca i <strong>tre puntini</strong> ⋮ in alto a destra</p>
              </div>
              <div className="tutorial-step">
                <span className="step-number">2</span>
                <p>Tocca <strong>"Aggiungi a schermata Home"</strong> o <strong>"Installa app"</strong></p>
              </div>
              <div className="tutorial-step">
                <span className="step-number">3</span>
                <p>Conferma toccando <strong>"Aggiungi"</strong></p>
              </div>
            </div>
            <div className="tutorial-note">
              💡 Usa <strong>Chrome</strong> per la migliore esperienza!
            </div>
            <div className="tutorial-buttons">
              <button className="tutorial-btn back" onClick={() => setStep("choose")}>
                ← Indietro
              </button>
              <button className="tutorial-btn done" onClick={handleSkip}>
                Ho capito! ✓
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InstallTutorial;
