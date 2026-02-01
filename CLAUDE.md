# CLAUDE.md - AI Assistant Guidelines

## Project Overview

**Repository**: menssanau19-bet
**Purpose**: Applicazione web di scommesse virtuali per la squadra di basket Mens Sana Mesagne
**Tech Stack**: React + Vite
**Last Updated**: 2026-02-01

## Repository Structure

```
menssanau19-bet/
├── CLAUDE.md                    # AI assistant guidelines (this file)
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── public/                     # Static assets
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Main application component
    ├── App.css                 # Main styles
    ├── index.css               # Global styles
    ├── components/
    │   ├── Header.jsx          # Header with logo and balance
    │   ├── PlayerCard.jsx      # Individual player betting card
    │   ├── TeamBets.jsx        # Team-level betting options
    │   ├── Betslip.jsx         # Betting slip/cart
    │   └── BetHistory.jsx      # History of placed bets
    └── data/
        ├── players.js          # Player data and individual odds
        └── teamStats.js        # Team statistics and team bets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd menssanau19-bet

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Features

### Current Implementation

- **Player Betting**: Scommesse su statistiche individuali (punti, assist, rimbalzi)
- **Team Betting**: Scommesse su risultati di squadra
- **Betslip**: Creazione schedine multiple
- **Virtual Balance**: Sistema di soldi virtuali (saldo iniziale: 1000)
- **Bet History**: Storico scommesse piazzate
- **Persistent Storage**: Dati salvati in localStorage

### Data Structure

I dati dei giocatori sono in `src/data/players.js` con:
- Nome, numero, ruolo
- Statistiche medie (PPG, APG, RPG)
- Quote per ogni tipo di scommessa (Over/Under)

I dati della squadra sono in `src/data/teamStats.js` con:
- Info prossima partita
- Statistiche stagionali
- Quote scommesse di squadra

## Development Conventions

### Code Style

- **Framework**: React con hooks (useState, useEffect)
- **Styling**: CSS vanilla con variabili CSS
- **Components**: Functional components
- **State**: Local state + localStorage per persistenza

### File Naming

- Components: `PascalCase.jsx`
- Data files: `camelCase.js`
- Styles: `PascalCase.css` (same name as component)

### Git Workflow

- **Commit Messages**: Imperativo, italiano o inglese
- **Feature Branches**: `feature/nome-feature`
- **Fix Branches**: `fix/nome-bug`

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app logic, state management |
| `src/data/players.js` | Player data and betting odds |
| `src/data/teamStats.js` | Team stats and match info |
| `src/components/Betslip.jsx` | Betting cart logic |
| `src/components/PlayerCard.jsx` | Player betting UI |

## Common Tasks

### Add a new player

Edit `src/data/players.js` and add a new object to the `players` array with:
- id, name, number, role
- stats (avgPoints, avgAssists, avgRebounds)
- bets (points, assists, rebounds arrays with line/odds)

### Modify odds

Edit the `bets` object in `src/data/players.js` or `teamBets` in `src/data/teamStats.js`

### Change team info

Edit `src/data/teamStats.js`:
- `teamInfo`: nome squadra, colori
- `nextMatch`: prossima partita
- `teamStats`: statistiche stagionali

### Change initial balance

Edit `INITIAL_BALANCE` constant in `src/App.jsx`

## AI Assistant Guidelines

### When Working on This Codebase

1. **Read before modifying**: Always read existing code before making changes
2. **Keep Italian text**: UI text is in Italian, maintain consistency
3. **Follow component pattern**: Keep components in `src/components/`
4. **Update data files**: Player/team changes go in `src/data/`
5. **Test build**: Run `npm run build` to verify no errors

### What to Avoid

- Don't change data structure without updating dependent components
- Don't add complex state management (Redux, etc.) unless necessary
- Don't add external UI libraries - keep CSS vanilla
- Don't modify localStorage key without migration strategy

---

*This document should be updated when significant changes are made to the project structure or conventions.*
