export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-[family-name:var(--font-geist-sans)] text-lg font-bold tracking-tight">
              SMC Ultimate <span className="text-yellow-400">v6</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#modules" className="transition hover:text-white">
              Modules
            </a>
            <a href="#dashboard" className="transition hover:text-white">
              Dashboard
            </a>
            <a href="#get-started" className="transition hover:text-white">
              Get Started
            </a>
          </div>
          <a
            href="#get-started"
            className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Get Indicator
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 text-sm text-yellow-400">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            Pine Script v6 — TradingView Indicator
          </div>

          <h1 className="font-[family-name:var(--font-geist-sans)] text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            SMC Ultimate
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Trading Toolkit
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Professional Smart Money Concepts indicator with{" "}
            <span className="text-white">14+ modules</span> — from BOS/CHoCH
            structure to confluence detection. Everything you need to trade like
            institutional players.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              ⚡ Get the Indicator
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Explore Modules →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "14+", label: "Modules" },
              { value: "970", label: "Lines of Code" },
              { value: "v6", label: "Pine Script" },
              { value: "∞", label: "Customizable" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-geist-mono)] text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold md:text-5xl">
              Trade with{" "}
              <span className="text-yellow-400">Smart Money</span> precision
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Every module is designed to help you identify institutional order
              flow, key levels, and high-probability trade setups.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📊",
                title: "Structure Detection",
                description:
                  "Automatic BOS and CHoCH detection with customizable colors and label sizes. Know exactly when market structure shifts.",
                color: "from-green-500/10 to-green-500/0",
                border: "border-green-500/10",
              },
              {
                icon: "🧱",
                title: "Order Blocks & S/D Zones",
                description:
                  "Identify institutional order blocks and supply/demand zones with mitigation tracking and touch count display.",
                color: "from-blue-500/10 to-blue-500/0",
                border: "border-blue-500/10",
              },
              {
                icon: "⚡",
                title: "Confluence Detection",
                description:
                  "Automatically scores zones where multiple factors align — OB, FVG, liquidity, OTE, and premium/discount zones.",
                color: "from-yellow-500/10 to-yellow-500/0",
                border: "border-yellow-500/10",
              },
              {
                icon: "💧",
                title: "Liquidity Mapping",
                description:
                  "Track liquidity pools above swing highs and below swing lows. Get alerted when liquidity sweeps trigger reversals.",
                color: "from-amber-500/10 to-amber-500/0",
                border: "border-amber-500/10",
              },
              {
                icon: "📐",
                title: "Fair Value Gaps",
                description:
                  "Detect and display bullish and bearish FVGs with ATR-based filtering. Track which gaps have been filled.",
                color: "from-purple-500/10 to-purple-500/0",
                border: "border-purple-500/10",
              },
              {
                icon: "🎯",
                title: "Optimal Trade Entry",
                description:
                  "Fibonacci-based OTE zones (0.62–0.79) automatically calculated based on current trend direction.",
                color: "from-cyan-500/10 to-cyan-500/0",
                border: "border-cyan-500/10",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border ${feature.border} bg-gradient-to-b ${feature.color} p-6 transition hover:border-white/10`}
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Modules */}
      <section id="modules" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold md:text-5xl">
              All <span className="text-yellow-400">14 Modules</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Each module can be toggled on/off independently. Fully
              customizable colors, sizes, and parameters.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Structure (BOS/CHoCH)",
                desc: "Break of Structure & Change of Character",
                tag: "Core",
                tagColor: "bg-green-500/10 text-green-400",
              },
              {
                name: "Order Blocks",
                desc: "Institutional order block detection with mitigation",
                tag: "Core",
                tagColor: "bg-green-500/10 text-green-400",
              },
              {
                name: "Supply/Demand Zones",
                desc: "Fresh & tested zones with impulse detection",
                tag: "Core",
                tagColor: "bg-green-500/10 text-green-400",
              },
              {
                name: "Fair Value Gaps (FVG)",
                desc: "Bullish & bearish gaps with ATR filtering",
                tag: "Core",
                tagColor: "bg-green-500/10 text-green-400",
              },
              {
                name: "Liquidity Levels",
                desc: "Swing high/low liquidity pool tracking",
                tag: "Liquidity",
                tagColor: "bg-amber-500/10 text-amber-400",
              },
              {
                name: "Liquidity Sweep → Reversal",
                desc: "Sweep detection with reversal signals",
                tag: "Liquidity",
                tagColor: "bg-amber-500/10 text-amber-400",
              },
              {
                name: "Diagonal Trend Lines",
                desc: "Auto trendlines with break signals",
                tag: "Trend",
                tagColor: "bg-blue-500/10 text-blue-400",
              },
              {
                name: "Confluence Detection",
                desc: "Multi-factor zone scoring system",
                tag: "Advanced",
                tagColor: "bg-yellow-500/10 text-yellow-400",
              },
              {
                name: "Premium/Discount Zones",
                desc: "Fibonacci-based market positioning",
                tag: "Zones",
                tagColor: "bg-purple-500/10 text-purple-400",
              },
              {
                name: "Market Phase Detector",
                desc: "Accumulation, Distribution, Manipulation, Trending",
                tag: "Advanced",
                tagColor: "bg-yellow-500/10 text-yellow-400",
              },
              {
                name: "Volume Climax/Exhaustion",
                desc: "Volume spikes, exhaustion, and divergence",
                tag: "Volume",
                tagColor: "bg-pink-500/10 text-pink-400",
              },
              {
                name: "OTE (Optimal Trade Entry)",
                desc: "0.62–0.79 Fibonacci retracement zone",
                tag: "Entry",
                tagColor: "bg-cyan-500/10 text-cyan-400",
              },
              {
                name: "Mitigation Levels",
                desc: "Track unmitigated structural levels",
                tag: "Advanced",
                tagColor: "bg-yellow-500/10 text-yellow-400",
              },
              {
                name: "Alert Signals",
                desc: "BOS, CHoCH, Sweep, Volume, Confluence alerts",
                tag: "Alerts",
                tagColor: "bg-red-500/10 text-red-400",
              },
            ].map((mod) => (
              <div
                key={mod.name}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-sm text-yellow-400">
                  ✓
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{mod.name}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${mod.tagColor}`}
                    >
                      {mod.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold md:text-5xl">
              Built-in <span className="text-yellow-400">Dashboard</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Real-time overview of all active zones, confluence score, market
              phase, and volume status — right on your chart.
            </p>
          </div>

          {/* Mock Dashboard */}
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e]/90 font-[family-name:var(--font-geist-mono)] text-sm shadow-2xl">
            <div className="border-b border-white/10 px-5 py-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-yellow-400">SMC TOOLKIT</span>
                <span className="text-xs text-neutral-500">v6.0</span>
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {[
                {
                  label: "Order Blocks",
                  value: "5 active",
                  color: "text-green-400",
                },
                {
                  label: "S/D Zones",
                  value: "3 active",
                  color: "text-green-400",
                },
                {
                  label: "FVGs",
                  value: "7 open",
                  color: "text-blue-400",
                },
                {
                  label: "Liquidity",
                  value: "12 levels",
                  color: "text-yellow-400",
                },
                {
                  label: "Confluence",
                  value: "STRONG (5)",
                  color: "text-yellow-400",
                },
                {
                  label: "ATR(14)",
                  value: "0.00342",
                  color: "text-neutral-400",
                },
                {
                  label: "Volume",
                  value: "ABOVE AVG",
                  color: "text-green-400",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-2.5"
                >
                  <span className="text-neutral-300">{row.label}</span>
                  <span className={`font-medium ${row.color}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Phase Table */}
          <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e]/90 font-[family-name:var(--font-geist-mono)] text-sm shadow-2xl">
            <div className="border-b border-white/10 px-5 py-3">
              <span className="font-bold text-white">MARKET PHASE</span>
            </div>
            <div className="divide-y divide-white/5">
              {[
                {
                  label: "Phase",
                  value: "Trending ▲",
                  color: "text-green-400",
                },
                {
                  label: "Trend",
                  value: "BULLISH",
                  color: "text-green-400",
                },
                {
                  label: "Zone",
                  value: "DISCOUNT",
                  color: "text-green-400",
                },
                {
                  label: "Volatility",
                  value: "NORMAL",
                  color: "text-neutral-400",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-2.5"
                >
                  <span className="text-neutral-300">{row.label}</span>
                  <span className={`font-medium ${row.color}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold md:text-5xl">
              Extra <span className="text-yellow-400">Features</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Toggle additional overlays for even more context on your charts.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              {
                icon: "📈",
                title: "Previous Day High/Low",
                desc: "Key daily reference levels",
              },
              {
                icon: "🕐",
                title: "Killzone Highlights",
                desc: "Session-based time zones",
              },
              {
                icon: "📏",
                title: "ATR Projection Levels",
                desc: "±1 ATR from current price",
              },
              {
                icon: "🌊",
                title: "EMA Ribbon (9/21/50)",
                desc: "Trend direction overlay",
              },
            ].map((extra) => (
              <div
                key={extra.title}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <span className="text-2xl">{extra.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold">{extra.title}</h3>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {extra.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-b from-yellow-400/5 to-transparent p-12 md:p-16">
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-bold md:text-5xl">
              Ready to trade with
              <br />
              <span className="text-yellow-400">Smart Money?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-neutral-400">
              Add the SMC Ultimate Trading Toolkit v6 to your TradingView charts
              and start identifying institutional setups today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.tradingview.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3.5 text-base font-semibold text-black transition hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                ⚡ Open in TradingView
              </a>
            </div>
            <p className="mt-6 text-xs text-neutral-600">
              Pine Script v6 • 970 lines • Open source (MPL 2.0)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="text-lg">⚡</span>
            SMC Ultimate Trading Toolkit v6
          </div>
          <div className="text-xs text-neutral-600">
            Built with Pine Script v6 for TradingView • Mozilla Public License
            2.0
          </div>
        </div>
      </footer>
    </main>
  );
}
