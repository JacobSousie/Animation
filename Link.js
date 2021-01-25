class Link {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./Link.png");

        this.animations = [];
        
                                                          // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
        this.animations.push(new Animator(this.spritesheet, 1, 58, 16, 24, 5, 1, 2, true, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 325, 175, 10);
    };
}