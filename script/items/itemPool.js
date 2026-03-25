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
      { type: "healthUp", chance: 6 },
      { type: "weaponUp", chance: 6 },
      { type: "playerShield", chance: 8 },
      { type: "missilePick", chance: 8 }
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
  
  
  getActiveItemCount() {
    let count = 0;
    
    this.group.children.iterate(item => {
      if (item.active) count++;
    });
    
    return count;
  }
  
  
  getRandomItem() {
    const total = this.dropTable.reduce((sum, item) => sum + item.chance, 0);
    const roll = Phaser.Math.Between(1, total);
    
    let cumulative = 0;
    
    for (let item of this.dropTable) {
      cumulative += item.chance;
      if (roll <= cumulative) {
        return item.type;
      }
    }
  }
  
  
  spawn(x, y, percentage) {
    if (this.getActiveItemCount() >= 2) return;
    if (Phaser.Math.Between(1, 100) > percentage) return;
    
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