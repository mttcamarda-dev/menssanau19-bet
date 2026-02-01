// Dati giocatori Mens Sana Mesagne (nomi inventati - da sostituire)
export const players = [
  {
    id: 1,
    name: "Marco Rossi",
    number: 7,
    role: "Playmaker",
    photo: null,
    stats: {
      avgPoints: 15.2,
      avgAssists: 6.8,
      avgRebounds: 2.1,
    },
    bets: {
      points: [
        { line: "Over 12.5", odds: 1.85 },
        { line: "Under 12.5", odds: 1.95 },
        { line: "Over 15.5", odds: 2.20 },
        { line: "Under 15.5", odds: 1.65 },
        { line: "Over 20.5", odds: 3.50 },
        { line: "Under 20.5", odds: 1.28 },
      ],
      assists: [
        { line: "Over 5.5", odds: 1.75 },
        { line: "Under 5.5", odds: 2.05 },
        { line: "Over 7.5", odds: 2.40 },
        { line: "Under 7.5", odds: 1.55 },
      ],
      rebounds: [
        { line: "Over 1.5", odds: 1.60 },
        { line: "Under 1.5", odds: 2.25 },
        { line: "Over 3.5", odds: 3.20 },
        { line: "Under 3.5", odds: 1.32 },
      ],
    },
  },
  {
    id: 2,
    name: "Luca Bianchi",
    number: 23,
    role: "Guardia",
    photo: null,
    stats: {
      avgPoints: 18.5,
      avgAssists: 3.2,
      avgRebounds: 4.5,
    },
    bets: {
      points: [
        { line: "Over 15.5", odds: 1.80 },
        { line: "Under 15.5", odds: 2.00 },
        { line: "Over 18.5", odds: 2.10 },
        { line: "Under 18.5", odds: 1.72 },
        { line: "Over 22.5", odds: 3.00 },
        { line: "Under 22.5", odds: 1.38 },
      ],
      assists: [
        { line: "Over 2.5", odds: 1.70 },
        { line: "Under 2.5", odds: 2.10 },
        { line: "Over 4.5", odds: 2.80 },
        { line: "Under 4.5", odds: 1.42 },
      ],
      rebounds: [
        { line: "Over 3.5", odds: 1.65 },
        { line: "Under 3.5", odds: 2.20 },
        { line: "Over 5.5", odds: 2.50 },
        { line: "Under 5.5", odds: 1.52 },
      ],
    },
  },
  {
    id: 3,
    name: "Andrea Verdi",
    number: 11,
    role: "Ala piccola",
    photo: null,
    stats: {
      avgPoints: 12.8,
      avgAssists: 2.5,
      avgRebounds: 5.2,
    },
    bets: {
      points: [
        { line: "Over 10.5", odds: 1.75 },
        { line: "Under 10.5", odds: 2.05 },
        { line: "Over 14.5", odds: 2.35 },
        { line: "Under 14.5", odds: 1.58 },
      ],
      assists: [
        { line: "Over 1.5", odds: 1.55 },
        { line: "Under 1.5", odds: 2.40 },
        { line: "Over 3.5", odds: 2.90 },
        { line: "Under 3.5", odds: 1.38 },
      ],
      rebounds: [
        { line: "Over 4.5", odds: 1.70 },
        { line: "Under 4.5", odds: 2.10 },
        { line: "Over 6.5", odds: 2.45 },
        { line: "Under 6.5", odds: 1.55 },
      ],
    },
  },
  {
    id: 4,
    name: "Francesco Neri",
    number: 32,
    role: "Ala grande",
    photo: null,
    stats: {
      avgPoints: 10.5,
      avgAssists: 1.8,
      avgRebounds: 7.2,
    },
    bets: {
      points: [
        { line: "Over 8.5", odds: 1.70 },
        { line: "Under 8.5", odds: 2.10 },
        { line: "Over 12.5", odds: 2.60 },
        { line: "Under 12.5", odds: 1.48 },
      ],
      assists: [
        { line: "Over 1.5", odds: 1.90 },
        { line: "Under 1.5", odds: 1.90 },
        { line: "Over 2.5", odds: 2.70 },
        { line: "Under 2.5", odds: 1.44 },
      ],
      rebounds: [
        { line: "Over 6.5", odds: 1.75 },
        { line: "Under 6.5", odds: 2.05 },
        { line: "Over 8.5", odds: 2.30 },
        { line: "Under 8.5", odds: 1.62 },
      ],
    },
  },
  {
    id: 5,
    name: "Giuseppe Esposito",
    number: 15,
    role: "Centro",
    photo: null,
    stats: {
      avgPoints: 14.2,
      avgAssists: 1.5,
      avgRebounds: 9.8,
    },
    bets: {
      points: [
        { line: "Over 12.5", odds: 1.80 },
        { line: "Under 12.5", odds: 2.00 },
        { line: "Over 16.5", odds: 2.45 },
        { line: "Under 16.5", odds: 1.55 },
      ],
      assists: [
        { line: "Over 1.5", odds: 2.00 },
        { line: "Under 1.5", odds: 1.80 },
        { line: "Over 2.5", odds: 3.20 },
        { line: "Under 2.5", odds: 1.32 },
      ],
      rebounds: [
        { line: "Over 8.5", odds: 1.72 },
        { line: "Under 8.5", odds: 2.08 },
        { line: "Over 10.5", odds: 2.15 },
        { line: "Under 10.5", odds: 1.70 },
        { line: "Over 12.5", odds: 3.10 },
        { line: "Under 12.5", odds: 1.35 },
      ],
    },
  },
  {
    id: 6,
    name: "Davide Marino",
    number: 3,
    role: "Playmaker",
    photo: null,
    stats: {
      avgPoints: 8.5,
      avgAssists: 4.2,
      avgRebounds: 1.8,
    },
    bets: {
      points: [
        { line: "Over 6.5", odds: 1.65 },
        { line: "Under 6.5", odds: 2.20 },
        { line: "Over 10.5", odds: 2.80 },
        { line: "Under 10.5", odds: 1.42 },
      ],
      assists: [
        { line: "Over 3.5", odds: 1.72 },
        { line: "Under 3.5", odds: 2.08 },
        { line: "Over 5.5", odds: 2.55 },
        { line: "Under 5.5", odds: 1.50 },
      ],
      rebounds: [
        { line: "Over 1.5", odds: 1.85 },
        { line: "Under 1.5", odds: 1.95 },
      ],
    },
  },
  {
    id: 7,
    name: "Simone Greco",
    number: 21,
    role: "Guardia",
    photo: null,
    stats: {
      avgPoints: 11.2,
      avgAssists: 2.8,
      avgRebounds: 3.1,
    },
    bets: {
      points: [
        { line: "Over 9.5", odds: 1.75 },
        { line: "Under 9.5", odds: 2.05 },
        { line: "Over 13.5", odds: 2.50 },
        { line: "Under 13.5", odds: 1.52 },
      ],
      assists: [
        { line: "Over 2.5", odds: 1.85 },
        { line: "Under 2.5", odds: 1.95 },
        { line: "Over 4.5", odds: 3.00 },
        { line: "Under 4.5", odds: 1.38 },
      ],
      rebounds: [
        { line: "Over 2.5", odds: 1.70 },
        { line: "Under 2.5", odds: 2.10 },
        { line: "Over 4.5", odds: 2.85 },
        { line: "Under 4.5", odds: 1.40 },
      ],
    },
  },
  {
    id: 8,
    name: "Antonio Ferrara",
    number: 44,
    role: "Ala grande",
    photo: null,
    stats: {
      avgPoints: 7.8,
      avgAssists: 1.2,
      avgRebounds: 5.5,
    },
    bets: {
      points: [
        { line: "Over 6.5", odds: 1.80 },
        { line: "Under 6.5", odds: 2.00 },
        { line: "Over 9.5", odds: 2.65 },
        { line: "Under 9.5", odds: 1.45 },
      ],
      assists: [
        { line: "Over 1.5", odds: 2.30 },
        { line: "Under 1.5", odds: 1.60 },
      ],
      rebounds: [
        { line: "Over 4.5", odds: 1.68 },
        { line: "Under 4.5", odds: 2.15 },
        { line: "Over 6.5", odds: 2.40 },
        { line: "Under 6.5", odds: 1.55 },
      ],
    },
  },
];

export const betCategories = {
  points: { label: "Punti", icon: "🏀" },
  assists: { label: "Assist", icon: "🎯" },
  rebounds: { label: "Rimbalzi", icon: "📊" },
};
