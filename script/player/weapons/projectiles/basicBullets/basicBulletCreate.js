// /script/player/weapons/projectiles/basicBullet/basicBulletCreate.js
import BasicBullet from './basicBullet.js';

export default class BasicBulletCreate {
  constructor(scene, shipBox) {
    
    this.scene = scene;
    this.shipBox = shipBox;
    
    this.lastShotTime = 0;
    this.fireRate = 200;
    
    this.BasicBulletGroup = scene.physics.add.group({
      classType: BasicBullet,
      maxSize: 1000,
      runChildUpdate: true
    });
  }
  
  
  update(time, isShooting) {
    
    let level = this.scene.weaponsLevel
    this.basicBulletLevel = Math.min(level, 5);
    
    if (!isShooting) return;
    // kurangi fireRate saat level mengikat
    if (this.basicBulletLevel >= 3) this.fireRate = 250;
    if (this.basicBulletLevel >= 4) this.fireRate = 300;

    if (time - this.lastShotTime < this.fireRate) return;
    this.lastShotTime = time;
    
    const pattern = this.getPattern();
    
    pattern.forEach((offsetX, i) => {
      
      // delay lebih smooth
      const delay = this.fireRate / 2.4 * i;
      
      this.scene.time.delayedCall(delay, () => {
        
        let x = this.shipBox.x + offsetX;
        let y = this.shipBox.y;
        
        const basicBullet = this.BasicBulletGroup.get(x, y);
        
        if (!basicBullet) return;
        
        basicBullet.setScale(0.3,0.6);
        const factor = 5;
        const angle = offsetX;
        const speed = 1000;
        
        const rad = Phaser.Math.DegToRad(angle/factor);
        
        
        const vx = Math.sin(rad) * speed;
        const vy = -Math.cos(rad) * speed;
        
        basicBullet.fire(this.shipBox, x, y - 140, offsetX, vx, vy);
        
      });
      
    });
  }
  
  getPattern() {
    return {
      1: [0],
      2: [-25, 25],
      3: [-25, 0, 25],
      4: [-30, -15, 0, 15, 30],
      
    } [this.basicBulletLevel] || [0];
  }
  
}