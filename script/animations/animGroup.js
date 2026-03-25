//.../script/animations/animGroup.js

export default function AnimGroup(scene) {
  
  scene.add.existing(this);
  
  
  if (!scene.anims.exists('anim_playerShieldEffect')) {
    scene.anims.create({
      key: 'anim_playerShieldEffect',
      frames: scene.anims.generateFrameNumbers('playerShield',
      {
        start: 0,
        end: 9
      }),
      frameRate: 30,
      repeat: -1,
    });
  }
  
  
  
  
  
  // Membuat animasi untuk thruster
  if (!scene.anims.exists('anim_playerShipThruster')) {
    
    scene.anims.create({
      key: 'anim_playerShipThruster',
      frames: scene.anims.generateFrameNumbers(
        'playerShipThruster_Sprsheet', { start: 0, end: 5 }
      ),
      frameRate: 20,
      repeat: -1
    });
    
  }
  /*
  *
  *
  *
  *
  *
  *
  *
  *
  *
  */
  
  
  // efek muzzle flash
  if (!scene.anims.exists('anim_burstBulletMuzzle')) {
    scene.anims.create({
      key: 'anim_burstBulletMuzzle',
      frames: scene.anims.generateFrameNumbers('burstBulletMuzzle_Sprsheet',
      {
        start: 0,
        end: 3
      }),
      frameRate: 70,
      repeat: 0,
    });
  }
  
    // efek muzzle flash
  if (!scene.anims.exists('anim_MuzzleBlueBasicBullet')) {
    scene.anims.create({
      key: 'anim_MuzzleBlueBasicBullet',
      frames: scene.anims.generateFrameNumbers('MuzzleBlueBasicBullet',
      {
        start: 0,
        end: 2
      }),
      frameRate: 70,
      repeat: 0,
    });
  }
  
      // efek muzzle flash
  if (!scene.anims.exists('anim_MuzzleGreenBasicBullet')) {
    scene.anims.create({
      key: 'anim_MuzzleGreenBasicBullet',
      frames: scene.anims.generateFrameNumbers('MuzzleGreenBasicBullet',
      {
        start: 0,
        end: 2
      }),
      frameRate: 70,
      repeat: 0,
    });
  }

      // efek muzzle flash
  if (!scene.anims.exists('anim_MuzzleYellowBasicBullet')) {
    scene.anims.create({
      key: 'anim_MuzzleYellowBasicBullet',
      frames: scene.anims.generateFrameNumbers('MuzzleYellowBasicBullet',
      {
        start: 0,
        end: 2
      }),
      frameRate: 70,
      repeat: 0,
    });
  }

  
  // animasi peluru
  if (!scene.anims.exists('anim_burstBullet')) {
    scene.anims.create({
      key: 'anim_burstBullet',
      frames: scene.anims.generateFrameNumbers('burstBullet_Sprsheet',
      {
        start: 0,
        end: 4
      }),
      frameRate: 50,
      repeat: -1,
    });
  }
  
  
  // animasi leser
    if (!scene.anims.exists('anim_leserBlue')) {
    scene.anims.create({
      key: 'anim_leserBlue',
      frames: scene.anims.generateFrameNumbers('leserBlue_sprsheet',
      {
        start: 0,
        end: 11
      }),
      frameRate: 20,
      repeat: -1,
    });
  }
  
  //animasi missile
      if (!scene.anims.exists('anim_missile')) {
    scene.anims.create({
      key: 'anim_missile',
      frames: scene.anims.generateFrameNumbers('missile_sprsheet',
      {
        start: 0,
        end: 5
      }),
      frameRate: 20,
      repeat: -1,
    });
  }
  
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  
  
  
  
  //anim_asteroidSmall1
  if (!scene.anims.exists('anim_asteroidSmall1')) {
    scene.anims.create({
      key: 'anim_asteroidSmall1',
      frames: scene.anims.generateFrameNumbers('asteroidSmall1', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  
  
  
  //anim_asteroidSmall2
  if (!scene.anims.exists('anim_asteroidSmall2')) {
    scene.anims.create({
      key: 'anim_asteroidSmall2',
      frames: scene.anims.generateFrameNumbers('asteroidSmall2', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  //anim_asteroidMedium1
  if (!scene.anims.exists('anim_asteroidMedium1')) {
    scene.anims.create({
      key: 'anim_asteroidMedium1',
      frames: scene.anims.generateFrameNumbers('asteroidMedium1', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  //anim_asteroidMedium2
  if (!scene.anims.exists('anim_asteroidMedium2')) {
    scene.anims.create({
      key: 'anim_asteroidMedium2',
      frames: scene.anims.generateFrameNumbers('asteroidMedium2', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  //anim_asteroidLarge1
  if (!scene.anims.exists('anim_asteroidLarge1')) {
    scene.anims.create({
      key: 'anim_asteroidLarge1',
      frames: scene.anims.generateFrameNumbers('asteroidLarge1', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  //anim_asteroidLarge2
  if (!scene.anims.exists('anim_asteroidLarge2')) {
    scene.anims.create({
      key: 'anim_asteroidLarge2',
      frames: scene.anims.generateFrameNumbers('asteroidLarge2', {
        start: 0,
        end: 19
      }),
      frameRate: 20,
      repeat: -1
    });
  }
  
  
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  
  
  //animasi Effect explosion
  if (!scene.anims.exists('anim_explosionLarge1')) {
    scene.anims.create({
      key: 'anim_explosionLarge1',
      frames: scene.anims.generateFrameNumbers('explosionLarge1', {
        start: 0,
        end: 11
      }),
      frameRate: 20,
      repeat: 0
    });
  }
  
  
  if (!scene.anims.exists('anim_explosionLarge2')) {
    scene.anims.create({
      key: 'anim_explosionLarge2',
      frames: scene.anims.generateFrameNumbers('explosionLarge2', {
        start: 0,
        end: 11
      }),
      frameRate: 20,
      repeat: 0
    });
  }
  
  
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  
  if (!scene.anims.exists('anim_sparkBulltEffect')) {
    scene.anims.create({
      key: 'anim_sparkBulltEffect',
      frames: scene.anims.generateFrameNumbers('sparkBulltEffect', {
        start: 0,
        end: 19
      }),
      frameRate: 60,
      repeat: 0
    });
  }
  
  
  
  
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  
}