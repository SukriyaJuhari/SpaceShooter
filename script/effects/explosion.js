//../script/effects/explosion.js 

export default class Explosion extends Phaser.GameObjects.Sprite {
  
  constructor(scene, x, y) {
    super(scene, x, y, 'explosionLarge1');
    
    scene.add.existing(this);
    
    this.setActive(false);
    this.setVisible(false); 
    
  }
  
  playExplosion(x, y) {
    
    this.setPosition(x, y);
    
    this.setActive(true);
    this.setVisible(true);
    
    this.setScale(0.5);
    
    this.play('anim_explosionLarge1');
    
    this.once('animationcomplete', () => {
      
      this.setActive(false);
      this.setVisible(false);
      
    });
    
  }
  
}