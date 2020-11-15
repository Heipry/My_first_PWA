/**
 * Monstruo al que tenemos que destruir
 */
class Opponent extends Character {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        
            const height = (OPPONENT_HEIGHT * game.width) / 100,
              width = (OPPONENT_WIDTH * game.width) / 100,
              x = getRandomNumber(game.width - width / 2),
              y = 0,
              speed = OPPONENT_SPEED,
              myImage = OPPONENT_PICTURE,
              myImageDead = OPPONENT_PICTURE_DEAD;
            
       
        

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }

    
    /**
     * Mata al oponente
     */
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            this.game.score++;
            super.collide();
        }

    }
}