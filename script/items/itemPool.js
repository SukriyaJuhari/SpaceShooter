//../script/items/itemPool.js
import Item from "./item.js";

export default class ItemPool {
  
  constructor(scene) {
    
    this.scene = scene;
    
    this.group = scene.physics.add.group({
      classType: Item,
      maxSize: 20,
      runChildUpdate: true
    });
    
    this.dropTable = [
  { type: "healthUp", chance:8 },
  { type: "weaponUp", chance: 6 },
  { type: "playerShield", chance: 10 }
];
    
  }
  
  
  hasActiveItem(type) {
    let found = false;
    
    this.group.children.iterate(item => {
      if (!item.active || !item.itemType) return;
      if (item.itemType === type) {
        found = true;
      }
    });
    
    return found;
  }
  
  
  getRandomItem() {
    const roll = Phaser.Math.Between(1, 100);
    let cumulative = 0;
    
    for (let item of this.dropTable) {
      cumulative += item.chance;
      if (roll <= cumulative) {
        return item.type;
      }
    }
    
    return this.dropTable[0].type; // fallback
  }
  
  
  spawn(x, y) {

  if (Phaser.Math.Between(1, 100) > 20) return;

  let tries = 5;
  let itemType = null;

  while (tries > 0) {
    let candidate = this.getRandomItem();

    if (!this.hasActiveItem(candidate)) {
      itemType = candidate;
      break;
    }

    tries--;
  }

  if (!itemType) return;

  let item = this.group.get(x, y);
  if (!item) return;

  item.spawn(x, y, itemType);
}
  
  
}