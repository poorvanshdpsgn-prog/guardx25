export default function GuardX25Website() {
  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-950 border-r border-cyan-500/20 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-cyan-500/40">
              GX
            </div>

            <div>
              <h1 className="text-2xl font-black">GuardX25</h1>
              <p className="text-zinc-400 text-sm">Smart Bag Control</p>
            </div>
          </div>

          <nav className="space-y-3">
            {[
              "Dashboard",
              "GPS Tracking",
              "Security",
              "Alerts",
              "Settings",
              "Profile",
            ].map((item) => (
              <button
                key={item}
                className="w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-cyan-500 hover:text-black transition duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
          <p className="text-sm text-zinc-400">Connected Device</p>
          <h2 className="text-2xl font-bold mt-2">Poorvansh's Bag</h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400">Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-black via-zinc-950 to-black">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-cyan-500/10 px-10 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black">Dashboard</h1>
            <p className="text-zinc-400 mt-1">Safety is the first priority</p>
          </div>

          <div className="flex items-center gap-5">
            <button className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 transition">
              Notifications
            </button>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="p-10 grid lg:grid-cols-3 gap-8">
          {[
            ["Battery", "92%", "High power remaining"],
            ["GPS Status", "ACTIVE", "Real-time location enabled"],
            ["Security", "LOCKED", "Bag protection active"],
          ].map(([title, value, desc]) => (
            <div
              key={title}
              className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8 hover:border-cyan-500/40 transition duration-300"
            >
              <p className="text-zinc-400">{title}</p>
              <h2 className="text-5xl font-black mt-4 text-cyan-400">{value}</h2>
              <p className="text-zinc-500 mt-4">{desc}</p>
            </div>
          ))}
        </section>

        {/* GPS Tracking */}
        <section className="px-10 pb-10">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
              <div>
                <h2 className="text-3xl font-black">Live GPS Tracking</h2>
                <p className="text-zinc-400 mt-2">
                  Real-time smart bag location monitoring.
                </p>
              </div>

              <button className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition duration-300">
                Open Map
              </button>
            </div>

            <div className="relative z-10 mt-8 h-80 rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 flex items-center justify-center text-zinc-500 text-xl">
              Interactive GPS Map Area
            </div>
          </div>
        </section>

        {/* Controls */}
        <section className="px-10 pb-10 grid lg:grid-cols-2 gap-8">
          {/* Security Controls */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8">
            <h2 className="text-3xl font-black">Security Controls</h2>
            <p className="text-zinc-400 mt-3">
              Control your smart bag remotely.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <button
  onClick={() => alert("Bag Locked Successfully")}
  className="h-28 rounded-3xl bg-black border border-zinc-800 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300 font-bold text-lg"
>
  Lock Bag
</button>

<button
  onClick={() => alert("Bag Unlocked")}
  className="h-28 rounded-3xl bg-black border border-zinc-800 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300 font-bold text-lg"
>
  Unlock Bag
</button>

<button
  onClick={() => alert("Opening GPS Location")}
  className="h-28 rounded-3xl bg-black border border-zinc-800 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300 font-bold text-lg"
>
  Find My Bag
</button>

<button
  onClick={() => alert("Emergency Alarm Activated")}
  className="h-28 rounded-3xl bg-red-500/20 border border-red-500 hover:bg-red-500 hover:text-white transition duration-300 font-bold text-lg"
>
  Activate Alarm
</button>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8">
            <h2 className="text-3xl font-black">Recent Alerts</h2>
            <p className="text-zinc-400 mt-3">
              Latest activity and notifications.
            </p>

            <div className="space-y-5 mt-8">
              {[
                ["Motion detected", "2 mins ago"],
                ["Bag locked remotely", "10 mins ago"],
                ["GPS connected", "25 mins ago"],
                ["Fingerprint verified", "1 hour ago"],
              ].map(([title, time]) => (
                <div
                  key={title}
                  className="flex items-center justify-between bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-sm text-zinc-500">GuardX25 System</p>
                    </div>
                  </div>

                  <span className="text-zinc-500 text-sm">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Settings */}
        <section className="px-10 pb-20">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-8">
            <h2 className="text-3xl font-black">Device Settings</h2>
            <p className="text-zinc-400 mt-3">
              Configure your smart bag preferences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <label className="text-zinc-400">Bag Name</label>
                <input
                  type="text"
                  placeholder="Enter bag name"
                  className="mt-3 w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-zinc-400">Owner Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="mt-3 w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/40">
              Save Changes
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
