class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-container')
        this.gameEndScreen = document.getElementById('game-end');
        this.player = null; 
        this.height = 600; 
        this.width = 800; 
        this.obstacles = [];
        this.score = 0;
        this.lives = 1;
        this.gameOver = false; 
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'flex';

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameOver) {
            return; 
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        console.log('Game Update');
    }

    endGame(){
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        this.gameOver = true;
        this.gameScreen.style.display = 'none';
        this.gameEndScreen.style.display = 'block';
    }

}