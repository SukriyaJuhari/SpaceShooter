//./script/player/mainPlayer.js 

import { Objek, Thruster, Controller, WeaponCreate } from "./index.js";

export default class Player {
  constructor(scene, x, y, spriteKey = 'playerShipLevel1', spriteTiltKey = 'playerShipLevel1Tilt') {
    this.scene = scene;
    
    //objek player
    this.objek = new Objek(scene, spriteKey, x, y);
    const ship = this.objek.Ship;
    const shipBox = this.objek.ShipBox;
    
    
    // shield visual
    this.shieldSprite = scene.add.sprite(0, 0, 'playerShield')
      .setScale(1.2)
      .setDepth(10)
      .play('anim_playerShieldEffect')
      .setVisible(false);
    
    shipBox.add(this.shieldSprite);
    
    
    // thruster player
    this.thruster = new Thruster(scene, shipBox, 34, -34);
    const thrusterL = this.thruster.ThrusterL;
    const thrusterR = this.thruster.ThrusterR;
    
    
    // Weapon Player 
    this.weaponCreate = new WeaponCreate(scene, shipBox);
    
    // shield system
    this.shieldActive = false;
    this.shieldTimer = 0;
    this.shieldDuration = 10000; // 10 detik
    
    
    // controller Player (input Touch dan cursor )
    this.controller = new Controller(
      scene,
      ship,
      shipBox,
      thrusterR,
      thrusterL,
      spriteKey,
      spriteTiltKey,
      50, 50, 500
    );
    
    
  }; //constructor())
  
  thrusterVisible(bool) {
    this.thruster.ThrusterR.setVisible(bool);
    this.thruster.ThrusterL.setVisible(bool);
  }
  
  update(time, delta) {
    
    this.controller.update(time, delta);
    
    // tembak hanya jika layar ditekan
    if (this.controller.shootActive) {

      this.weaponCreate.isShooting = this.controller.shootActive;
      this.weaponCreate.update(time, delta);
    }
  }; //update() 
  
}; //export default class Player 