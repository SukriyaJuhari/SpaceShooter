//../script/items/item.js
export default class Item extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene, x, y) {
    super(scene, x, y, 'healthUp');
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.tag = "item";
    scene.allObjects.add(this);
    
    scene.Collider.setCollBulat(this, 0.25)
    this.setScale(0.5);
    this.setActive(false);
    this.setVisible(false);
    
    this.speed = 150;
  }
  
  
  spawn(x, y, itemType) {
  
  this.body.reset(x, y);

  this.itemType = itemType;
  
  this.setTexture(itemType);
  
  this.setActive(true);
  this.setVisible(true);
  
  this.setVelocityY(this.speed);
}
  
  
  
  
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    
    if (this.y > this.scene.scale.height + 50) {
  this.setActive(false);
  this.setVisible(false);
  this.body.stop();
  this.body.reset();

  this.itemType = null;
}
    
  }
  
}