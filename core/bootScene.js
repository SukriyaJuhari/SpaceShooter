// ./core/bootScene.js
console.log("BootScene JS ✓");

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("bootScene");
  }
  preload() {
    //Background image load/
    this.load.image('background0', 'assets/art/image/background/Background1.png');
    
    this.load.image('icon', 'icons/icon.png');

  }

  create() {
    
    this.scale.scaleMode = Phaser.Scale.FIT;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
   
    // Setelah siap, langsung ke Preload
    this.scene.start("preloadScene");
  }
}
