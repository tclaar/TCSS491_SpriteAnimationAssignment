class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.elapsedTime >= this.totalTime) {
            this.elapsedTime = 0;
        }

        ctx.drawImage(this.spritesheet, this.currentFrame() * this.width, 0, 
            this.width, this.height, x, y, this.width * scale, 
            this.height * scale);
        
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }
}