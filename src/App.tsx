import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  games,
  playerSearchIndex,
  seasonTrend,
  teamStandings,
  trendComparison,
} from './data/basketballData';

const COLORS = ['#ff6b35', '#f4b942', '#3ddc97', '#57a6ff', '#a78bfa'];

function App() {
  const [search, setSearch] = useState('');

  const filteredPlayers = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return playerSearchIndex;

    return playerSearchIndex.filter(
      (player) =>
        player.name.toLowerCase().includes(term) ||
        player.team.toLowerCase().includes(term) ||
        player.position.toLowerCase().includes(term),
    );
  }, [search]);

  const topPlayers = filteredPlayers.slice(0, 6);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Basketball analytics</p>
          <h1>BaksketPrime</h1>
        </div>
        <div className="top-actions">
          <button className="chip active">Dashboard</button>
          <button className="chip">Players</button>
          <button className="chip">Teams</button>
          <button className="chip">Matchups</button>
        </div>
      </header>

      <main className="dashboard">
        <section className="hero grid-4">
          <StatCard label="Points / game" value="112.8" delta="+4.6%" tint="orange" />
          <StatCard label="Assists / game" value="26.4" delta="+2.3%" tint="gold" />
          <StatCard label="Rebounds / game" value="45.2" delta="+1.8%" tint="green" />
          <StatCard label="FG %" value="48.9%" delta="+1.1%" tint="blue" />
        </section>

        <section className="panel spotlight">
          <div className="section-header">
            <div>
              <p className="eyebrow">Season pulse</p>
              <h2>League trend</h2>
            </div>
            <div className="legend-inline">
              <span><i className="dot orange" /> Points</span>
              <span><i className="dot gold" /> Assists</span>
            </div>
          </div>

          <div className="chart-wrap large">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={seasonTrend}>
                <defs>
                  <linearGradient id="pointsFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#ff6b35" stopOpacity={0.08} />
                  </linearGradient>
                  <linearGradient id="assistsFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#f4b942" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#f4b942" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="month" stroke="#a0aec0" />
                <YAxis stroke="#a0aec0" />
                <Tooltip
                  contentStyle={{
                    background: '#111827',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '12px',
                  }}
                />
                <Area type="monotone" dataKey="points" stroke="#ff6b35" fill="url(#pointsFill)" strokeWidth={3} />
                <Area type="monotone" dataKey="assists" stroke="#f4b942" fill="url(#assistsFill)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="two-col">
          <div className="panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Standings</p>
                <h2>Top teams</h2>
              </div>
            </div>

            <div className="standing-list">
              {teamStandings.map((team, index) => (
                <div className="stand-row" key={team.name}>
                  <div className="team-badge">#{index + 1}</div>
                  <div className="team-meta">
                    <strong>{team.name}</strong>
                    <span>{team.conference}</span>
                  </div>
                  <div className="team-stats">
                    <span>{team.wins}W</span>
                    <span>{team.losses}L</span>
                    <strong>{team.winRate}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="section-header">
              <div>
                <p className="eyebrow">Shooting</p>
                <h2>Efficiency split</h2>
              </div>
            </div>

            <div className="chart-wrap small">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trendComparison} dataKey="value" nameKey="name" innerRadius={45} outerRadius={75} paddingAngle={2}>
                    {trendComparison.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: '#111827',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="legend-kpis">
              {trendComparison.map((item, index) => (
                <div key={item.name} className="kpi-item">
                  <span className="dot" style={{ background: COLORS[index % COLORS.length] }} />
                  {item.name} <strong>{item.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Search</p>
              <h2>Player database</h2>
            </div>
            <div className="search-box">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Chercher un joueur, équipe ou poste..."
              />
            </div>
          </div>

          <div className="player-grid">
            {topPlayers.map((player) => (
              <div className="player-card" key={player.name}>
                <div className="player-head">
                  <div>
                    <p className="eyebrow muted">{player.position}</p>
                    <h3>{player.name}</h3>
                  </div>
                  <span className="pill">{player.team}</span>
                </div>

                <div className="player-stats">
                  <div>
                    <span>PPG</span>
                    <strong>{player.ppg}</strong>
                  </div>
                  <div>
                    <span>RPG</span>
                    <strong>{player.rpg}</strong>
                  </div>
                  <div>
                    <span>APG</span>
                    <strong>{player.apg}</strong>
                  </div>
                  <div>
                    <span>FG%</span>
                    <strong>{player.fg}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-header">
            <div>
              <p className="eyebrow">Recent results</p>
              <h2>Match center</h2>
            </div>
          </div>

          <div className="chart-wrap medium">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={games}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="shortName" stroke="#a0aec0" />
                <YAxis stroke="#a0aec0" />
                <Tooltip
                  contentStyle={{
                    background: '#111827',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '12px',
                  }}
                />
                <Bar dataKey="homeScore" fill="#ff6b35" radius={[6, 6, 0, 0]} />
                <Bar dataKey="awayScore" fill="#f4b942" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ label, value, delta, tint }: { label: string; value: string; delta: string; tint: 'orange' | 'gold' | 'green' | 'blue'; }) {
  const colorClass = `stat-card ${tint}`;

  return (
    <article className={colorClass}>
      <p>{label}</p>
      <h3>{value}</h3>
      <span>{delta}</span>
    </article>
  );
}

export default App;
