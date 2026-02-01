// Statistiche squadra e scommesse di squadra
export const teamInfo = {
  name: "Mens Sana Mesagne",
  shortName: "MSM",
  colors: {
    primary: "#1a472a",
    secondary: "#ffd700",
  },
  logo: null,
};

export const nextMatch = {
  id: 1,
  opponent: "Basket Brindisi",
  date: "2026-02-08",
  time: "18:00",
  location: "Palazzetto Mesagne",
  isHome: true,
};

export const teamBets = [
  {
    id: "team-1",
    category: "Esito partita",
    options: [
      { label: "Vittoria Mens Sana", odds: 1.65 },
      { label: "Vittoria Avversario", odds: 2.25 },
    ],
  },
  {
    id: "team-2",
    category: "Punti totali squadra",
    options: [
      { label: "Over 72.5", odds: 1.85 },
      { label: "Under 72.5", odds: 1.95 },
      { label: "Over 78.5", odds: 2.20 },
      { label: "Under 78.5", odds: 1.68 },
      { label: "Over 85.5", odds: 2.80 },
      { label: "Under 85.5", odds: 1.42 },
    ],
  },
  {
    id: "team-3",
    category: "Margine vittoria",
    options: [
      { label: "MSM vince 1-5 punti", odds: 4.50 },
      { label: "MSM vince 6-10 punti", odds: 3.80 },
      { label: "MSM vince 11-15 punti", odds: 4.20 },
      { label: "MSM vince 16+ punti", odds: 5.00 },
    ],
  },
  {
    id: "team-4",
    category: "Primo quarto",
    options: [
      { label: "Mens Sana vince 1Q", odds: 1.75 },
      { label: "Avversario vince 1Q", odds: 2.10 },
    ],
  },
  {
    id: "team-5",
    category: "Assist totali squadra",
    options: [
      { label: "Over 15.5", odds: 1.80 },
      { label: "Under 15.5", odds: 2.00 },
      { label: "Over 18.5", odds: 2.25 },
      { label: "Under 18.5", odds: 1.65 },
    ],
  },
  {
    id: "team-6",
    category: "Rimbalzi totali squadra",
    options: [
      { label: "Over 35.5", odds: 1.88 },
      { label: "Under 35.5", odds: 1.92 },
      { label: "Over 40.5", odds: 2.35 },
      { label: "Under 40.5", odds: 1.58 },
    ],
  },
  {
    id: "team-7",
    category: "Miglior marcatore partita",
    options: [
      { label: "Luca Bianchi", odds: 3.50 },
      { label: "Marco Rossi", odds: 4.00 },
      { label: "Giuseppe Esposito", odds: 4.50 },
      { label: "Andrea Verdi", odds: 5.50 },
      { label: "Altro giocatore", odds: 2.80 },
    ],
  },
];

export const teamStats = {
  season: "2025/2026",
  wins: 12,
  losses: 4,
  avgPointsScored: 78.5,
  avgPointsConceded: 72.3,
  avgAssists: 18.2,
  avgRebounds: 38.5,
};
