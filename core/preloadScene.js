// ./core/preloadScene.js

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("preloadScene");
  }
  
  preload() {
    
    const scaleR = this.scale.height / 960;
    this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      'background0'
    ).setScale(scaleR);
    
    const r = (this.scale.width / 512) / 4
    
    this.add.image(
      this.scale.width / 2,
      this.scale.height / 4,
      'icon'
    ).setScale(r)
    
    
    //========================================================================================================
    //========================================================================================================
    //Art load start
    //========================================================================================================
    //========================================================================================================
    
    
    
    //========================================================================================================
    //img load star
    //========================================================================================================
    
    // Memuat gambar kapal pemain level 1
    this.load.image('playerShipLevel1', 'assets/art/image/player/playerShipLevel1/playerShipLevel1.png');
    // Memuat gambar kapal miring
    this.load.image('playerShipLevel1Tilt', 'assets/art/image/player/playerShipLevel1/playerShipLevel1Tilt.png');
    
    // load img runway Menu Object
    this.load.image('runwayMenuObject', 'assets/art/image/menuObject/runway.png');
    
    
    
    
    //(load item) Weapon upgrade
    this.load.image('weaponUp', 'assets/art/image/item/weaponUp.png');
    
    //(load item) HealthUp
    this.load.image('healthUp', 'assets/art/image/item/healthUp.png');
    
    //(load item) HealthOff
    this.load.image('healthOff', 'assets/art/image/ui/healthOff.png');
    
    
    //(load img wapon)
    this.load.image('bullet1_blue', 'assets/art/image/player/projectiles/bullet/spr_bullet1_blue.png');
    this.load.image('bullet1_green', 'assets/art/image/player/projectiles/bullet/spr_bullet1_green.png');
    this.load.image('bullet1_yellow', '/assets/art/image/player/projectiles/bullet/spr_bullet1_yellow.png');
    this.load.image('bullet2_blue', '/assets/art/image/player/projectiles/bullet/spr_bullet2_blue.png');
    this.load.image('bullet2_green', '/assets/art/image/player/projectiles/bullet/spr_bullet2_green.png');
    this.load.image('bullet2_yellow', '/assets/art/image/player/projectiles/bullet/spr_bullet2_yellow.png');
    
    //========================================================================================================
    //img load end
    //========================================================================================================
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //=======================================================================================
    //load spritesheet start
    //=======================================================================================
    
    
    //========================================================================================================
    //load spritesheet (player atribut/weapon) star
    
    //(load item) Shield
    this.load.spritesheet('playerShield', 'assets/art/spritesheet/player/attribute/shield_Player_sprsheet.png', {
      frameWidth: 128,
      frameHeight: 128
    });
    
    
    //(player atribut) PlayerShipThruster spritesheet untuk thruster Player
    this.load.spritesheet('playerShipThruster_Sprsheet', 'assets/art/spritesheet/player/attribute/playerShipThruster_Sprsheet.png', {
      frameWidth: 188,
      frameHeight: 319
    });
    
    
    
    
    //(player wapon) basic bullet blue muzzle
    this.load.spritesheet('MuzzleBlueBasicBullet', 'assets/art/spritesheet/player/weapons/projectiles/bullet/MuzzleBlueBasicBullet.png', {
      frameWidth: 128,
      frameHeight: 128
    });
    
    //(player wapon) basic bullet green muzzle 
    this.load.spritesheet('MuzzleGreenBasicBullet', 'assets/art/spritesheet/player/weapons/projectiles/bullet/MuzzleGreenBasicBullet.png', {
      frameWidth: 128,
      frameHeight: 128
    });
    
    //(player wapon) basic bullet yellow muzzle 
    this.load.spritesheet('MuzzleYellowBasicBullet', 'assets/art/spritesheet/player/weapons/projectiles/bullet/MuzzleYellowBasicBullet.png', {
      frameWidth: 128,
      frameHeight: 128
    });
    
    
    
    
    
    //(player weapon) spritesheet untuk animasi emisi peluru
    this.load.spritesheet('burstBulletMuzzle_Sprsheet', 'assets/art/spritesheet/player/weapons/projectiles/burstBullet/burstBulletMuzzle_sprsheet.png', {
      frameWidth: 337,
      frameHeight: 308
    });
    
    //(player weapon) bullet spritesheet animasi
    this.load.spritesheet('burstBullet_Sprsheet', 'assets/art/spritesheet/player/weapons/projectiles/burstBullet/burstBullet_sprsheet.png', {
      frameWidth: 274,
      frameHeight: 343
    });
    
    //(player weapon) HeavyMissile spritesheet (WxH Belum diatur)
    this.load.spritesheet('peavyMissile_Sprsheet', 'assets/art/spritesheet/player/weapons/projectile/heavyMissile/heavyMissile_sprsheet.png', {
      frameWidth: 274,
      frameHeight: 343
    });
    
    //(player weapon) Missile spritesheet (WxH Belum diatur)
    this.load.spritesheet('missile_Sprsheet', 'assets/art/spritesheet/player/weapons/projectile/missile/missile_sprsheet.png', {
      frameWidth: 274,
      frameHeight: 343
    });
    
    //(player weapon) leser_blue_sprsheet spritesheet (WxH Belum diatur)
    this.load.spritesheet('leserBlue_sprsheet', 'assets/art/spritesheet/player/weapons/leser/leser_blue_sprsheet.png', {
      frameWidth: 85.33,
      frameHeight: 256
    });
    
    //(player weapon) leser_blue_sprsheet spritesheet (WxH Belum diatur)
    this.load.spritesheet('leser_green_sprsheet', 'assets/art/spritesheet/player/weapons/leser/leser_green_sprsheet.png', {
      frameWidth: 274,
      frameHeight: 343
    });
    
    //(player weapon) leser_blue_sprsheet spritesheet (WxH Belum diatur)
    this.load.spritesheet('leser_yellow_sprsheet', 'assets/art/spritesheet/player/weapons/leser/leser_yellow_sprsheet.png', {
      frameWidth: 274,
      frameHeight: 343
    });
    
    
    //load spritesheet (player atribut) end 
    //=======================================================================================
    
    
    
    
    
    //=======================================================================================
    //load spritesheet effects explosion start 
    
    //effects explosion explosionLarge1 (WxH Belum diatur)
    this.load.spritesheet(
      'explosionLarge1',
      'assets/art/spritesheet/effects/explosion/explosion_large1_sprsheet.png',
      {
        frameWidth: 256,
        frameHeight: 227
      }
    );
    
    //effects explosion explosionLarge1 (WxH Belum diatur)
    this.load.spritesheet(
      'explosionLarge2',
      'assets/art/spritesheet/effects/explosion/explosion_large2_sprsheet.png',
      {
        frameWidth: 256,
        frameHeight: 227
      }
    );
    
    
    //effects explosion explosionLarge2 (WxH Belum diatur)
    this.load.spritesheet(
      'explosionGreenlarge',
      'assets/art/spritesheet/effects/explosion/explosion_green_large_sprsheet.png',
      {
        frameWidth: 256,
        frameHeight: 256
      }
    );
    
    //effects explosion explosionLarge2 (WxH Belum diatur)
    this.load.spritesheet(
      'sparkBulltEffect',
      'assets/art/spritesheet/effects/explosion/sparkBulltEffect_sprsheet.png',
      {
        frameWidth: 204,
        frameHeight: 204
      }
    );
    
    
    
    //load spritesheet effects explosion end
    //=======================================================================================
    
    
    
    
    //=======================================================================================
    //load spritesheet (obstacle asteroid) start
    
    
    //load spritesheet asteroids_small1_rock (obstacle asteroid)
    this.load.spritesheet(
      'asteroidSmall1',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_small1_rock_sprsheet.png',
      {
        frameWidth: 314,
        frameHeight: 314
      }
    );
    
    //load spritesheet asteroids_small2_rock (obstacle asteroid)
    this.load.spritesheet(
      'asteroidSmall2',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_small2_rock_sprsheet.png',
      {
        frameWidth: 314,
        frameHeight: 314
      }
    );
    
    //load spritesheet asteroids_medium1_rock_sprsheet (obstacle asteroid)
    this.load.spritesheet(
      'asteroidMedium1',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_medium1_rock_sprsheet.png',
      {
        frameWidth: 314,
        frameHeight: 314
      }
    );
    
    //load spritesheet asteroids_medium2_rock_sprsheet (obstacle asteroid)
    this.load.spritesheet(
      'asteroidMedium2',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_medium2_rock_sprsheet.png',
      {
        frameWidth: 314,
        frameHeight: 314
      }
    );
    
    //load spritesheet asteroids_large1_rock_sprsheet (obstacle asteroid)
    this.load.spritesheet(
      'asteroidLarge1',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_large1_rock_sprsheet.png',
      {
        frameWidth: 318,
        frameHeight: 318
      }
    );
    
    //load spritesheet asteroids_large2_rock_sprsheet (obstacle asteroid)
    this.load.spritesheet(
      'asteroidLarge2',
      'assets/art/spritesheet/obstacle/asteroids/asteroids_large2_rock_sprsheet.png',
      {
        frameWidth: 314,
        frameHeight: 314
      }
    );
    
    //load spritesheet obstacle (asteroid) end
    //=======================================================================================
    
    
    
    
    //=======================================================================================
    //load spritesheet end
    //=======================================================================================
    
    
    
    
    
    
    
    
    //========================================================================================================
    //========================================================================================================
    //Art load end
    //========================================================================================================
    //========================================================================================================
    
    
    
    
    
    
    
    
    //audio load BulletSound sfx_PlayerShip_BulletFire1
    this.load.audio('sfxBulletFire1', 'assets/audio/sfx/sfxBulletFire1.wav');
    
    //audio load
    this.load.audio('sfxAsteroidExplosion', 'assets/audio/sfx/sfxExplosion.mp3');
    //================================================
    //audio load Backsound
    this.load.audio('backSound0', 'assets/audio/sound/backsound0.ogg');
    
    //================================================
    
    
    
    
    // Background loading
    this.cameras.main.setBackgroundColor("#1a1a1a");
    
    // Progress bar graphic
    let progressBox = this.add.graphics();
    let progressBar = this.add.graphics();
    
    //text credit
        let credit = this.add.text(
      10,
      this.scale.height / 1.05,
`
Assets sourced from GameMaker Asset Bundles
Licensed under Apache License 2.0
`,
      {
        font: "12px Arial",
        fill: "#7B7B7B"
      });
      
    // Text persen
    let percentText = this.add.text(
      this.scale.width / 2,
      this.scale.height / 2.3,
      "0%",
      {
        font: "18px Arial",
        fill: "#ffffff"
      }).setOrigin(0.5);
    
    // Text asset yang sedang dimuat
    let assetText = this.add.text(
      this.scale.width / 2,
      this.scale.height / 2.4, "", {
        font: "16px Arial",
        fill: "#ffffff"
      }).setOrigin(0.5);
    
    
    // Kotak luar (background bar)
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(0, this.scale.height / 2.5, this.scale.width, 5);
    
    
    // Event progress (0–1)
    this.load.on("progress", (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(0, this.scale.height / 2.5, this.scale.width * value, 5);
      percentText.setText(parseInt(value * 100) + "%");
    });
    
    // Event file progress
    this.load.on("fileprogress", (file) => {
      assetText.setText("Loading: " + file.key);
    });
    
    // Event complete
    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      percentText.destroy();
      assetText.destroy();
      
      // Setelah selesai → ke MainMenuScene (atau langsung GameplayScene)
      this.scene.start("gamePlayScene");
    });
    
    
    
  }
  
  
}