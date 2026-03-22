//../script/obstacles/asteroidSpawner.js
import asteroid from "./asteroid.js";

export default class asteroidSpawner {
  
  constructor(scene) {
    this.scene = scene;
    
    this.asteroidTypes = [
      'asteroidSmall1',
      'asteroidSmall2',
      'asteroidMedium1',
      'asteroidMedium2',
      'asteroidLarge1',
      'asteroidLarge2'
    ];
    
    this.maxAsteroidsInGame = 8;
    this.spawnRate = 1000; // 1 detik
    this.lastSpawn = 0;
    this.difficultyLevel = 1;
    this.maxAsteroidsPerSpawn = 1;
    this.speedMultiplier = 1;
    
    this.asteroidGroup = scene.physics.add.group({
      classType: asteroid,
      runChildUpdate: true
    });
    
    this.spawnPadding = 120; // jarak minimal antar asteroid
    
    this.spawnLanes = [this.scene.gameW - 100, this.scene.gameW - 200, this.scene.gameW - 300, this.scene.gameW - 400, this.scene.gameW - 500, this.scene.gameW - 600];
    this.laneOffset = 40;
    
  } //constructor(scene)
  
  
  getSafeX() {
    
    let tries = 10;
    
    while (tries > 0) {
      
      let lane;
      
      do {
        lane = Phaser.Utils.Array.GetRandom(this.spawnLanes);
      } while (lane === this.lastLane);
      
      this.lastLane = lane;
      
      const offset = Phaser.Math.Between(-this.laneOffset, this.laneOffset);
      
      const x = Phaser.Math.Clamp(
        lane + offset,
        50,
        this.scene.scale.width - 50
      );
      
      let safe = true;
      
      this.asteroidGroup.children.iterate((asteroid) => {
        
        if (!asteroid.active) return;
        
        const dist = Phaser.Math.Distance.Between(
          asteroid.x,
          asteroid.y,
          x,
          0
        );
        
        if (dist < this.spawnPadding) {
          safe = false;
        }
        
      });
      
      if (safe) return x;
      
      tries--;
      
    }
    
    return Phaser.Utils.Array.GetRandom(this.spawnLanes);
    
  }
  
  
  
  
  spawnasteroid() {
    if (this.asteroidGroup.countActive(true) >= this.maxAsteroidsInGame) return;
    for (let i = 0; i < this.maxAsteroidsPerSpawn; i++) {
      
      const x = this.getSafeX();
      const y = -100;
      
      const randomKey = Phaser.Utils.Array.GetRandom(this.asteroidTypes);
      
      const asteroid = this.asteroidGroup.get(x, y);
      
      if (asteroid) {
        asteroid.spawn(x, y, randomKey);
        
        // tambah kecepatan berdasarkan difficulty
        asteroid.speed *= this.speedMultiplier;
        asteroid.setVelocityY(asteroid.speed);
      }
      
    }
    
  }
  
  
  
  
  update(time) {
    
    if (time - this.lastSpawn < this.spawnRate) return;
    
    // batasi jumlah asteroid di layar
    let activeasteroids = this.asteroidGroup.countActive(true);
    
    if (activeasteroids >= this.maxAsteroidsInGame) return;
    
    this.lastSpawn = time;
    this.spawnasteroid();
    
  }
  
}