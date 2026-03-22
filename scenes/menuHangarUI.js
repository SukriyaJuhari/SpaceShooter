export default class MenuHangarUI {
  
  constructor(scene) {
    this.scene = scene
    this.scene.add.existing(this);
    const scaleR = this.scene.gameW / 1024;
    this.scene.runway = this.scene.add.image(
        this.scene.gameW / 2,
        this.scene.gameH / 1.08,
        'runwayMenuObject')
      .setDepth(2)
      .setScale(scaleR);
    
    //sembunyikan thruster
    this.scene.Player.thrusterVisible(false);

    this.scene.TapToPlay = this.scene.add.text(
      this.scene.gameW / 2,
      this.scene.gameH / 2,
      'Tap To Play',
      {
        fontSize: '32px',
        color: '#ffffff'
      }
    ).setOrigin(0.5).setInteractive();
    
    
    this.scene.TapToPlay.on("pointerdown", () => {
      
      this.startLaunch();
      
      
    });
  }
  
  startLaunch() {
    
    this.scene.gameState = "launch";
    
    this.scene.TapToPlay.setVisible(false);
    this.scene.Player.thrusterVisible(true);

    
        this.scene.tweens.add({
          targets: this.scene.Player.objek.ShipBox,
          y: this.scene.gameH / 1.5,
          duration: 2000,
          ease: "power0",
          onComplete: () => {
            //tampilkan thruster
            this.scene.time.delayedCall(1000, () => {
              this.startGameplay();
            });
            
          }
        });
        
        this.scene.tweens.add({
          targets: this.scene.runway,
          y: this.scene.gameH + 200,
          duration: 2000,
          ease: "power0",
          onComplete: () => {
            this.scene.runway.setVisible(true)
          
        }
    });
  }
  
  
  startGameplay() {

    this.scene.gameState = "gameplay";
    
    //this.asteroidSpawner.start();
    
  }
  
}