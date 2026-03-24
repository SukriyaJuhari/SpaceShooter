// /script/player/weapons/projectiles/burstBulletCreate.js
import BurstBullet from './burstBullet.js';

export default class BurstBulletCreate {
  constructor(scene, shipBox) {
    this.scene = scene;
    this.shipBox = shipBox;
    
    this.lastShotTime = 0;
    this.fireRate = 300;
    
    this.burstBulletGroup = scene.physics.add.group({
      classType: BurstBullet,
      maxSize: 1000,
      runChildUpdate: true
    });
  }
  
  
  update(time, isShooting) {
    //berfungsi saat weaponsLevel 4

    let level = this.scene.weaponsLevel
    
    this.burstBulletLevel = Math.min(level-4, 3);
    
    if (!isShooting) return;
    
    if (time - this.lastShotTime < this.fireRate) return;
    this.lastShotTime = time;
    
    const pattern = this.getPattern();
    
    pattern.forEach((offsetX, i) => {
      
      // delay lebih smooth
      const delay = this.fireRate / 2.4 * i;
      
      this.scene.time.delayedCall(delay, () => {
        
        let x = this.shipBox.x + offsetX;
        let y = this.shipBox.y;
        
        const burstBullet = this.burstBulletGroup.get(x, y);
        
        if (!burstBullet) return;
        
        burstBullet.setScale(0.3,0.6);
        const factor = 5;
        const angle = offsetX;
        const speed = 1000;
        
        const rad = Phaser.Math.DegToRad(angle/factor);
        
        
        const vx = Math.sin(rad) * speed;
        const vy = -Math.cos(rad) * speed;
        
        burstBullet.fire(this.shipBox, x, y - 140, offsetX, vx, vy);
        
      });
      
    });
  }
  
  getPattern() {
    return {
      1: [0],
      2: [-25, 25],
      3: [-25, 0, 25],
      
    } [this.burstBulletLevel] || [0];
  }
  
}