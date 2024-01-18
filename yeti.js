class Yeti {

    constructor() {
        this.defaultX = 1024;
        this.x = this.defaultX;
        this.y = 400;

        this.walkAnimation = new Animator(ASSET_MANAGER.getAsset("./Yeti_Walking.png"), 0, 0, 64, 64, 8, 0.15);
    };

    update() {
        this.x -= 1.5;
        if (this.x < -192) {
            this.x = this.defaultX;
        }
    };

    draw() {
        this.walkAnimation.drawFrame(gameEngine.clockTick, gameEngine.ctx, this.x, this.y, 3);
    };
}