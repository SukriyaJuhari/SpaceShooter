// script/player/weapons/projectiles/burstBullet.js

import WeaponSystem from '../weaponSystem.js';

export default class BasicBullet extends WeaponSystem {
  constructor(scene, x, y) {
    super(scene, x, y, 'bullet1_blue');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.Collider.setCollKotak(this, 0.6, 0.8);
    this.tag = "projectiles";
    this.type = "basicBullet";
    scene.allObjects.add(this);
    this.setOrigin(0.5, 0.1);
    // properti khusus bullet
    this.damage = 1;
    this.lifespan = 1000;
    
    this.setDepth(6).setScale(1, 4);
    
  }
  
  fire(shipBox, x, y, offsetX, vx, vy) {
    super.fire(x, y);
    
    //  gerakan (physics)
    this.setVelocity(vx, vy);
    
    //  rotasi biar ikut arah
    this.rotation = Math.atan2(vy, vx) + Math.PI / 2;
    
    //  muzzle pakai offsetX (VISUAL)
    let muzzle = this.scene.add.sprite(offsetX, -80, 'anim_MuzzleBlueBasicBullet')
      .setScale(0.6);
    
    muzzle.play('anim_MuzzleBlueBasicBullet');
    
    
    if (shipBox) shipBox.add([muzzle]);
    
    muzzle.on('animationcomplete', () => muzzle.destroy());
    
    this.scene.sound.play('sfxBulletFire1', {
      volume: this.scene.SFXvolume,
      rate: 2.0,
      detune: 0
    });
    
  }
  

  
}