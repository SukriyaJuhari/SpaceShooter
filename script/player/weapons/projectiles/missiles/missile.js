// script/player/weapons/projectiles/missiles/missile.js
import WeaponSystem from '../../weaponSystem.js';

export default class Missile extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene, x, y, target) {
    super(scene, x, y, 'missile_sprsheet');
    
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
    this.speed = 100;
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
  
  onHit(target) {
    if (target.takeDamage) {
      target.takeDamage(this.damage);
    }
    
    this.destroy();
  }
  
  update() {
    if (!this.target || !this.target.active) return;
    
    if (this.scene.time.now - this.spawnTime > this.lifespan) {
      this.destroy();
      return;
    }
    
    const hitRadius = 20;
    
    const dist = Phaser.Math.Distance.Between(
      this.x,
      this.y,
      this.target.x,
      this.target.y
    );
    
    
    //tingkatkan kecepatan saat jauh 
    this.speed += 10;
    this.speed = Phaser.Math.Clamp(this.speed, 100, 900);
    
    
    
    // auto hit
    if (dist < 40) {
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
    
    if (this.angleDefault > angle)
    {
      this.angleDefault -= 0.04
      this.setRotation(this.angleDefault + Math.PI / 2);
      
    } else if (this.angleDefault < angle) {
      this.angleDefault += 0.04
      this.setRotation(this.angleDefault + Math.PI / 2);
      
    }
    
    // karena sprite kamu menghadap ATAS
    
    //  gerak langsung ke target
    this.scene.physics.moveTo(
      this,
      this.target.x,
      this.target.y,
      this.speed
    );
  }
}