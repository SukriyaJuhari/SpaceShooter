//../script/effects/explosionPool.js
import Explosion from "./explosion.js";

export default class ExplosionPool {
  
  constructor(scene) {
    this.scene = scene;
    
    this.group = scene.add.group({
      classType: Explosion,
      maxSize: 50,
      runChildUpdate: false
    });
     
  }
  
  
  
  play(x, y) {
  
  let explosion = this.group.get();
  
  if (!explosion) return;
  
  explosion.playExplosion(x, y);
  
}
  
}