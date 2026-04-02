// Simple State Management
const State = {
    data: {
        cashBalance: 5.93,
        bonusBalance: 0.93,
        vipLevel: 0,
        transactions: []
    },
    
    listeners: [],
    
    // Subscribe to state changes
    subscribe(listener) {
        this.listeners.push(listener);
    },
    
    // Notify all listeners
    notify() {
        this.listeners.forEach(listener => listener(this.data));
    },
    
    // Deposit money
    deposit(amount) {
        if (amount > 0) {
            this.data.cashBalance += amount;
            this.data.transactions.push({ type: 'Deposit', amount, date: new Date() });
            this.notify();
            return true;
        }
        return false;
    },
    
    // Play a game (deduct money)
    playGame(cost, gameName) {
        if (this.data.cashBalance >= cost) {
            this.data.cashBalance -= cost;
            this.data.transactions.push({ type: 'Play', gameName, amount: -cost, date: new Date() });
            this.notify();
            return true;
        }
        return false;
    },

    // Format currency helper
    formatMoney(val) {
        return '$' + parseFloat(val).toFixed(2);
    }
};

window.AppState = State;
