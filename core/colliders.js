//./core/colliders.js

export default class Colliders {
    /**
     * Set collider kotak (rectangle) secara otomatis
     * @param {Phaser.Physics.Arcade.Sprite} sprite - objek sprite / physics body
     * @param {number} widthFactor - 0..1, skala lebar collider relatif displayWidth
     * @param {number} heightFactor - 0..1, skala tinggi collider relatif displayHeight
     */
    static setCollKotak(sprite, widthFactor = 1, heightFactor = 1) {
        if (!sprite.body) return;
        
        const colliderWidth = sprite.displayWidth * widthFactor;
        const colliderHeight = sprite.displayHeight * heightFactor;
        
        sprite.body.setSize(colliderWidth, colliderHeight);
        sprite.body.setOffset(
            (sprite.displayWidth - colliderWidth) / 2,
            (sprite.displayHeight - colliderHeight) / 2
        );
    }
    
    /**
     * Set collider lingkaran (circle) secara otomatis
     * @param {Phaser.Physics.Arcade.Sprite} sprite - objek sprite / physics body
     * @param {number} radiusFactor - 0..1, radius relatif displayWidth
     */
    static setCollBulat(sprite, radiusFactor = 0.5) {
        if (!sprite.body) return;
        
        const radius = sprite.displayWidth * radiusFactor;
        sprite.body.setCircle(radius);
        sprite.body.setOffset(
            (sprite.displayWidth - radius * 2) / 2,
            (sprite.displayHeight - radius * 2) / 2
        );
    }
    
    static setCollConBulat(container, radius) {
        let rad = radius * 10;
        if (container.type === "Container") {
            container.body.setCircle(rad);
            container.body.setOffset(-rad, -rad);
        }
        else if (container.isBody) {
            container.setCircle(rad);
            container.setOffset(-rad, -rad);
        }
        
    }
    /**
     * Optional: set collider otomatis sesuai bentuk
     * 'circle' atau 'rectangle'
     */
    static setAuto(sprite, shape = 'Kotak', widthFactor = 1, heightFactor = 1, radiusFactor = 0.5) {
        if (shape === 'Kotak') {
            this.setRectangle(sprite, widthFactor, heightFactor);
        } else if (shape === 'Bulat') {
            this.setCircle(sprite, radiusFactor);
        }
    }
}