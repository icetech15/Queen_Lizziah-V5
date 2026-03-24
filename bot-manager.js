// bot-manager.js

class BotManager {
    constructor() {
        this.bots = {};
    }

    createBot(id) {
        if (this.bots[id]) {
            console.log(`Bot with id: ${id} already exists.`);
            return;
        }
        this.bots[id] = { status: 'stopped', pairedWith: null };
        console.log(`Bot with id: ${id} created.`);
    }

    startBot(id) {
        if (!this.bots[id]) {
            console.log(`Bot with id: ${id} does not exist.`);
            return;
        }
        this.bots[id].status = 'running';
        console.log(`Bot with id: ${id} started.`);
    }

    stopBot(id) {
        if (!this.bots[id]) {
            console.log(`Bot with id: ${id} does not exist.`);
            return;
        }
        this.bots[id].status = 'stopped';
        console.log(`Bot with id: ${id} stopped.`);
    }

    pairBots(id1, id2) {
        if (!this.bots[id1] || !this.bots[id2]) {
            console.log(`One or both bots do not exist.`);
            return;
        }
        this.bots[id1].pairedWith = id2;
        this.bots[id2].pairedWith = id1;
        console.log(`Bots ${id1} and ${id2} are now paired.`);
    }

    trackStatus(id) {
        if (!this.bots[id]) {
            console.log(`Bot with id: ${id} does not exist.`);
            return;
        }
        console.log(`Bot ${id} status: ${this.bots[id].status}, paired with: ${this.bots[id].pairedWith}`);
    }
}

// Example Usage:
const manager = new BotManager();
manager.createBot('bot1');
manager.createBot('bot2');
manager.startBot('bot1');
manager.pairBots('bot1', 'bot2');
manager.trackStatus('bot1');
manager.trackStatus('bot2');