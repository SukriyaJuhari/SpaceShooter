// script/player/weapons/weaponCreate.js
import BasicBulletCreate from './projectiles/basicBullets/basicBulletCreate.js';
import BurstBulletCreate from './projectiles/burstBullets/burstBulletCreate.js';

export default class WeaponCreate {
  constructor(scene, shipBox) {
    this.scene = scene;
    this.shipBox = shipBox;
    
    this.list = {
      burstBulletCreate: new BurstBulletCreate(scene, shipBox),
      basicBulletCreate: new BasicBulletCreate(scene, shipBox)
    };
    
    this.weaponLevels = [
      { min: 1, weapon: "basicBulletCreate" },
      { min: 5, weapon: "burstBulletCreate" }
    ];
    
    this.currentWeapon = this.list.basicBulletCreate;
    
    this.isShooting = false;
  }
  
  
  
  setWeaponByLevel(level) {
    let selected = "basicBulletCreate";
    
    this.weaponLevels.forEach(w => {
      if (level >= w.min) {
        selected = w.weapon;
      }
    });
    
    this.currentWeapon = this.list[selected];
  }
  
  
  
  
  
  
  
  
  update(time, delta) {
    
    
    // ambil level dari scene
    const level = this.scene.weaponsLevel;
    
    // DIPANGGIL DI SINI
    this.setWeaponByLevel(level);
    
    // jalankan weapon aktif
    this.currentWeapon.update(time, this.isShooting);
    

  }
}