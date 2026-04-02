import Image from "next/image";

export default function Home() {
  return (
    <div id="app-container" className="flex flex-col h-[100dvh] relative max-w-[600px] mx-auto bg-[#101115] shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* HEADER */}
      <header id="top-header" className="h-[60px] flex items-center justify-between px-4 bg-[#1e2025] z-[100]">
        <div className="logo flex items-center gap-2">
          <span className="logo-icon inline-flex justify-center items-center w-6 h-6 bg-[#4ade80] text-[#101115] font-extrabold rounded text-sm -skew-x-12">
            G
          </span>
          <span className="logo-text text-base font-bold tracking-wide">TOGOO.CC</span>
        </div>
        <div className="balance-container flex items-center bg-white/5 rounded-full p-1 pl-3">
          <span className="balance-text font-semibold mr-2 text-sm">$5.93</span>
          <button className="add-btn bg-[#4ade80] text-[#101115] w-6 h-6 rounded-full font-bold text-base flex items-center justify-center">
            +
          </button>
        </div>
        <div className="actions flex items-center gap-3">
          <button className="icon-btn bg-transparent text-[#9ca3af] flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 24c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v2.68C7.64 7.36 6 9.92 6 13v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
          </button>
          <div className="user-avatar relative w-8 h-8 rounded-full cursor-pointer">
            <img src="https://ui-avatars.com/api/?name=U+12&background=random" alt="User" className="w-full h-full rounded-full object-cover" />
            <div className="vip-badge absolute -top-1.5 -right-2.5 bg-[#4a4d55] text-[9px] px-1 py-0.5 rounded font-bold">
              VIP 0
            </div>
          </div>
        </div>
      </header>

      {/* VIEW CONTAINER */}
      <main id="view-container" className="flex-1 overflow-y-auto overflow-x-hidden pb-5">
        <div id="home-view" className="view block animate-[fadeIn_0.3s_ease]">
          <div className="hero-banner m-4 h-[140px] bg-gradient-to-br from-[#1e003b] to-[#6800a7] rounded-xl relative overflow-hidden flex flex-col justify-center p-6">
            <div className="hero-content relative z-10">
              <h2 className="text-xl mb-1 drop-shadow-md">7 Days Gifts</h2>
              <p className="text-[#4ade80] text-sm font-medium">Sign in daily to unlock all rewards!</p>
            </div>
            {/* The pseudo element 'G' is modeled with absolute diving here temporarily but best handled in CSS */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 rotate-12 text-[100px] font-extrabold text-[#ffd700]/80 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] select-none">
              G
            </div>
          </div>

          <div className="recent-wins mt-6">
            <div className="section-header flex items-center px-4 mb-3">
              <span className="dot bg-[#4ade80] shadow-[0_0_8px_#4ade80] w-2 h-2 rounded-full mr-2"></span>
              <h3 className="text-[15px] font-medium text-[#9ca3af]">Recent Big Wins</h3>
            </div>
            <div className="win-carousel flex overflow-x-auto px-4 gap-3 snap-x scrollbar-hide">
              {/* Dummy Data */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="win-card min-w-[80px] text-center snap-start">
                  <img src={`https://ui-avatars.com/api/?name=W+${i}&background=random`} alt="win" className="w-20 h-20 rounded-lg object-cover bg-[#272930] mb-1" />
                  <div className="win-user text-[11px] text-[#9ca3af] flex items-center justify-center gap-1">
                    <span className="v-icon text-[#4ade80] font-bold">V{i}</span> User{i}
                  </div>
                  <div className="win-amount text-[13px] text-[#4ade80] font-semibold">$50.00</div>
                </div>
              ))}
            </div>
          </div>

          <div className="search-bar-container p-4">
            <div className="search-input bg-[#272930] rounded-lg flex items-center p-2.5 px-4 gap-2.5">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#9ca3af">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="search games" className="bg-transparent border-none text-white text-sm w-full outline-none placeholder-[#9ca3af]" />
            </div>
          </div>

          <div id="game-categories" className="category-section mb-6">
            <div className="category-header flex justify-between items-center px-4 mb-3">
              <div className="left flex items-center gap-2 text-[15px] font-medium">🔥 Hot Games</div>
              <div className="view-all text-xs text-[#9ca3af] bg-[#272930] px-2.5 py-1 rounded-xl">View All</div>
            </div>
            <div className="game-grid flex overflow-x-auto px-4 gap-3 snap-x scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="game-card min-w-[120px] h-[160px] rounded-lg bg-[#272930] relative overflow-hidden snap-start cursor-pointer transition-transform active:scale-95">
                   <img src={`https://ui-avatars.com/api/?name=G+${i}&background=random`} alt="game" className="w-full h-full object-cover" />
                   <div className="game-badge absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] px-1.5 py-0.5 rounded">Popular</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM NAV */}
      <nav id="bottom-nav" className="h-[70px] bg-[#1e2025] flex justify-around items-center sticky bottom-0 z-[100] pb-[env(safe-area-inset-bottom)]">
        <div className="nav-item flex flex-col items-center justify-center text-[#9ca3af] text-[11px] gap-1 cursor-pointer">
          <div className="icon-wrap w-6 h-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
          </div>
          <span>Menu</span>
        </div>
        <div className="nav-item active flex flex-col items-center justify-center text-[#4ade80] text-[11px] gap-1 cursor-pointer">
          <div className="icon-wrap w-6 h-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
          </div>
          <span>Explore</span>
        </div>
        <div className="nav-item large-icon flex flex-col items-center justify-center text-[#9ca3af] text-[11px] gap-1 cursor-pointer">
          <div className="icon-wrap green-circle bg-[#4ade80] rounded-full w-12 h-12 flex justify-center items-center -mt-6 border-4 border-[#1e2025]">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#101115"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-2V9h2zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /></svg>
          </div>
          <span className="mt-1">Deposit</span>
        </div>
        <div className="nav-item flex flex-col items-center justify-center text-[#9ca3af] text-[11px] gap-1 cursor-pointer">
          <div className="icon-wrap w-6 h-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" /></svg>
          </div>
          <span>Gift</span>
        </div>
      </nav>
    </div>
  );
}
