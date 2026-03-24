// ./script/player/weapons/weaponBase.js

export default class WeaponSystem extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, shipBox, x, y, textureKey) {
    super(scene, shipBox, x, y, textureKey);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this._spawnTime = 0;
    
    this.setActive(false);
    this.setVisible(false);
  }
  
  //projectile
  fire(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    
    // jangan set velocity di sini lagi kalau pakai vector
    // this.setVelocityY(-speedY);
    
    this._spawnTime = this.scene.time.now;
  }
  
  //beam system
  applyContinuousDamage(target, time) {
    if (!this.isContinuous) return;
    
    if (time - this.lastDamageTime > this.damageInterval) {
      if (target.takeDamage) {
        target.takeDamage(this.damage);
      }
      
      this.lastDamageTime = time;
    }
  }
  
  

  
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    if (this.active && time - this._spawnTime > this.lifespan) {
      this.kill();
    }
  }
  
  kill() {
    this.setActive(false);
    this.setVisible(false);
    this.body.stop();
  }
  
  onHit(target, time) {
    if (this.isContinuous) {
      this.applyContinuousDamage(target, time);
    } else {
      if (target.takeDamage) target.takeDamage(this.damage);
      this.kill();
    }
  }
}