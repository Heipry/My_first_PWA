/**
 *  Cada uno de los personajes del juego, es decir, aquellos elementos que tienen “vida”.
 *  @extends Entity
 */
class Character extends Entity {
  /**
   * Inicializa un personaje
   * @param game {Game} La instancia del juego al que pertenece el personaje
   * @param width {Number} Ancho del personaje
   * @param height {Number} Alto del personaje
   * @param x {Number} Posición horizontal del personaje
   * @param y {Number} Posición vertical del personaje
   * @param speed {Number} Velocidad del personaje
   * @param myImage {String} Ruta de la imagen del personaje
   * @param myImageDead {String} Ruta de la imagen del personaje cuando muere
   */
  constructor(game, width, height, x, y, speed, myImage, myImageDead) {
    super(game, width, height, x, y, speed, myImage);
    this.dead = false; // Indice si el personaje está vivo o muerto
    this.myImageDead = myImageDead;
  }
  /**
   * Crea un nuevo disparo
   */
  shoot() {
    if (!this.dead && !this.game.ended) {
      if (!this.game.paused) {
        this.game.shoot(this);
      }
      setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }
  }

  /**
   * Actualiza los atributos de posición del oponente
   */
  update() {
    if (!this.dead && !this.game.ended) {
      this.y += this.speed;
      if (this.y > this.game.height) {
        this.y = 0;
      }
      if (this.direction === "R") {
        // Hacia la derecha
        if (this.x < this.game.width - this.width - this.speed) {
          this.x += this.speed;
        } else {
          this.horizontalMov = 0;
        }
      } else if (this.x > this.speed) {
        this.x -= this.speed;
      } else {
        this.horizontalMov = 0;
      }
      this.horizontalMov -= this.speed;
      if (this.horizontalMov < this.speed) {
        this.horizontalMov = getRandomNumber(this.game.width / 2);
        this.direction = this.direction === "R" ? "L" : "R"; // Cambia de sentido
      }
    }
  }

  /**
   * Mata a un personaje
   */
  collide() {
    this.image.src = this.myImageDead;
    this.dead = true;
  }
}

