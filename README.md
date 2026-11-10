:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #edf2ff;
  background: #0b1220;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(255, 107, 53, 0.15), transparent 35%),
    radial-gradient(circle at right, rgba(90, 150, 255, 0.15), transparent 30%),
    #0b1220;
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 64px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  color: #8ba1c2;
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.top-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  background: rgba(148, 163, 184, 0.08);
  color: #dfe8ff;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
}

.chip.active {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.18), rgba(244, 185, 66, 0.15));
  border-color: rgba(255, 111, 74, 0.4);
}

.dashboard {
  display: grid;
  gap: 24px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  border-radius: 18px;
  padding: 20px 18px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 23, 42, 0.9);
}

.stat-card.orange { box-shadow: inset 0 0 0 1px rgba(255, 107, 53, 0.25); }
.stat-card.gold { box-shadow: inset 0 0 0 1px rgba(244, 185, 66, 0.25); }
.stat-card.green { box-shadow: inset 0 0 0 1px rgba(61, 220, 151, 0.25); }
.stat-card.blue { box-shadow: inset 0 0 0 1px rgba(87, 166, 255, 0.25); }

.stat-card p {
  color: #9aaec5;
  font-size: 0.85rem;
}

.stat-card h3 {
  margin-top: 12px;
  font-size: clamp(1.7rem, 2vw, 2.25rem);
}

.stat-card span {
  display: inline-block;
  margin-top: 10px;
  color: #7ae0a8;
  font-size: 0.8rem;
}

.panel {
  background: rgba(15, 23, 42, 0.86);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 8px 30px rgba(2, 6, 23, 0.25);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.legend-inline {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #bfcbdd;
  font-size: 0.82rem;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 8px;
  border-radius: 50%;
}

.dot.orange { background: #ff6b35; }
.dot.gold { background: #f4b942; }

.chart-wrap {
  height: 240px;
}

.chart-wrap.large { height: 300px; }
.chart-wrap.medium { height: 280px; }
.chart-wrap.small { height: 220px; }

.two-col {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
}

.standing-list {
  display: grid;
  gap: 14px;
}

.stand-row {
  display: grid;
  grid-template-columns: 44px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.08);
}

.team-badge {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(244, 185, 66, 0.2));
  color: #ffd6bc;
  font-weight: 700;
}

.team-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.team-meta span {
  color: #8fa4c7;
  font-size: 0.8rem;
}

.team-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #dfe9ff;
}

.legend-kpis {
  display: grid;
  gap: 8px;
  margin-top: 8px;
}

.kpi-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #dfe9ff;
}

.search-box {
  min-width: 280px;
}

.search-box input {
  width: 100%;
  background: rgba(15, 23, 42, 0.8);
  color: #edf2ff;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 12px;
  padding: 12px 14px;
}

.player-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.player-card {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  padding: 18px;
}

.player-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.player-head h3 {
  font-size: 1.05rem;
}

.pill {
  background: rgba(87, 166, 255, 0.14);
  color: #cfe0ff;
  border: 1px solid rgba(87, 166, 255, 0.16);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.75rem;
}

.player-stats {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.player-stats div {
  background: rgba(148, 163, 184, 0.04);
  padding: 12px;
  border-radius: 12px;
}

.player-stats span {
  display: block;
  color: #8fa4c7;
  font-size: 0.8rem;
}

.player-stats strong {
  display: block;
  margin-top: 8px;
  font-size: 1.1rem;
}

.muted {
  color: #8fa4c7 !important;
}

@media (max-width: 960px) {
  .grid-4,
  .two-col,
  .player-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .topbar,
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .grid-4,
  .two-col,
  .player-grid {
    grid-template-columns: 1fr;
  }

  .search-box {
    min-width: 100%;
  }
}
