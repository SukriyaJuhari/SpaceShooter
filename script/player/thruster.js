//./script/player/thruster.js
export default class Thruster {
  constructor(scene, container, OffsetXR, OffsetXL) {
        //==============================================================================
    // add sprite thruster untuk Objek player
    this.ThrusterR = scene.add.sprite(OffsetXR, 60, 'playerShipThruster_Sprsheet').setDepth(4).setScale(0.10);
    this.ThrusterL = scene.add.sprite(OffsetXL, 60, 'playerShipThruster_Sprsheet').setDepth(4).setScale(0.10);

    // play animasi PlayerShipThruster
    this.ThrusterR.play('anim_playerShipThruster');
    this.ThrusterL.play('anim_playerShipThruster');
    // tambahkan ke container
    container.add([this.ThrusterR, this.ThrusterL]);
    //==============================================================================

  }
}










