// script/player/weapons/projectiles/burstBullet.js

import WeaponSystem from '../weaponSystem.js';

export default class BurstBullet extends WeaponSystem {
  constructor(scene, x, y) {
    super(scene, x, y, 'burstBullet_Sprsheet');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.Collider.setCollKotak(this, 0.6, 0.8);
    this.tag = "projectiles";
    this.type = "burstBullet";
    scene.allObjects.add(this);
    this.setOrigin(0.5, 0.1);
    // properti khusus bullet
    this.damage = 3;
    this.lifespan = 1000;
    this.speedY = 800;
    this.setDepth(6).setScale(0.1, 0.5);
    
  }
  
  fire(shipBox, x, y, offsetX) {
    super.fire(x, y);
    
    this.setVelocityY(-this.speedY);
    //  muzzle pakai offsetX (VISUAL)
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
  
}