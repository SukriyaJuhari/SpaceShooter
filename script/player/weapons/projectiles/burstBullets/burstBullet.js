// script/player/weapons/projectiles/burstBullet.js

import WeaponSystem from '../../weaponSystem.js';

export default class BurstBullet extends WeaponSystem {
  constructor(scene, x, y) {
    super(scene, x, y, 'burstBullet_Sprsheet');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.Collider.setCollKotak(this, 0.6, 0.8);
    this.tag = "projectiles";
    this.type = "burstBullet";
    scene.allObjects.add(this);
    this.setOrigin(0.5, 0.2);
    // properti khusus bullet
    this.damage = 3;
    this.lifespan = 2000;
    this.lifeTimer = 0;
    this.spawnTime = this.scene.time.now;
    this.speedY = 800;
    this.setDepth(6).setScale(0.1, 0.5);
    this.target = null;
    this.isHoming = false;
  }
  
  fire(shipBox, x, y, offsetX) {
    super.fire(x, y);
    
    // reset state
    this.isHoming = false;
    this.target = null;
    
    // reset TOTAL
    this.isHoming = false;
    this.target = null;
    
    this.setVelocity(0, 0);
    this.setAngularVelocity(0);
    this.setRotation(0);
    
    this.setVelocity(0, -this.speedY
      
    );
    let muzzle = this.scene.add.sprite(offsetX, -80, 'anim_burstBulletMuzzle')
      .setScale(0.3);
    
    muzzle.play('anim_burstBulletMuzzle');
    
    this.play('anim_burstBullet');
    
    if (shipBox) shipBox.add([muzzle]);
    
    muzzle.on('animationcomplete', () => muzzle.destroy());
    
    this.scene.sound.play('sfxBulletFire1', {
      volume: this.scene.SFXvolume,
      rate: 2.0,
      detune: 0
    });
    
  }
  
  fireHoming(shipBox, x, y) {
    this.setRotation = rotation;
    this.play('anim_burstBullet');
    
  }
  
  
  burstBulletEffect(target) {
    let spark = this.scene.add.sprite(target.x, target.y, 'sparkBulltEffect')
      .setScale(0.6)
      .setDepth(7);
    
    this.scene.sound.play('sfxAsteroidExplosion', {
      volume: this.scene.SFXvolume - 0.3,
      rate: 2.0,
      detune: 0
    });
    
    spark.play('anim_sparkBulltEffect');
    spark.once('animationcomplete', () => spark.destroy());
  }
  
  update() {
    if (!this.active) return;
    
    if (this.isHoming && this.target && this.target.active) {
      
      const angle = Phaser.Math.Angle.Between(
        this.x,
        this.y,
        this.target.x,
        this.target.y
      );
      
      this.rotation = angle + Math.PI / 2;
      
      this.body.velocity.x = Math.cos(angle) * this.speedY;
      this.body.velocity.y = Math.sin(angle) * this.speedY;
      
    } else if (this.isHoming) {
      
      // ❗ kalau target hilang → lanjut lurus sesuai arah terakhir
      this.scene.physics.velocityFromRotation(
        this.rotation - Math.PI / 2,
        this.speedY,
        this.body.velocity
      );
    }
  }
}