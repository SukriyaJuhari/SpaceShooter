// /script/player/weapons/projectiles/burstBulletCreate.js
import BurstBullet from './burstBullet.js';

export default class BurstBulletCreate {
  constructor(scene, shipBox) {
    this.scene = scene;
    this.shipBox = shipBox;
    
    this.lastShotTime = 0;
    this.fireRate = 200;
    
    this.burstBulletGroup = scene.physics.add.group({
      classType: BurstBullet,
      maxSize: 1000,
      runChildUpdate: true
    });
  }
  
  update(time, isShooting) {
    //berfungsi saat weaponsLevel 4
    
    let level = this.scene.weaponsLevel
    
    this.burstBulletLevel = Math.min(level - 4, 4);
    
    if (this.burstBulletLevel === 2) {
      this.fireRate = 300;
    }
    if (this.burstBulletLevel === 3) {
      this.fireRate = 400;
    }
    
    if (!isShooting) return;
    
    if (time - this.lastShotTime < this.fireRate) return;
    this.lastShotTime = time;
    
    const pattern = this.getPattern();
    // ambil target terdekat
    const targetGlobal = this.getClosestTarget(
      this.shipBox.x,
      this.shipBox.y
    );
    pattern.forEach((offsetX, i) => {
      
      // delay lebih smooth
      const delay = this.fireRate / 2.4 * i;
      
      this.scene.time.delayedCall(delay, () => {
        
        let x = this.shipBox.x + offsetX;
        let y = this.shipBox.y;
        
        const burstBullet = this.burstBulletGroup.get(x, y);
        if (!burstBullet) return;
        
        burstBullet.setScale(0.4);
        
        // 🔥 ambil target SAAT spawn
        const targetGlobal = this.getClosestTarget(x, y);
        
        const middleIndex = Math.floor(pattern.length / 2);
        
        if (
          this.burstBulletLevel === 4 &&
          targetGlobal &&
          i === middleIndex
        ) {
          this.burstBulletHoming(burstBullet, targetGlobal, x, y, offsetX);
        } else {
          burstBullet.fire(this.shipBox, x, y - 140, offsetX);
        }
        
      });
    });
  }
  
  getPattern() {
    return {
      1: [0],
      2: [-25, 25],
      3: [-25, 0, 25],
      4: [-25, 0, 0, 25]
      
    } [this.burstBulletLevel] || [0];
  }
  
  //mencari target terdekat
  getClosestTarget(x, y) {
    let closest = null;
    let minDist = Infinity;
    this.scene.asteroids.children.iterate(asteroid => {
      if (!asteroid.active) return;
      const dist = Phaser.Math.Distance.Between(x, y, asteroid.x, asteroid.y);
      if (dist < minDist) {
        minDist = dist;
        closest = asteroid;
      }
    });
    
    return closest;
  }
  
  burstBulletHoming(burstBullet, target, x, y, offsetX) {
    
    burstBullet.fire(this.shipBox, x, y - 140, offsetX);
    
    // AKTIFKAN HOMING
    burstBullet.target = target;
    burstBullet.isHoming = true;
    
    // HENTIKAN velocity awal
    burstBullet.setVelocity(0, 0);
  }
  
  
}