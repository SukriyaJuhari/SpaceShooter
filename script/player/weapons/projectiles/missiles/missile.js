// script/player/weapons/projectiles/missiles/missile.js

export default class Missile extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene, x, y, target) {
    super(scene, x, y, 'missile_sprsheet');
    this.myScene = scene;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    //scene.Collider.setCollBulat(this, 0.10)
    
    this.body.setCircle(6);
    this.body.setOffset(
      this.width / 2 - 6,
      this.height / 2 - 6
    );
    
    this.scene.allObjects.add(this);
    this.tag = "projectiles";
    this.type = "missile";
    this.speed = 400;
    this.turnSpeed = 0.05; // makin kecil = makin smooth
    this.target = target;
    this.damage = 10;
    this.lifespan = 2000;
    this.lifeTimer = 0;
    this.spawnTime = this.scene.time.now;
    this.setScale(0.5, 0.8);
    this.angleDefault = -1.55;
    this.play('anim_missile');
    
    
  }
  
  missileEffect() {
    if (!this.myScene) {
      console.warn("Scene undefined di missileEffect!");
      return;
    }
    this.scale = 1.2;
    const explosion = this.myScene.add.sprite(
        this.x,
        this.y,
        'explosionLarge2'
      )
      .setScale(this.scale)
      .setDepth(10);
    
    this.myScene.sound.play('sfxAsteroidExplosion', {
      volume: this.myScene.SFXvolume - 0.1,
      rate: 2.0,
      detune: 3.0
    });
    
    explosion.play('anim_explosionLarge2');
    explosion.once('animationcomplete', () => explosion.destroy());
  }
  
  
  
  onHit(target) {
    this.missileEffect()
    const damageRadius = 256 * this.scale - 100;
    
    this.myScene.asteroids.children.iterate(enemy => {
      if (!enemy || !enemy.active) return;
      
      const dist = Phaser.Math.Distance.Between(
        this.x, this.y,
        enemy.x, enemy.y
      );
      
      if (dist < damageRadius) {
        enemy.takeDamage(this.damage);
      }
    });
    
    this.destroy();
  }
  
  
  
  
  update() {
    if (!this.target || !this.target.active) return;
    
    if (this.scene.time.now - this.spawnTime > this.lifespan) {
      this.missileEffect();
      this.onHit(this.target)
      return;
    }
    
    const hitRadius = 20; // offset hit 20px
    
    
    const dist = Phaser.Math.Distance.Between(
      this.x,
      this.y,
      this.target.x,
      this.target.y
    );
    
    
    //tingkatkan kecepatan saat jauh 
    this.speed += 30;
    this.speed = Phaser.Math.Clamp(this.speed, 400, 1000);
    
    
    
    // auto hit
    if (dist < hitRadius) {
      this.onHit(this.target);
      return;
    }
    
    //  arah visual (PENTING biar tidak horizontal lagi)
    const angle = Phaser.Math.Angle.Between(
      this.x,
      this.y,
      this.target.x,
      this.target.y
    );
    
    /*
    if (this.angleDefault > angle)
    {
      this.angleDefault -= 0.04
      this.setRotation(this.angleDefault + Math.PI / 2);
      
    } else if (this.angleDefault < angle) {
      this.angleDefault += 0.04
      this.setRotation(this.angleDefault + Math.PI / 2);
      
    }
    */
    this.setRotation(angle + Math.PI / 2);
    
    
    //  gerak langsung ke target
    this.scene.physics.moveTo( 
      this,
      this.target.x,
      this.target.y,
      this.speed
    );
  }
}