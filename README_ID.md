
# 🚀 Space Shooter (Phaser.js)

Game **2D Space Shooter berbasis browser** yang dibuat menggunakan
**JavaScript dan Phaser.js**.

Project ini masih dalam tahap **pengembangan aktif** 

**Apa yang ada sekarang?**

-   Arsitektur game
-   Desain JavaScript modular
-   Sistem object pooling
-   Sistem gameplay yang mudah dikembangkan

------------------------------------------------------------------------

# 🎮 Konsep Game

Game ini menggunakan konsep **Play‑Non‑Stop Gameplay**.

Artinya:

-   Game **tidak memiliki level terpisah**
-   Permainan berjalan **terus menerus**
-   Tingkat kesulitan meningkat **secara otomatis**
-   Player melakukan **upgrade senjata dan kapal saat permainan
    berlangsung**

Gameplay utama:

1.  Player mengendalikan pesawat luar angkasa
2.  Menghindari atau menghancurkan asteroid
3.  Mengumpulkan item
4.  Upgrade senjata
5.  Upgrade kemampuan kapal
6.  Difficulty meningkat seiring waktu
7.  Permainan berlangsung tanpa henti

Tujuan utama game adalah **bertahan selama mungkin**.

------------------------------------------------------------------------

# ⚙️ Status Pengembangan

⚠️ **Project masih dalam pengembangan**

Masih banyak fitur yang akan dikembangkan ke depan, seperti:

-   Sistem UI
-   Sistem skor
-   Indikator pemain
-   Item tambahan
-   Variasi senjata
-   AI musuh
-   Map baru
-   Sistem difficulty yang lebih kompleks
-   Sistem upgrade ship
-   Sistem Game Over
-   Peningkatan efek suara dan visual

------------------------------------------------------------------------

# 🧩 Fitur Yang Sudah Ada

Beberapa sistem yang sudah dibuat:

-   Player spaceship
-   Kontrol touch screen
-   Sistem menembak
-   Bullet object pooling
-   Sistem spawn asteroid
-   Difficulty scaling berbasis waktu
-   Item drop system
-   Efek ledakan
-   Sistem collision
-   Scene management
-   Arsitektur game modular

------------------------------------------------------------------------

# 🏗 Arsitektur Project

    Game Engine
       │
       ▼
    Scene System
       │
       ├── BootScene
       ├── PreloadScene
       ├── MainMenuScene
       └── GamePlayScene
              │
              ├── Player System
              │      ├── Controller
              │      ├── Thruster
              │      └── Weapon System
              │
              ├── Weapon System
              │      └── Bullet Pool
              │
              ├── Asteroid System
              │      └── Asteroid Spawner
              │
              ├── Item System
              │      └── Item Pool
              │
              ├── Effects System
              │      └── Explosion Pool
              │
              └── Collision System

------------------------------------------------------------------------

# 📁 Struktur Folder

    project
    │
    ├── index.html
    ├── main.js
    │
    ├── core
    │   ├── BootScene.js
    │   ├── PreloadScene.js
    │   └── Colliders.js
    │
    ├── Scenes
    │   ├── MainMenuScene.js
    │   └── GamePlayScene.js
    │
    ├── Script
    │   ├── Map
    │   │     └── MapBackground.js
    │   │
    │   ├── animations
    │   │     └── AnimGroup.js
    │   │
    │   ├── effects
    │   │     └── Explosion.js
    │   │
    │   ├── items
    │   │     ├── Item.js
    │   │     └── ItemPool.js
    │   │
    │   ├── obstacles
    │   │     ├── Asteroid.js
    │   │     └── AsteroidSpawner.js
    │   │
    │   └── Player
    │        ├── mainPlayer.js
    │        ├── Controller.js
    │        ├── Thruster.js
    │        └── Weapons
    │             ├── WeaponBase.js
    │             ├── WeaponCreate.js
    │             └── Bullet.js

------------------------------------------------------------------------


# 👨‍💻 Developer

Dikembangkan oleh:

**SukriyaJuhari**
