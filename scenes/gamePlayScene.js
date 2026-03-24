//./Scenes/gamePlayScene.js 

import CollisionManager from '../core/collisionManager.js';
import Colliders from '../../core/colliders.js';
import { MapBackground } from "../script/map/mapIndex.js";
import MenuHangarUI from '../scenes/menuHangarUI.js';
import Player from "../script/player/mainPlayer.js";
import AnimGroup from '../script/animations/animGroup.js';
import ExplosionPool from "../script/effects/explosionPools.js";
import AsteroidSpawner from "../script/obstacles/asteroidSpawner.js";
import ItemPool from "../script/items/itemPool.js";
import Missile from '../script/player/weapons/projectiles/missiles/missile.js';

export default class GamePlayScene extends Phaser.Scene {
  constructor() {
    super("gamePlayScene");
  }
  
  addScore(amount) {
    this.score += amount;
    this.scoreText.setText(this.score);
  }
  
  create() {
    
    this.gameW = this.scale.width;
    this.gameH = this.scale.height;
    this.ShowStatus = true;
    // MapBackground create
    this.MapBg = new MapBackground(this, 960);
    
    this.MUSvolume = 1;
    this.SFXvolume = 0.8;
    this.SystemRate = 1.25;
    this.weaponsLevel = 1;
    
    this.scoreText = this.add.text(20, 60, this.score, {
      fontSize: "20px",
      fill: "#ffffff"
    }).setDepth(10);
    
    this.textShowStatus = this.add.text(10, 80, "", {
      fontSize: "16px",
      fill: "#ffffff"
    }).setDepth(9);
    
    
    // difficulty system
    this.difficultyLevel = 1;
    this.difficultyTimer = 0;
    
    //create animation 
    new AnimGroup(this);
    
    // GROUP GLOBAL
    this.allObjects = this.physics.add.group();
    
    // collision manager
    this.Collider = Colliders;
    this.collisionManager = new CollisionManager(this);
    
    // overlap GLOBAL
    this.physics.add.overlap(
      this.allObjects,
      this.allObjects,
      (a, b) => {
        this.collisionManager.handleCollision(a, b);
      }
    );
    
    
    //create effects
    this.explosionPool = new ExplosionPool(this);
    
    //create item pool
    this.itemPool = new ItemPool(this);
    
    //obstacle asteroid create
    this.asteroidSpawner = new AsteroidSpawner(this);
    
    //Player create
    this.Player = new Player(this, this.gameW / 2, this.gameH / 1.1);
    
    this.playerBox = this.Player.objek.ShipBox;
    //player atribut
    this.score = 0;
    this.playerHP = 5;
    this.maxHP = 5;
    this.hpIcons = [];
    
    // ambil group object
    this.burstBullet = this.Player.weaponCreate.list.burstBulletCreate.burstBulletGroup;
    this.asteroids = this.asteroidSpawner.asteroidGroup;
    this.items = this.itemPool.group;
    
    
    //Hangar Gameplay
    new MenuHangarUI(this)
    this.gameState = "hangar";
    
    for (let i = 0; i < this.maxHP; i++) {
      
      let icon = this.add.image(40 + i * 35, 30, 'healthUp')
        .setScale(0.3)
        .setDepth(10);
      this.hpIcons.push(icon);
      
    }
    
    this.updateHP();
    this.playerInvincible = false;
    
    
    
    
    
    
  } //create()
  
  
  
  updateHP() {
    
    for (let i = 0; i < this.maxHP; i++) {
      
      if (i < this.playerHP) {
        this.hpIcons[i].setTexture('healthUp');
      } else {
        this.hpIcons[i].setTexture('healthOff');
      }
      
    }
    
  }
  
  
  
  gameOver() {
    
    //Screen Flash
    let flash = this.add.rectangle(
        0, 0,
        this.scale.width,
        this.scale.height,
        0xffffff
      )
      .setOrigin(0)
      .setAlpha(0.8)
      .setDepth(100);
    
    this.tweens.add({
      targets: flash,
      alpha: 0,
      duration: 300,
      onComplete: () => flash.destroy()
    });
    
    
    this.cameras.main.shake(500, 0.02);
    
    this.physics.pause();
    
    // text GAME OVER
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2 - 80,
      "GAME OVER",
      {
        fontSize: "64px",
        fill: "#ff0000"
      }
    ).setOrigin(0.5);
    
    // text restart
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2 + 40,
      "Tap to Restart",
      {
        fontSize: "32px",
        fill: "#ffffff"
      }
    ).setOrigin(0.5);
    
    //text show now score 
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2 - 10,
      "Score : " + this.score,
      {
        fontSize: "32px",
        fill: "#ffffff"
      }
    ).setOrigin(0.5);
    
    
    // restart game saat layar disentuh
    this.input.once("pointerdown", () => {
      
      this.scene.restart();
      
    });
    
  }
  
  
  //missile homing target
  getClosestEnemy(x, y) {
    if (!this.asteroids) {
      console.warn("Asteroid group belum ada!");
      return null;
    }
    
    let closest = null;
    let minDist = Infinity;
    
    this.asteroids.children.iterate(enemy => {
      if (!enemy.active) return;
      
      const dist = Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y);
      
      if (dist < minDist) {
        minDist = dist;
        closest = enemy;
      }
    });
    
    return closest;
  }
  
  spawnMissile(x, y) {
    const target = this.getClosestEnemy(x, y);
    
    if (!target) return;
    
    new Missile(this, x, y, target);
  }
  
  
  update(time, delta) {
    this.children.each(child => {
      if (child.update) {
        child.update(time, delta);
      }
    });
    //=======================================================================================================================================================================================================
    // MapBackground update
    this.MapBg.update(time, delta);
    //=======================================================================================================================================================================================================
    
    if (this.gameState !== "gameplay") return;
    
    
    
    
    if (!this.missileTimer) this.missileTimer = 0;
    
    this.missileTimer += delta;
    /*
    if (this.missileTimer > 500) { // 0.5 detik
      this.spawnMissile(this.playerBox.x, this.playerBox.y);
      this.missileTimer = 0;
    }
    */
    
    
    
    // update Level. (difficulty)
    this.difficultyTimer++ * delta;
    
    let spawner = this.asteroidSpawner;
    
    if (this.difficultyTimer > 1000) { // 10 detik
      
      this.difficultyTimer = 0;
      
      spawner.difficultyLevel++;
      
      // spawn lebih cepat
      spawner.spawnRate = Math.max(
        100,
        spawner.spawnRate - 20
      );
      
      // jumlah asteroid maksimum
      spawner.maxAsteroidsInGame = Math.min(
        20,
        spawner.maxAsteroidsInGame + 0.5
      );
      
      // asteroid lebih cepat
      spawner.speedMultiplier = Math.min(
        4,
        spawner.speedMultiplier + 0.2
      );
      
      // spawn lebih banyak asteroid
      if (spawner.difficultyLevel % 5 === 0) {
        
        spawner.maxAsteroidsPerSpawn = Math.min(
          3,
          spawner.maxAsteroidsPerSpawn + 0.5
        );
        
      }
    }
    
    
    if (this.ShowStatus) {
      this.textShowStatus.setText(
        `
Status Game
difficultyTimer : ${this.difficultyTimer}
      
difficultyLevel : ${spawner.difficultyLevel}
      
spawnRate : ${ spawner.spawnRate}
      
maxAsteroidsInGame : ${ spawner.maxAsteroidsInGame}
      
speedMultiplier : ${ spawner.speedMultiplier}
      
maxAsteroidsPerSpawn : ${spawner.maxAsteroidsPerSpawn}

jumlah asteroid di layar : ${this.asteroids.countActive()}

weaponsLevel : ${this.weaponsLevel}

Player.position : x = ${Math.floor(this.Player.objek.ShipBox.x)}, y = ${Math.floor(this.Player.objek.ShipBox.y)}
`
      )
    }
    
    
    
    //=======================================================================================================================================================================================================
    //obstacle asteroid create
    this.asteroidSpawner.update(time);
    //=======================================================================================================================================================================================================
    
    //update player
    this.Player.update(time, delta)
    
    //=======================================================================================================================================================================================================
    //=======================================================================================================================================================================================================
    
    
    // shield timer
    if (this.Player.shieldActive) {
      
      if (this.time.now - this.Player.shieldTimer > this.Player.shieldDuration) {
        
        this.Player.shieldActive = false;
        
        this.Player.shieldSprite.setVisible(false);
        
      }
      
    }
    
    
  }
}