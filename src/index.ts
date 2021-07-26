import * as Phaser from 'phaser';

export const WIDTH = 350;
export const HEIGHT = 600;

const getConfig = (): Phaser.Types.Core.GameConfig => {
  return {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    render: {
      pixelArt: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        // debug: true
      }
    },
    scene: []
  };
};

new Phaser.Game(getConfig());
