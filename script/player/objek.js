//./script/player/objek.js

export default class Objek {
  constructor(scene, SpriteKey, x, y, setCircle = 50) {
    
    //==============================================================================
    // Membuat objek player
    this.Ship = scene.add.sprite(0, 0, SpriteKey)
    .setScale(0.60);
    //==============================================================================
    // add container Player
    this.ShipBox = scene.add.container(x, y, [this.Ship], ).setDepth(4);
    
    //add physics existing this.PlayerBox container
    scene.physics.add.existing(this.ShipBox);
    // tag ke object yang benar
    this.ShipBox.tag = "player";
    // MASUKKAN KE SYSTEM
    scene.allObjects.add(this.ShipBox);
    this.ShipBox.body.setCollideWorldBounds(true);
    scene.Collider.setCollConBulat(this.ShipBox.body, 5)
    
    //==============================================================================
    
    
  }
}