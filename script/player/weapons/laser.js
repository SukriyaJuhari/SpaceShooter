export default class Laser extends WeaponBase {
  constructor(scene, owner) {
    super(scene, owner, owner.x, owner.y, 'leser_Blue_Sprsheet');
    
    this.owner = owner;
    this.type = "laser";
    
    // masuk global group
    scene.allObjects.add(this);
    
    // animasi
    this.play('anim_leserBlue');
    
    // laser mode
    this.isContinuous = true;
    this.damage = 1;
    this.damageInterval = 100;
    
    // laser tidak bergerak
    this.body.setAllowGravity(false);
    this.setVelocity(0, 0);
    
    // awal mati
    this.setActive(false);
    this.setVisible(false);
  }
  
  update(isShooting) {
    this.setActive(isShooting);
    this.setVisible(isShooting);
    
    if (!isShooting) return;
    
    // follow player
    this.setPosition(
      this.owner.x,
      this.owner.y - 20
    );
  }
  
  // override supaya tidak pakai sistem bullet
  fire() {}
}