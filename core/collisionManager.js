//./core/collisionManager.js
export default class CollisionManager {
  constructor(scene) {
    this.scene = scene;
    
    this.rules = {
      "projectiles:enemy": (a, b) => this.hitEnemy(a, b),
      "player:enemy": (a, b) => this.hitPlayer(a, b),
      "player:item": (a, b) => this.collectItem(a, b),
    };
  }
  
  handleCollision(a, b) {
    if (!a.tag || !b.tag) return;
    
    const key1 = `${a.tag}:${b.tag}`;
    const key2 = `${b.tag}:${a.tag}`;
    
    if (this.rules[key1]) {
      this.rules[key1](a, b);
    } else if (this.rules[key2]) {
      this.rules[key2](b, a);
    }
    
    
  }
  
  // =============================
  // MASUKKAN FUNCTION KAMU DI SINI
  // =============================
  
  hitEnemy(projectiles, enemys) {
    if (!projectiles.active || !enemys.active) return;
    
    // damage universal
    projectiles.onHit(enemys);
    
    switch (projectiles.type) {
      case "basicBullet":
        // effects....
        break;
        
      case "burstBullet":
        projectiles.burstBulletEffect(enemys);
        break;
        
      case "missile":
        
        projectiles.onHit(enemys);
        break;
        
      case "laser":
        this.laserEffect(projectiles, enemys);
        break;
    }
  }
  
  
  hitPlayer(player, asteroid) {
    const scene = this.scene;
    
    if (!asteroid.active) return;
    
    if (scene.Player.shieldActive) return;
    if (scene.playerInvincible) return;
    
    scene.playerInvincible = true;
    
    let ship = scene.Player.objek.Ship;
    
    scene.tweens.add({
      targets: ship,
      alpha: 0.3,
      yoyo: true,
      repeat: 5,
      duration: 100,
      onComplete: () => {
        ship.alpha = 1;
      }
    });
    
    asteroid.setActive(false);
    asteroid.setVisible(false);
    asteroid.body.stop();
    
    
    scene.explosionPool.play(asteroid.x, asteroid.y);
    
    scene.sound.play("sfxAsteroidExplosion", {
      volume: scene.SFXvolume,
      rate: scene.SystemRate
    });
    
    scene.cameras.main.shake(200, 0.01);
    
    scene.playerHP--;
    scene.updateHP();
    
    let shipBox = scene.Player.objek.ShipBox;
    
    if (scene.playerHP <= 0) {
      
      scene.gameOver();
      // explosion player gameOver
      scene.sound.play("sfxAsteroidExplosion", {
        volume: this.SFXvolume,
        rate: this.SystemRate
      });
      
      scene.explosionPool.play(shipBox.x, shipBox.y);
      
      //Hilangkan Objek Player
      shipBox.setActive(false).setVisible(false);
      shipBox.body.stop();
      
      //Hilangkan Objek Asteroid
      asteroid.setActive(false).setVisible(false);
      asteroid.body.stop();
      
      
    }
    
    scene.time.delayedCall(1000, () => {
      scene.playerInvincible = false;
    });
  }
  
  collectItem(player, item) {
    const scene = this.scene;
    
    if (!item.active) return;
    
    switch (item.itemType) {
      case "healthUp":
        if (scene.playerHP < scene.maxHP) {
          scene.playerHP++;
          scene.updateHP();
        }
        break;
        
      case "weaponUp":
        
        this.scene.weaponsLevel++;
        break;
        
      case "playerShield":
        scene.Player.shieldActive = true;
        scene.Player.shieldTimer = scene.time.now;
        scene.Player.shieldSprite.setVisible(true);
        break;
        
      case "missilePick":
        this.scene.Player.missilePickActive = true;
        this.scene.Player.missilePickTimer = this.scene.time.now;
        this.scene.Player.missilePickDuration = 10000; // 10 detik
        break;
    }
    
    
    this.destroyItem(item);
  }
  
  destroyItem(item) {
    item.setActive(false);
    item.setVisible(false);
    item.body.stop();
  }
}