export default class MapBackground {
  
  constructor(scene, bgHeight) {
    
    this.scene = scene;
    this.gameW = scene.scale.width;
    this.gameH = scene.scale.height;
    
    this.scaleRatio = this.gameH / bgHeight;
    
    this.bg = this.scene.add.tileSprite(
      this.gameW / 2,
      this.gameH / 2,
      this.gameW,
      this.gameH,
      "background0"
    ).setScale(this.scaleRatio);
    
    scene.sound.play("backSound0", {
      volume: scene.MUSvolume,
    });
    
  }
  
  update() {
    
    this.bg.tilePositionY -= 2;
    
  }
  
}