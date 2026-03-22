//../script/obstacles/asteroid.js
export default class asteroid extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene, x, y) {
    super(scene, x, y, 'asteroidSmall1');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.tag = "enemy";
    scene.allObjects.add(this);
    // collider proporsional dan akurat
    scene.Collider.setCollBulat(this, 0.18);
    
    this.setScale(0.6);
    this.rotationSpeed = 0.8;
    this.health = 4;
  }
  
  //spawn asteroid setPosition,setActive,setVisible,setVelocity
  spawn(x, y, textureKey) {
    
    this.body.stop();
    this.setTexture(textureKey);
    
    // set health berdasarkan jenis asteroid
    if (textureKey === "asteroidSmall1" || textureKey === "asteroidSmall2") {
      this.health = 2;
    }
    
    if (textureKey === "asteroidMedium1" || textureKey === "asteroidMedium2") {
      this.health = 4;
    }
    
    if (textureKey === "asteroidLarge1" || textureKey === "asteroidLarge2") {
      this.health = 6;
    }
    
    this.setPosition(x, y);
    this.setActive(true);
    this.setVisible(true);
    
    this.play(`anim_${textureKey}`, true);
    
    this.speed = Phaser.Math.Between(120, 300);
    this.rotationSpeed = Phaser.Math.FloatBetween(-0.02, 0.02);
    
    this.setVelocity(0, this.speed);
    
  }
  
  //takeDamage asteroid this.health <= 0 setVisible
  takeDamage(amount) {
    
    this.health -= amount;
    
    if (this.health <= 0) {
      
      this.scene.sound.play("sfxAsteroidExplosion", {
        volume: this.scene.SFXvolume,
        rate: this.scene.SystemRate
      });
      
      // buat explosionPool explosion baru
      this.scene.explosionPool.play(this.x, this.y);
      
      
        this.scene.itemPool.spawn(this.x, this.y);

      
      // tambah score
      this.scene.addScore(10);
      // matikan asteroid
      this.setActive(false);
      this.setVisible(false);
      this.body.stop();
      
    }
    
  }
  
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    
    this.rotation += this.rotationSpeed;
    
    if (this.y > this.scene.scale.height + 100) {
      this.setActive(false);
      this.setVisible(false);
      this.body.stop();
    }
  }
  
}