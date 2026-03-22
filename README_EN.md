
# 🚀 Space Shooter (Phaser.js)

A browser-based **2D Space Shooter Game** built using **JavaScript and
Phaser.js**.

This project is currently **under active development** 

The goal of this project is to demonstrate **game architecture, modular
JavaScript design, object pooling systems, and scalable gameplay
mechanics** using Phaser.

------------------------------------------------------------------------

# 🎮 Game Concept

This game is designed with a **Play-Non-Stop gameplay system**.

Meaning:

-   The game **never stops or pauses between levels**
-   Difficulty increases **continuously over time**
-   The player upgrades their **ship and weapons during gameplay**

Core gameplay loop:

1.  Player survives against incoming obstacles
2.  Destroy asteroids and enemies
3.  Collect items
4.  Upgrade weapons
5.  Upgrade ship abilities
6.  Difficulty increases automatically
7.  Gameplay continues endlessly

The goal is to create a **fast-paced survival space shooter**.

------------------------------------------------------------------------

# ⚙️ Current Development Status

⚠️ **Project Status: In Development**

This project is still under development and many features are planned
for future updates.

Planned features include:

-   UI System
-   Score System
-   Player Indicators
-   More Items
-   Weapon Variations
-   Enemy AI
-   Multiple Maps
-   Difficulty Scaling System
-   Player Upgrade System
-   Game Over System
-   Sound and visual effects improvements

------------------------------------------------------------------------

# 🧩 Current Features

Features already implemented in the project:

-   Player spaceship
-   Touch screen control
-   Weapon shooting system
-   Bullet object pooling
-   Asteroid spawning system
-   Difficulty scaling (time-based)
-   Item drop system
-   Explosion effects
-   Collision detection
-   Game scene management
-   Modular game architecture

------------------------------------------------------------------------

# 🏗 Project Architecture

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

# 📁 Project Folder Structure

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

Developed by:

**SukriyaJuhari**
