console.log("MAIN JS ✓");
// ./main.js
import BootScene from './core/bootScene.js';
import FullScreenBtnScene from './core/fullScreenBtnScene.js';
import PreloadScene from './core/preloadScene.js';
import GamePlayScene from './scenes/gamePlayScene.js';

const isMobile = window.innerWidth <= 640;
const config = {
   type: Phaser.AUTO,
   width: isMobile ? window.innerWidth : 640,
   height: isMobile ? window.innerHeight : 1280,
   parent: 'game',
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 0 },
         debug: true
      }
   },
   scene: [
      BootScene,
      PreloadScene,
      GamePlayScene,
      FullScreenBtnScene
   ],
   scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH // ✅ Pusatkan di layar
   }
};

const game = new Phaser.Game(config);