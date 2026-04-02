document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM Elements ----
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const headerBalance = document.getElementById('header-balance');
    const profileCashVal = document.getElementById('profile-cash-val');
    const profileBonusVal = document.getElementById('profile-bonus-val');
    
    // Buttons
    const headerAvatar = document.getElementById('header-avatar');
    const depositNavBtn = document.getElementById('nav-deposit');
    const profileDepositBtn = document.getElementById('profile-deposit-btn');
    const profileWithdrawBtn = document.getElementById('profile-withdraw-btn');
    const headerDepositBtn = document.getElementById('header-deposit-btn');
    
    // Floating Menu
    const floatMenu = document.getElementById('floating-menu');
    const floatHandle = document.getElementById('floating-handle');

    // Containers
    const winCarousel = document.getElementById('win-carousel');
    const gameCategoriesContainer = document.getElementById('game-categories');
    const toastContainer = document.getElementById('toast-container');

    // ---- Dummy Data ----
    const gameNames = ['Neon 777', 'Pirate Queen', 'Bass Bonanza', 'Pharaohs Gold', 'Fruit Party', 'Sweet Bonanza'];
    const gameImageBase = 'https://picsum.photos/seed/';
    
    const categories = [
        { name: 'Hot', type: 'All' },
        { name: 'PP-Slot', type: 'All' },
        { name: 'PG-Slot', type: 'All' },
        { name: 'WG-Slot', type: 'All' }
    ];

    const recentWins = Array.from({length: 10}).map((_, i) => ({
        user: `U1***${Math.floor(Math.random()*9)}`,
        amount: (Math.random() * 50 + 1).toFixed(2),
        img: `${gameImageBase}win${i}/80`
    }));

    // ---- Initialize State ----
    // Subscribe to state changes to update the UI globally
    window.AppState.subscribe((state) => {
        headerBalance.textContent = window.AppState.formatMoney(state.cashBalance);
        profileCashVal.textContent = window.AppState.formatMoney(state.cashBalance);
        profileBonusVal.textContent = state.bonusBalance.toFixed(2);
        
        // Bounce animation on balance change
        headerBalance.style.transform = 'scale(1.2)';
        headerBalance.style.color = 'var(--neon-green)';
        setTimeout(() => {
            headerBalance.style.transform = 'scale(1)';
            headerBalance.style.color = 'inherit';
        }, 300);
    });

    // Manually trigger first update
    window.AppState.notify();

    // ---- Render Functions ----
    function renderRecentWins() {
        winCarousel.innerHTML = recentWins.map(w => `
            <div class="win-card">
                <img src="${w.img}" alt="Game">
                <div class="win-user"><span class="v-icon">V</span> ${w.user}</div>
                <div class="win-amount">+${w.amount}</div>
            </div>
        `).join('');
    }

    function renderGames() {
        gameCategoriesContainer.innerHTML = categories.map((cat, idx) => `
            <div class="category-section">
                <div class="category-header">
                    <div class="left">
                        <span class="dot green"></span>
                        ${cat.name}
                    </div>
                    <div class="view-all">${cat.type} <span>›</span></div>
                </div>
                <div class="game-grid">
                    ${Array.from({length: 6}).map((_, g) => `
                        <div class="game-card" data-cost="0.50" data-name="${gameNames[g % gameNames.length]}">
                            <img src="${gameImageBase}cat${idx}game${g}/150/200" alt="Game">
                            <div class="game-badge">PP</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Attach Game Play events
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const cost = parseFloat(card.dataset.cost);
                const name = card.dataset.name;
                
                if (window.AppState.playGame(cost, name)) {
                    showToast(`Played ${name} for $${cost.toFixed(2)}`);
                } else {
                    showToast('Insufficient Balance!', true);
                }
            });
        });
    }

    // ---- Navigation Logic ----
    function switchView(viewId) {
        views.forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        
        navItems.forEach(n => n.classList.remove('active'));
        if (viewId === 'home-view') navItems[1].classList.add('active'); // Explore
        if (viewId === 'profile-view') navItems[0].classList.add('active'); // Menu
    }

    headerAvatar.addEventListener('click', () => switchView('profile-view'));
    
    navItems[1].addEventListener('click', () => switchView('home-view')); // Explore
    navItems[0].addEventListener('click', () => switchView('profile-view')); // Menu

    // ---- Interactions ----
    
    function handleDeposit() {
        window.AppState.deposit(5.00);
        showToast('Deposited $5.00');
    }

    depositNavBtn.addEventListener('click', handleDeposit);
    profileDepositBtn.addEventListener('click', handleDeposit);
    headerDepositBtn.addEventListener('click', handleDeposit);
    
    profileWithdrawBtn.addEventListener('click', () => {
        showToast('Withdrawal feature coming soon...', true);
    });

    // Floating Menu Toggle
    floatHandle.addEventListener('click', () => {
        floatMenu.classList.toggle('open');
        floatHandle.classList.toggle('open');
    });

    // Utility: Toast Notifications
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'text-danger' : ''}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentNode) {
                toastContainer.removeChild(toast);
            }
        }, 2500);
    }

    // Initial render
    renderRecentWins();
    renderGames();
});
